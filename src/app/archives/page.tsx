import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Archives',
  description: 'Archives officielles du comté de New Hanover — Chroniques, registres, décisions institutionnelles et mémoire du serveur.',
}

const archivesData = [
  {
    category: 'Chroniques officielles',
    icon: '📖',
    entries: [
      { date: 'Avril 1887', title: 'Les grandes élections du printemps', type: 'Politique', status: 'Archivé' },
      { date: 'Mars 1887', title: 'L\'incendie de l\'entrepôt nord', type: 'Fait divers', status: 'Archivé' },
      { date: 'Février 1887', title: 'Création de la première ligne de diligence', type: 'Commerce', status: 'Archivé' },
    ],
  },
  {
    category: 'Registre judiciaire',
    icon: '⚖',
    entries: [
      { date: '15 mai 1887', title: 'Affaire Henderson c/ comté — Vol aggravé', type: 'Procès', status: 'Clos' },
      { date: '3 mai 1887', title: 'Affaire Morrison — Falsification de document', type: 'Procès', status: 'Clos' },
      { date: '22 avril 1887', title: 'Injonction foncière Lot 14-B', type: 'Civil', status: 'Clos' },
    ],
  },
  {
    category: 'Registre civil',
    icon: '📋',
    entries: [
      { date: 'Mai 1887', title: 'Naissances & décès — Mois de mai', type: 'État civil', status: 'Publié' },
      { date: 'Avril 1887', title: 'Mariages célébrés — Printemps 1887', type: 'État civil', status: 'Publié' },
      { date: 'Mars 1887', title: 'Registre des résidences — Q1 1887', type: 'Résidence', status: 'Publié' },
    ],
  },
  {
    category: 'Décisions municipales',
    icon: '🏛',
    entries: [
      { date: '20 mai 1887', title: 'Procès-verbal — Session ordinaire du conseil', type: 'Décision', status: 'Publié' },
      { date: '5 mai 1887', title: 'Décret de taxation foncière 1887', type: 'Décret', status: 'Publié' },
      { date: '10 avril 1887', title: 'Attribution des lots fonciers zone nord', type: 'Foncier', status: 'Publié' },
    ],
  },
]

export default function ArchivesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="page-hero"
        style={{ background: 'linear-gradient(160deg, #d8c090 0%, #f0e6c8 60%)' }}
      >
        <div className="container-narrow relative text-center">
          <div className="display-text text-xs uppercase tracking-[0.3em] mb-3" style={{ color: 'var(--color-sepia)' }}>
            — Mémoire du comté —
          </div>
          <h1 className="heading-display mb-4">Archives</h1>
          <p className="body-text max-w-2xl mx-auto">
            Bibliothèque des chroniques, registres, jugements et décisions officielles.
            Chaque événement important laisse une trace permanente dans les archives du comté.
          </p>
        </div>
      </section>

      {/* Note archivistique */}
      <section className="py-8" style={{ borderBottom: '1px solid var(--color-border)', backgroundColor: 'rgba(232, 213, 163, 0.3)' }}>
        <div className="container-narrow text-center">
          <p className="display-text text-xs uppercase tracking-wider" style={{ color: 'var(--color-sepia)' }}>
            ✦ Archives consultables sur demande au bureau du greffier — Copie sur papier disponible ✦
          </p>
        </div>
      </section>

      {/* Archives */}
      <section className="py-16 md:py-20">
        <div className="container-wide space-y-12">
          {archivesData.map(section => (
            <div key={section.category}>
              <div className="flex items-center gap-3 mb-6">
                <span style={{ fontSize: '1.8rem' }}>{section.icon}</span>
                <h2 className="heading-section">{section.category}</h2>
              </div>
              <div className="divider-ornament mb-6"><span className="divider-ornament-icon">✦</span></div>

              <div className="overflow-x-auto">
                <table className="rp-table w-full">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Titre</th>
                      <th>Type</th>
                      <th>Statut</th>
                      <th>Consulter</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.entries.map(entry => (
                      <tr key={entry.title}>
                        <td className="display-text text-sm whitespace-nowrap" style={{ color: 'var(--color-sepia)' }}>
                          {entry.date}
                        </td>
                        <td className="font-serif font-semibold">{entry.title}</td>
                        <td>
                          <span className="badge-pending">{entry.type}</span>
                        </td>
                        <td>
                          <span className="badge-validated">{entry.status}</span>
                        </td>
                        <td>
                          <button
                            className="display-text text-xs uppercase tracking-wider transition-colors"
                            style={{ color: 'var(--color-rust)' }}
                          >
                            Lire →
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Grandes figures */}
      <section
        className="py-16 md:py-20"
        style={{ backgroundColor: 'var(--color-parchment-dark)', borderTop: '2px solid var(--color-border)' }}
      >
        <div className="container-narrow text-center">
          <h2 className="heading-section mb-4">Livre des Grandes Figures</h2>
          <div className="divider-ornament"><span className="divider-ornament-icon">✦</span></div>
          <p className="body-text max-w-2xl mx-auto my-8">
            Ce registre honorifique perpétue la mémoire des personnages ayant marqué l&apos;histoire
            du comté. Seuls y figurent ceux qui ont contribué de manière significative à la vie
            de la communauté, reconnus par vote du conseil des joueurs et du staff.
          </p>
          <div
            className="parchment-card text-center max-w-md mx-auto"
            style={{ borderStyle: 'dashed' }}
          >
            <div style={{ fontSize: '3rem' }}>📕</div>
            <p className="font-serif font-bold text-xl mt-3 mb-2" style={{ color: 'var(--color-ink)' }}>
              Le livre est en cours de rédaction
            </p>
            <p className="body-text text-sm">
              Les premières entrées seront inscrites lorsque des personnages auront marqué
              suffisamment l&apos;histoire du comté.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
