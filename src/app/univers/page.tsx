import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Univers & Lore',
  description: 'Automne 1886 — Wild Frontier RP. L\'Amérique prétend avoir gagné l\'Ouest. Mais au nord des montagnes, la réalité est différente.',
}

const piliers = [
  {
    n: 'I',
    title: 'Le Temps',
    subtitle: 'Le temps a de la valeur.',
    text: 'Les distances sont longues. Les soins prennent du temps. Les enquêtes durent des semaines. Les hivers ralentissent toute activité. Le serveur donne l\'impression d\'un monde immense, lourd, réaliste.',
  },
  {
    n: 'II',
    title: 'La Mémoire',
    subtitle: 'Le monde se souvient.',
    text: 'Les habitants parlent. Les journaux écrivent. Les familles transmettent. Les dettes persistent. Un homme peut survivre à une balle. Rarement à sa réputation.',
  },
  {
    n: 'III',
    title: 'La Nature',
    subtitle: 'La nature domine l\'Homme.',
    text: 'Les montagnes ne sont pas un décor. Les forêts ne sont pas vides. Les tempêtes peuvent tuer davantage que les gangs. La Frontière reste sauvage.',
  },
  {
    n: 'IV',
    title: 'La Fragilité Humaine',
    subtitle: 'Les personnages ne sont pas des héros.',
    text: 'Ils tombent malades. Ils vieillissent. Ils souffrent. Ils ont peur. Les blessures ont des conséquences. Les morts doivent avoir un poids émotionnel réel.',
  },
  {
    n: 'V',
    title: 'Les Relations Humaines',
    subtitle: 'L\'économie, la politique et la survie reposent sur les liens entre hommes.',
    text: 'La confiance, la peur, la dette, l\'honneur, la réputation — le véritable pouvoir vient des relations humaines. Pas des mécaniques. Pas des scripts.',
  },
]

const zones = [
  {
    name: 'Les Hautes Montagnes du Nord',
    danger: 'Extrême',
    desc: 'Inspirées des Rocheuses et du Montana. Cols dangereux, avalanches, lacs gelés, mines abandonnées. L\'hiver peut y durer huit mois.',
  },
  {
    name: 'Tall Pines',
    danger: 'Élevé',
    desc: 'Immense forêt boréale. Brouillard permanent, rivières profondes, ours et loups. Les habitants disent : "Tall Pines avale les hommes."',
  },
  {
    name: 'Les Grandes Plaines',
    danger: 'Modéré',
    desc: 'Territoires d\'élevage et de caravanes. Le vent souffle constamment. Les distances donnent l\'impression que le monde ne finit jamais.',
  },
  {
    name: 'Les Marais du Sud',
    danger: 'Élevé',
    desc: 'Zone humide et malsaine. Réputation de contrebande et de disparitions. Même les shérifs évitent certains secteurs après la tombée de la nuit.',
  },
]

const villes = [
  {
    name: 'Blackwater Crossing',
    type: 'Centre économique régional',
    desc: 'Banques, gare ferroviaire, journal, tribunal, hôtels luxueux. La corruption y est omniprésente. Les hommes les plus dangereux portent des gants propres et des costumes noirs.',
    ambiance: 'Pouvoir, argent, corruption',
  },
  {
    name: 'Ash Creek',
    type: 'Ville minière',
    desc: 'Née dans la boue. Odeur de charbon, de whisky, de sueur, de poudre noire. Bagarres quotidiennes. Les compagnies exploitent des centaines d\'ouvriers. L\'espérance de vie y est faible.',
    ambiance: 'Violence, labeur, désespoir',
  },
  {
    name: 'Pine Ridge',
    type: 'Ville forestière',
    desc: 'Chasseurs, trappeurs, bûcherons et survivants. Les habitants se méfient des étrangers. La disparition de voyageurs est fréquente. Les forêts gardent leurs secrets.',
    ambiance: 'Méfiance, isolement, mystère',
  },
  {
    name: 'Saint Mercy',
    type: 'Ville religieuse',
    desc: 'Fondée par des missionnaires. Atmosphère silencieuse, austère, étrange. Le cimetière y est immense. Les habitants disent : "Tout le monde finit à Saint Mercy."',
    ambiance: 'Foi, mort, silence',
  },
]

