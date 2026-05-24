import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Métiers Whitelist',
  description: 'Les métiers whitelistés de Wild Frontier RP — Shérif, Médecin, Notaire, Juge, Banquier et plus.',
}

const metiers = [
  {
    n: 'I',
    initial: 'S',
    name: 'Shérif & Adjoint',
    category: 'Forces de l\'ordre',
    description: 'Gardien de la loi dans le comté. Le shérif maintient l\'ordre public, conduit les arrestations, instruit les affaires criminelles et supervise les cellules. Un rôle à haute responsabilité qui nécessite jugement et rigueur.',
    outils: ['Menottes officielles', 'Mandats d\'arrêt', 'Badge d\'autorité', 'Clés des cellules', 'Registre d\'affaires', 'Armurerie du bureau'],
    obligations: ['Patrouilles régulières loggées', 'Rapport d\'incident par arrestation', 'Responsabilité des prisonniers', 'Neutralité et impartialité'],
    prerequis: ['Dossier de candidature détaillé', 'Entretien RP avec le conseil', 'Période d\'observation', 'Validation staff'],
    duree: '2 – 4 semaines',
  },
  {
    n: 'II',
    initial: 'M',
    name: 'Médecin',
    category: 'Santé & Soins',
    description: 'Le médecin est la clé de voûte de la survie dans le comté. Sans lui, les blessés n\'ont aucune chance. Il diagnostique par examen physique, prescrit des traitements, et peut déclarer la mort. Sa présence est vitale.',
    outils: ['Kit médical complet', 'Ordonnances officielles', 'Médicaments régulés', 'Dossiers médicaux', 'Certificats de décès', 'Matériel chirurgical'],
    obligations: ['Soins obligatoires en urgence vitale', 'Journal de consultations', 'Responsabilité des erreurs médicales', 'Confidentialité du dossier patient'],
    prerequis: ['Connaissance des mécaniques médicales', 'Entretien RP avec les institutions', 'Formation encadrée', 'Validation staff'],
    duree: '2 – 3 semaines',
  },
  {
    n: 'III',
    initial: 'N',
    name: 'Notaire',
    category: 'Droit civil',
    description: 'Gardien de la légalité civile, le notaire authentifie les actes, enregistre les propriétés, célèbre les mariages et valide les testaments. Son sceau est la garantie de la légitimité d\'un document.',
    outils: ['Sceau notarial officiel', 'Archives foncières', 'Registre des actes', 'Formulaires officiels'],
    obligations: ['Neutralité professionnelle absolue', 'Conservation des archives', 'Refus de tout acte illégal', 'Traçabilité de chaque document'],
    prerequis: ['Maîtrise de l\'écrit RP', 'Connaissance du droit du serveur', 'Entretien institutionnel', 'Validation staff'],
    duree: '2 – 3 semaines',
  },
  {
    n: 'IV',
    initial: 'J',
    name: 'Juge',
    category: 'Justice',
    description: 'Le juge préside les procès du comté. Il dirige les audiences, entend les témoignages, délibère et prononce les verdicts. Un rôle qui requiert impartialité absolue et connaissance du droit.',
    outils: ['Marteau de juge', 'Salle d\'audience dédiée', 'Registre des jugements', 'Mandats judiciaires'],
    obligations: ['Impartialité requise', 'Motivation des verdicts consignée', 'Respect de la procédure', 'Disponibilité pour les audiences'],
    prerequis: ['Expérience de jeu significative', 'Connaissance approfondie du règlement', 'Recommandation institutionnelle', 'Validation staff'],
    duree: '3 – 6 semaines',
  },
  {
    n: 'V',
    initial: 'B',
    name: 'Banquier',
    category: 'Finance',
    description: 'L\'institution financière du comté repose entièrement sur le banquier joueur. Il gère les comptes, accorde les prêts, organise les coffres et assure la sécurité des dépôts. Sans lui, pas d\'économie stable.',
    outils: ['Accès aux coffres', 'Registre des comptes', 'Contrats de prêt', 'Extraits de compte officiels'],
    obligations: ['Confidentialité des comptes', 'Traçabilité de toutes les opérations', 'Neutralité avec les clients', 'Sécurité des fonds'],
    prerequis: ['Compréhension de l\'économie RP', 'Antécédents de jeu propres', 'Entretien avec le conseil', 'Validation staff'],
    duree: '2 – 3 semaines',
  },
  {
    n: 'VI',
    initial: 'T',
    name: 'Télégraphiste',
    category: 'Communication',
    description: 'Opérateur du bureau télégraphique, il assure la transmission des messages longue distance. Seul moyen de communication rapide entre les villes, son rôle est stratégique pour l\'information du comté.',
    outils: ['Bureau télégraphique', 'Registre des transmissions', 'Tarification officielle'],
    obligations: ['Confidentialité des messages personnels', 'Disponibilité horaire', 'Transmission neutre et fidèle'],
    prerequis: ['Présence régulière', 'Sens du service', 'Validation staff'],
    duree: '1 – 2 semaines',
  },
]

