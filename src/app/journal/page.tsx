import type { Metadata } from 'next'
import articlesData from '@/data/articles.json'

export const metadata: Metadata = {
  title: 'Journal du Comté',
  description: 'La Gazette du Comté — Actualités, chroniques et annonces officielles de Wild Frontier RP.',
}

type Article = {
  id: number
  category: string
  date: string
  title: string
  excerpt: string
  author: string
  featured: boolean
}

const articles = articlesData as Article[]

const categories = ['Tous', 'Faits divers', 'Politique', 'Justice', 'Avis de décès', 'Annonce commerciale', 'Chronique']

export default function JournalPage() {
  const featured = articles.find(a => a.featured)
  const rest = articles.filter(a => !a.featured)

  return (
    <>
      {/* Masthead style gazette */}
      <section
        style={{
          background: 'linear-gradient(170deg, var(--parchment-dark) 0%, var(--parchment-100) 80%)',
          borderBottom: '3px double var(--border-dark)',
        }}
        className="py-8"
      >
        <div className="container-wide">
          {/* Dateline */}
          <div
            className="flex justify-between items-center mb-5 pb-3"
            style={{ borderBottom: '1px solid var(--border-light)' }}
          >
            <span className="label-display" style={{ color: 'var(--ink-20)' }}>
              Comté de New Hanover, Territoire de l&apos;Ouest
            </span>
            <span className="label-display" style={{ color: 'var(--ink-20)' }}>
              Lundi, 24 Mai 1887
            </span>
            <span className="label-display" style={{ color: 'var(--ink-20)' }}>
              Prix : 5 cents
            </span>
          </div>

          {/* Titre masthead */}
          <div
            className="text-center py-7"
            style={{ borderBottom: '3px double var(--border-dark)', borderTop: '1px solid var(--border)' }}
          >
            <div className="label-display mb-3" style={{ color: 'var(--ink-20)', letterSpacing: '0.35em' }}>
              Journal officiel du
            </div>
            <h1
              className="display-heading"
              style={{ fontSize: 'clamp(2.2rem, 6vw, 4.5rem)', letterSpacing: '0.03em' }}
            >
              Gazette du Comté
            </h1>
            <div className="label-display mt-3" style={{ color: 'var(--ink-20)', letterSpacing: '0.2em' }}>
              Fondée en l&apos;an de grâce 1879 &nbsp;·&nbsp; Publiée chaque semaine
            </div>
          </div>
        </div>
      </section>

      {/* Filtres */}
      <section
        className="py-4"
        style={{ borderBottom: '1px solid var(--border-light)', backgroundColor: 'var(--parchment-100)' }}
      >
        <div className="container-wide flex flex-wrap gap-2 justify-center">
          {categories.map(cat => (
            <button
              key={cat}
              className="label-display px-3 py-1.5 transition-all"
              style={{
                color: 'var(--ink-40)',
                border: '1px solid var(--border-light)',
                background: 'none',
                cursor: 'pointer',
                fontSize: '0.6rem',
                letterSpacing: '0.18em',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Articles */}
      <section className="py-14">
        <div className="container-wide">

          {/* À la une */}
          {featured && (
            <div className="mb-14">
              <div
                className="label-display text-center mb-5"
                style={{ color: 'var(--rust)', letterSpacing: '0.35em' }}
              >
                À la une
              </div>
              <div className="document-panel">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                  <div className="md:col-span-2">
                    <div className="meta-text mb-2" style={{ color: 'var(--rust)' }}>{featured.category}</div>
                    <h2 className="section-heading mb-4" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', lineHeight: '1.25' }}>
                      {featured.title}
                    </h2>
                    <p className="body-text mb-4">{featured.excerpt}</p>
                    <div className="meta-text" style={{ color: 'var(--ink-20)' }}>
                      {featured.date} — {featured.author}
                    </div>
                  </div>
                  <div className="flex justify-center md:justify-end">
                    <div
                      className="official-seal flex-col text-center"
                      style={{ width: '120px', height: '120px', color: 'var(--rust)', borderColor: 'var(--rust)' }}
                    >
                      <div className="label-display leading-tight px-2" style={{ color: 'var(--rust)', letterSpacing: '0.1em' }}>
                        Gazette<br />du Comté
                      </div>
                      <div
                        className="section-heading mt-2"
                        style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--rust)' }}
                      >
                        W.F.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Grille */}
          <div className="newspaper-grid">
            {rest.map(article => (
              <article
                key={article.id}
                className="pb-6"
                style={{ borderBottom: '1px solid var(--border-light)' }}
              >
                <div className="meta-text mb-2" style={{ color: 'var(--rust)' }}>{article.category}</div>
                <h3 className="section-heading mb-3" style={{ fontSize: '1.15rem', lineHeight: '1.3' }}>
                  {article.title}
                </h3>
                <p className="body-text mb-4" style={{ fontSize: '0.92rem' }}>{article.excerpt}</p>
                <div className="meta-text" style={{ color: 'var(--ink-20)' }}>
                  {article.date} — {article.author}
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div
            className="mt-14 pt-8 text-center label-display"
            style={{ borderTop: '2px solid var(--border)', color: 'var(--ink-20)' }}
          >
            Page 1 sur 12 — Archives disponibles à la bibliothèque du comté
          </div>
        </div>
      </section>
    </>
  )
}
