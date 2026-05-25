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
  { n: 'I',   title: 'Soins réels',         text: 'Se faire soigner requiert un médecin joueur présent physiquement. Les blessures s\'aggravent. L\'absence du médecin se ressent dans tout le comté.' },
  { n: 'II',  title: 'Justice joueur',       text: 'Aucun système de wanted automatique. Toute procédure judiciaire est menée par des joueurs en rôle — shérif, juge, procès complet.' },
  { n: 'III', title: 'Information organique', text: 'Pas de notification HUD. Les nouvelles circulent par le bouche-à-oreille, le télégraphe et la gazette papier.' },
  { n: 'IV',  title: 'Économie physique',    text: 'L\'argent n\'existe que si quelqu\'un le détient. Pas de virement à distance. Chaque transaction est un échange animé.' },
  { n: 'V',   title: 'Documents légaux',     text: 'Posséder une terre requiert un acte notarié. Exercer un métier requiert une licence. Chaque action génère une trace exploitable.' },
  { n: 'VI',  title: 'Mort conséquente',     text: 'Pas de respawn arcade. La mort passe par un état de coma. Le retour au jeu dépend d\'une prise en charge médicale réelle.' },
]

const institutions = [
  { initial: 'M', name: 'Mairie',          desc: 'Conseil municipal, décisions & taxes' },
  { initial: 'T', name: 'Tribunal',        desc: 'Juge, procès & verdicts' },
  { initial: 'S', name: 'Shérif',          desc: 'Maintien de l\'ordre & enquêtes' },
  { initial: 'N', name: 'Notariat',        desc: 'Actes, contrats & propriétés' },
  { initial: 'C', name: 'Cabinet médical', desc: 'Soins, diagnostics & certificats' },
  { initial: 'P', name: 'Presse',          desc: 'Journal, chroniques & archives' },
  { initial: 'B', name: 'Banque',          desc: 'Comptes, prêts & coffres' },
  { initial: 'E', name: 'Église',          desc: 'Mariages, obsèques & registres' },
]