const processusCandidature = [
  { n: '1', title: 'Candidature écrite', desc: 'Déposez un dossier de candidature détaillé sur le site. Motivations, background RP, disponibilités.' },
  { n: '2', title: 'Examen du dossier', desc: 'Le staff examine votre candidature et évalue sa cohérence avec la philosophie du serveur.' },
  { n: '3', title: 'Entretien RP', desc: 'Si retenu, vous rencontrez les institutions existantes en jeu pour un entretien de roleplay.' },
  { n: '4', title: 'Période d\'apprentissage', desc: 'Sous la supervision d\'un mentor, vous apprenez les mécaniques et protocoles du métier.' },
  { n: '5', title: 'Validation & licence', desc: 'Le staff valide votre maîtrise. Vous recevez votre licence professionnelle in-game.' },
]

export default function MetiersPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="page-hero"
        style={{ background: 'linear-gradient(170deg, var(--parchment-dark) 0%, var(--parchment) 60%)', borderBottom: '2px solid var(--border)' }}
      >
        <div className="container-narrow text-center">
          <div className="label-display mb-4" style={{ color: 'var(--ink-20)', letterSpacing: '0.25em' }}>
            Rôles à accès restreint
          </div>
          <h1 className="display-heading mb-5" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
            Métiers Whitelist
          </h1>
          <p className="body-text mx-auto" style={{ maxWidth: '36rem' }}>
            Ces métiers requièrent une validation staff et une formation in-game.
            Ils donnent accès à des outils exclusifs mais imposent des responsabilités réelles envers la communauté.
          </p>
        </div>
      </section>

      {/* Processus */}
      <section className="py-20" style={{ borderBottom: '2px solid var(--border)' }}>
        <div className="container-narrow">
          <div className="text-center mb-12">
            <div className="label-display mb-3" style={{ color: 'var(--ink-20)' }}>Accès aux rôles</div>
            <h2 className="section-heading" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>Processus de Candidature</h2>
          </div>
          <div className="space-y-4">
            {processusCandidature.map(step => (
              <div key={step.n} className="accent-card flex gap-6 items-start">
                <div className="official-seal flex-shrink-0" style={{ width: '44px', height: '44px', fontSize: '1rem', fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--rust)', borderColor: 'var(--rust)' }}>
                  {step.n}
                </div>
                <div>
                  <h3 className="section-heading mb-1" style={{ fontSize: '1.05rem' }}>{step.title}</h3>
                  <p className="body-text" style={{ fontSize: '0.9rem' }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fiches métiers */}
      <section className="py-20 md:py-28">
        <div className="container-wide space-y-8">
          {metiers.map(metier => (
            <div key={metier.name} className="document-panel">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-start gap-5 mb-5">
                    <div className="monogram monogram-lg flex-shrink-0">{metier.initial}</div>
                    <div>
                      <div className="label-display mb-1" style={{ color: 'var(--gold)' }}>{metier.category}</div>
                      <h2 className="section-heading" style={{ fontSize: '1.5rem' }}>{metier.name}</h2>
                    </div>
                  </div>
                  <p className="body-text mb-6">{metier.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <div className="label-display mb-3" style={{ color: 'var(--ink-20)' }}>Outils exclusifs</div>
                      <ul className="space-y-1.5">
                        {metier.outils.map(o => (
                          <li key={o} className="flex items-start gap-2 body-text" style={{ fontSize: '0.88rem' }}>
                            <span style={{ color: 'var(--gold)', flexShrink: 0 }}>◆</span> {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="label-display mb-3" style={{ color: 'var(--ink-20)' }}>Obligations</div>
                      <ul className="space-y-1.5">
                        {metier.obligations.map(o => (
                          <li key={o} className="flex items-start gap-2 body-text" style={{ fontSize: '0.88rem' }}>
                            <span style={{ color: 'var(--rust)', flexShrink: 0 }}>→</span> {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="parchment-card" style={{ backgroundColor: 'var(--parchment-50)' }}>
                    <div className="label-display mb-3" style={{ color: 'var(--ink-20)' }}>Prérequis</div>
                    <ul className="space-y-2">
                      {metier.prerequis.map(p => (
                        <li key={p} className="flex items-start gap-2 body-text" style={{ fontSize: '0.88rem' }}>
                          <span style={{ color: 'var(--gold)', fontFamily: 'var(--font-serif)', flexShrink: 0 }}>&checkmark;</span> {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className="text-center px-4 py-4"
                    style={{ border: '1px solid var(--border-light)', backgroundColor: 'rgba(253,249,240,0.5)' }}
                  >
                    <div className="label-display mb-1" style={{ color: 'var(--ink-20)' }}>Durée de formation</div>
                    <div className="section-heading" style={{ fontSize: '1.1rem' }}>{metier.duree}</div>
                  </div>
                  <Link href="/candidatures" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Candidater à ce rôle
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
