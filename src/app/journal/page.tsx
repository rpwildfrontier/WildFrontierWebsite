import type { Metadata } from 'next'
import Link from 'next/link'
import { listArticles } from '@/lib/kv'
import articlesJson from '@/data/articles.json'

export const metadata: Metadata = {
  title: 'Journal du Comté',
  description: 'La Gazette du Comté — Actualités, chroniques et annonces officielles de Wild Frontier RP.',
}

type Article = { id: string | number; category: string; date: string; title: string; excerpt: string; author: string; featured: boolean }

const categories = ['Tous', 'Faits divers', 'Politique', 'Justice', 'Avis de décès', 'Annonce commerciale', 'Chronique']

export default async function JournalPage() {
  let articles: Article[] = []
  try {
    const kvArticles = await listArticles()
    articles = kvArticles.length > 0 ? kvArticles : (articlesJson as Article[])
  } catch {
    articles = articlesJson as Article[]
  }

  const featured = articles.find(a => a.featured)
  const rest     = articles.filter(a => !a.featured)

  return (
    <>
      {/* Masthead */}
      <section style={{
        background: 'var(--bg-section)',
        borderBottom: '1px solid rgba(42,54,68,0.18)',
      }} className="py-10">
        <div className="container-wide">
          {/* Dateline */}
          <div className="flex justify-between items-center mb-6 pb-4"
            style={{ borderBottom: '1px solid rgba(42,54,68,0.18)' }}>
            <span className="label-display" style={{ color: 'var(--fg-60)' }}>Comté de New Hanover, Territoire de l&apos;Ouest</span>
            <span className="label-display" style={{ color: 'var(--fg-60)' }}>Lundi, 24 Mai 1887</span>
            <span className="label-display" style={{ color: 'var(--fg-60)' }}>Prix : 5 cents</span>
          </div>

          {/* Masthead title */}
          <div className="text-center py-8"
            style={{ borderBottom: '1px solid rgba(42,54,68,0.18)', borderTop: '1px solid rgba(42,54,68,0.18)' }}>
            <div className="label-display mb-3" style={{ color: 'var(--fg-60)', letterSpacing: '0.35em' }}>
              Journal officiel du
            </div>
            <h1 className="display-heading" style={{ fontSize: 'clamp(2.2rem, 6vw, 4.5rem)' }}>
              Gazette du Comté
            </h1>
            <div className="label-display mt-3" style={{ color: 'var(--fg-60)', letterSpacing: '0.2em' }}>
              Fondée en l&apos;an de grâce 1879 &nbsp;·&nbsp; Publiée chaque semaine
            </div>
          </div>
        </div>
      </section>

      {/* Category filters */}
      <section className="py-4" style={{ borderBottom: '1px solid rgba(42,54,68,0.18)', backgroundColor: 'var(--bg-section)' }}>
        <div className="container-wide flex flex-wrap gap-2 justify-center">
          {categories.map(cat => (
            <button key={cat} className="label-display px-3 py-1.5 transition-all"
              style={{
                color: 'var(--fg-60)',
                border: '1px solid rgba(42,54,68,0.18)',
                background: 'none',
                cursor: 'pointer',
                fontSize: '0.58rem',
                letterSpacing: '0.18em',
              }}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Articles */}
      <section className="py-16" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="container-wide">

          {/* À la une */}
          {featured && (
            <div className="mb-16">
              <div className="label-display text-center mb-6" style={{ color: 'var(--orange)', letterSpacing: '0.4em' }}>
                À la une
              </div>
              <div className="document-panel">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                  <div className="md:col-span-2">
                    <div className="meta-text mb-2" style={{ color: 'var(--orange)' }}>{featured.category}</div>
                    <Link href={`/journal/${featured.id}`} style={{ textDecoration: 'none' }}>
                      <h2 className="section-heading mb-4" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', lineHeight: 1.25 }}>
                        {featured.title}
                      </h2>
                    </Link>
                    <p className="body-text mb-5">{featured.excerpt}</p>
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="meta-text" style={{ color: 'var(--fg-60)' }}>
                        {featured.date} — {featured.author}
                      </div>
                      <Link href={`/journal/${featured.id}`} className="label-display"
                        style={{ color: 'var(--orange)', fontSize: '0.65rem' }}>
                        Lire la suite →
                      </Link>
                    </div>
                  </div>
                  <div className="flex justify-center md:justify-end">
                    <div className="official-seal flex-col text-center"
                      style={{ width: '120px', height: '120px', color: 'var(--amber)', borderColor: 'var(--amber)' }}>
                      <div className="label-display leading-tight px-2" style={{ color: 'var(--amber)', letterSpacing: '0.1em' }}>
                        Gazette<br />du Comté
                      </div>
                      <div className="section-heading mt-2" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--amber)' }}>W.F.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Grid */}
          <div className="newspaper-grid">
            {rest.map(article => (
              <article key={article.id} className="pb-6" style={{ borderBottom: '1px solid rgba(42,54,68,0.18)' }}>
                <div className="meta-text mb-2" style={{ color: 'var(--orange)' }}>{article.category}</div>
                <Link href={`/journal/${article.id}`} style={{ textDecoration: 'none' }}>
                  <h3 className="section-heading mb-3" style={{ fontSize: '1.15rem', lineHeight: 1.3 }}>
                    {article.title}
                  </h3>
                </Link>
                <p className="body-text mb-4" style={{ fontSize: '0.92rem' }}>{article.excerpt}</p>
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="meta-text" style={{ color: 'var(--fg-60)' }}>
                    {article.date} — {article.author}
                  </div>
                  <Link href={`/journal/${article.id}`} className="label-display"
                    style={{ color: 'var(--fg-60)', fontSize: '0.6rem' }}>
                    Lire →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-14 pt-8 text-center label-display"
            style={{ borderTop: '1px solid rgba(42,54,68,0.18)', color: 'var(--fg-60)' }}>
            Page 1 sur 12 — Archives disponibles à la bibliothèque du comté
          </div>
        </div>
      </section>
    </>
  )
}
