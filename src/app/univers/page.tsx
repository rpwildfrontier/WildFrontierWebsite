import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Univers & Lore',
  description: 'Automne 1886 — Wild Frontier RP. L\'Amérique prétend avoir gagné l\'Ouest. Mais au nord des montagnes, la réalité est différente.',
}

export default function UniversPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-20 md:py-32 overflow-hidden"
        style={{
          background: 'linear-gradient(160deg, #1a0a00 0%, #2d1500 40%, #3d2000 100%)',
          borderBottom: '3px solid var(--color-gold)',
        }}
      >
        {/* Motif de fond */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg, transparent, transparent 40px,
              rgba(184, 134, 11, 0.04) 40px, rgba(184, 134, 11, 0.04) 41px
            )`,
          }}
        />
        <div className="container-narrow relative text-center">
          <div
            className="display-text text-xs uppercase tracking-[0.5em] mb-6"
            style={{ color: 'var(--color-gold)', opacity: 0.6 }}
          >
            ✦ Bible Narrative Officielle ✦
          </div>
          <h1
            className="font-serif font-black uppercase leading-none mb-6"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', color: 'var(--color-parchment)' }}
          >
            L&apos;Univers
          </h1>
          <blockquote
            className="font-serif italic text-xl md:text-2xl max-w-2xl mx-auto mb-8"
            style={{ color: 'rgba(240, 230, 200, 0.7)', lineHeight: '1.5' }}
          >
            &ldquo;Le gouvernement appelle cela un territoire.<br />
            Les habitants appellent cela la Frontière.<br />
            La nature, elle, ne lui a jamais donné de nom.&rdquo;
          </blockquote>
          <div
            className="display-text text-sm uppercase tracking-widest"
            style={{ color: 'var(--color-gold)', opacity: 0.5 }}
          >
            — Édition canonique — Automne 1886 —
          </div>
        </div>
      </section>

      {/* Préface */}
      <section className="py-16 md:py-20">
        <div className="container-narrow">
          <div className="document-panel">
            <div className="display-text text-xs uppercase tracking-[0.3em] mb-4" style={{ color: 'var(--color-rust)' }}>
              Préface narrative
            </div>
            <h2 className="font-serif font-bold text-3xl mb-8" style={{ color: 'var(--color-ink)' }}>
              Automne 1886.
            </h2>
            <p className="font-serif font-bold text-xl mb-6" style={{ color: 'var(--color-rust)' }}>
              L&apos;Amérique prétend avoir gagné l&apos;Ouest.
            </p>
            <p className="body-text mb-6">
              Les journaux de la côte Est parlent de civilisation, de progrès, de modernité,
              d&apos;industrie, de croissance.
            </p>
            <p className="font-serif font-semibold text-lg mb-6 italic" style={{ color: 'var(--color-ink-light)' }}>
              Mais au nord des montagnes… la réalité est différente.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                'Les routes disparaissent sous la neige.',
                'Les chevaux meurent de froid.',
                'Les villes brûlent encore entièrement en une nuit.',
                'Des régions entières n\'apparaissent sur aucune carte officielle.',
                'La loi voyage à cheval.',
                'Les médecins amputent à la lampe à huile.',
                'Les lettres mettent des semaines.',
                'L\'hiver décide souvent qui survivra.',
              ].map(item => (
                <div key={item} className="flex items-start gap-2 body-text text-base">
                  <span style={{ color: 'var(--color-gold)', flexShrink: 0 }}>—</span>
                  {item}
                </div>
              ))}
            </div>
            <blockquote
              className="font-serif italic text-xl text-center py-6"
              style={{
                color: 'var(--color-ink)',
                borderTop: '1px solid var(--color-border)',
                borderBottom: '1px solid var(--color-border)',
              }}
            >
              Wild Frontier n&apos;est pas un western héroïque.<br />
              C&apos;est un monde <strong>lent, brutal, humain, sale, magnifique, impitoyable.</strong>
            </blockquote>
            <p className="body-text mt-6 text-center">
              Chaque homme transporte son passé. Chaque famille cache des dettes. Chaque ville repose sur un mensonge.<br />
              <em>Et la Frontière observe tout.</em>
            </p>
          </div>
        </div>
      </section>

      {/* Cinq piliers */}
      <section
        className="py-16 md:py-20"
        style={{ backgroundColor: 'var(--color-parchment-dark)', borderTop: '2px solid var(--color-border)', borderBottom: '2px solid var(--color-border)' }}
      >
        <div className="container-narrow">
          <div className="text-center mb-12">
            <div className="display-text text-xs uppercase tracking-[0.3em] mb-3" style={{ color: 'var(--color-sepia)' }}>
              Vision philosophique du monde
            </div>
            <h2 className="heading-section">Les Cinq Piliers</h2>
            <div className="divider-ornament mt-4"><span className="divider-ornament-icon">✦</span></div>
          </div>

          <div className="space-y-6">
            {[
              {
                icon: '⏳',
                title: 'Le Temps',
                subtitle: 'Le temps a de la valeur.',
                text: 'Les distances sont longues. Les soins prennent du temps. Les enquêtes durent des semaines. Les hivers ralentissent toute activité. Le serveur doit donner l\'impression d\'un monde immense, lourd, réaliste.',
              },
              {
                icon: '📖',
                title: 'La Mémoire',
                subtitle: 'Le monde se souvient.',
                text: 'Les habitants parlent. Les journaux écrivent. Les familles transmettent. Les dettes persistent. Un homme peut survivre à une balle. Rarement à sa réputation.',
              },
              {
                icon: '🌿',
                title: 'La Nature',
                subtitle: 'La nature domine l\'Homme.',
                text: 'Les montagnes ne sont pas un décor. Les forêts ne sont pas vides. Les tempêtes peuvent tuer davantage que les gangs. La Frontière reste sauvage.',
              },
              {
                icon: '💀',
                title: 'La Fragilité Humaine',
                subtitle: 'Les personnages ne sont pas des héros.',
                text: 'Ils tombent malades. Ils vieillissent. Ils souffrent. Ils ont peur. Les blessures ont des conséquences. Les morts doivent avoir un poids émotionnel.',
              },
              {
                icon: '🤝',
                title: 'Les Relations Humaines',
                subtitle: 'L\'économie, la politique et la survie reposent sur les liens entre hommes.',
                text: 'La confiance, la peur, la dette, l\'honneur, la réputation — le véritable pouvoir vient des relations humaines. Pas des mécaniques. Pas des scripts.',
              },
            ].map(pilier => (
              <div key={pilier.title} className="parchment-card flex gap-5">
                <div style={{ fontSize: '2.5rem', flexShrink: 0 }}>{pilier.icon}</div>
                <div>
                  <h3 className="font-serif font-bold text-xl mb-1" style={{ color: 'var(--color-rust)' }}>
                    {pilier.title}
                  </h3>
                  <p className="font-serif font-semibold italic mb-2" style={{ color: 'var(--color-ink)' }}>
                    {pilier.subtitle}
                  </p>
                  <p className="body-text">{pilier.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* L'Amérique en 1886 */}
      <section className="py-16 md:py-20">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="document-panel">
              <div className="display-text text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--color-sepia)' }}>
                L&apos;Est
              </div>
              <h3 className="font-serif font-bold text-xl mb-4" style={{ color: 'var(--color-ink)' }}>
                La Côte Est avance
              </h3>
              <ul className="space-y-2">
                {[
                  'Les grandes villes industrielles explosent',
                  'Les usines tournent jour et nuit',
                  'Les immigrants affluent par milliers',
                  'Les banques s\'enrichissent',
                  'Le progrès s\'affiche en vitrine',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 body-text text-base">
                    <span style={{ color: 'var(--color-gold)' }}>→</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="document-panel" style={{ borderColor: 'var(--color-rust)' }}>
              <div className="display-text text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--color-rust)' }}>
                L&apos;Ouest — La Frontière
              </div>
              <h3 className="font-serif font-bold text-xl mb-4" style={{ color: 'var(--color-ink)' }}>
                La Frontière résiste
              </h3>
              <ul className="space-y-2">
                {[
                  'Les territoires restent instables',
                  'Les routes sont dangereuses',
                  'Les marshals fédéraux sont trop peu nombreux',
                  'Chaque kilomètre de rail provoque guerre et corruption',
                  'La Frontière refuse encore de mourir',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 body-text text-base">
                    <span style={{ color: 'var(--color-rust)' }}>→</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Géographie */}
      <section
        className="py-16 md:py-20"
        style={{ backgroundColor: 'var(--color-parchment-dark)', borderTop: '2px solid var(--color-border)', borderBottom: '2px solid var(--color-border)' }}
      >
        <div className="container-wide">
          <div className="text-center mb-12">
            <div className="display-text text-xs uppercase tracking-[0.3em] mb-3" style={{ color: 'var(--color-sepia)' }}>
              Géographie canonique
            </div>
            <h2 className="heading-section">Le Territoire</h2>
            <div className="divider-ornament mt-4"><span className="divider-ornament-icon">✦</span></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                name: 'Les Hautes Montagnes du Nord',
                desc: 'Inspirées des Rocheuses et du Montana. Cols dangereux, avalanches, lacs gelés, mines abandonnées. L\'hiver peut y durer huit mois.',
                danger: 'Extrême',
              },
              {
                name: 'Tall Pines',
                desc: 'Immense forêt boréale. Brouillard permanent, rivières profondes, ours et loups. Les habitants disent : "Tall Pines avale les hommes."',
                danger: 'Élevé',
              },
              {
                name: 'Les Grandes Plaines',
                desc: 'Territoires d\'élevage et de caravanes. Le vent souffle constamment. Les distances donnent l\'impression que le monde ne finit jamais.',
                danger: 'Modéré',
              },
              {
                name: 'Les Marais du Sud',
                desc: 'Zone humide et malsaine. Réputation de contrebande, alcool clandestin et fugitifs. Même les shérifs évitent certains secteurs la nuit.',
                danger: 'Élevé',
              },
            ].map(zone => (
              <div key={zone.name} className="document-panel">
                <div className="display-text text-xs uppercase tracking-wider mb-1" style={{ color: 'var(--color-gold)' }}>
                  Danger : {zone.danger}
                </div>
                <h3 className="font-serif font-bold text-lg mb-3" style={{ color: 'var(--color-ink)' }}>
                  {zone.name}
                </h3>
                <p className="body-text text-sm">{zone.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Les grandes villes */}
      <section className="py-16 md:py-20">
        <div className="container-wide">
          <div className="text-center mb-12">
            <div className="display-text text-xs uppercase tracking-[0.3em] mb-3" style={{ color: 'var(--color-sepia)' }}>
              Les grandes villes
            </div>
            <h2 className="heading-section">Villes du Territoire</h2>
            <div className="divider-ornament mt-4"><span className="divider-ornament-icon">✦</span></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: 'Blackwater Crossing',
                type: 'Centre économique régional',
                desc: 'On y trouve banques, gare ferroviaire, journal, tribunal et hôtels luxueux. La corruption y est omniprésente. Les hommes les plus dangereux portent souvent des gants propres, des montres en or, des costumes noirs.',
                ambiance: 'Pouvoir, argent, corruption',
              },
              {
                name: 'Ash Creek',
                type: 'Ville minière',
                desc: 'Née dans la boue. Odeur de charbon, de whisky, de sueur, de poudre noire. Les bagarres y sont quotidiennes. Les compagnies exploitent des centaines d\'ouvriers. L\'espérance de vie y est faible.',
                ambiance: 'Violence, labeur, désespoir',
              },
              {
                name: 'Pine Ridge',
                type: 'Ville forestière',
                desc: 'Population de chasseurs, trappeurs, bûcherons et survivants. Les habitants se méfient des étrangers. La disparition de voyageurs est fréquente. Les forêts gardent leurs secrets.',
                ambiance: 'Méfiance, isolement, mystère',
              },
              {
                name: 'Saint Mercy',
                type: 'Ville religieuse',
                desc: 'Fondée par des missionnaires. Atmosphère silencieuse, austère, étrange. Le cimetière y est immense. Les habitants disent : "Tout le monde finit à Saint Mercy."',
                ambiance: 'Foi, mort, silence',
              },
            ].map(ville => (
              <div key={ville.name} className="parchment-card">
                <div className="display-text text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--color-gold)' }}>
                  {ville.type}
                </div>
                <h3 className="font-serif font-bold text-2xl mb-2" style={{ color: 'var(--color-ink)' }}>
                  {ville.name}
                </h3>
                <p className="body-text mb-4">{ville.desc}</p>
                <div
                  className="display-text text-xs uppercase tracking-wider py-2 px-3"
                  style={{ backgroundColor: 'rgba(139, 94, 60, 0.1)', border: '1px solid var(--color-border)', color: 'var(--color-sepia)' }}
                >
                  Ambiance : {ville.ambiance}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Saisons & Climat */}
      <section
        className="py-16"
        style={{ backgroundColor: 'var(--color-parchment-dark)', borderTop: '2px solid var(--color-border)', borderBottom: '2px solid var(--color-border)' }}
      >
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="heading-section">Climat & Saisons</h2>
            <p className="body-text mt-4">Dans Wild Frontier, la météo n&apos;est pas cosmétique. Elle conditionne l&apos;économie, les déplacements, les maladies et les conflits.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { saison: 'Hiver', icon: '❄', effets: ['Famine', 'Routes bloquées', 'Chasse difficile', 'Hypothermie'], couleur: '#2d4a6b' },
              { saison: 'Printemps', icon: '🌱', effets: ['Boue', 'Crues', 'Maladies', 'Espoir'], couleur: '#2d6b2d' },
              { saison: 'Été', icon: '☀', effets: ['Sécheresse', 'Incendies', 'Tensions pour l\'eau', 'Commerce actif'], couleur: '#6b4a00' },
              { saison: 'Automne', icon: '🍂', effets: ['Commerce intense', 'Préparation', 'Migrations', 'Dernière fenêtre'], couleur: '#6b2d00' },
            ].map(s => (
              <div key={s.saison} className="document-panel text-center">
                <div style={{ fontSize: '2.5rem' }}>{s.icon}</div>
                <h3 className="font-serif font-bold text-lg mt-2 mb-3" style={{ color: 'var(--color-ink)' }}>
                  {s.saison}
                </h3>
                <ul className="space-y-1">
                  {s.effets.map(effet => (
                    <li key={effet} className="text-sm" style={{ color: 'var(--color-sepia)', fontFamily: 'var(--font-crimson)' }}>
                      {effet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grandes familles */}
      <section className="py-16 md:py-20">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <div className="display-text text-xs uppercase tracking-[0.3em] mb-3" style={{ color: 'var(--color-sepia)' }}>
              Registre des familles influentes
            </div>
            <h2 className="heading-section">Les Grandes Familles</h2>
            <div className="divider-ornament mt-4"><span className="divider-ornament-icon">✦</span></div>
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
                {[
                  { nom: 'Les Whitmore', domaine: 'Banque & Finance', rep: 'Contrôlent une partie des prêts régionaux. Puissants et discrets.' },
                  { nom: 'Les Callahan', domaine: 'Élevage & Ranchs', rep: 'Immense dynastie. Violents conflits fonciers. Loyautés achetées.' },
                  { nom: 'Les Beaumont', domaine: 'Rail & Mines', rep: 'Liés aux compagnies ferroviaires et minières. Ambitieux et impitoyables.' },
                  { nom: 'Les Mercer', domaine: 'Commerce des peaux', rep: 'Anciens trappeurs devenus très riches. Réseau étendu dans les forêts.' },
                ].map(famille => (
                  <tr key={famille.nom}>
                    <td className="font-serif font-bold text-lg">{famille.nom}</td>
                    <td><span className="badge-pending">{famille.domaine}</span></td>
                    <td className="body-text text-sm">{famille.rep}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="body-text text-center mt-6 italic">
            Chaque famille possède : alliés, ennemis, secrets, dettes, cadavres cachés.
          </p>
        </div>
      </section>

      {/* Chronologie */}
      <section
        className="py-16"
        style={{ backgroundColor: 'var(--color-parchment-dark)', borderTop: '2px solid var(--color-border)', borderBottom: '2px solid var(--color-border)' }}
      >
        <div className="container-narrow">
          <div className="text-center mb-12">
            <div className="display-text text-xs uppercase tracking-[0.3em] mb-3" style={{ color: 'var(--color-sepia)' }}>
              Registre historique
            </div>
            <h2 className="heading-section">Chronologie</h2>
          </div>

          <div className="relative">
            <div
              className="absolute left-20 top-0 bottom-0 w-px hidden md:block"
              style={{ backgroundColor: 'var(--color-border)' }}
            />
            <div className="space-y-4">
              {[
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
                { year: '1886', event: '★ Début de l\'ère actuelle. Votre histoire commence ici.' },
              ].map(item => (
                <div key={item.year} className="flex gap-6 items-start">
                  <div
                    className="display-text font-bold text-sm flex-shrink-0 w-16 text-right"
                    style={{ color: item.year === '1886' ? 'var(--color-rust)' : 'var(--color-sepia)' }}
                  >
                    {item.year}
                  </div>
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0 mt-1"
                    style={{ backgroundColor: item.year === '1886' ? 'var(--color-rust)' : 'var(--color-border)' }}
                  />
                  <p
                    className="body-text"
                    style={{ fontWeight: item.year === '1886' ? '600' : 'normal', color: item.year === '1886' ? 'var(--color-rust)' : undefined }}
                  >
                    {item.event}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Les Grandes Rumeurs */}
      <section className="py-16">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <div className="display-text text-xs uppercase tracking-[0.3em] mb-3" style={{ color: 'var(--color-sepia)' }}>
              Ce que les gens murmurent
            </div>
            <h2 className="heading-section">Les Grandes Rumeurs</h2>
          </div>

          <div className="document-panel">
            <p className="body-text italic mb-6 text-center">
              Impossible de savoir ce qui est vrai…
            </p>
            <div className="space-y-4">
              {[
                'Une mine abandonnée contiendrait encore des tonnes d\'or non extraites.',
                'Un train fédéral transporte régulièrement des lingots — sans escorte suffisante.',
                'Un marshal disparu vivrait encore dans les montagnes, seul depuis des années.',
                'Une vallée entière est interdite par les nations natives — et personne n\'en revient.',
                'Un gang aurait enterré une fortune colossale quelque part dans Tall Pines.',
                'Une créature tuerait parfois des chasseurs isolés durant les nuits d\'hiver.',
              ].map((rumeur, i) => (
                <div key={i} className="flex items-start gap-3 body-text">
                  <span className="display-text font-bold" style={{ color: 'var(--color-gold)', flexShrink: 0 }}>
                    {String(i + 1).padStart(2, '0')}.
                  </span>
                  <p>{rumeur}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion & CTA */}
      <section
        className="py-16 md:py-24"
        style={{ background: 'linear-gradient(160deg, #1a0a00 0%, #2d1500 100%)', borderTop: '3px solid var(--color-gold)' }}
      >
        <div className="container-narrow text-center">
          <blockquote
            className="font-serif italic text-2xl md:text-3xl mb-8"
            style={{ color: 'var(--color-parchment)', lineHeight: '1.5' }}
          >
            &ldquo;Wild Frontier raconte un monde au bord du changement.<br />
            Le progrès approche. La nature domine encore.<br />
            <strong style={{ color: 'var(--color-gold)' }}>Chaque décision laisse une cicatrice.</strong>&rdquo;
          </blockquote>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reglement" className="btn-gold">
              Lire le règlement
            </Link>
            <Link href="/candidatures" className="btn-secondary" style={{ color: 'var(--color-parchment)', borderColor: 'rgba(240, 230, 200, 0.4)' }}>
              Candidater
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
