import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Wild Frontier RP — Gazette du Comté',
}

const latestArticles = [
  {
    category: 'Politique',
    date: '24 mai 1887',
    title: 'Le conseil municipal convoque une assemblée extraordinaire',
    excerpt:
      'Sur décision du maire Harlan Webb, une réunion d\'urgence se tiendra vendredi prochain à l\'hôtel de ville afin de délibérer sur les concessions minières accordées dans la vallée nord.',
    author: 'Rédaction',
  },
  {
    category: 'Justice',
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

const features = [
  {
    n: 'I',
    title: 'Soins réels',
    text: 'Se faire soigner requiert un médecin joueur présent physiquement. Les blessures s\'aggravent. L\'absence du médecin se ressent dans tout le comté.',
  },
  {
    n: 'II',
    title: 'Justice joueur',
    text: 'Aucun système de wanted automatique. Toute procédure judiciaire est menée par des joueurs en rôle — shérif, juge, procès complet.',
  },
  {
    n: 'III',
    title: 'Information organique',
    text: 'Pas de notification HUD. Les nouvelles circulent par le bouche-à-oreille, le télégraphe et la gazette papier.',
  },
  {
    n: 'IV',
    title: 'Économie physique',
    text: 'L\'argent n\'existe que si quelqu\'un le détient. Pas de virement à distance. Chaque transaction est un échange animé entre deux personnes.',
  },
  {
    n: 'V',
    title: 'Documents légaux',
    text: 'Posséder une terre requiert un acte notarié. Exercer un métier requiert une licence. Chaque action génère une trace exploitable.',
  },
  {
    n: 'VI',
    title: 'Mort conséquente',
    text: 'Pas de respawn arcade. La mort passe par un état de coma. Le retour au jeu dépend d\'une prise en charge médicale réelle.',
  },
]

const institutions = [
  { initial: 'M', name: 'Mairie',    desc: 'Conseil municipal, décisions & taxes' },
  { initial: 'T', name: 'Tribunal',  desc: 'Juge, procès & verdicts' },
  { initial: 'S', name: 'Shérif',    desc: 'Maintien de l\'ordre & enquêtes' },
  { initial: 'N', name: 'Notariat',  desc: 'Actes, contrats & propriétés' },
  { initial: 'C', name: 'Cabinet médical', desc: 'Soins, diagnostics & certificats' },
  { initial: 'P', name: 'Presse',    desc: 'Journal, chroniques & archives' },
  { initial: 'B', name: 'Banque',    desc: 'Comptes, prêts & coffres' },
  { initial: 'E', name: 'Église',    desc: 'Mariages, obsèques & registres' },
]

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════ HERO ══════════════════════ */}
      <section
        className="relative py-24 md:py-36 overflow-hidden"
        style={{
          background: 'linear-gradient(170deg, var(--parchment-dark) 0%, var(--parchment) 50%, var(--parchment-100) 100%)',
          borderBottom: '2px solid var(--border)',
        }}
      >
        {/* Motif tramé subtil */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -55deg, transparent, transparent 36px,
              rgba(196, 168, 120, 0.07) 36px, rgba(196, 168, 120, 0.07) 37px
            )`,
          }}
        />

        <div className="container-narrow relative">
          <div className="text-center">
            {/* Label supérieur */}
            <div className="label-display mb-6" style={{ color: 'var(--ink-40)', letterSpacing: '0.3em' }}>
              Whitelist strict &nbsp;·&nbsp; RP Dur & Organique &nbsp;·&nbsp; RedM
            </div>

            {/* Titre */}
            <h1
              className="display-heading mb-8"
              style={{ fontSize: 'clamp(2.8rem, 8vw, 6rem)', color: 'var(--ink)' }}
            >
              Un monde où<br />
              <span style={{ color: 'var(--rust)' }}>chaque acte</span><br />
              laisse une trace
            </h1>

            {/* Sous-titre */}
            <p
              className="body-text mx-auto mb-10"
              style={{ maxWidth: '40rem', fontSize: '1.15rem', color: 'var(--ink-60)' }}
            >
              Wild Frontier RP est un serveur RedM à RP dur et organique, ancré dans
              l&apos;Amérique de la fin du XIXe siècle. Aucune mécanique ne remplace
              l&apos;interaction humaine.
            </p>

            {/* Actions */}
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
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-10"
              style={{ borderTop: '1px solid var(--border-light)' }}
            >
              {[
                { label: 'Whitelist', value: 'Trois comptes requis' },
                { label: 'Période', value: 'Amérique, 1886' },
                { label: 'Philosophie', value: 'RP dur & organique' },
              ].map(item => (
                <div key={item.label} className="text-center">
                  <div className="label-display mb-1" style={{ color: 'var(--ink-20)' }}>
                    {item.label}
                  </div>
                  <div
                    className="section-heading"
                    style={{ fontSize: '1rem', fontWeight: 600 }}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ PITCH ══════════════════════ */}
      <section className="py-20 md:py-28">
        <div className="container-narrow">
          {/* En-tête section */}
          <div className="text-center mb-16">
            <div className="label-display mb-3" style={{ color: 'var(--ink-20)' }}>
              Ce qui nous différencie
            </div>
            <h2 className="section-heading" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
              Un monde à part entière
            </h2>
            <div className="rule-ornament mt-6" style={{ maxWidth: '24rem', margin: '1.5rem auto 0' }}>
              <span className="label-display" style={{ color: 'var(--gold)', opacity: 0.6 }}>◆</span>
            </div>
          </div>

          {/* Citation */}
          <div className="pull-quote mb-16">
            <p>
              &ldquo;Un monde où presque rien d&apos;important ne peut arriver sans intervention humaine.&rdquo;
            </p>
            <footer
              className="label-display mt-4"
              style={{ color: 'var(--ink-20)', display: 'block', letterSpacing: '0.2em' }}
            >
              — Charte fondatrice de Wild Frontier RP
            </footer>
          </div>

          {/* Grille des différenciateurs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {features.map(f => (
              <div key={f.n} className="accent-card flex gap-6">
                <div className="ornamental-number" style={{ minWidth: '2rem', paddingTop: '2px' }}>
                  {f.n}
                </div>
                <div>
                  <h3
                    className="section-heading mb-2"
                    style={{ fontSize: '1.1rem', fontWeight: 700 }}
                  >
                    {f.title}
                  </h3>
                  <p className="body-text" style={{ fontSize: '0.95rem' }}>{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ JOURNAL ══════════════════════ */}
      <section
        className="py-20 md:py-28"
        style={{
          backgroundColor: 'var(--parchment-dark)',
          borderTop: '2px solid var(--border)',
          borderBottom: '2px solid var(--border)',
        }}
      >
        <div className="container-wide">
          {/* Masthead style */}
          <div
            className="text-center mb-12 pb-6"
            style={{ borderBottom: '3px double var(--border-dark)' }}
          >
            <div className="label-display mb-2" style={{ color: 'var(--ink-20)' }}>
              Nouvelles du comté
            </div>
            <h2
              className="display-heading"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '0.04em' }}
            >
              La Gazette du Comté
            </h2>
            <div className="label-display mt-3" style={{ color: 'var(--ink-20)' }}>
              Dernières publications — Édition du jour
            </div>
          </div>

          {/* Articles */}
          <div className="newspaper-grid">
            {latestArticles.map(article => (
              <article
                key={article.title}
                className="pb-6"
                style={{ borderBottom: '1px solid var(--border-light)' }}
              >
                <div className="meta-text mb-2" style={{ color: 'var(--rust)' }}>
                  {article.category}
                </div>
                <h3
                  className="section-heading mb-3"
                  style={{ fontSize: '1.2rem', lineHeight: '1.3' }}
                >
                  {article.title}
                </h3>
                <p className="body-text mb-4" style={{ fontSize: '0.95rem' }}>
                  {article.excerpt}
                </p>
                <div className="meta-text" style={{ color: 'var(--ink-20)' }}>
                  {article.date} — {article.author}
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/journal" className="btn-secondary">
              Consulter toutes les éditions
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════ CANDIDATURE CTA ══════════════════════ */}
      <section className="py-20 md:py-28">
        <div className="container-narrow">
          <div className="document-panel text-center">

            {/* Sceau textuel */}
            <div
              className="official-seal mx-auto mb-8"
              style={{ width: '80px', height: '80px', fontSize: '0.58rem' }}
            >
              <div
                className="label-display text-center leading-tight"
                style={{ color: 'var(--rust)', letterSpacing: '0.12em', padding: '0 4px' }}
              >
                WILD<br />FRONTIER
              </div>
            </div>

            <div className="label-display mb-4" style={{ color: 'var(--rust)', letterSpacing: '0.3em' }}>
              Avis officiel
            </div>

            <h2
              className="section-heading mb-5"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)' }}
            >
              Rejoindre le Comté
            </h2>

            <p className="body-text mx-auto mb-8" style={{ maxWidth: '34rem' }}>
              L&apos;accès au territoire est soumis à candidature. Chaque dossier est
              examiné individuellement par le staff. La qualité prime sur la quantité.
            </p>

            {/* Conditions */}
            <div
              className="inline-block text-left mb-10 px-6 py-5"
              style={{
                border: '1px solid var(--border-light)',
                backgroundColor: 'rgba(253,249,240,0.6)',
              }}
            >
              <div className="label-display mb-4" style={{ color: 'var(--ink-20)' }}>
                Conditions requises pour candidater
              </div>
              <ul className="space-y-2">
                {[
                  'Un compte Discord actif et relié',
                  'Un compte Steam avec RedDeadRedemption II',
                  'Un compte CFX.re (RedM) relié',
                ].map(cond => (
                  <li key={cond} className="flex items-center gap-3 body-text" style={{ fontSize: '0.95rem' }}>
                    <span style={{ color: 'var(--gold)', fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                      &checkmark;
                    </span>
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

      {/* ══════════════════════ INSTITUTIONS ══════════════════════ */}
      <section
        className="py-20 md:py-28"
        style={{
          backgroundColor: 'var(--parchment-dark)',
          borderTop: '2px solid var(--border)',
        }}
      >
        <div className="container-wide">
          <div className="text-center mb-14">
            <div className="label-display mb-3" style={{ color: 'var(--ink-20)' }}>
              Structure du comté
            </div>
            <h2 className="section-heading" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
              Les Institutions
            </h2>
            <div className="rule-ornament mt-6" style={{ maxWidth: '24rem', margin: '1.5rem auto 0' }}>
              <span className="label-display" style={{ color: 'var(--gold)', opacity: 0.6 }}>◆</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {institutions.map(inst => (
              <Link
                key={inst.name}
                href="/institutions"
                className="parchment-card group text-center"
                style={{ textDecoration: 'none', transition: 'box-shadow 0.2s ease' }}
              >
                <div className="monogram mx-auto mb-4">{inst.initial}</div>
                <h3
                  className="section-heading mb-1"
                  style={{ fontSize: '0.95rem', fontWeight: 700 }}
                >
                  {inst.name}
                </h3>
                <p className="meta-text" style={{ color: 'var(--ink-20)', lineHeight: '1.5', letterSpacing: '0.1em' }}>
                  {inst.desc}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/institutions" className="btn-secondary">
              Voir toutes les institutions
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
