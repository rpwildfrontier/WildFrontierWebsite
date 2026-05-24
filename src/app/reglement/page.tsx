import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Règlement',
  description: 'Règlement complet de Wild Frontier RP — Principes de conception inviolables, règles de jeu et code de conduite.',
}

const sections = [
  {
    id: 'principes',
    title: 'Principes de conception inviolables',
    label: 'R1 — R10',
    rules: [
      { code: 'R1',  title: 'Aucun shop menu classique',      text: 'Toute transaction commerciale requiert un joueur en rôle de vendeur, physiquement présent, avec un stock réel qui se vide.' },
      { code: 'R2',  title: 'Aucun PNJ substituable',         text: 'Les PNJ peuvent exister comme décor ou foule passive. Ils ne peuvent pas remplir un rôle de médecin, juge, banquier, ou toute fonction centrale.' },
      { code: 'R3',  title: 'Aucune notification HUD moderne',text: 'Zéro notification flottante pour des événements RP. Les informations s\'obtiennent in-world : parler à quelqu\'un, lire un document, entendre une criée.' },
      { code: 'R4',  title: 'Aucun gain sans acte',           text: 'Tout argent, objet ou statut doit découler d\'une action physique effectuée par un joueur. Pas de revenu passif, pas de salaire automatique, pas de loot magique.' },
      { code: 'R5',  title: 'Aucun respawn arcade',           text: 'La mort est conséquente. Le retour passe par une mécanique de coma, de prise en charge, ou de mort permanente selon le cadre RP validé par les joueurs impliqués.' },
      { code: 'R6',  title: 'Aucune justice automatique',     text: 'Aucun système de wanted automatique, d\'amende par script, ou de peine déclenchée par IA. Toute procédure judiciaire est menée par des joueurs en rôle.' },
      { code: 'R7',  title: 'Aucun blip de mission',          text: 'La carte n\'affiche pas de marqueurs de quête, d\'objectifs ou de destinations automatiques. Les joueurs trouvent leur chemin par l\'information sociale.' },
      { code: 'R8',  title: 'HUD minimal et diegetic',        text: 'Les informations de santé, faim, fatigue ne s\'affichent pas en permanence. Elles se lisent sur le comportement du personnage : démarche lente, tremblement, voix faible.' },
      { code: 'R9',  title: 'Toute trace est exploitable',    text: 'Chaque action importante génère un artefact RP : document, témoignage, indice physique, entrée de registre. Rien ne disparaît dans le vide.' },
      { code: 'R10', title: 'L\'absence se ressent',          text: 'Si le médecin est absent, les blessés souffrent et peuvent mourir. Si le juge est absent, les procès sont reportés. Le serveur ne compense jamais l\'absence par un automatisme.' },
    ],
  },
  {
    id: 'conduite',
    title: 'Code de conduite',
    label: 'C1 — C6',
    rules: [
      { code: 'C1', title: 'Priorité à l\'immersion',  text: 'Le roleplay prime sur tout. Les comportements hors personnage non indispensables sont à limiter. Restez dans votre personnage.' },
      { code: 'C2', title: 'Respect mutuel',           text: 'Le respect entre joueurs est obligatoire, en jeu et hors jeu. Toute forme de harcèlement, discrimination ou toxicité entraîne une exclusion immédiate.' },
      { code: 'C3', title: 'RP consenti',              text: 'Les scènes violentes ou de nature adulte requièrent l\'accord explicite de tous les joueurs impliqués. Le signal d\'arrêt est toujours respecté.' },
      { code: 'C4', title: 'Métagaming interdit',      text: 'Il est interdit d\'utiliser des informations obtenues hors RP (Discord, stream, etc.) pour orienter les actions de son personnage en jeu.' },
      { code: 'C5', title: 'Powergaming interdit',     text: 'Il est interdit de forcer le résultat d\'une interaction RP, d\'ignorer les conséquences réalistes d\'une action, ou de se comporter de manière physiquement impossible.' },
      { code: 'C6', title: 'Valeur de la vie',         text: 'Votre personnage valorise sa vie et celle des autres. Les actes violents sont des derniers recours. Tout acte doit avoir une motivation RP crédible.' },
    ],
  },
  {
    id: 'candidature',
    title: 'Règles de candidature',
    label: 'D1 — D6',
    rules: [
      { code: 'D1', title: 'Discord obligatoire',       text: 'Aucun dossier sans compte Discord lié et actif. C\'est le canal principal de communication avec le staff.' },
      { code: 'D2', title: 'Steam obligatoire',         text: 'Aucun dossier sans compte Steam lié avec RedDeadRedemption II. La liaison est vérifiée avant soumission.' },
      { code: 'D3', title: 'CFX.re obligatoire',        text: 'Aucun dossier sans compte CFX.re (RedM) lié. Ces informations permettent de vérifier l\'identité et les antécédents.' },
      { code: 'D4', title: 'Dossier complet',           text: 'Le dossier incomplet est automatiquement bloqué. Les informations de liaison sont vérifiées avant soumission. Aucune dérogation n\'est possible.' },
      { code: 'D5', title: 'Un seul dossier actif',     text: 'Chaque identité ne peut avoir qu\'un seul dossier de candidature actif à la fois. Les doublons sont détectés et supprimés.' },
      { code: 'D6', title: 'Traitement humain',         text: 'Chaque candidature est examinée individuellement par un membre du staff. La qualité du dossier est déterminante.' },
    ],
  },
]

