import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { listWhitelist } from '@/lib/kv'

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!(session?.user as { isStaff?: boolean })?.isStaff) {
    return NextResponse.json({ error: 'Accès refusé' }, { status: 403 })
  }
  return NextResponse.json(await listWhitelist())
}
