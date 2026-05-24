import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Archives',
  description: 'Archives officielles du comté de New Hanover — Chroniques, registres, décisions institutionnelles et mémoire du serveur.',
}

const archivesData = [
  {
    id: 'chroniques',
    label: 'Section I',
    category: 'Chroniques officielles',
    entries: [
      { date: 'Avril 1887',    title: 'Les grandes élections du printemps',            type: 'Politique',   status: 'Archivé' },
      { date: 'Mars 1887',     title: 'L\'incendie de l\'entrepôt nord',               type: 'Fait divers', status: 'Archivé' },
      { date: 'Février 1887',  title: 'Création de la première ligne de diligence',    type: 'Commerce',    status: 'Archivé' },
    ],
  },
  {
    id: 'judiciaire',
    label: 'Section II',
    category: 'Registre judiciaire',
    entries: [
      { date: '15 mai 1887',   title: 'Affaire Henderson c/ comté — Vol aggravé',      type: 'Procès',  status: 'Clos' },
      { date: '3 mai 1887',    title: 'Affaire Morrison — Falsification de document',  type: 'Procès',  status: 'Clos' },
      { date: '22 avril 1887', title: 'Injonction foncière Lot 14-B',                  type: 'Civil',   status: 'Clos' },
    ],
  },
  {
    id: 'civil',
    label: 'Section III',
    category: 'Registre civil',
    entries: [
      { date: 'Mai 1887',      title: 'Naissances & décès — Mois de mai',              type: 'État civil',  status: 'Publié' },
      { date: 'Avril 1887',    title: 'Mariages célébrés — Printemps 1887',            type: 'État civil',  status: 'Publié' },
      { date: 'Mars 1887',     title: 'Registre des résidences — Q1 1887',             type: 'Résidence',   status: 'Publié' },
    ],
  },
  {
    id: 'municipal',
    label: 'Section IV',
    category: 'Décisions municipales',
    entries: [
      { date: '20 mai 1887',   title: 'Procès-verbal — Session ordinaire du conseil',  type: 'Décision', status: 'Publié' },
      { date: '5 mai 1887',    title: 'Décret de taxation foncière 1887',              type: 'Décret',   status: 'Publié' },
      { date: '10 avril 1887', title: 'Attribution des lots fonciers zone nord',       type: 'Foncier',  status: 'Publié' },
    ],
  },
]

export default function ArchivesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="page-hero"
        style={{ background: 'linear-gradient(170deg, var(--parchment-dark) 0%, var(--parchment) 60%)', borderBottom: '2px solid var(--border)' }}
      >
        <div className="container-narrow text-center">
          <div className="label-display mb-4" style={{ color: 'var(--ink-20)', letterSpacing: '0.25em' }}>
            Mémoire du comté
          </div>
          <h1 className="display-heading mb-5" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
            Archives
          </h1>
          <p className="body-text mx-auto" style={{ maxWidth: '36rem' }}>
            Bibliothèque des chroniques, registres, jugements et décisions officielles.
            Chaque événement important laisse une trace permanente.
          </p>
        </div>
      </section>

      {/* Note archivistique */}
      <section
        className="py-4 text-center"
        style={{ borderBottom: '1px solid var(--border-light)', backgroundColor: 'var(--parchment-100)' }}
      >
        <p className="label-display" style={{ color: 'var(--ink-20)', letterSpacing: '0.18em' }}>
          Consultables sur demande au bureau du greffier — Copie sur papier disponible
        </p>
      </section>

      {/* Archives */}
      <section className="py-20 md:py-28">
        <div className="container-wide space-y-16">
          {archivesData.map(section => (
            <div key={section.id} id={section.id}>
              <div
                className="flex items-baseline gap-5 mb-8 pb-4"
                style={{ borderBottom: '3px double var(--border)' }}
              >
                <div className="ornamental-number">{section.label}</div>
                <h2 className="section-heading" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>
                  {section.category}
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="rp-table">
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
                        <td className="label-display whitespace-nowrap" style={{ color: 'var(--ink-40)', fontSize: '0.62rem' }}>
                          {entry.date}
                        </td>
                        <td style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--ink)' }}>
                          {entry.title}
                        </td>
                        <td>
                          <span className="badge badge-pending">{entry.type}</span>
                        </td>
                        <td>
                          <span className="badge badge-validated">{entry.status}</span>
                        </td>
                        <td>
                          <button
                            className="label-display transition-colors"
                            style={{ color: 'var(--rust)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.6rem', letterSpacing: '0.15em' }}
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
        className="py-20 md:py-28"
        style={{ backgroundColor: 'var(--parchment-dark)', borderTop: '2px solid var(--border)' }}
      >
        <div className="container-narrow text-center">
          <div className="label-display mb-4" style={{ color: 'var(--ink-20)' }}>Registre honorifique</div>
          <h2 className="section-heading mb-3" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
            Livre des Grandes Figures
          </h2>
          <div className="rule-ornament my-8" style={{ maxWidth: '20rem', margin: '2rem auto' }}>
            <span className="label-display" style={{ color: 'var(--gold)', opacity: 0.5 }}>◆</span>
          </div>
          <p className="body-text mx-auto mb-10" style={{ maxWidth: '36rem' }}>
            Ce registre honorifique perpétue la mémoire des personnages ayant marqué l&apos;histoire du comté.
            Seuls y figurent ceux reconnus par vote du conseil des joueurs et du staff.
          </p>

          <div
            className="parchment-card text-center mx-auto"
            style={{ maxWidth: '28rem', borderStyle: 'dashed', borderColor: 'var(--border-light)' }}
          >
            <div
              className="ornamental-number text-center mb-3"
              style={{ fontSize: '3rem', display: 'block', color: 'var(--border)' }}
            >
              —
            </div>
            <p className="section-heading mb-2" style={{ fontSize: '1.1rem' }}>
              Le livre est en cours de rédaction
            </p>
            <p className="body-text" style={{ fontSize: '0.9rem' }}>
              Les premières entrées seront inscrites lorsque des personnages auront
              suffisamment marqué l&apos;histoire du comté.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
