import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Journal du Comté',
  description: 'La Gazette du Comté — Actualités, chroniques et annonces officielles de Wild Frontier RP.',
}

const articles = [
  {
    id: 1,
    category: 'Faits divers',
    date: '24 mai 1887',
    title: 'Vol à main armée à la banque de Valentine',
    excerpt: 'Vers deux heures de l\'après-midi, un groupe de trois hommes masqués a pénétré dans la banque du comté et s\'est emparé d\'une somme estimée à mille deux cents dollars. Le shérif a ouvert une enquête.',
    author: 'Correspondant local',
    featured: true,
  },
  {
    id: 2,
    category: 'Politique',
    date: '23 mai 1887',
    title: 'Le conseil municipal vote la taxe foncière de printemps',
    excerpt: 'Réunis en session ordinaire, les membres du conseil ont approuvé à quatre voix contre deux le taux de la taxe foncière annuelle. Le percepteur commencera les collectes le premier juin.',
    author: 'Rédaction politique',
    featured: false,
  },
  {
    id: 3,
    category: 'Justice',
    date: '22 mai 1887',
    title: 'Verdict prononcé dans l\'affaire Hargreaves',
    excerpt: 'Après deux jours d\'audience, le juge Montgomery a rendu son verdict : coupable de vol de bétail avec circonstances aggravantes. Peine : six mois de travaux forcés et amende de deux cents dollars.',
    author: 'Correspondant judiciaire',
    featured: false,
  },
  {
    id: 4,
    category: 'Avis de décès',
    date: '21 mai 1887',
    title: 'Décès de Margaret Colton, sage-femme du comté',
    excerpt: 'Nous avons l\'affliction d\'annoncer le décès de Mme Margaret Colton, sage-femme dévouée depuis dix-sept ans. Elle s\'est éteinte paisiblement entourée des siens.',
    author: 'Registre des décès',
    featured: false,
  },
  {
    id: 5,
    category: 'Annonce commerciale',
    date: '20 mai 1887',
    title: 'Ouverture de l\'atelier du forgeron Fletcher',
    excerpt: 'M. Caleb Fletcher est heureux d\'annoncer l\'ouverture de sa forge au bout de la rue principale. Fers à cheval, outils agricoles et réparations d\'armes. Tarifs affichés sur ardoise.',
    author: 'Publicité',
    featured: false,
  },
  {
    id: 6,
    category: 'Chronique',
    date: '19 mai 1887',
    title: 'L\'hiver tardif fait des ravages dans les troupeaux',
    excerpt: 'Les éleveurs du comté signalent des pertes importantes suite aux dernières gelées. Plusieurs familles sollicitent l\'aide du conseil municipal pour faire face à la saison difficile.',
    author: 'Chroniqueur agricole',
    featured: false,
  },
]

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
