import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

const PRIORITY_COLORS: Record<string, number> = {
  normale:    0xb8860b,
  importante: 0xe07b00,
  urgente:    0x8b1a1a,
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)
  const user    = session?.user as { isStaff?: boolean; name?: string | null } | undefined

  if (!session || !user?.isStaff) {
    return NextResponse.json({ error: 'Accès refusé' }, { status: 403 })
  }

  const { title, message, priority } = await req.json()
  if (!title?.trim() || !message?.trim()) {
    return NextResponse.json({ error: 'Titre et message requis' }, { status: 400 })
  }

  const webhookUrl = process.env.DISCORD_WEBHOOK_ANNONCES ?? process.env.DISCORD_WEBHOOK_CANDIDATURES
  if (webhookUrl) {
    const color = PRIORITY_COLORS[priority] ?? PRIORITY_COLORS.normale
    await fetch(webhookUrl, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({
        embeds: [{
          title,
          description: message,
          color,
          footer: { text: `Annonce publiée par ${user.name} — Wild Frontier RP Administration` },
          timestamp: new Date().toISOString(),
        }],
      }),
    })
  }

  return NextResponse.json({ success: true })
}
