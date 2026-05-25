import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { getCandidature, updateCandidatureStatus, addToWhitelist, removeFromWhitelist, type CandidatureStatus } from '@/lib/kv'

function requireStaff() {
  return NextResponse.json({ error: 'Accès refusé' }, { status: 403 })
}

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  if (!(session?.user as { isStaff?: boolean })?.isStaff) return requireStaff()
  const c = await getCandidature(params.id)
  if (!c) return NextResponse.json({ error: 'Introuvable' }, { status: 404 })
  return NextResponse.json(c)
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  const user    = session?.user as { isStaff?: boolean; name?: string | null } | undefined
  if (!user?.isStaff) return requireStaff()

  const { status, note } = await req.json() as { status: CandidatureStatus; note?: string }
  const updated = await updateCandidatureStatus(params.id, status, note)
  if (!updated) return NextResponse.json({ error: 'Introuvable' }, { status: 404 })

  // Whitelist sync
  if (updated.cfxreId) {
    if (status === 'approved') {
      await addToWhitelist({
        cfxreId:       updated.cfxreId,
        cfxreUsername: updated.cfxreUsername,
        discordName:   updated.discordName,
        approvedAt:    new Date().toISOString(),
        approvedBy:    user.name ?? undefined,
      })
    } else {
      await removeFromWhitelist(updated.cfxreId)
    }
  }

  // Notify Discord
  const webhookUrl = process.env.DISCORD_WEBHOOK_CANDIDATURES
  if (webhookUrl) {
    const colors   = { approved: 0x1a5c1a, rejected: 0x8b1a1a, pending: 0xb8860b }
    const labels   = { approved: 'Validée', rejected: 'Refusée', pending: 'En attente' }
    await fetch(webhookUrl, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({
        embeds: [{
          title:       `Candidature ${labels[status]} — ${updated.prenom} ${updated.nom}`,
          description: note ? `**Note staff :** ${note}` : undefined,
          color:       colors[status],
          fields:      [
            { name: 'Discord',  value: updated.discordName,   inline: true },
            { name: 'CFX.re',   value: updated.cfxreUsername, inline: true },
            { name: 'Staff',    value: user.name ?? '?',      inline: true },
          ],
          footer:    { text: `ID : ${updated.id}` },
          timestamp: new Date().toISOString(),
        }],
      }),
    })
  }

  return NextResponse.json(updated)
}
