import type { NextAuthOptions } from 'next-auth'
import DiscordProvider from 'next-auth/providers/discord'
import { getCandidatureByDiscordId } from '@/lib/kv'

const GUILD_ID    = process.env.DISCORD_GUILD_ID  ?? ''
const ROLE_STAFF  = process.env.DISCORD_ROLE_STAFF ?? ''
const ROLE_JOUEUR = process.env.DISCORD_ROLE_JOUEUR ?? ''
const BOT_TOKEN   = process.env.DISCORD_BOT_TOKEN  ?? ''
const STAFF_IDS   = (process.env.STAFF_DISCORD_IDS ?? '').split(',').map(s => s.trim()).filter(Boolean)

async function fetchMemberRoles(userId: string): Promise<string[]> {
  if (!GUILD_ID || !BOT_TOKEN || !userId) return []
  try {
    const res = await fetch(`https://discord.com/api/v10/guilds/${GUILD_ID}/members/${userId}`, {
      headers: { Authorization: `Bot ${BOT_TOKEN}` },
      next: { revalidate: 60 },
    })
    if (!res.ok) return []
    return ((await res.json()).roles as string[]) ?? []
  } catch {
    return []
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    DiscordProvider({
      clientId:     process.env.DISCORD_CLIENT_ID     ?? '',
      clientSecret: process.env.DISCORD_CLIENT_SECRET ?? '',
    }),
    // CFX.re account linking uses the Discourse User API Key flow
    // via custom routes /api/auth/cfxre/connect + /api/auth/cfxre/callback.
    // No NextAuth provider needed — result is stored in a signed cookie (wf_cfxre).
  ],

  callbacks: {
    async jwt({ token, account }) {
      if (account?.provider === 'discord') {
        token.discordId = account.providerAccountId
      }
      // Always re-fetch roles so status reflects Discord changes without re-login.
      // fetchMemberRoles uses next: { revalidate: 60 } — actual API call cached 60 s.
      if (token.discordId) {
        token.guildRoles = await fetchMemberRoles(token.discordId as string)
        try {
          const cand = await getCandidatureByDiscordId(token.discordId as string)
          token.candidatureApproved = cand?.status === 'approved'
        } catch {
          token.candidatureApproved = false
        }
      }
      return token
    },

    async session({ session, token }) {
      if (session.user) {
        const u = session.user as {
          id?:             string
          isStaff?:        boolean
          isJoueurValide?: boolean
        }
        const roles     = (token.guildRoles as string[]) ?? []
        const discordId = (token.discordId  as string)   ?? ''
        u.id            = discordId
        u.isStaff       = (ROLE_STAFF ? roles.includes(ROLE_STAFF) : false) || STAFF_IDS.includes(discordId)
        u.isJoueurValide = (ROLE_JOUEUR ? roles.includes(ROLE_JOUEUR) : false)
                          || (token.candidatureApproved as boolean ?? false)
      }
      return session
    },
  },

  pages: {
    signIn: '/candidatures',
    error:  '/candidatures',
  },
  secret: process.env.NEXTAUTH_SECRET,
}
