import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { removeFromWhitelist } from '@/lib/kv'

export async function DELETE(_req: NextRequest, { params }: { params: { cfxreId: string } }) {
  const session = await getServerSession(authOptions)
  if (!(session?.user as { isStaff?: boolean })?.isStaff) {
    return NextResponse.json({ error: 'Accès refusé' }, { status: 403 })
  }
  await removeFromWhitelist(params.cfxreId)
  return NextResponse.json({ ok: true })
}
