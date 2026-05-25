import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { listArticles, createArticle } from '@/lib/kv'

function requireStaff() {
  return NextResponse.json({ error: 'Accès refusé' }, { status: 403 })
}

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!(session?.user as { isStaff?: boolean })?.isStaff) return requireStaff()
  return NextResponse.json(await listArticles())
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions)
  const user    = session?.user as { isStaff?: boolean; name?: string | null } | undefined
  if (!user?.isStaff) return requireStaff()

  const { title, date, category, excerpt, content, featured } = await req.json()
  if (!title?.trim() || !content?.trim()) {
    return NextResponse.json({ error: 'Titre et contenu requis' }, { status: 400 })
  }

  const article = await createArticle({
    title:    title.trim(),
    date:     date || new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }),
    category: category || 'Chronique',
    excerpt:  excerpt || content.slice(0, 200),
    content:  content.trim(),
    author:   user.name || 'Rédaction',
    featured: !!featured,
  })

  return NextResponse.json(article, { status: 201 })
}
