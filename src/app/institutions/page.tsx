import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Institutions',
  description: 'Les institutions officielles du comté de New Hanover — Mairie, Tribunal, Bureau du Shérif, Notariat, Médecine, Banque.',
}

const institutions = [
  {
    id: 'mairie',
    icon: '🏛',
    name: 'Gouvernement Municipal',
    subtitle: 'Hôtel de ville — Valentine',
    description:
      'La mairie constitue le cœur politique du comté. Le maire élu préside le conseil municipal, composé de membres élus ou nommés. Toute décision collective est consignée au registre officiel.',
    roles: ['Maire (élu)', 'Conseillers municipaux', 'Greffier municipal', 'Percepteur'],
    powers: [
      'Voter les taxes locales',
      'Attribuer les lots fonciers',
      'Nommer les fonctionnaires',
      'Allouer le budget',
    ],
    access: 'public',
    whitelist: false,
  },
  {
    id: 'tribunal',
    icon: '⚖',
    name: 'Tribunal du Comté',
    subtitle: 'Palais de justice — Valentine',
    description:
      'Le tribunal est l\'institution de dernière parole. Tout procès requiert un juge joueur, un greffier, une accusation et une défense. Les verdicts sont consignés et exécutoires.',
    roles: ['Juge (whitelist)', 'Greffier', 'Avocat (whitelist)', 'Procureur'],
    powers: [
      'Prononcer les verdicts',
      'Émettre des mandats judiciaires',
      'Ordonner des saisies',
      'Prononcer des peines',
    ],
    access: 'whitelist',
    whitelist: true,
  },
  {
    id: 'sherif',
    icon: '🔫',
    name: 'Bureau du Shérif',
    subtitle: 'Bureau du Shérif — Valentine',
    description:
      'Le shérif et ses adjoints maintiennent l\'ordre dans le comté. Toute arrestation suit une procédure stricte : identification, lecture des motifs, menottes, transport en cellule.',
    roles: ['Shérif (whitelist)', 'Adjoint au shérif (whitelist)', 'Enquêteur'],
    powers: [
      'Arrestations légales',
      'Mandats et fouilles',
      'Registre pénal',
      'Gestion des cellules',
    ],
    access: 'whitelist',
    whitelist: true,
  },
  {
    id: 'notariat',
    icon: '📋',
    name: 'Office Notarial',
    subtitle: 'Étude — Valentine',
    description:
      'Le notaire est le gardien de la légalité civile. Il authentifie les actes, certifie les contrats, enregistre les propriétés et célèbre les mariages civils. Son sceau fait foi en tout lieu.',
    roles: ['Notaire (whitelist)', 'Clerc de notaire'],
    powers: [
      'Actes de propriété',
      'Contrats officiels',
      'Mariages civils',
      'Testaments et successions',
    ],
    access: 'whitelist',
    whitelist: true,
  },
  {
    id: 'medecine',
    icon: '🏥',
    name: 'Cabinet Médical',
    subtitle: 'Clinique — Valentine',
    description:
      'Le médecin est une figure vitale du comté. Sans lui, les blessés n\'ont aucune chance. Il diagnostique, soigne, prescrit et peut déclarer le décès. Sa présence conditionne la survie de tous.',
    roles: ['Médecin (whitelist)', 'Aide-soignant', 'Pharmacien'],
    powers: [
      'Diagnostic et soins',
      'Ordonnances médicales',
      'Certificats de décès',
      'Accès aux médicaments régulés',
    ],
    access: 'whitelist',
    whitelist: true,
  },
  {
    id: 'banque',
    icon: '🏦',
    name: 'Banque du Comté',
    subtitle: 'Établissement financier — Valentine',
    description:
      'La banque est opérée par un banquier joueur. Aucun guichet automatique. Dépôts, retraits, prêts et virements se font en personne, avec contrat signé et coffre physique.',
    roles: ['Banquier (whitelist)', 'Employé de banque'],
    powers: [
      'Gestion des comptes',
      'Prêts et contrats',
      'Coffres personnels',
      'Virements officiels',
    ],
    access: 'whitelist',
    whitelist: true,
  },
  {
    id: 'presse',
    icon: '📰',
    name: 'Gazette du Comté',
    subtitle: 'Presse typographique — Valentine',
    description:
      'Le journal est rédigé, imprimé et distribué par des joueurs. Les articles peuvent modifier des réputations, relancer des enquêtes ou déclencher des procès pour diffamation.',
    roles: ['Rédacteur en chef', 'Journaliste', 'Distributeur'],
    powers: [
      'Publication d\'articles',
      'Archives de presse',
      'Avis de recherche',
      'Chroniques officielles',
    ],
    access: 'ouvert',
    whitelist: false,
  },
  {
    id: 'eglise',
    icon: '⛪',
    name: 'Église & Registres',
    subtitle: 'Paroisse — Valentine',
    description:
      'Le pasteur célèbre les mariages religieux et les obsèques. Il tient le registre paroissial, complément du registre civil du notaire. Sa parole a force morale dans le comté.',
    roles: ['Pasteur', 'Servant'],
    powers: [
      'Mariages religieux',
      'Obsèques et inhumations',
      'Registre paroissial',
    ],
    access: 'ouvert',
    whitelist: false,
  },
]

