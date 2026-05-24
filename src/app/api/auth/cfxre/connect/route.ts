import crypto from 'crypto'
import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions)
  const siteUrl = process.env.NEXTAUTH_URL ?? `https://${req.headers.get('host')}`

  if (!session?.user) {
    return NextResponse.redirect(`${siteUrl}/candidatures?error=not_authenticated`)
  }

  const publicKey = (process.env.CFX_RSA_PUBLIC_KEY ?? '').replace(/\\n/g, '\n')
  const clientId  = process.env.CFX_CLIENT_ID ?? ''
  const appName   = process.env.CFX_APP_NAME  ?? 'Wild Frontier RP'

  if (!publicKey || !clientId) {
    return NextResponse.redirect(`${siteUrl}/candidatures?error=cfxre_not_configured`)
  }

  const nonce = crypto.randomBytes(16).toString('hex')

  const params = new URLSearchParams({
    auth_redirect:    `${siteUrl}/api/auth/cfxre/callback`,
    application_name: appName,
    client_id:        clientId,
    scopes:           'read',
    nonce,
    public_key:       publicKey,
  })

  const response = NextResponse.redirect(`https://forum.cfx.re/user-api-key/new?${params}`)
  response.cookies.set('wf_cfx_nonce', nonce, {
    httpOnly: true,
    secure:   process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge:   60 * 10,
    path:     '/',
  })
  return response
}
