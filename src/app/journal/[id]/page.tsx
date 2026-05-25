import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getArticle } from '@/lib/kv'
import articlesJson from '@/data/articles.json'

type StaticArticle = { id: number; category: string; date: string; title: string; excerpt: string; author: string; featured: boolean }

async function resolveArticle(id: string) {
  try {
    const kv = await getArticle(id)
    if (kv) return { ...kv, content: kv.content || kv.excerpt }
  } catch { /* KV not configured */ }
  const stat = (articlesJson as StaticArticle[]).find(a => String(a.id) === id)
  if (stat) return { ...stat, id: String(stat.id), content: stat.excerpt, createdAt: '', updatedAt: '' }
  return null
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const article = await resolveArticle(params.id)
  if (!article) return {}
  return { title: article.title, description: article.excerpt }
}

export default async function ArticleDetailPage({ params }: { params: { id: string } }) {
  const article = await resolveArticle(params.id)
  if (!article) notFound()

  const paragraphs = article.content
    .split(/\n{2,}/)
    .map(p => p.trim())
    .filter(Boolean)

  return (
    <>
      {/* Masthead */}
      <section
        className="py-8"
        style={{ background: 'linear-gradient(170deg, var(--parchment-dark) 0%, var(--parchment-100) 80%)', borderBottom: '3px double var(--border-dark)' }}
      >
        <div className="container-wide">
          <div className="flex justify-between items-center mb-5 pb-3" style={{ borderBottom: '1px solid var(--border-light)' }}>
            <Link href="/journal" className="label-display" style={{ color: 'var(--ink-20)', textDecoration: 'none' }}>
              ← Gazette du Comté
            </Link>
            <span className="label-display" style={{ color: 'var(--ink-20)' }}>
              {article.date}
            </span>
          </div>
          <div className="text-center py-5" style={{ borderBottom: '1px solid var(--border-light)', borderTop: '1px solid var(--border)' }}>
            <div className="label-display mb-3" style={{ color: 'var(--rust)', letterSpacing: '0.3em' }}>
              {article.category}
            </div>
            <h1 className="display-heading mx-auto" style={{ fontSize: 'clamp(1.6rem, 4vw, 3rem)', maxWidth: '48rem', lineHeight: 1.2 }}>
              {article.title}
            </h1>
            <div className="label-display mt-4" style={{ color: 'var(--ink-20)' }}>
              Par {article.author}
            </div>
          </div>
        </div>
      </section>

      {/* Corps de l'article */}
      <section className="py-14" style={{ backgroundColor: 'var(--parchment-100)' }}>
        <div className="container-narrow">

          {/* Chapeau */}
          <p
            className="body-text mb-10 pb-8"
            style={{
              fontSize: '1.05rem', lineHeight: 1.75, fontStyle: 'italic',
              color: 'var(--ink-40)', borderBottom: '1px solid var(--border-light)',
            }}
          >
            {article.excerpt}
          </p>

          {/* Texte complet */}
          <div className="space-y-5">
            {paragraphs.map((p, i) => (
              <p key={i} className="body-text" style={{ fontSize: '0.97rem', lineHeight: 1.8, color: 'var(--ink)' }}>
                {p}
              </p>
            ))}
          </div>

          {/* Pied de page article */}
          <div
            className="mt-14 pt-6 flex items-center justify-between flex-wrap gap-4"
            style={{ borderTop: '2px solid var(--border)' }}
          >
            <div className="label-display" style={{ color: 'var(--ink-20)' }}>
              Gazette du Comté · {article.date} · {article.author}
            </div>
            <Link href="/journal" className="label-display" style={{ color: 'var(--rust)', textDecoration: 'none' }}>
              ← Retour au journal
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
