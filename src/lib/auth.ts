import type { NextAuthOptions } from 'next-auth'
import DiscordProvider from 'next-auth/providers/discord'

const GUILD_ID    = process.env.DISCORD_GUILD_ID ?? ''
const ROLE_STAFF  = process.env.DISCORD_ROLE_STAFF ?? ''
const ROLE_JOUEUR = process.env.DISCORD_ROLE_JOUEUR ?? ''
const BOT_TOKEN   = process.env.DISCORD_BOT_TOKEN ?? ''
// Fallback legacy : liste d'IDs Discord staff
const STAFF_IDS   = (process.env.STAFF_DISCORD_IDS ?? '').split(',').map(s => s.trim()).filter(Boolean)

async function fetchMemberRoles(userId: string): Promise<string[]> {
  if (!GUILD_ID || !BOT_TOKEN || !userId) return []
  try {
    const res = await fetch(`https://discord.com/api/v10/guilds/${GUILD_ID}/members/${userId}`, {
      headers: { Authorization: `Bot ${BOT_TOKEN}` },
      next: { revalidate: 60 },
    })
    if (!res.ok) return []
    const member = await res.json()
    return (member.roles as string[]) ?? []
  } catch {
    return []
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID ?? '',
      clientSecret: process.env.DISCORD_CLIENT_SECRET ?? '',
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.discordId = account.providerAccountId
        // Récupère les rôles Discord au moment du login
        const roles = await fetchMemberRoles(account.providerAccountId)
        token.guildRoles = roles
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        const roles = (token.guildRoles as string[]) ?? []
        const discordId = token.discordId as string
        const u = session.user as {
          id?: string
          isStaff?: boolean
          isJoueurValide?: boolean
        }
        u.id = discordId
        u.isStaff = (ROLE_STAFF ? roles.includes(ROLE_STAFF) : false) ||
                    STAFF_IDS.includes(discordId)
        u.isJoueurValide = ROLE_JOUEUR ? roles.includes(ROLE_JOUEUR) : false
      }
      return session
    },
  },
  pages: {
    signIn: '/candidatures',
    error: '/candidatures',
  },
  secret: process.env.NEXTAUTH_SECRET,
}
