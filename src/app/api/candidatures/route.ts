import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const {
    prenom, nom, age, ville, metier,
    histoire, experience, motivation,
    discordName, steamId, steamName, cfxreUsername,
  } = body

  if (!prenom || !nom || !age || !ville || !metier || !histoire || !experience || !motivation || !steamId || !cfxreUsername) {
    return NextResponse.json({ error: 'Dossier incomplet.' }, { status: 400 })
  }

  const webhookUrl = process.env.DISCORD_WEBHOOK_CANDIDATURES
  if (webhookUrl) {
    const embed = {
      title: `Nouvelle candidature — ${prenom} ${nom}`,
      color: 0xb8860b,
      fields: [
        { name: 'Personnage', value: `${prenom} ${nom}, ${age} ans — ${ville}`, inline: false },
        { name: 'Métier déclaré', value: metier, inline: true },
        { name: 'Discord', value: discordName || '—', inline: true },
        { name: 'Steam', value: `${steamName} (${steamId})`, inline: false },
        { name: 'CFX.re', value: cfxreUsername, inline: true },
        { name: 'Histoire du personnage', value: histoire.slice(0, 1024) },
        { name: 'Expérience RP', value: experience.slice(0, 512) },
        { name: 'Motivation', value: motivation.slice(0, 512) },
      ],
      footer: { text: 'Wild Frontier RP — Candidature via le site' },
      timestamp: new Date().toISOString(),
    }

    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ embeds: [embed] }),
    })
  }

  return NextResponse.json({ success: true })
}
