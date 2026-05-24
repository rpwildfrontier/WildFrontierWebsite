import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions)
  const siteUrl = process.env.NEXTAUTH_URL ?? `https://${req.headers.get('host')}`

  if (!session?.user) {
    return NextResponse.redirect(`${siteUrl}/candidatures?error=not_authenticated`)
  }

  const params = new URLSearchParams({
    client_id:     process.env.CFX_CLIENT_ID ?? '',
    redirect_uri:  `${siteUrl}/api/auth/cfxre/callback`,
    response_type: 'code',
    scope:         'openid identify',
  })

  return NextResponse.redirect(`https://cfx.re/oauth2/authorization?${params}`)
}
