import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Métiers Whitelist',
  description: 'Les métiers whitelistés de Wild Frontier RP — Shérif, Médecin, Notaire, Juge, Banquier et plus.',
}

const metiers = [
  {
    id: 'sherif',
    icon: '🔫',
    name: 'Shérif & Adjoint',
    category: 'Forces de l\'ordre',
    description:
      'Gardien de la loi dans le comté. Le shérif maintient l\'ordre public, conduit les arrestations, instruit les affaires criminelles et supervise les cellules. Un rôle à haute responsabilité qui nécessite jugement et rigueur.',
    outils: ['Menottes officielles', 'Mandats d\'arrêt', 'Badge d\'autorité', 'Clés des cellules', 'Registre d\'affaires', 'Armurerie du bureau'],
    obligations: ['Patrouilles régulières loggées', 'Rapport d\'incident par arrestation', 'Responsabilité des prisonniers', 'Neutralité et impartialité'],
    prerequis: ['Dossier de candidature détaillé', 'Entretien RP avec le conseil', 'Période d\'observation', 'Validation staff'],
    duree: '2-4 semaines',
  },
  {
    id: 'medecin',
    icon: '🏥',
    name: 'Médecin',
    category: 'Santé & Soins',
    description:
      'Le médecin est la clé de voûte de la survie dans le comté. Sans lui, les blessés n\'ont aucune chance. Il diagnostique par examen physique, prescrit des traitements, et peut déclarer la mort. Sa présence est vitale.',
    outils: ['Kit médical complet', 'Ordonnances officielles', 'Médicaments régulés', 'Dossiers médicaux', 'Certificats de décès', 'Matériel chirurgical'],
    obligations: ['Soins obligatoires en urgence vitale', 'Journal de consultations', 'Responsabilité des erreurs médicales', 'Confidentialité du dossier patient'],
    prerequis: ['Connaissance des mécaniques médicales', 'Entretien RP avec les institutions', 'Formation encadrée', 'Validation staff'],
    duree: '2-3 semaines',
  },
  {
    id: 'notaire',
    icon: '📋',
    name: 'Notaire',
    category: 'Droit civil',
    description:
      'Gardien de la légalité civile, le notaire authentifie les actes, enregistre les propriétés, célèbre les mariages et valide les testaments. Son sceau est la garantie de la légitimité d\'un document.',
    outils: ['Sceau notarial officiel', 'Archives foncières', 'Registre des actes', 'Formulaires officiels'],
    obligations: ['Neutralité professionnelle absolue', 'Conservation des archives', 'Refus de tout acte illégal', 'Traçabilité de chaque document'],
    prerequis: ['Maîtrise de l\'écrit RP', 'Connaissance du droit du serveur', 'Entretien institutionnel', 'Validation staff'],
    duree: '2-3 semaines',
  },
  {
    id: 'juge',
    icon: '⚖',
    name: 'Juge',
    category: 'Justice',
    description:
      'Le juge préside les procès du comté. Il dirige les audiences, entend les témoignages, délibère et prononce les verdicts. Un rôle qui requiert impartialité absolue et connaissance du droit.',
    outils: ['Marteau de juge', 'Salle d\'audience dédiée', 'Registre des jugements', 'Mandats judiciaires'],
    obligations: ['Impartialité requise', 'Motivation des verdicts consignée', 'Respect de la procédure', 'Disponibilité pour les audiences'],
    prerequis: ['Expérience de jeu significative', 'Connaissance approfondie du règlement', 'Recommandation institutionnelle', 'Validation staff'],
    duree: '3-6 semaines',
  },
  {
    id: 'banquier',
    icon: '🏦',
    name: 'Banquier',
    category: 'Finance',
    description:
      'L\'institution financière du comté repose entièrement sur le banquier joueur. Il gère les comptes, accorde les prêts, organise les coffres et assure la sécurité des dépôts. Sans lui, pas d\'économie stable.',
    outils: ['Accès aux coffres', 'Registre des comptes', 'Contrats de prêt', 'Extraits de compte officiels'],
    obligations: ['Confidentialité des comptes', 'Traçabilité de toutes les opérations', 'Neutralité avec les clients', 'Sécurité des fonds'],
    prerequis: ['Compréhension de l\'économie RP', 'Antécédents de jeu propres', 'Entretien avec le conseil', 'Validation staff'],
    duree: '2-3 semaines',
  },
  {
    id: 'telegraphiste',
    icon: '⚡',
    name: 'Télégraphiste',
    category: 'Communication',
    description:
      'Opérateur du bureau télégraphique, il assure la transmission des messages longue distance. Seul moyen de communication rapide entre les villes, son rôle est stratégique pour l\'information du comté.',
    outils: ['Bureau télégraphique', 'Registre des transmissions', 'Tarification officielle'],
    obligations: ['Confidentialité des messages personnels', 'Disponibilité horaire', 'Transmission neutre et fidèle'],
    prerequis: ['Présence régulière', 'Sens du service', 'Validation staff'],
    duree: '1-2 semaines',
  },
]