const saisons = [
  { name: 'Hiver', effets: ['Famine', 'Routes bloquées', 'Chasse difficile', 'Hypothermie'] },
  { name: 'Printemps', effets: ['Boue & crues', 'Maladies', 'Retour des cultures', 'Espoir'] },
  { name: 'Été', effets: ['Sécheresse', 'Incendies', 'Tensions pour l\'eau', 'Commerce actif'] },
  { name: 'Automne', effets: ['Commerce intense', 'Préparation hivernale', 'Migrations', 'Dernière récolte'] },
]

const chronologie = [
  { year: '1868', event: 'Premières expéditions minières dans la région.' },
  { year: '1870', event: 'Création des premiers camps permanents.' },
  { year: '1872', event: 'Découverte majeure d\'or dans les montagnes du nord. Tout change.' },
  { year: '1874', event: 'Arrivée massive de prospecteurs, aventuriers et hors-la-loi.' },
  { year: '1875', event: 'Premières tensions avec les nations natives pour les territoires.' },
  { year: '1877', event: 'Création des premières banques régionales.' },
  { year: '1878', event: 'Naissance des premiers gangs organisés.' },
  { year: '1880', event: 'Construction des premières lignes télégraphiques.' },
  { year: '1881', event: 'Grand hiver noir. Des centaines de morts. La région vacille.' },
  { year: '1882', event: 'Début des grands rachats de terres par les compagnies.' },
  { year: '1883', event: 'Arrivée des compagnies ferroviaires. Corruption et violence.' },
  { year: '1884', event: 'Explosion démographique régionale.' },
  { year: '1885', event: 'Création officielle du tribunal régional.' },
  { year: '1886', event: 'Début de l\'ère actuelle. Votre histoire commence ici.' },
]

const familles = [
  { nom: 'Les Whitmore', domaine: 'Banque & Finance',       rep: 'Contrôlent une partie des prêts régionaux. Puissants et discrets.' },
  { nom: 'Les Callahan', domaine: 'Élevage & Ranchs',       rep: 'Immense dynastie. Violents conflits fonciers. Loyautés achetées.' },
  { nom: 'Les Beaumont', domaine: 'Rail & Mines',            rep: 'Liés aux compagnies ferroviaires et minières. Ambitieux, impitoyables.' },
  { nom: 'Les Mercer',   domaine: 'Commerce des peaux',      rep: 'Anciens trappeurs devenus très riches. Réseau étendu dans les forêts.' },
]

const rumeurs = [
  'Une mine abandonnée contiendrait encore des tonnes d\'or non extraites.',
  'Un train fédéral transporte régulièrement des lingots — sans escorte suffisante.',
  'Un marshal disparu vivrait encore dans les montagnes, seul depuis des années.',
  'Une vallée entière est interdite par les nations natives — et personne n\'en revient.',
  'Un gang aurait enterré une fortune colossale quelque part dans Tall Pines.',
  'Une créature tuerait parfois des chasseurs isolés durant les nuits d\'hiver.',
]