export default function InstitutionsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="page-hero"
        style={{ background: 'linear-gradient(160deg, #ddc88e 0%, #f0e6c8 60%)' }}
      >
        <div className="container-narrow relative text-center">
          <div className="display-text text-xs uppercase tracking-[0.3em] mb-3" style={{ color: 'var(--color-sepia)' }}>
            — Structure officielle du comté —
          </div>
          <h1 className="heading-display mb-4">Les Institutions</h1>
          <p className="body-text max-w-2xl mx-auto">
            Le comté de New Hanover est structuré autour d&apos;institutions joueurs.
            Chaque institution remplit un rôle indispensable. Leur absence se ressent dans le monde entier.
          </p>
        </div>
      </section>

      {/* Liste des institutions */}
      <section className="py-16 md:py-20">
        <div className="container-wide">
          <div className="space-y-8">
            {institutions.map(inst => (
              <div key={inst.id} id={inst.id} className="document-panel">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <div className="flex items-start gap-4 mb-4">
                      <span style={{ fontSize: '2.5rem' }}>{inst.icon}</span>
                      <div>
                        <div className="flex items-center gap-3 flex-wrap mb-1">
                          <h2 className="font-serif font-bold text-2xl" style={{ color: 'var(--color-ink)' }}>
                            {inst.name}
                          </h2>
                          <span
                            className={inst.whitelist ? 'badge-closed' : 'badge-validated'}
                          >
                            {inst.whitelist ? 'Whitelist' : 'Ouvert'}
                          </span>
                        </div>
                        <div className="display-text text-xs uppercase tracking-wider" style={{ color: 'var(--color-sepia)' }}>
                          {inst.subtitle}
                        </div>
                      </div>
                    </div>
                    <p className="body-text mb-6">{inst.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <div className="display-text text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--color-sepia)' }}>
                          Rôles disponibles
                        </div>
                        <ul className="space-y-1">
                          {inst.roles.map(role => (
                            <li key={role} className="flex items-center gap-2 body-text text-base">
                              <span style={{ color: 'var(--color-gold)' }}>→</span> {role}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="display-text text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--color-sepia)' }}>
                          Pouvoirs & fonctions
                        </div>
                        <ul className="space-y-1">
                          {inst.powers.map(power => (
                            <li key={power} className="flex items-center gap-2 body-text text-base">
                              <span style={{ color: 'var(--color-gold)' }}>✓</span> {power}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between">
                    <div
                      className="p-4 text-center"
                      style={{ border: '1px solid var(--color-border)', backgroundColor: 'rgba(240, 230, 200, 0.5)' }}
                    >
                      <div className="display-text text-xs uppercase tracking-wider mb-3" style={{ color: 'var(--color-sepia)' }}>
                        Accès
                      </div>
                      <div className="font-serif font-bold text-lg" style={{ color: 'var(--color-ink)' }}>
                        {inst.whitelist ? 'Candidature whitelist' : 'Rôle ouvert'}
                      </div>
                      <p className="text-sm mt-2" style={{ color: 'var(--color-sepia)', fontFamily: 'var(--font-crimson)' }}>
                        {inst.whitelist
                          ? 'Requiert une validation staff et une formation in-game.'
                          : 'Accessible à tout joueur validé, sous conditions de licence.'}
                      </p>
                    </div>

                    {inst.whitelist && (
                      <Link href="/metiers" className="btn-primary mt-4 text-center">
                        Voir les métiers
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