const processusCandidature = [
  { step: '1', title: 'Candidature écrite', desc: 'Déposez un dossier de candidature détaillé sur le site. Motivations, background RP, disponibilités.' },
  { step: '2', title: 'Examen du dossier', desc: 'Le staff examine votre candidature et évalue sa qualité et sa cohérence avec la philosophie du serveur.' },
  { step: '3', title: 'Entretien RP', desc: 'Si retenu, vous rencontrez les institutions existantes en jeu pour un entretien de role-play.' },
  { step: '4', title: 'Période d\'apprentissage', desc: 'Sous la supervision d\'un mentor, vous apprenez les mécaniques et les protocoles du métier.' },
  { step: '5', title: 'Validation & licence', desc: 'Le staff valide votre maîtrise. Vous recevez votre licence professionnelle in-game.' },
]

export default function MetiersPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="page-hero"
        style={{ background: 'linear-gradient(160deg, #ddc88e 0%, #f0e6c8 60%)' }}
      >
        <div className="container-narrow relative text-center">
          <div className="display-text text-xs uppercase tracking-[0.3em] mb-3" style={{ color: 'var(--color-sepia)' }}>
            — Rôles à accès restreint —
          </div>
          <h1 className="heading-display mb-4">Métiers Whitelist</h1>
          <p className="body-text max-w-2xl mx-auto">
            Ces métiers requièrent une validation staff et une formation in-game.
            Ils donnent accès à des outils exclusifs mais imposent des responsabilités réelles envers la communauté.
          </p>
        </div>
      </section>

      {/* Processus */}
      <section className="py-16" style={{ borderBottom: '2px solid var(--color-border)' }}>
        <div className="container-narrow">
          <h2 className="heading-section text-center mb-10">Processus de Candidature</h2>
          <div className="relative">
            <div
              className="absolute left-6 top-0 bottom-0 w-px hidden md:block"
              style={{ backgroundColor: 'var(--color-border)' }}
            />
            <div className="space-y-6">
              {processusCandidature.map(step => (
                <div key={step.step} className="flex gap-6 items-start">
                  <div
                    className="official-seal w-12 h-12 flex-shrink-0 font-serif font-bold text-lg"
                    style={{ color: 'var(--color-rust)', borderColor: 'var(--color-rust)' }}
                  >
                    {step.step}
                  </div>
                  <div className="parchment-card flex-1">
                    <h3 className="font-serif font-bold text-lg mb-1" style={{ color: 'var(--color-ink)' }}>
                      {step.title}
                    </h3>
                    <p className="body-text">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fiches métiers */}
      <section className="py-16 md:py-20">
        <div className="container-wide space-y-8">
          {metiers.map(metier => (
            <div key={metier.id} id={metier.id} className="document-panel">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-start gap-4 mb-4">
                    <span style={{ fontSize: '2.5rem' }}>{metier.icon}</span>
                    <div>
                      <div className="display-text text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--color-gold)' }}>
                        {metier.category}
                      </div>
                      <h2 className="font-serif font-bold text-2xl" style={{ color: 'var(--color-ink)' }}>
                        {metier.name}
                      </h2>
                    </div>
                  </div>

                  <p className="body-text mb-6">{metier.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <div className="display-text text-xs uppercase tracking-wider mb-3" style={{ color: 'var(--color-sepia)' }}>
                        Outils exclusifs
                      </div>
                      <ul className="space-y-1">
                        {metier.outils.map(outil => (
                          <li key={outil} className="flex items-start gap-2 body-text text-sm">
                            <span style={{ color: 'var(--color-gold)', flexShrink: 0 }}>✦</span> {outil}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="display-text text-xs uppercase tracking-wider mb-3" style={{ color: 'var(--color-sepia)' }}>
                        Obligations
                      </div>
                      <ul className="space-y-1">
                        {metier.obligations.map(obli => (
                          <li key={obli} className="flex items-start gap-2 body-text text-sm">
                            <span style={{ color: 'var(--color-rust)', flexShrink: 0 }}>→</span> {obli}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="parchment-card">
                    <div className="display-text text-xs uppercase tracking-wider mb-3" style={{ color: 'var(--color-sepia)' }}>
                      Prérequis
                    </div>
                    <ul className="space-y-2">
                      {metier.prerequis.map(pre => (
                        <li key={pre} className="flex items-start gap-2 body-text text-sm">
                          <span style={{ color: 'var(--color-gold)', flexShrink: 0 }}>✓</span> {pre}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className="p-4 text-center"
                    style={{ border: '1px solid var(--color-border)', backgroundColor: 'rgba(240, 230, 200, 0.5)' }}
                  >
                    <div className="display-text text-xs uppercase tracking-wider mb-1" style={{ color: 'var(--color-sepia)' }}>
                      Durée de formation
                    </div>
                    <div className="font-serif font-bold text-lg" style={{ color: 'var(--color-ink)' }}>
                      {metier.duree}
                    </div>
                  </div>

                  <Link href="/candidatures" className="btn-primary w-full text-center block">
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