export default function ReglementPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="page-hero"
        style={{ background: 'linear-gradient(170deg, var(--parchment-dark) 0%, var(--parchment) 60%)', borderBottom: '2px solid var(--border)' }}
      >
        <div className="container-narrow text-center">
          <div className="label-display mb-4" style={{ color: 'var(--ink-20)', letterSpacing: '0.25em' }}>
            Textes officiels
          </div>
          <h1 className="display-heading mb-5" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
            Règlement
          </h1>
          <p className="body-text mx-auto" style={{ maxWidth: '36rem' }}>
            Le règlement de Wild Frontier RP est le socle sur lequel repose l&apos;expérience de jeu.
            Ces règles ne sont pas des guidelines — ce sont des contraintes absolues.
          </p>
        </div>
      </section>

      {/* Navigation rapide */}
      <section className="py-6" style={{ borderBottom: '1px solid var(--border-light)', backgroundColor: 'var(--parchment-100)' }}>
        <div className="container-narrow flex flex-wrap gap-3 justify-center">
          {sections.map(s => (
            <a key={s.id} href={`#${s.id}`} className="btn-secondary" style={{ fontSize: '0.62rem', padding: '8px 20px' }}>
              {s.title}
            </a>
          ))}
        </div>
      </section>

      {/* Sections */}
      <div className="py-20 md:py-28">
        <div className="container-narrow space-y-24">
          {sections.map(section => (
            <section key={section.id} id={section.id}>
              {/* En-tête de section */}
              <div
                className="pb-5 mb-10"
                style={{ borderBottom: '3px double var(--border)' }}
              >
                <div className="label-display mb-2" style={{ color: 'var(--ink-20)' }}>{section.label}</div>
                <h2 className="section-heading" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
                  {section.title}
                </h2>
              </div>

              <div className="space-y-4">
                {section.rules.map(rule => (
                  <div key={rule.code} className="accent-card flex gap-5">
                    <div
                      className="official-seal flex-shrink-0 label-display"
                      style={{ width: '52px', height: '52px', color: 'var(--rust)', borderColor: 'var(--rust)', fontSize: '0.6rem', letterSpacing: '0.05em' }}
                    >
                      {rule.code}
                    </div>
                    <div>
                      <h3 className="section-heading mb-1.5" style={{ fontSize: '1.05rem' }}>{rule.title}</h3>
                      <p className="body-text" style={{ fontSize: '0.95rem' }}>{rule.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Avertissement */}
      <section
        className="py-14 text-center"
        style={{ backgroundColor: 'var(--parchment-dark)', borderTop: '2px solid var(--border)' }}
      >
        <div className="container-narrow">
          <div className="stamp stamp-refused inline-block mb-6">
            Avertissement officiel
          </div>
          <p className="body-text mx-auto" style={{ maxWidth: '36rem' }}>
            Tout manquement grave au règlement entraîne une exclusion définitive sans préavis.
            Le staff se réserve le droit de statuer sur tout cas non prévu dans l&apos;esprit de la charte fondatrice.
          </p>
        </div>
      </section>
    </>
  )
}
