import { NextRequest, NextResponse } from 'next/server'
import { signCookie } from '@/lib/signed-cookie'

async function verifySteamOpenID(params: URLSearchParams): Promise<boolean> {
  const check = new URLSearchParams(params)
  check.set('openid.mode', 'check_authentication')
  const res = await fetch('https://steamcommunity.com/openid/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: check.toString(),
  })
  return (await res.text()).includes('is_valid:true')
}

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const siteUrl = process.env.NEXTAUTH_URL ?? `https://${req.headers.get('host')}`

  const valid = await verifySteamOpenID(searchParams)
  if (!valid) {
    return NextResponse.redirect(`${siteUrl}/candidatures?error=steam_invalid`)
  }

  const claimedId = searchParams.get('openid.claimed_id') ?? ''
  const steamId64 = claimedId.replace('https://steamcommunity.com/openid/id/', '')

  if (!/^\d{17}$/.test(steamId64)) {
    return NextResponse.redirect(`${siteUrl}/candidatures?error=steam_id`)
  }

  let steamName   = steamId64
  let steamAvatar = ''
  let ownsRdr2    = false

  const apiKey = process.env.STEAM_API_KEY
  if (apiKey) {
    try {
      const [profileRes, gamesRes] = await Promise.all([
        fetch(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${apiKey}&steamids=${steamId64}`),
        fetch(`https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${apiKey}&steamid=${steamId64}&include_appinfo=false&appids_filter[0]=1174180`),
      ])

      if (profileRes.ok) {
        const d = await profileRes.json()
        const p = d?.response?.players?.[0]
        if (p) { steamName = p.personaname; steamAvatar = p.avatar }
      }
      if (gamesRes.ok) {
        const d = await gamesRes.json()
        ownsRdr2 = (d?.response?.games?.length ?? 0) > 0
      }
    } catch { /* profile public requis */ }
  }

  const response = NextResponse.redirect(`${siteUrl}/candidatures`)
  response.cookies.set('wf_steam', signCookie({ id: steamId64, name: steamName, avatar: steamAvatar, ownsRdr2 }), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24,
    path: '/',
  })
  return response
}
