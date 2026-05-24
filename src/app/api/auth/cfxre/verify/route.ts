import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { generateCfxCode, signCookie } from '@/lib/signed-cookie'

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session?.user) {
    return NextResponse.json({ error: 'Non authentifié' }, { status: 401 })
  }

  const { username } = await req.json()
  if (!username?.trim()) {
    return NextResponse.json({ error: 'Pseudo CFX.re requis' }, { status: 400 })
  }

  const discordId    = (session.user as { id?: string }).id ?? ''
  const expectedCode = generateCfxCode(discordId)
  const slug         = encodeURIComponent(username.trim().toLowerCase())

  let profileData
  try {
    const res = await fetch(`https://forum.cfx.re/u/${slug}.json`, {
      headers: { 'Accept': 'application/json', 'User-Agent': 'WildFrontierRP/1.0' },
    })
    if (res.status === 404) {
      return NextResponse.json({ error: 'Compte forum.cfx.re introuvable. Vérifiez l\'orthographe.' }, { status: 404 })
    }
    if (!res.ok) {
      return NextResponse.json({ error: 'Impossible de contacter forum.cfx.re, réessayez.' }, { status: 502 })
    }
    profileData = await res.json()
  } catch {
    return NextResponse.json({ error: 'Erreur réseau, réessayez.' }, { status: 502 })
  }

  const user   = profileData?.user
  const bioRaw = [user?.bio_raw, user?.website, user?.location, user?.card_background_upload_url]
    .filter(Boolean)
    .join(' ')

  if (!bioRaw.includes(expectedCode)) {
    return NextResponse.json({
      error: `Code introuvable dans votre profil. Ajoutez "${expectedCode}" à votre bio sur forum.cfx.re puis réessayez.`,
      code: expectedCode,
    }, { status: 400 })
  }

  const avatarBase = 'https://forum.cfx.re'
  const avatarPath = user?.avatar_template?.replace('{size}', '90') ?? ''

  const response = NextResponse.json({
    success:  true,
    username: user.username,
    name:     user.name || user.username,
  })
  response.cookies.set('wf_cfxre', signCookie({
    username: user.username,
    name:     user.name || user.username,
    avatar:   avatarPath ? `${avatarBase}${avatarPath}` : '',
  }), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24,
    path: '/',
  })
  return response
}
