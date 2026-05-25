import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { createCandidature } from '@/lib/kv'

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)
  const discordId = (session?.user as { id?: string })?.id ?? ''

  const body = await req.json()
  const {
    prenom, nom, age, ville, metier,
    histoire, experience, motivation,
    discordName, steamId, steamName, cfxreUsername,
  } = body

  if (!prenom || !nom || !age || !ville || !metier || !histoire || !experience || !motivation || !steamId || !cfxreUsername) {
    return NextResponse.json({ error: 'Dossier incomplet.' }, { status: 400 })
  }

  // Store in KV
  const candidature = await createCandidature({
    discordId, discordName, steamId, steamName, cfxreUsername,
    prenom, nom, age, ville, metier, histoire, experience, motivation,
  })

  // Notify Discord
  const webhookUrl = process.env.DISCORD_WEBHOOK_CANDIDATURES
  if (webhookUrl) {
    await fetch(webhookUrl, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({
        embeds: [{
          title:  `Nouvelle candidature — ${prenom} ${nom}`,
          color:  0xb8860b,
          url:    `${process.env.NEXTAUTH_URL}/espace-staff/candidatures/${candidature.id}`,
          fields: [
            { name: 'Personnage',  value: `${prenom} ${nom}, ${age} ans — ${ville}`, inline: false },
            { name: 'Métier',      value: metier,        inline: true },
            { name: 'Discord',     value: discordName || '—', inline: true },
            { name: 'Steam',       value: `${steamName} (${steamId})`, inline: false },
            { name: 'CFX.re',      value: cfxreUsername, inline: true },
            { name: 'Histoire',    value: histoire.slice(0, 1024) },
            { name: 'Expérience',  value: experience.slice(0, 512) },
            { name: 'Motivation',  value: motivation.slice(0, 512) },
          ],
          footer:    { text: `ID : ${candidature.id} — Examiner sur le site admin` },
          timestamp: candidature.createdAt,
        }],
      }),
    })
  }

  return NextResponse.json({ success: true })
}
