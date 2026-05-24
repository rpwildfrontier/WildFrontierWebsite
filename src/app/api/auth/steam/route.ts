import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const siteUrl     = process.env.NEXTAUTH_URL ?? `https://${req.headers.get('host')}`
  const callbackUrl = `${siteUrl}/api/auth/steam/callback`

  const params = new URLSearchParams({
    'openid.ns':         'http://specs.openid.net/auth/2.0',
    'openid.mode':       'checkid_setup',
    'openid.return_to':  callbackUrl,
    'openid.realm':      siteUrl,
    'openid.identity':   'http://specs.openid.net/auth/2.0/identifier_select',
    'openid.claimed_id': 'http://specs.openid.net/auth/2.0/identifier_select',
  })

  return NextResponse.redirect(`https://steamcommunity.com/openid/login?${params}`)
}
