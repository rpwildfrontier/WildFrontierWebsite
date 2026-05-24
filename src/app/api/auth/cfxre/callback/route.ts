import { NextRequest, NextResponse } from 'next/server'
import { signCookie } from '@/lib/signed-cookie'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const siteUrl = process.env.NEXTAUTH_URL ?? `https://${req.headers.get('host')}`
  const code    = searchParams.get('code')

  if (!code) {
    return NextResponse.redirect(`${siteUrl}/candidatures?error=cfxre_denied`)
  }

  // Exchange authorization code for access token
  let access_token: string
  try {
    const tokenRes = await fetch('https://cfx.re/oauth2/token', {
      method:  'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body:    new URLSearchParams({
        grant_type:    'authorization_code',
        code,
        redirect_uri:  `${siteUrl}/api/auth/cfxre/callback`,
        client_id:     process.env.CFX_CLIENT_ID     ?? '',
        client_secret: process.env.CFX_CLIENT_SECRET ?? '',
      }),
    })
    if (!tokenRes.ok) {
      return NextResponse.redirect(`${siteUrl}/candidatures?error=cfxre_token`)
    }
    ;({ access_token } = await tokenRes.json())
  } catch {
    return NextResponse.redirect(`${siteUrl}/candidatures?error=cfxre_network`)
  }

  // Fetch user profile
  let profile: Record<string, unknown>
  try {
    const userRes = await fetch('https://api.fivem.net/api/server/v2/userinfo', {
      headers: { Authorization: `Bearer ${access_token}` },
    })
    if (!userRes.ok) {
      return NextResponse.redirect(`${siteUrl}/candidatures?error=cfxre_userinfo`)
    }
    profile = await userRes.json()
  } catch {
    return NextResponse.redirect(`${siteUrl}/candidatures?error=cfxre_network`)
  }

  const username = (profile.username as string) || (profile.preferred_username as string) || (profile.name as string) || ''
  const name     = (profile.name as string) || username
  const avatar   = (profile.picture as string) || (profile.avatar as string) || ''

  const response = NextResponse.redirect(`${siteUrl}/candidatures`)
  response.cookies.set('wf_cfxre', signCookie({ username, name, avatar }), {
    httpOnly: true,
    secure:   process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge:   60 * 60 * 24,
    path:     '/',
  })
  return response
}
