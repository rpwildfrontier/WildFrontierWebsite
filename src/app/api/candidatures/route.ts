import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const {
    prenom, nom, age, ville, metier,
    histoire, experience, motivation,
    discordName,
  } = body

  if (!prenom || !nom || !age || !ville || !metier || !histoire || !experience || !motivation) {
    return NextResponse.json({ error: 'Dossier incomplet.' }, { status: 400 })
  }

  const webhookUrl = process.env.DISCORD_WEBHOOK_CANDIDATURES
  if (webhookUrl) {
    const embed = {
      title: `Nouvelle candidature — ${prenom} ${nom}`,
      color: 0xb8860b,
      fields: [
        { name: 'Personnage', value: `${prenom} ${nom}, ${age} ans`, inline: true },
        { name: 'Origine', value: ville, inline: true },
        { name: 'Métier déclaré', value: metier, inline: true },
        ...(discordName ? [{ name: 'Discord', value: discordName, inline: true }] : []),
        { name: 'Histoire du personnage', value: histoire.slice(0, 1024) },
        { name: 'Expérience RP', value: experience.slice(0, 512) },
        { name: 'Motivation', value: motivation.slice(0, 512) },
      ],
      footer: { text: 'Wild Frontier RP — Candidature' },
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
