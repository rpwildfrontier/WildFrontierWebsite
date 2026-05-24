export type GuildStats = {
  memberCount: number
  onlineCount: number
  name: string
  icon: string | null
}

export async function fetchGuildStats(): Promise<GuildStats | null> {
  const guildId  = process.env.DISCORD_GUILD_ID
  const botToken = process.env.DISCORD_BOT_TOKEN
  if (!guildId || !botToken) return null
  try {
    const res = await fetch(
      `https://discord.com/api/v10/guilds/${guildId}?with_counts=true`,
      {
        headers: { Authorization: `Bot ${botToken}` },
        next: { revalidate: 300 },
      }
    )
    if (!res.ok) return null
    const guild = await res.json()
    return {
      memberCount: guild.approximate_member_count ?? 0,
      onlineCount: guild.approximate_presence_count ?? 0,
      name: guild.name ?? 'Wild Frontier RP',
      icon: guild.icon ?? null,
    }
  } catch {
    return null
  }
}
