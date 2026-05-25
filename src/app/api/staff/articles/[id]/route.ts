import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { getArticle, updateArticle, deleteArticle } from '@/lib/kv'

function requireStaff() {
  return NextResponse.json({ error: 'Accès refusé' }, { status: 403 })
}

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  if (!(session?.user as { isStaff?: boolean })?.isStaff) return requireStaff()
  const a = await getArticle(params.id)
  if (!a) return NextResponse.json({ error: 'Introuvable' }, { status: 404 })
  return NextResponse.json(a)
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  if (!(session?.user as { isStaff?: boolean })?.isStaff) return requireStaff()
  const data    = await req.json()
  const updated = await updateArticle(params.id, data)
  if (!updated) return NextResponse.json({ error: 'Introuvable' }, { status: 404 })
  return NextResponse.json(updated)
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  if (!(session?.user as { isStaff?: boolean })?.isStaff) return requireStaff()
  await deleteArticle(params.id)
  return NextResponse.json({ success: true })
}
