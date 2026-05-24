import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Règlement',
  description: 'Règlement complet de Wild Frontier RP — Principes de conception inviolables, règles de jeu et code de conduite.',
}

const sections = [
  {
    id: 'principes',
    title: 'Principes de conception inviolables',
    icon: '⚖',
    rules: [
      {
        code: 'R1',
        title: 'Aucun shop menu classique',
        text: 'Toute transaction commerciale requiert un joueur en rôle de vendeur, physiquement présent, avec un stock réel qui se vide.',
      },
      {
        code: 'R2',
        title: 'Aucun PNJ substituable',
        text: 'Les PNJ peuvent exister comme décor ou foule passive. Ils ne peuvent pas remplir un rôle de médecin, juge, banquier, ou toute fonction centrale.',
      },
      {
        code: 'R3',
        title: 'Aucune notification HUD moderne',
        text: 'Zéro notification flottante pour des événements RP. Les informations s\'obtiennent in-world : parler à quelqu\'un, lire un document, entendre une criée.',
      },
      {
        code: 'R4',
        title: 'Aucun gain sans acte',
        text: 'Tout argent, objet ou statut doit découler d\'une action physique effectuée par un joueur. Pas de revenu passif, pas de salaire automatique, pas de loot magique.',
      },
      {
        code: 'R5',
        title: 'Aucun respawn arcade',
        text: 'La mort est conséquente. Le retour passe par une mécanique de coma, de prise en charge, ou de mort permanente selon le cadre RP validé par les joueurs impliqués.',
      },
      {
        code: 'R6',
        title: 'Aucune justice automatique',
        text: 'Aucun système de wanted automatique, d\'amende par script, ou de peine déclenchée par IA. Toute procédure judiciaire est menée par des joueurs en rôle.',
      },
      {
        code: 'R7',
        title: 'Aucun blip de mission',
        text: 'La carte n\'affiche pas de marqueurs de quête, d\'objectifs ou de destinations automatiques. Les joueurs trouvent leur chemin par l\'information sociale.',
      },
      {
        code: 'R8',
        title: 'HUD minimal et diegetic',
        text: 'Les informations de santé, faim, fatigue ne s\'affichent pas en permanence. Elles se lisent sur le comportement du personnage : démarche lente, tremblement, voix faible.',
      },
      {
        code: 'R9',
        title: 'Toute trace est exploitable',
        text: 'Chaque action importante génère un artefact RP : document, témoignage, indice physique, entrée de registre. Rien ne disparaît dans le vide.',
      },
      {
        code: 'R10',
        title: 'L\'absence se ressent',
        text: 'Si le médecin est absent, les blessés souffrent et peuvent mourir. Si le juge est absent, les procès sont reportés. Le serveur ne compense jamais l\'absence par un automatisme.',
      },
    ],
  },
  {
    id: 'conduite',
    title: 'Code de conduite',
    icon: '📜',
    rules: [
      {
        code: 'C1',
        title: 'Priorité à l\'immersion',
        text: 'Le roleplay prime sur tout. Les comportements OOC (hors personnage) non indispensables sont à limiter au maximum. Restez dans votre personnage.',
      },
      {
        code: 'C2',
        title: 'Respect mutuel',
        text: 'Le respect entre joueurs est obligatoire, en jeu et hors jeu. Toute forme de harcèlement, discrimination ou toxicité entraîne une exclusion immédiate.',
      },
      {
        code: 'C3',
        title: 'RP consenti',
        text: 'Les scènes violentes, de torture ou de nature adulte requièrent l\'accord explicite de tous les joueurs impliqués. Le signal d\'arrêt est toujours respecté.',
      },
      {
        code: 'C4',
        title: 'Métagaming interdit',
        text: 'Il est interdit d\'utiliser des informations obtenues hors RP (Discord, stream, etc.) pour orienter les actions de son personnage en jeu.',
      },
      {
        code: 'C5',
        title: 'Powergaming interdit',
        text: 'Il est interdit de forcer le résultat d\'une interaction RP, d\'ignorer les conséquences réalistes d\'une action, ou de se comporter de manière physiquement impossible.',
      },
      {
        code: 'C6',
        title: 'Valeur de la vie',
        text: 'Votre personnage valorise sa vie et celle des autres. Les actes violents sont des derniers recours, pas des premières réponses. Tout acte doit avoir une motivation RP crédible.',
      },
    ],
  },
  {
    id: 'candidature',
    title: 'Règles de candidature',
    icon: '📋',
    rules: [
      {
        code: 'C1',
        title: 'Discord obligatoire',
        text: 'Aucun dossier sans compte Discord lié et actif. C\'est le canal principal de communication avec le staff.',
      },
      {
        code: 'C2',
        title: 'Steam obligatoire',
        text: 'Aucun dossier sans compte Steam lié avec RedDeadRedemption II. La liaison est vérifiée avant soumission.',
      },
      {
        code: 'C3',
        title: 'CFX.re obligatoire',
        text: 'Aucun dossier sans compte CFX.re (FiveM/RedM) lié. Ces informations permettent de vérifier l\'identité et les antécédents.',
      },
      {
        code: 'C4',
        title: 'Dossier complet',
        text: 'Le dossier incomplet est automatiquement bloqué. Les informations de liaison sont vérifiées avant soumission. Aucune dérogation n\'est possible.',
      },
      {
        code: 'C5',
        title: 'Un seul dossier actif',
        text: 'Chaque identité ne peut avoir qu\'un seul dossier de candidature actif à la fois. Les doublons sont détectés et supprimés.',
      },
      {
        code: 'C6',
        title: 'Traitement humain',
        text: 'Chaque candidature est examinée individuellement par un membre du staff. La décision peut prendre plusieurs jours. La qualité du dossier est déterminante.',
      },
    ],
  },
]