export default function HomePage() {
  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section
        className="relative py-28 md:py-40 overflow-hidden"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(200,144,24,0.12) 0%, transparent 70%), linear-gradient(180deg, var(--bg-surface) 0%, var(--bg-base) 100%)',
          borderBottom: '1px solid rgba(120,80,5,0.35)',
        }}
      >
        {/* Diagonal lines texture */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `repeating-linear-gradient(-55deg, transparent, transparent 40px, rgba(120,80,5,0.06) 40px, rgba(120,80,5,0.06) 41px)`,
        }} />

        {/* Corner accents */}
        <div className="absolute top-8 left-8 pointer-events-none" style={{
          width: 48, height: 48,
          borderTop: '1px solid rgba(120,80,5,0.55)',
          borderLeft: '1px solid rgba(120,80,5,0.55)',
        }} />
        <div className="absolute top-8 right-8 pointer-events-none" style={{
          width: 48, height: 48,
          borderTop: '1px solid rgba(120,80,5,0.55)',
          borderRight: '1px solid rgba(120,80,5,0.55)',
        }} />

        <div className="container-narrow relative text-center">
          {/* Eyebrow */}
          <div className="label-display mb-8" style={{ color: 'rgba(140,90,8,0.85)', letterSpacing: '0.4em' }}>
            ✦ &nbsp; Whitelist strict · RP Dur & Organique · RedM &nbsp; ✦
          </div>

          {/* Main title */}
          <h1 className="display-heading mb-6" style={{ fontSize: 'clamp(3rem, 9vw, 6.5rem)', letterSpacing: '0.06em' }}>
            Un monde où<br />
            <span style={{
              fontFamily: 'var(--font-cinzel)',
              background: 'linear-gradient(135deg, #e8a020 0%, #c05820 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              chaque acte
            </span><br />
            laisse une trace
          </h1>

          {/* Subtitle */}
          <p className="body-text mx-auto mb-12" style={{ maxWidth: '38rem', fontSize: '1.15rem', lineHeight: 1.8 }}>
            Wild Frontier RP est un serveur RedM à RP dur et organique, ancré dans
            l&apos;Amérique de la fin du XIXe siècle. Aucune mécanique ne remplace
            l&apos;interaction humaine.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/candidatures" className="btn-primary" style={{ fontSize: '0.75rem', padding: '14px 36px' }}>
              Déposer une candidature
            </Link>
            <Link href="/univers" className="btn-secondary" style={{ fontSize: '0.75rem', padding: '14px 36px' }}>
              Découvrir l&apos;univers
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-0"
            style={{ border: '1px solid rgba(120,80,5,0.28)' }}>
            {[
              { label: 'Whitelist',    value: 'Trois comptes requis' },
              { label: 'Période',      value: 'Amérique, 1886' },
              { label: 'Philosophie',  value: 'RP dur & organique' },
            ].map((item, i) => (
              <div key={item.label} className="text-center py-5 px-2 sm:py-6 sm:px-4"
                style={{ borderLeft: i > 0 ? '1px solid rgba(120,80,5,0.28)' : undefined }}>
                <div className="label-display mb-2" style={{ color: 'rgba(140,90,8,0.88)' }}>{item.label}</div>
                <div className="section-heading" style={{ fontSize: 'clamp(0.7rem, 2vw, 0.95rem)', fontWeight: 600 }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PITCH ═════════════════════════════════════════════ */}
      <section className="py-24 md:py-32" style={{ background: 'linear-gradient(180deg, var(--bg-base) 0%, var(--bg-surface) 100%)' }}>
        <div className="container-narrow">
          <div className="text-center mb-16">
            <div className="label-display mb-4" style={{ color: 'rgba(140,90,8,0.75)', letterSpacing: '0.4em' }}>
              Ce qui nous différencie
            </div>
            <h2 className="section-heading" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
              Un monde à part entière
            </h2>
            <div className="rule-ornament mt-6" style={{ maxWidth: '20rem', margin: '1.5rem auto 0' }}>
              <span style={{ color: 'rgba(140,90,8,0.80)' }}>◆</span>
            </div>
          </div>

          {/* Pull quote */}
          <div className="pull-quote mb-14">
            <p>&ldquo;Un monde où presque rien d&apos;important ne peut arriver sans intervention humaine.&rdquo;</p>
            <footer className="label-display mt-4" style={{ color: 'rgba(140,90,8,0.72)', display: 'block' }}>
              — Charte fondatrice de Wild Frontier RP
            </footer>
          </div>

          {/* Feature grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map(f => (
              <div key={f.n} className="accent-card flex gap-6">
                <div className="ornamental-number" style={{ minWidth: '1.75rem', paddingTop: '2px' }}>{f.n}</div>
                <div>
                  <h3 className="section-heading mb-2" style={{ fontSize: '1.05rem' }}>{f.title}</h3>
                  <p className="body-text" style={{ fontSize: '0.95rem' }}>{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ JOURNAL ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32" style={{
        background: 'linear-gradient(180deg, var(--bg-surface) 0%, var(--bg-base) 100%)',
        borderTop: '1px solid rgba(120,80,5,0.28)',
        borderBottom: '1px solid rgba(120,80,5,0.28)',
      }}>
        <div className="container-wide">
          {/* Masthead */}
          <div className="text-center mb-14 pb-8" style={{ borderBottom: '1px solid rgba(120,80,5,0.30)' }}>
            <div className="label-display mb-3" style={{ color: 'rgba(140,90,8,0.72)', letterSpacing: '0.4em' }}>
              Nouvelles du comté
            </div>
            <h2 className="display-heading" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              La Gazette du Comté
            </h2>
            <div className="label-display mt-3" style={{ color: 'rgba(140,90,8,0.65)' }}>
              Dernières publications — Édition du jour
            </div>
          </div>

          {/* Articles */}
          <div className="newspaper-grid">
            {latestArticles.map(article => (
              <article key={article.title} className="pb-6" style={{ borderBottom: '1px solid rgba(120,80,5,0.22)' }}>
                <div className="meta-text mb-2" style={{ color: 'var(--orange)' }}>{article.category}</div>
                <h3 className="section-heading mb-3" style={{ fontSize: '1.15rem', lineHeight: 1.3 }}>
                  {article.title}
                </h3>
                <p className="body-text mb-4" style={{ fontSize: '0.95rem' }}>{article.excerpt}</p>
                <div className="meta-text" style={{ color: 'rgba(26,14,4,0.72)' }}>
                  {article.date} — {article.author}
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/journal" className="btn-secondary">Consulter toutes les éditions</Link>
          </div>
        </div>
      </section>

      {/* ══ CTA CANDIDATURE ═══════════════════════════════════ */}
      <section className="py-24 md:py-32" style={{ background: 'linear-gradient(180deg, var(--bg-base) 0%, var(--bg-surface) 100%)' }}>
        <div className="container-narrow">
          <div className="document-panel text-center">

            <div className="official-seal mx-auto mb-8"
              style={{ width: '80px', height: '80px', fontSize: '0.55rem', color: 'var(--amber)', borderColor: 'var(--amber)' }}>
              <div className="label-display text-center leading-tight px-2"
                style={{ color: 'var(--amber)', letterSpacing: '0.12em' }}>
                WILD<br />FRONTIER
              </div>
            </div>

            <div className="label-display mb-4" style={{ color: 'rgba(140,90,8,0.85)', letterSpacing: '0.35em' }}>
              Avis officiel
            </div>

            <h2 className="section-heading mb-5" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)' }}>
              Rejoindre le Comté
            </h2>

            <p className="body-text mx-auto mb-8" style={{ maxWidth: '34rem' }}>
              L&apos;accès au territoire est soumis à candidature. Chaque dossier est
              examiné individuellement par le staff. La qualité prime sur la quantité.
            </p>

            {/* Conditions */}
            <div className="inline-block text-left mb-10 px-6 py-5"
              style={{ border: '1px solid rgba(120,80,5,0.35)', backgroundColor: 'rgba(200,144,24,0.04)' }}>
              <div className="label-display mb-4" style={{ color: 'rgba(140,90,8,0.75)' }}>
                Conditions requises pour candidater
              </div>
              <ul className="space-y-2">
                {[
                  'Un compte Discord actif et relié',
                  'Un compte Steam ou Rockstar Games relié',
                  'Un compte CFX.re (RedM) relié',
                ].map(cond => (
                  <li key={cond} className="flex items-center gap-3 body-text" style={{ fontSize: '0.95rem' }}>
                    <span style={{ color: 'var(--amber)', fontFamily: 'var(--font-serif)', fontWeight: 700 }}>✓</span>
                    {cond}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/candidatures" className="btn-primary">Déposer ma candidature</Link>
              <Link href="/reglement"    className="btn-secondary">Lire le règlement d&apos;abord</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ INSTITUTIONS ══════════════════════════════════════ */}
      <section className="py-24 md:py-32"
        style={{ background: 'linear-gradient(180deg, var(--bg-surface) 0%, var(--bg-base) 100%)', borderTop: '1px solid rgba(120,80,5,0.28)' }}>
        <div className="container-wide">
          <div className="text-center mb-14">
            <div className="label-display mb-3" style={{ color: 'rgba(140,90,8,0.75)', letterSpacing: '0.4em' }}>
              Structure du comté
            </div>
            <h2 className="section-heading" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
              Les Institutions
            </h2>
            <div className="rule-ornament mt-6" style={{ maxWidth: '20rem', margin: '1.5rem auto 0' }}>
              <span style={{ color: 'rgba(140,90,8,0.80)' }}>◆</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {institutions.map(inst => (
              <Link key={inst.name} href="/institutions"
                className="parchment-card group text-center"
                style={{ textDecoration: 'none' }}>
                <div className="monogram mx-auto mb-4">{inst.initial}</div>
                <h3 className="section-heading mb-1" style={{ fontSize: '0.95rem' }}>{inst.name}</h3>
                <p className="meta-text" style={{ lineHeight: 1.5 }}>{inst.desc}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/institutions" className="btn-secondary">Voir toutes les institutions</Link>
          </div>
        </div>
      </section>
    </>
  )
}
