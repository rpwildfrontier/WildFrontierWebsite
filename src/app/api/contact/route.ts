import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, discord, type, subject, message, link } = body

  if (!name || !discord || !type || !subject || !message) {
    return NextResponse.json({ error: 'Champs obligatoires manquants.' }, { status: 400 })
  }

  const webhookUrl = process.env.DISCORD_WEBHOOK_CONTACT
  if (webhookUrl) {
    const typeLabels: Record<string, string> = {
      candidature: 'Question sur une candidature',
      technique: 'Problème technique',
      signalement: 'Signalement',
      whitelist: 'Demande de rôle whitelist',
      autre: 'Autre',
    }

    const embed = {
      title: `Nouveau message : ${subject}`,
      color: 0x8b3a1e,
      fields: [
        { name: 'Expéditeur', value: name, inline: true },
        { name: 'Discord', value: discord, inline: true },
        { name: 'Type', value: typeLabels[type] ?? type, inline: true },
        { name: 'Message', value: message.slice(0, 1024) },
        ...(link ? [{ name: 'Pièce jointe', value: link }] : []),
      ],
      footer: { text: 'Wild Frontier RP — Formulaire de contact' },
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
