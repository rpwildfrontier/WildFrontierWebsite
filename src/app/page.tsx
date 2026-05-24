import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Wild Frontier RP — Gazette du Comté',
}

const articles = [
  {
    category: 'Événement',
    date: '24 mai 1887',
    title: 'Le conseil municipal convoque une assemblée extraordinaire',
    excerpt:
      'Sur décision du maire Harlan Webb, une réunion d\'urgence se tiendra vendredi prochain à l\'hôtel de ville afin de délibérer sur la question des concessions minières accordées dans la vallée nord.',
    author: 'Rédaction',
  },
  {
    category: 'Chronique',
    date: '23 mai 1887',
    title: 'Procès retentissant au tribunal du comté',
    excerpt:
      'Le juge Montgomery a présidé hier l\'audience concernant l\'affaire de vol de bétail qui a agité la région depuis la mi-avril. Les débats ont duré plus de six heures.',
    author: 'Correspondant judiciaire',
  },
  {
    category: 'Annonce',
    date: '22 mai 1887',
    title: 'Nouvelles candidatures pour le poste d\'adjoint au shérif',
    excerpt:
      'Le bureau du shérif informe les citoyens que les candidatures pour le poste d\'adjoint sont ouvertes jusqu\'au 30 mai. Présenter sa demande en personne avec certificat de moralité.',
    author: 'Bureau du Shérif',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════════════════ HERO ═══════════════════════════════════ */}
      <section
        className="relative py-20 md:py-32 overflow-hidden"
        style={{
          background: 'linear-gradient(160deg, #e8d5a3 0%, #f0e6c8 40%, #e4d09e 100%)',
          borderBottom: '2px solid var(--color-border)',
        }}
      >
        {/* Motif de fond */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 40px,
              rgba(139, 94, 60, 0.3) 40px,
              rgba(139, 94, 60, 0.3) 41px
            )`,
          }}
        />

        <div className="container-narrow relative text-center">
          {/* Bandeau d'accroche */}
          <div
            className="display-text text-xs uppercase tracking-[0.3em] mb-6"
            style={{ color: 'var(--color-sepia)' }}
          >
            — Whitelist Strict · RP Dur & Organique —
          </div>

          {/* Titre héros */}
          <h1
            className="font-serif font-black uppercase leading-none mb-6"
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
              color: 'var(--color-ink)',
              letterSpacing: '-0.01em',
            }}
          >
            Un monde où<br />
            <span style={{ color: 'var(--color-rust)' }}>chaque acte</span><br />
            laisse une trace
          </h1>

          {/* Sous-titre */}
          <p
            className="body-text max-w-2xl mx-auto mb-10"
            style={{ fontSize: '1.25rem', color: 'var(--color-ink-light)' }}
          >
            Wild Frontier RP est un serveur RedM à RP dur et organique, ancré dans
            l&apos;Amérique de la fin du XIXe siècle. Aucune mécanique ne remplace l&apos;interaction
            humaine. Chaque décision a des conséquences. Chaque vie laisse une marque.
          </p>

          {/* Actions principales */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/candidatures" className="btn-primary">
              Déposer une candidature
            </Link>
            <Link href="/univers" className="btn-secondary">
              Découvrir l&apos;univers
            </Link>
          </div>

          {/* Indicateurs */}
          <div
            className="flex flex-col sm:flex-row justify-center gap-8 mt-16 pt-8"
            style={{ borderTop: '1px solid var(--color-border)' }}
          >
            {[
              { label: 'Whitelist strict', value: '3 comptes requis', icon: '⚖' },
              { label: 'Période historique', value: '1887 — Far West', icon: '🗺' },
              { label: 'Philosophie', value: 'RP dur & organique', icon: '✒' },
            ].map(item => (
              <div key={item.label} className="text-center">
                <div style={{ fontSize: '1.5rem' }}>{item.icon}</div>
                <div
                  className="display-text text-xs uppercase tracking-wider mt-1"
                  style={{ color: 'var(--color-sepia)' }}
                >
                  {item.label}
                </div>
                <div
                  className="font-serif font-bold text-sm mt-1"
                  style={{ color: 'var(--color-ink)' }}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════ PITCH ═══════════════════════════════════ */}
      <section className="py-16 md:py-24">
        <div className="container-narrow">
          {/* Titre de section */}
          <div className="text-center mb-16">
            <div
              className="display-text text-xs uppercase tracking-[0.3em] mb-3"
              style={{ color: 'var(--color-sepia)' }}
            >
              Ce qui nous différencie
            </div>
            <h2 className="heading-section">Un monde à part entière</h2>
            <div className="divider-ornament mt-4">
              <span className="divider-ornament-icon">✦</span>
            </div>
          </div>

          {/* Citation centrale */}
          <blockquote
            className="document-panel text-center mb-16"
          >
            <p
              className="font-serif font-bold italic text-2xl md:text-3xl mb-4"
              style={{ color: 'var(--color-ink)', lineHeight: '1.4' }}
            >
              &ldquo;Un monde où presque rien d&apos;important<br />
              ne peut arriver sans intervention humaine.&rdquo;
            </p>
            <footer
              className="display-text text-sm uppercase tracking-widest"
              style={{ color: 'var(--color-sepia)' }}
            >
              — Charte fondatrice de Wild Frontier RP
            </footer>
          </blockquote>

          {/* Grille de différenciateurs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: '🏥',
                title: 'Soins réels',
                text: 'Se faire soigner requiert un médecin joueur présent physiquement. Les blessures s\'aggravent. L\'absence du médecin se ressent.',
              },
              {
                icon: '⚖',
                title: 'Justice joueur',
                text: 'Aucun système de wanted automatique. Toute procédure judiciaire est menée par des joueurs en rôle. Shérif, juge, procès complet.',
              },
              {
                icon: '📰',
                title: 'Information organique',
                text: 'Pas de notification HUD. Les nouvelles circulent par le bouche-à-oreille, le télégraphe et le journal papier.',
              },
              {
                icon: '💰',
                title: 'Économie physique',
                text: 'L\'argent n\'existe que si quelqu\'un le détient. Pas de virement à distance. Chaque transaction est un échange physique animé.',
              },
              {
                icon: '📜',
                title: 'Documents légaux',
                text: 'Posséder une terre requiert un acte notarié. Exercer un métier requiert une licence. Chaque action génère une trace exploitable.',
              },
              {
                icon: '💀',
                title: 'Mort conséquente',
                text: 'Pas de respawn arcade. La mort passe par un état de coma. Le retour au jeu dépend d\'une prise en charge médicale réelle.',
              },
            ].map(item => (
              <div key={item.title} className="parchment-card flex gap-4">
                <div style={{ fontSize: '2rem', flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <h3
                    className="font-serif font-bold text-lg mb-2"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    {item.title}
                  </h3>
                  <p className="body-text text-base">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════ JOURNAL ═══════════════════════════════════ */}
      <section
        className="py-16 md:py-24"
        style={{
          background: 'linear-gradient(to bottom, var(--color-parchment-dark), var(--color-parchment))',
          borderTop: '2px solid var(--color-border)',
          borderBottom: '2px solid var(--color-border)',
        }}
      >
        <div className="container-wide">
          {/* En-tête style journal */}
          <div className="newspaper-header mb-12">
            <div
              className="display-text text-xs uppercase tracking-[0.4em] mb-2"
              style={{ color: 'var(--color-sepia)' }}
            >
              Nouvelles du comté
            </div>
            <h2
              className="font-serif font-black uppercase"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--color-ink)' }}
            >
              La Gazette du Comté
            </h2>
            <div
              className="display-text text-xs mt-2"
              style={{ color: 'var(--color-sepia)' }}
            >
              Dernières publications — Édition du jour
            </div>
          </div>

          {/* Articles */}
          <div className="newspaper-columns">
            {articles.map(article => (
              <article key={article.title} className="article-card pb-6">
                <div className="article-meta mb-2">{article.category}</div>
                <h3
                  className="font-serif font-bold text-xl mb-2 leading-snug"
                  style={{ color: 'var(--color-ink)' }}
                >
                  {article.title}
                </h3>
                <p className="body-text text-base mb-4">{article.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span
                    className="display-text text-xs"
                    style={{ color: 'var(--color-sepia)', opacity: 0.7 }}
                  >
                    {article.date} — {article.author}
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/journal" className="btn-secondary">
              Consulter toutes les éditions
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════ CANDIDATURE CTA ═══════════════════════════════════ */}
      <section className="py-16 md:py-24">
        <div className="container-narrow">
          <div
            className="document-panel text-center"
            style={{ borderColor: 'var(--color-rust)' }}
          >
            {/* Sceau */}
            <div className="flex justify-center mb-6">
              <div
                className="official-seal w-20 h-20 flex-col text-center"
                style={{ fontSize: '0.6rem', lineHeight: '1.2' }}
              >
                <div className="text-lg">★</div>
                <div className="display-text text-xs tracking-wider px-2">WILD FRONTIER</div>
              </div>
            </div>

            <div
              className="display-text text-xs uppercase tracking-[0.3em] mb-3"
              style={{ color: 'var(--color-rust)' }}
            >
              — Avis officiel —
            </div>

            <h2
              className="font-serif font-bold text-3xl md:text-4xl mb-4"
              style={{ color: 'var(--color-ink)' }}
            >
              Rejoindre le Comté
            </h2>

            <p className="body-text max-w-2xl mx-auto mb-6">
              L&apos;accès au territoire de Wild Frontier RP est soumis à candidature. Chaque dossier
              est examiné individuellement par le staff. La qualité prime sur la quantité.
            </p>

            {/* Conditions */}
            <div
              className="inline-block text-left mb-8 p-4"
              style={{
                border: '1px solid var(--color-border)',
                backgroundColor: 'rgba(240, 230, 200, 0.5)',
              }}
            >
              <div
                className="display-text text-xs uppercase tracking-wider mb-3"
                style={{ color: 'var(--color-sepia)' }}
              >
                Conditions requises pour candidater :
              </div>
              <ul className="space-y-2">
                {[
                  'Un compte Discord actif et relié',
                  'Un compte Steam avec RedDeadRedemption II',
                  'Un compte CFX.re (FiveM/RedM) relié',
                ].map(cond => (
                  <li key={cond} className="flex items-start gap-2 body-text text-base">
                    <span style={{ color: 'var(--color-gold)' }}>✓</span>
                    {cond}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/candidatures" className="btn-primary">
                Déposer ma candidature
              </Link>
              <Link href="/reglement" className="btn-secondary">
                Lire le règlement d&apos;abord
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════ INSTITUTIONS ═══════════════════════════════════ */}
      <section
        className="py-16 md:py-24"
        style={{
          backgroundColor: 'var(--color-parchment-dark)',
          borderTop: '2px solid var(--color-border)',
        }}
      >
        <div className="container-wide">
          <div className="text-center mb-12">
            <div
              className="display-text text-xs uppercase tracking-[0.3em] mb-3"
              style={{ color: 'var(--color-sepia)' }}
            >
              Structure du comté
            </div>
            <h2 className="heading-section">Les Institutions</h2>
            <div className="divider-ornament mt-4">
              <span className="divider-ornament-icon">✦</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '🏛', name: 'Mairie', desc: 'Conseil municipal, décisions & taxes' },
              { icon: '⚖', name: 'Tribunal', desc: 'Juge, procès & verdicts' },
              { icon: '🔫', name: 'Shérif', desc: 'Maintien de l\'ordre & enquêtes' },
              { icon: '📋', name: 'Notariat', desc: 'Actes, contrats & propriétés' },
              { icon: '🏥', name: 'Médecine', desc: 'Soins, diagnostics & certificats' },
              { icon: '📰', name: 'Presse', desc: 'Journal, chroniques & archives' },
              { icon: '🏦', name: 'Banque', desc: 'Comptes, prêts & coffres' },
              { icon: '⛪', name: 'Église', desc: 'Mariages, obsèques & registres' },
            ].map(inst => (
              <Link
                key={inst.name}
                href="/institutions"
                className="parchment-card text-center hover:shadow-lg transition-shadow"
              >
                <div style={{ fontSize: '2rem' }}>{inst.icon}</div>
                <h3
                  className="font-serif font-bold mt-2 mb-1"
                  style={{ color: 'var(--color-ink)' }}
                >
                  {inst.name}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: 'var(--color-sepia)', fontFamily: 'var(--font-crimson)' }}
                >
                  {inst.desc}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/institutions" className="btn-secondary">
              Voir toutes les institutions
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