export default function ReglementPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="page-hero"
        style={{ background: 'linear-gradient(160deg, #ddc88e 0%, #f0e6c8 60%)' }}
      >
        <div className="container-narrow relative text-center">
          <div className="display-text text-xs uppercase tracking-[0.3em] mb-3" style={{ color: 'var(--color-sepia)' }}>
            — Textes officiels —
          </div>
          <h1 className="heading-display mb-4">Règlement</h1>
          <p className="body-text max-w-2xl mx-auto">
            Le règlement de Wild Frontier RP est le socle sur lequel repose l&apos;expérience de jeu.
            Ces règles ne sont pas des guidelines — ce sont des contraintes absolues.
          </p>
        </div>
      </section>

      {/* Navigation des sections */}
      <section className="py-8" style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div className="container-narrow">
          <div className="flex flex-wrap gap-4 justify-center">
            {sections.map(s => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="btn-secondary text-sm"
              >
                {s.icon} {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Sections de règles */}
      <div className="py-16 md:py-20">
        <div className="container-narrow space-y-20">
          {sections.map(section => (
            <section key={section.id} id={section.id}>
              <div className="flex items-center gap-4 mb-8">
                <span style={{ fontSize: '2rem' }}>{section.icon}</span>
                <h2 className="heading-section">{section.title}</h2>
              </div>
              <div className="divider-ornament mb-8"><span className="divider-ornament-icon">✦</span></div>

              <div className="space-y-4">
                {section.rules.map(rule => (
                  <div key={rule.code} className="parchment-card flex gap-4">
                    <div
                      className="official-seal flex-shrink-0 w-12 h-12 display-text text-sm font-bold"
                      style={{ color: 'var(--color-rust)', borderColor: 'var(--color-rust)' }}
                    >
                      {rule.code}
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-lg mb-1" style={{ color: 'var(--color-ink)' }}>
                        {rule.title}
                      </h3>
                      <p className="body-text">{rule.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Avertissement */}
      <section className="py-12" style={{ backgroundColor: 'var(--color-parchment-dark)', borderTop: '2px solid var(--color-border)' }}>
        <div className="container-narrow text-center">
          <div
            className="stamp stamp-refused inline-block mb-6"
            style={{ fontSize: '1rem', letterSpacing: '0.15em' }}
          >
            ⚠ Avertissement officiel
          </div>
          <p className="body-text max-w-2xl mx-auto">
            Tout manquement grave au règlement entraîne une exclusion définitive sans préavis.
            Le staff de Wild Frontier RP se réserve le droit de statuer sur tout cas non prévu par les règles
            dans l&apos;esprit de la charte fondatrice.
          </p>
        </div>
      </section>
    </>
  )
}
