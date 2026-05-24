import type { NextAuthOptions } from 'next-auth'
import DiscordProvider from 'next-auth/providers/discord'

const STAFF_IDS = (process.env.STAFF_DISCORD_IDS ?? '').split(',').map(s => s.trim()).filter(Boolean)

export const authOptions: NextAuthOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID ?? '',
      clientSecret: process.env.DISCORD_CLIENT_SECRET ?? '',
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account) {
        token.discordId = account.providerAccountId
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as { id?: string; isStaff?: boolean }).id = token.discordId as string
        ;(session.user as { id?: string; isStaff?: boolean }).isStaff =
          STAFF_IDS.includes(token.discordId as string)
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
