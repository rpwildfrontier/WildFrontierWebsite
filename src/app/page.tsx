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
    excerpt: 'Sur décision du maire Harlan Webb, une réunion d\'urgence se tiendra vendredi prochain à l\'hôtel de ville afin de délibérer sur les concessions minières accordées dans la vallée nord.',
    author: 'Rédaction',
  },
  {
    category: 'Justice',
    date: '23 mai 1887',
    title: 'Procès retentissant au tribunal du comté',
    excerpt: 'Le juge Montgomery a présidé hier l\'audience concernant l\'affaire de vol de bétail qui a agité la région depuis la mi-avril. Les débats ont duré plus de six heures.',
    author: 'Correspondant judiciaire',
  },
  {
    category: 'Annonce',
    date: '22 mai 1887',
    title: 'Nouvelles candidatures pour le poste d\'adjoint au shérif',
    excerpt: 'Le bureau du shérif informe les citoyens que les candidatures pour le poste d\'adjoint sont ouvertes jusqu\'au 30 mai. Présenter sa demande en personne avec certificat de moralité.',
    author: 'Bureau du Shérif',
  },
]

const features = [
  { n: 'I',   title: 'Soins réels',          text: 'Se faire soigner requiert un médecin joueur présent physiquement. Les blessures s\'aggravent. L\'absence du médecin se ressent dans tout le comté.' },
  { n: 'II',  title: 'Justice joueur',        text: 'Aucun système de wanted automatique. Toute procédure judiciaire est menée par des joueurs en rôle — shérif, juge, procès complet.' },
  { n: 'III', title: 'Information organique', text: 'Pas de notification HUD. Les nouvelles circulent par le bouche-à-oreille, le télégraphe et la gazette papier.' },
  { n: 'IV',  title: 'Économie physique',     text: 'L\'argent n\'existe que si quelqu\'un le détient. Pas de virement à distance. Chaque transaction est un échange animé.' },
  { n: 'V',   title: 'Documents légaux',      text: 'Posséder une terre requiert un acte notarié. Exercer un métier requiert une licence. Chaque action génère une trace exploitable.' },
  { n: 'VI',  title: 'Mort conséquente',      text: 'Pas de respawn arcade. La mort passe par un état de coma. Le retour au jeu dépend d\'une prise en charge médicale réelle.' },
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
      <section style={{
        backgroundColor: 'var(--bg-section)',
        borderBottom: '1px solid rgba(42,54,68,0.14)',
        padding: 'clamp(4rem, 8vw, 7rem) 0',
      }}>
        <div className="container-narrow text-center">

          <div className="label-display mb-5" style={{ color: 'var(--brick)', letterSpacing: '0.16em' }}>
            Whitelist strict · RP Dur & Organique · RedM
          </div>

          <h1 style={{
            fontFamily:  'var(--font-cinzel)',
            fontWeight:  700,
            fontSize:    'clamp(2.6rem, 7vw, 5rem)',
            letterSpacing: '0.06em',
            color:       'var(--fg)',
            lineHeight:  1.1,
            marginBottom: '1.5rem',
          }}>
            Wild Frontier RP
          </h1>

          <p className="body-text mx-auto mb-10" style={{ maxWidth: '36rem', fontSize: '1rem', lineHeight: 1.8, color: 'var(--fg-60)' }}>
            Un serveur RedM à RP dur et organique, ancré dans l&apos;Amérique
            de la fin du XIXe siècle. Aucune mécanique ne remplace
            l&apos;interaction humaine.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
            <Link href="/candidatures" className="btn-primary" style={{ fontSize: '0.78rem', padding: '14px 36px' }}>
              Déposer une candidature
            </Link>
            <Link href="/univers" className="btn-secondary" style={{ fontSize: '0.78rem', padding: '14px 36px' }}>
              Découvrir l&apos;univers
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3" style={{ background: 'var(--bg-card)', border: '1px solid rgba(42,54,68,0.14)', borderRadius: '4px', overflow: 'hidden' }}>
            {[
              { label: 'Whitelist',   value: 'Trois comptes requis' },
              { label: 'Période',     value: 'Amérique, 1886' },
              { label: 'Philosophie', value: 'RP dur & organique' },
            ].map((item, i) => (
              <div key={item.label} className="text-center py-5 px-3"
                style={{ borderLeft: i > 0 ? '1px solid rgba(42,54,68,0.10)' : undefined }}>
                <div className="label-display mb-1.5">{item.label}</div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(0.70rem, 2vw, 0.95rem)', color: 'var(--fg)' }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PITCH ═════════════════════════════════════════════ */}
      <section className="py-20 md:py-28" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="container-narrow">
          <div className="text-center mb-12">
            <div className="label-display mb-3" style={{ color: 'var(--brick)' }}>Ce qui nous différencie</div>
            <h2 className="section-heading" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)' }}>Un monde à part entière</h2>
            <div style={{ width: 48, height: '2px', background: 'var(--sand)', margin: '1rem auto 0', borderRadius: 1 }} />
          </div>

          <div className="pull-quote mb-10">
            <p>&ldquo;Un monde où presque rien d&apos;important ne peut arriver sans intervention humaine.&rdquo;</p>
            <footer className="label-display mt-3" style={{ display: 'block', color: 'var(--fg-40)' }}>
              — Charte fondatrice de Wild Frontier RP
            </footer>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {features.map(f => (
              <div key={f.n} className="accent-card flex gap-5">
                <div className="ornamental-number" style={{ minWidth: '1.4rem', paddingTop: '2px' }}>{f.n}</div>
                <div>
                  <h3 className="section-heading mb-1.5" style={{ fontSize: '0.98rem' }}>{f.title}</h3>
                  <p className="body-text" style={{ fontSize: '0.90rem' }}>{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ JOURNAL ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-28" style={{ backgroundColor: 'var(--bg-section)', borderTop: '1px solid rgba(42,54,68,0.10)', borderBottom: '1px solid rgba(42,54,68,0.10)' }}>
        <div className="container-wide">
          <div className="text-center mb-12">
            <div className="label-display mb-2" style={{ color: 'var(--brick)' }}>Nouvelles du comté</div>
            <h2 className="display-heading" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>La Gazette du Comté</h2>
            <div style={{ width: 48, height: '2px', background: 'var(--sand)', margin: '1rem auto 0', borderRadius: 1 }} />
          </div>

          <div className="newspaper-grid">
            {latestArticles.map(article => (
              <article key={article.title} style={{
                background: 'var(--bg-card)',
                border: '1px solid rgba(42,54,68,0.10)',
                borderRadius: '4px',
                padding: '1.5rem',
              }}>
                <div className="meta-text mb-2" style={{ color: 'var(--brick)' }}>{article.category}</div>
                <h3 className="section-heading mb-2" style={{ fontSize: '1.05rem', lineHeight: 1.35 }}>{article.title}</h3>
                <p className="body-text mb-3" style={{ fontSize: '0.88rem' }}>{article.excerpt}</p>
                <div className="meta-text" style={{ color: 'var(--fg-40)' }}>{article.date} — {article.author}</div>
              </article>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/journal" className="btn-secondary">Consulter toutes les éditions</Link>
          </div>
        </div>
      </section>

      {/* ══ CTA CANDIDATURE ═══════════════════════════════════ */}
      <section className="py-20 md:py-28" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="container-narrow">
          <div className="document-panel text-center">
            <div className="label-display mb-3" style={{ color: 'var(--brick)' }}>Avis officiel</div>
            <h2 className="section-heading mb-4" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)' }}>Rejoindre le Comté</h2>
            <p className="body-text mx-auto mb-7" style={{ maxWidth: '32rem' }}>
              L&apos;accès au territoire est soumis à candidature. Chaque dossier est
              examiné individuellement. La qualité prime sur la quantité.
            </p>

            <div className="inline-block text-left mb-8 px-5 py-4"
              style={{ border: '1px solid rgba(42,54,68,0.12)', backgroundColor: 'var(--bg-section)', borderRadius: '3px' }}>
              <div className="label-display mb-3">Conditions requises</div>
              <ul className="space-y-2">
                {[
                  'Un compte Discord actif et relié',
                  'Un compte Steam ou Rockstar Games relié',
                  'Un compte CFX.re (RedM) relié',
                ].map(cond => (
                  <li key={cond} className="flex items-center gap-3 body-text" style={{ fontSize: '0.90rem' }}>
                    <span style={{ color: 'var(--sand-dk)', fontWeight: 700 }}>✓</span>
                    {cond}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/candidatures" className="btn-primary">Déposer ma candidature</Link>
              <Link href="/reglement"    className="btn-secondary">Lire le règlement</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ INSTITUTIONS ══════════════════════════════════════ */}
      <section className="py-20 md:py-28" style={{ backgroundColor: 'var(--bg-section)', borderTop: '1px solid rgba(42,54,68,0.10)' }}>
        <div className="container-wide">
          <div className="text-center mb-12">
            <div className="label-display mb-2" style={{ color: 'var(--brick)' }}>Structure du comté</div>
            <h2 className="section-heading" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)' }}>Les Institutions</h2>
            <div style={{ width: 48, height: '2px', background: 'var(--sand)', margin: '1.25rem auto 0', borderRadius: 1 }} />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {institutions.map(inst => (
              <Link key={inst.name} href="/institutions" className="parchment-card group text-center" style={{ textDecoration: 'none' }}>
                <div className="monogram mx-auto mb-3">{inst.initial}</div>
                <h3 className="section-heading mb-1" style={{ fontSize: '0.90rem' }}>{inst.name}</h3>
                <p className="meta-text" style={{ lineHeight: 1.5 }}>{inst.desc}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/institutions" className="btn-secondary">Voir toutes les institutions</Link>
          </div>
        </div>
      </section>
    </>
  )
}
