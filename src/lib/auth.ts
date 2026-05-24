import type { NextAuthOptions } from 'next-auth'
import DiscordProvider from 'next-auth/providers/discord'

const GUILD_ID    = process.env.DISCORD_GUILD_ID ?? ''
const ROLE_STAFF  = process.env.DISCORD_ROLE_STAFF ?? ''
const ROLE_JOUEUR = process.env.DISCORD_ROLE_JOUEUR ?? ''
const BOT_TOKEN   = process.env.DISCORD_BOT_TOKEN ?? ''
const STAFF_IDS   = (process.env.STAFF_DISCORD_IDS ?? '').split(',').map(s => s.trim()).filter(Boolean)
const STAFF_CFX   = (process.env.STAFF_CFX_USERNAMES ?? '').split(',').map(s => s.trim().toLowerCase()).filter(Boolean)

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
    {
      id:   'cfxre',
      name: 'CFX.re',
      type: 'oauth',
      authorization: {
        url:    'https://cfx.re/oauth2/authorization',
        params: { scope: 'openid identify' },
      },
      token:    'https://cfx.re/oauth2/token',
      userinfo: 'https://api.fivem.net/api/server/v2/userinfo',
      clientId:     process.env.CFX_CLIENT_ID     ?? '',
      clientSecret: process.env.CFX_CLIENT_SECRET ?? '',
      profile(profile) {
        return {
          id:    String(profile.sub ?? profile.nameid ?? profile.username ?? ''),
          name:  profile.name || profile.username || profile.preferred_username || '',
          email: profile.email ?? null,
          image: profile.picture ?? profile.avatar ?? null,
        }
      },
    },
  ],

  callbacks: {
    async jwt({ token, account, profile }) {
      if (account) {
        token.provider = account.provider

        if (account.provider === 'discord') {
          token.discordId  = account.providerAccountId
          token.guildRoles = await fetchMemberRoles(account.providerAccountId)
        }

        if (account.provider === 'cfxre') {
          const p = profile as Record<string, unknown> | undefined
          token.cfxreUsername = (
            (p?.username as string) ||
            (p?.preferred_username as string) ||
            (p?.name as string) ||
            ''
          ).toLowerCase()
        }
      }
      return token
    },

    async session({ session, token }) {
      if (session.user) {
        const u = session.user as {
          id?:             string
          provider?:       string
          cfxreUsername?:  string
          isStaff?:        boolean
          isJoueurValide?: boolean
        }

        u.provider = token.provider as string

        if (token.provider === 'discord') {
          const roles     = (token.guildRoles as string[]) ?? []
          const discordId = token.discordId as string
          u.id            = discordId
          u.isStaff       = (ROLE_STAFF ? roles.includes(ROLE_STAFF) : false) || STAFF_IDS.includes(discordId)
          u.isJoueurValide = ROLE_JOUEUR ? roles.includes(ROLE_JOUEUR) : false
        }

        if (token.provider === 'cfxre') {
          const username      = (token.cfxreUsername as string) ?? ''
          u.cfxreUsername     = username
          u.isStaff           = STAFF_CFX.includes(username)
          u.isJoueurValide    = false
        }
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