export default function UniversPage() {
  return (
    <>
      {/* ══════════════════════ HERO ══════════════════════ */}
      <section
        className="relative py-24 md:py-36 overflow-hidden"
        style={{
          background: 'linear-gradient(170deg, var(--ink) 0%, var(--ink-80) 60%, #3d2000 100%)',
          borderBottom: '3px solid var(--gold)',
        }}
      >
        <div className="container-narrow relative text-center">
          <div
            className="label-display mb-6"
            style={{ color: 'var(--gold)', opacity: 0.5, letterSpacing: '0.35em' }}
          >
            Bible Narrative Officielle — Édition canonique
          </div>
          <h1
            className="display-heading mb-8"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', color: 'var(--parchment-50)' }}
          >
            L&apos;Univers
          </h1>
          <blockquote
            className="sub-heading mx-auto mb-8"
            style={{
              maxWidth: '34rem',
              fontSize: '1.2rem',
              color: 'rgba(240,228,204,0.65)',
              fontStyle: 'italic',
            }}
          >
            &ldquo;Le gouvernement appelle cela un territoire.<br />
            Les habitants appellent cela la Frontière.<br />
            La nature, elle, ne lui a jamais donné de nom.&rdquo;
          </blockquote>
          <div
            className="label-display"
            style={{ color: 'var(--gold)', opacity: 0.4, letterSpacing: '0.3em' }}
          >
            — Automne 1886 —
          </div>
        </div>
      </section>

      {/* ══════════════════════ PRÉFACE ══════════════════════ */}
      <section className="py-20 md:py-28">
        <div className="container-narrow">
          <div className="document-panel">
            <div className="label-display mb-5" style={{ color: 'var(--rust)', letterSpacing: '0.25em' }}>
              Préface narrative
            </div>
            <h2 className="section-heading mb-6" style={{ fontSize: '2rem' }}>
              Automne 1886.
            </h2>
            <p className="section-heading mb-6" style={{ color: 'var(--rust)', fontSize: '1.2rem', fontWeight: 700 }}>
              L&apos;Amérique prétend avoir gagné l&apos;Ouest.
            </p>
            <p className="body-text mb-5">
              Les journaux de la côte Est parlent de civilisation, de progrès, de modernité,
              d&apos;industrie, de croissance.
            </p>
            <p
              className="sub-heading mb-8"
              style={{ fontSize: '1.1rem', fontStyle: 'italic' }}
            >
              Mais au nord des montagnes… la réalité est différente.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-10">
              {[
                'Les routes disparaissent sous la neige.',
                'Les chevaux meurent de froid.',
                'Les villes brûlent encore entièrement en une nuit.',
                'Des régions entières n\'apparaissent sur aucune carte.',
                'La loi voyage à cheval.',
                'Les médecins amputent à la lampe à huile.',
                'Les lettres mettent des semaines.',
                'L\'hiver décide souvent qui survivra.',
              ].map(item => (
                <div key={item} className="flex items-start gap-2 body-text" style={{ fontSize: '0.95rem' }}>
                  <span style={{ color: 'var(--gold)', fontFamily: 'var(--font-serif)', marginTop: '2px', flexShrink: 0 }}>—</span>
                  {item}
                </div>
              ))}
            </div>

            <div
              className="pull-quote"
              style={{ borderLeftColor: 'var(--rust)' }}
            >
              <p>
                Wild Frontier n&apos;est pas un western héroïque.<br />
                C&apos;est un monde{' '}
                <em>lent, brutal, humain, sale, magnifique, impitoyable.</em>
              </p>
            </div>

            <p className="body-text mt-6 text-center italic">
              Chaque homme transporte son passé. Chaque famille cache des dettes.<br />
              Chaque ville repose sur un mensonge. <em>Et la Frontière observe tout.</em>
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════ LES CINQ PILIERS ══════════════════════ */}
      <section
        className="py-20 md:py-28"
        style={{
          backgroundColor: 'var(--parchment-dark)',
          borderTop: '2px solid var(--border)',
          borderBottom: '2px solid var(--border)',
        }}
      >
        <div className="container-narrow">
          <div className="text-center mb-14">
            <div className="label-display mb-3" style={{ color: 'var(--ink-20)' }}>
              Vision philosophique du monde
            </div>
            <h2 className="section-heading" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
              Les Cinq Piliers
            </h2>
          </div>

          <div className="space-y-5">
            {piliers.map(p => (
              <div key={p.n} className="accent-card flex gap-6">
                <div className="ornamental-number" style={{ minWidth: '2.5rem', paddingTop: '4px' }}>
                  {p.n}
                </div>
                <div>
                  <h3 className="section-heading mb-1" style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--rust)' }}>
                    {p.title}
                  </h3>
                  <p className="sub-heading mb-2" style={{ fontSize: '0.95rem' }}>{p.subtitle}</p>
                  <p className="body-text" style={{ fontSize: '0.95rem' }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ AMÉRIQUE 1886 ══════════════════════ */}
      <section className="py-20 md:py-28">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <div className="label-display mb-3" style={{ color: 'var(--ink-20)' }}>Contexte historique</div>
            <h2 className="section-heading" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
              L&apos;Amérique en 1886
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="document-panel">
              <div className="label-display mb-4" style={{ color: 'var(--ink-20)' }}>La Côte Est avance</div>
              <ul className="space-y-2">
                {['Les grandes villes industrielles explosent', 'Les usines tournent jour et nuit', 'Les immigrants affluent par milliers', 'Les banques s\'enrichissent', 'Le progrès s\'affiche en vitrine'].map(item => (
                  <li key={item} className="flex items-start gap-2 body-text" style={{ fontSize: '0.95rem' }}>
                    <span style={{ color: 'var(--gold)', flexShrink: 0 }}>→</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="document-panel" style={{ borderColor: 'var(--rust)' }}>
              <div className="label-display mb-4" style={{ color: 'var(--rust)', letterSpacing: '0.2em' }}>La Frontière résiste</div>
              <ul className="space-y-2">
                {['Les territoires restent instables', 'Les routes sont dangereuses', 'Les marshals fédéraux sont trop peu nombreux', 'Chaque kilomètre de rail provoque guerre et corruption', 'La Frontière refuse encore de mourir'].map(item => (
                  <li key={item} className="flex items-start gap-2 body-text" style={{ fontSize: '0.95rem' }}>
                    <span style={{ color: 'var(--rust)', flexShrink: 0 }}>→</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ GÉOGRAPHIE ══════════════════════ */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: 'var(--parchment-dark)', borderTop: '2px solid var(--border)', borderBottom: '2px solid var(--border)' }}
      >
        <div className="container-wide">
          <div className="text-center mb-14">
            <div className="label-display mb-3" style={{ color: 'var(--ink-20)' }}>Géographie canonique</div>
            <h2 className="section-heading" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>Le Territoire</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {zones.map(z => (
              <div key={z.name} className="document-panel">
                <div className="label-display mb-3" style={{ color: 'var(--rust)', letterSpacing: '0.18em' }}>
                  Danger : {z.danger}
                </div>
                <h3 className="section-heading mb-3" style={{ fontSize: '1rem', lineHeight: '1.25' }}>{z.name}</h3>
                <p className="body-text" style={{ fontSize: '0.9rem' }}>{z.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ VILLES ══════════════════════ */}
      <section className="py-20 md:py-28">
        <div className="container-wide">
          <div className="text-center mb-14">
            <div className="label-display mb-3" style={{ color: 'var(--ink-20)' }}>Les grandes villes</div>
            <h2 className="section-heading" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>Villes du Territoire</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {villes.map(v => (
              <div key={v.name} className="parchment-card">
                <div className="label-display mb-2" style={{ color: 'var(--gold)' }}>{v.type}</div>
                <h3 className="section-heading mb-3" style={{ fontSize: '1.4rem' }}>{v.name}</h3>
                <p className="body-text mb-4" style={{ fontSize: '0.95rem' }}>{v.desc}</p>
                <div
                  className="label-display px-3 py-2"
                  style={{
                    backgroundColor: 'rgba(139, 94, 60, 0.08)',
                    border: '1px solid var(--border-light)',
                    color: 'var(--ink-40)',
                    letterSpacing: '0.15em',
                  }}
                >
                  Ambiance : {v.ambiance}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ SAISONS ══════════════════════ */}
      <section
        className="py-20"
        style={{ backgroundColor: 'var(--parchment-dark)', borderTop: '2px solid var(--border)', borderBottom: '2px solid var(--border)' }}
      >
        <div className="container-narrow">
          <div className="text-center mb-12">
            <div className="label-display mb-3" style={{ color: 'var(--ink-20)' }}>Cycle naturel</div>
            <h2 className="section-heading" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>Climat & Saisons</h2>
            <p className="body-text mt-4 mx-auto" style={{ maxWidth: '36rem' }}>
              Dans Wild Frontier, la météo n&apos;est pas cosmétique. Elle conditionne l&apos;économie, les déplacements, les maladies et les conflits.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {saisons.map((s, i) => (
              <div key={s.name} className="document-panel text-center">
                <div
                  className="ornamental-number mb-3 block text-center"
                  style={{ color: 'var(--border-dark)' }}
                >
                  {['I', 'II', 'III', 'IV'][i]}
                </div>
                <h3 className="section-heading mb-4" style={{ fontSize: '1rem', letterSpacing: '0.05em' }}>
                  {s.name}
                </h3>
                <ul className="space-y-1">
                  {s.effets.map(e => (
                    <li key={e} className="body-text text-center" style={{ fontSize: '0.85rem' }}>{e}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ GRANDES FAMILLES ══════════════════════ */}
      <section className="py-20 md:py-28">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <div className="label-display mb-3" style={{ color: 'var(--ink-20)' }}>Registre des familles influentes</div>
            <h2 className="section-heading" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>Les Grandes Familles</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="rp-table">
              <thead>
                <tr>
                  <th>Famille</th>
                  <th>Domaine</th>
                  <th>Réputation</th>
                </tr>
              </thead>
              <tbody>
                {familles.map(f => (
                  <tr key={f.nom}>
                    <td style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--ink)' }}>
                      {f.nom}
                    </td>
                    <td><span className="badge badge-pending">{f.domaine}</span></td>
                    <td className="body-text" style={{ fontSize: '0.9rem' }}>{f.rep}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="body-text text-center mt-6 italic" style={{ color: 'var(--ink-40)' }}>
            Chaque famille possède : alliés, ennemis, secrets, dettes, cadavres cachés.
          </p>
        </div>
      </section>

      {/* ══════════════════════ CHRONOLOGIE ══════════════════════ */}
      <section
        className="py-20"
        style={{ backgroundColor: 'var(--parchment-dark)', borderTop: '2px solid var(--border)', borderBottom: '2px solid var(--border)' }}
      >
        <div className="container-narrow">
          <div className="text-center mb-14">
            <div className="label-display mb-3" style={{ color: 'var(--ink-20)' }}>Registre historique</div>
            <h2 className="section-heading" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>Chronologie</h2>
          </div>
          <div className="space-y-3">
            {chronologie.map(item => {
              const isCurrent = item.year === '1886'
              return (
                <div
                  key={item.year}
                  className="flex gap-6 items-baseline"
                  style={{
                    paddingBottom: '12px',
                    borderBottom: '1px solid var(--border-light)',
                  }}
                >
                  <div
                    className="label-display flex-shrink-0"
                    style={{
                      width: '3rem',
                      color: isCurrent ? 'var(--rust)' : 'var(--ink-40)',
                      fontWeight: isCurrent ? 700 : 400,
                      fontSize: '0.65rem',
                    }}
                  >
                    {item.year}
                  </div>
                  <div
                    className="body-text"
                    style={{
                      fontSize: isCurrent ? '1rem' : '0.95rem',
                      color: isCurrent ? 'var(--rust)' : undefined,
                      fontWeight: isCurrent ? 600 : 400,
                    }}
                  >
                    {item.event}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════ RUMEURS ══════════════════════ */}
      <section className="py-20 md:py-28">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <div className="label-display mb-3" style={{ color: 'var(--ink-20)' }}>Ce que les gens murmurent</div>
            <h2 className="section-heading" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>Les Grandes Rumeurs</h2>
          </div>
          <div className="document-panel">
            <p className="body-text italic text-center mb-8" style={{ color: 'var(--ink-40)' }}>
              Impossible de savoir ce qui est vrai…
            </p>
            <div className="space-y-5">
              {rumeurs.map((r, i) => (
                <div
                  key={i}
                  className="flex items-start gap-5 pb-5"
                  style={{ borderBottom: i < rumeurs.length - 1 ? '1px solid var(--border-light)' : 'none' }}
                >
                  <div className="ornamental-number flex-shrink-0" style={{ minWidth: '2rem' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <p className="body-text" style={{ fontSize: '0.95rem' }}>{r}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ CONCLUSION ══════════════════════ */}
      <section
        className="py-24 md:py-32 text-center"
        style={{ background: 'linear-gradient(170deg, var(--ink) 0%, var(--ink-80) 100%)', borderTop: '3px solid var(--gold)' }}
      >
        <div className="container-narrow">
          <blockquote
            className="sub-heading mx-auto mb-10"
            style={{ maxWidth: '38rem', fontSize: '1.3rem', color: 'rgba(240,228,204,0.7)', fontStyle: 'italic' }}
          >
            &ldquo;Wild Frontier raconte un monde au bord du changement.<br />
            Le progrès approche. La nature domine encore.<br />
            <strong style={{ color: 'var(--gold)', fontStyle: 'normal' }}>Chaque décision laisse une cicatrice.</strong>&rdquo;
          </blockquote>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reglement" className="btn-gold">Lire le règlement</Link>
            <Link
              href="/candidatures"
              className="btn-secondary"
              style={{ color: 'var(--parchment-50)', borderColor: 'rgba(240,228,204,0.3)' }}
            >
              Candidater
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
