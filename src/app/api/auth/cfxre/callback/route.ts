import crypto from 'crypto'
import { NextRequest, NextResponse } from 'next/server'
import { signCookie } from '@/lib/signed-cookie'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const siteUrl = process.env.NEXTAUTH_URL ?? `https://${req.headers.get('host')}`

  const payloadB64   = searchParams.get('payload')
  const expectedNonce = req.cookies.get('wf_cfx_nonce')?.value

  if (!payloadB64) {
    return NextResponse.redirect(`${siteUrl}/candidatures?error=cfxre_denied`)
  }

  // Decrypt RSA-encrypted payload from Discourse
  let apiKey: string
  let nonce:  string
  try {
    const privateKeyRaw = (process.env.CFX_RSA_PRIVATE_KEY ?? '').replace(/\\n/g, '\n')
    const encrypted     = Buffer.from(payloadB64, 'base64')
    const decrypted     = crypto.privateDecrypt(
      { key: privateKeyRaw, padding: crypto.constants.RSA_PKCS1_PADDING },
      encrypted,
    )
    const parsed = JSON.parse(decrypted.toString()) as { key: string; nonce: string }
    apiKey = parsed.key
    nonce  = parsed.nonce
  } catch {
    return NextResponse.redirect(`${siteUrl}/candidatures?error=cfxre_decrypt`)
  }

  // Validate nonce to prevent replay attacks
  if (!expectedNonce || nonce !== expectedNonce) {
    return NextResponse.redirect(`${siteUrl}/candidatures?error=cfxre_nonce`)
  }

  const clientId = process.env.CFX_CLIENT_ID ?? ''
  const headers  = {
    'Accept':             'application/json',
    'User-Api-Key':       apiKey,
    'User-Api-Client-Id': clientId,
  }

  // Get current username from forum.cfx.re
  let username: string
  try {
    const sessionRes = await fetch('https://forum.cfx.re/session/current.json', { headers })
    if (!sessionRes.ok) {
      return NextResponse.redirect(`${siteUrl}/candidatures?error=cfxre_session`)
    }
    const data = await sessionRes.json()
    username   = data.current_user?.username ?? ''
    if (!username) {
      return NextResponse.redirect(`${siteUrl}/candidatures?error=cfxre_user`)
    }
  } catch {
    return NextResponse.redirect(`${siteUrl}/candidatures?error=cfxre_network`)
  }

  // Fetch full profile (name + avatar)
  let name   = username
  let avatar = ''
  try {
    const userRes = await fetch(`https://forum.cfx.re/users/${encodeURIComponent(username)}.json`, { headers })
    if (userRes.ok) {
      const data         = await userRes.json()
      name               = data.user?.name || username
      const tmpl: string = data.user?.avatar_template ?? ''
      avatar             = tmpl ? `https://forum.cfx.re${tmpl.replace('{size}', '90')}` : ''
    }
  } catch { /* avatar is optional */ }

  const response = NextResponse.redirect(`${siteUrl}/candidatures`)
  response.cookies.delete('wf_cfx_nonce')
  response.cookies.set('wf_cfxre', signCookie({ username, name, avatar }), {
    httpOnly: true,
    secure:   process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge:   60 * 60 * 24,
    path:     '/',
  })
  return response
}
