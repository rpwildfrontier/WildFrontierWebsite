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
    excerpt: 'Nous avons l\'affliction d\'annoncer le décès de Mme Margaret Colton, sage-femme dévouée du comté depuis dix-sept ans. Elle s\'est éteinte paisiblement entourée des siens.',
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
    category: 'Cronique',
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
      {/* En-tête style journal */}
      <section
        style={{
          background: 'linear-gradient(160deg, #ddc88e 0%, #f0e6c8 60%)',
          borderBottom: '2px solid var(--color-ink)',
        }}
        className="py-8"
      >
        <div className="container-wide">
          {/* Dateline */}
          <div className="flex justify-between items-center mb-4 text-xs display-text uppercase tracking-widest" style={{ color: 'var(--color-sepia)', borderBottom: '1px solid var(--color-border)', paddingBottom: '8px' }}>
            <span>Comté de New Hanover, Territoire de l&apos;Ouest</span>
            <span>Lundi, 24 Mai 1887</span>
            <span>Prix : 5 cents</span>
          </div>

          {/* Titre */}
          <div className="text-center py-6" style={{ borderBottom: '3px double var(--color-ink)' }}>
            <p className="display-text text-xs uppercase tracking-[0.4em] mb-2" style={{ color: 'var(--color-sepia)' }}>
              Journal officiel du
            </p>
            <h1
              className="font-serif font-black uppercase"
              style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)', color: 'var(--color-ink)', letterSpacing: '-0.01em' }}
            >
              Gazette du Comté
            </h1>
            <p className="display-text text-xs mt-2 uppercase tracking-widest" style={{ color: 'var(--color-sepia)' }}>
              Fondée en l&apos;an de grâce 1879 · Publiée chaque semaine
            </p>
          </div>
        </div>
      </section>

      {/* Filtres */}
      <section className="py-4" style={{ borderBottom: '1px solid var(--color-border)', backgroundColor: 'rgba(232, 213, 163, 0.3)' }}>
        <div className="container-wide flex flex-wrap gap-2 justify-center">
          {categories.map(cat => (
            <button
              key={cat}
              className="display-text text-xs uppercase tracking-wider px-3 py-1 transition-all"
              style={{
                color: 'var(--color-sepia)',
                border: '1px solid var(--color-border)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Articles */}
      <section className="py-12">
        <div className="container-wide">
          {/* Article à la une */}
          {featured && (
            <div className="mb-12">
              <div
                className="display-text text-xs uppercase tracking-[0.3em] mb-4 text-center"
                style={{ color: 'var(--color-rust)' }}
              >
                ✦ À la une ✦
              </div>
              <article className="document-panel">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                  <div className="md:col-span-2">
                    <div className="article-meta mb-2">{featured.category}</div>
                    <h2 className="font-serif font-bold text-3xl mb-4 leading-snug" style={{ color: 'var(--color-ink)' }}>
                      {featured.title}
                    </h2>
                    <p className="body-text text-lg mb-4">{featured.excerpt}</p>
                    <div className="display-text text-xs" style={{ color: 'var(--color-sepia)', opacity: 0.7 }}>
                      {featured.date} — {featured.author}
                    </div>
                  </div>
                  <div className="flex justify-center md:justify-end">
                    <div
                      className="official-seal w-32 h-32 flex flex-col items-center justify-center text-center"
                      style={{ color: 'var(--color-rust)', borderColor: 'var(--color-rust)', borderWidth: '3px' }}
                    >
                      <div className="display-text text-xs uppercase leading-tight tracking-wider px-2">
                        Gazette<br />du Comté
                      </div>
                      <div className="text-2xl mt-1">★</div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          )}

          {/* Grille d'articles */}
          <div className="newspaper-columns">
            {rest.map(article => (
              <article key={article.id} className="article-card pb-6">
                <div className="article-meta mb-2">{article.category}</div>
                <h3 className="font-serif font-bold text-xl mb-3 leading-snug" style={{ color: 'var(--color-ink)' }}>
                  {article.title}
                </h3>
                <p className="body-text text-base mb-4">{article.excerpt}</p>
                <div className="display-text text-xs" style={{ color: 'var(--color-sepia)', opacity: 0.7 }}>
                  {article.date} — {article.author}
                </div>
              </article>
            ))}
          </div>

          {/* Pagination style journal */}
          <div
            className="mt-12 pt-8 text-center display-text text-xs uppercase tracking-widest"
            style={{ borderTop: '2px solid var(--color-border)', color: 'var(--color-sepia)' }}
          >
            Page 1 sur 12 — Archives disponibles à la bibliothèque du comté
          </div>
        </div>
      </section>
    </>
  )
}
