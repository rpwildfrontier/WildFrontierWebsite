import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Institutions',
  description: 'Les institutions officielles du comté de New Hanover — Mairie, Tribunal, Bureau du Shérif, Notariat, Médecine, Banque.',
}

const institutions = [
  {
    initial: 'M',
    name: 'Gouvernement Municipal',
    subtitle: 'Hôtel de ville — Valentine',
    description: 'La mairie constitue le cœur politique du comté. Le maire élu préside le conseil municipal composé de membres élus ou nommés. Toute décision collective est consignée au registre officiel.',
    roles: ['Maire (élu)', 'Conseillers municipaux', 'Greffier municipal', 'Percepteur'],
    powers: ['Voter les taxes locales', 'Attribuer les lots fonciers', 'Nommer les fonctionnaires', 'Allouer le budget'],
    whitelist: false,
  },
  {
    initial: 'T',
    name: 'Tribunal du Comté',
    subtitle: 'Palais de justice — Valentine',
    description: 'Le tribunal est l\'institution de dernière parole. Tout procès requiert un juge joueur, un greffier, une accusation et une défense. Les verdicts sont consignés et exécutoires.',
    roles: ['Juge (whitelist)', 'Greffier', 'Avocat (whitelist)', 'Procureur'],
    powers: ['Prononcer les verdicts', 'Émettre des mandats judiciaires', 'Ordonner des saisies', 'Prononcer des peines'],
    whitelist: true,
  },
  {
    initial: 'S',
    name: 'Bureau du Shérif',
    subtitle: 'Bureau du Shérif — Valentine',
    description: 'Le shérif et ses adjoints maintiennent l\'ordre dans le comté. Toute arrestation suit une procédure stricte : identification, lecture des motifs, menottes, transport en cellule.',
    roles: ['Shérif (whitelist)', 'Adjoint au shérif (whitelist)', 'Enquêteur'],
    powers: ['Arrestations légales', 'Mandats et fouilles', 'Registre pénal', 'Gestion des cellules'],
    whitelist: true,
  },
  {
    initial: 'N',
    name: 'Office Notarial',
    subtitle: 'Étude notariale — Valentine',
    description: 'Le notaire est le gardien de la légalité civile. Il authentifie les actes, certifie les contrats, enregistre les propriétés et célèbre les mariages civils. Son sceau fait foi en tout lieu.',
    roles: ['Notaire (whitelist)', 'Clerc de notaire'],
    powers: ['Actes de propriété', 'Contrats officiels', 'Mariages civils', 'Testaments et successions'],
    whitelist: true,
  },
  {
    initial: 'C',
    name: 'Cabinet Médical',
    subtitle: 'Clinique — Valentine',
    description: 'Le médecin est une figure vitale du comté. Sans lui, les blessés n\'ont aucune chance. Il diagnostique, soigne, prescrit et peut déclarer le décès. Sa présence conditionne la survie de tous.',
    roles: ['Médecin (whitelist)', 'Aide-soignant', 'Pharmacien'],
    powers: ['Diagnostic et soins', 'Ordonnances médicales', 'Certificats de décès', 'Accès aux médicaments régulés'],
    whitelist: true,
  },
  {
    initial: 'B',
    name: 'Banque du Comté',
    subtitle: 'Établissement financier — Valentine',
    description: 'La banque est opérée par un banquier joueur. Aucun guichet automatique. Dépôts, retraits, prêts et virements se font en personne, avec contrat signé et coffre physique.',
    roles: ['Banquier (whitelist)', 'Employé de banque'],
    powers: ['Gestion des comptes', 'Prêts et contrats', 'Coffres personnels', 'Virements officiels'],
    whitelist: true,
  },
  {
    initial: 'G',
    name: 'Gazette du Comté',
    subtitle: 'Presse typographique — Valentine',
    description: 'Le journal est rédigé, imprimé et distribué par des joueurs. Les articles peuvent modifier des réputations, relancer des enquêtes ou déclencher des procès pour diffamation.',
    roles: ['Rédacteur en chef', 'Journaliste', 'Distributeur'],
    powers: ['Publication d\'articles', 'Archives de presse', 'Avis de recherche', 'Chroniques officielles'],
    whitelist: false,
  },
  {
    initial: 'E',
    name: 'Église & Registres',
    subtitle: 'Paroisse — Valentine',
    description: 'Le pasteur célèbre les mariages religieux et les obsèques. Il tient le registre paroissial, complément du registre civil du notaire. Sa parole a force morale dans le comté.',
    roles: ['Pasteur', 'Servant'],
    powers: ['Mariages religieux', 'Obsèques et inhumations', 'Registre paroissial'],
    whitelist: false,
  },
]

export default function InstitutionsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="page-hero"
        style={{ background: 'linear-gradient(170deg, var(--parchment-dark) 0%, var(--parchment) 60%)', borderBottom: '2px solid var(--border)' }}
      >
        <div className="container-narrow text-center">
          <div className="label-display mb-4" style={{ color: 'var(--ink-20)', letterSpacing: '0.25em' }}>
            Structure officielle du comté
          </div>
          <h1 className="display-heading mb-5" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
            Les Institutions
          </h1>
          <p className="body-text mx-auto" style={{ maxWidth: '36rem' }}>
            Le comté de New Hanover est structuré autour d&apos;institutions joueurs.
            Chaque institution remplit un rôle indispensable. Leur absence se ressent dans tout le territoire.
          </p>
        </div>
      </section>

      {/* Liste */}
      <section className="py-20 md:py-28">
        <div className="container-wide space-y-8">
          {institutions.map((inst, idx) => (
            <div key={inst.name} className="document-panel">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                <div className="md:col-span-2">
                  <div className="flex items-start gap-5 mb-5">
                    <div className="monogram monogram-lg flex-shrink-0">{inst.initial}</div>
                    <div>
                      <div className="flex items-center gap-3 flex-wrap mb-1">
                        <h2 className="section-heading" style={{ fontSize: '1.5rem' }}>{inst.name}</h2>
                        <span className={inst.whitelist ? 'badge badge-closed' : 'badge badge-validated'}>
                          {inst.whitelist ? 'Whitelist' : 'Ouvert'}
                        </span>
                      </div>
                      <div className="label-display" style={{ color: 'var(--ink-20)' }}>{inst.subtitle}</div>
                    </div>
                  </div>

                  <p className="body-text mb-6">{inst.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <div className="label-display mb-3" style={{ color: 'var(--ink-20)' }}>Rôles disponibles</div>
                      <ul className="space-y-1.5">
                        {inst.roles.map(r => (
                          <li key={r} className="flex items-start gap-2 body-text" style={{ fontSize: '0.9rem' }}>
                            <span style={{ color: 'var(--gold)', fontFamily: 'var(--font-serif)', flexShrink: 0 }}>→</span>
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="label-display mb-3" style={{ color: 'var(--ink-20)' }}>Pouvoirs & fonctions</div>
                      <ul className="space-y-1.5">
                        {inst.powers.map(p => (
                          <li key={p} className="flex items-start gap-2 body-text" style={{ fontSize: '0.9rem' }}>
                            <span style={{ color: 'var(--gold)', fontFamily: 'var(--font-serif)', flexShrink: 0 }}>&checkmark;</span>
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-4">
                  <div
                    className="parchment-card text-center"
                    style={{ backgroundColor: 'var(--parchment-50)' }}
                  >
                    <div className="label-display mb-2" style={{ color: 'var(--ink-20)' }}>Accès</div>
                    <div className="section-heading mb-2" style={{ fontSize: '1rem' }}>
                      {inst.whitelist ? 'Candidature whitelist' : 'Rôle ouvert'}
                    </div>
                    <p className="body-text" style={{ fontSize: '0.85rem' }}>
                      {inst.whitelist
                        ? 'Requiert une validation staff et une formation in-game.'
                        : 'Accessible à tout joueur validé, sous conditions de licence.'}
                    </p>
                  </div>
                  {inst.whitelist && (
                    <Link href="/metiers" className="btn-primary text-center" style={{ justifyContent: 'center' }}>
                      Voir les métiers
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
