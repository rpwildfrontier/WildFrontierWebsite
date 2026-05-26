import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  MountainIcon, ScrollIcon, NewspaperIcon, BoxIcon,
  BookIcon, HatIcon, DiscordIcon, QuestionIcon, MailIcon,
  MegaphoneIcon,
} from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Wild Frontier RP — Portail Officiel',
}

function ProgressRing({ pct, size = 68 }: { pct: number; size?: number }) {
  const r = (size - 10) / 2
  const circ = 2 * Math.PI * r
  const offset = circ - (pct / 100) * circ
  return (
    <div className="progress-ring-container" style={{ width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(139,105,20,0.14)" strokeWidth={6} />
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#8B6914" strokeWidth={6}
          strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={offset} />
      </svg>
      <div className="progress-ring-label">
        <div style={{ fontFamily: 'var(--font-cinzel)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--ink)' }}>{pct}%</div>
      </div>
    </div>
  )
}

const navItems = [
  { href: '/univers',   label: 'Univers',          desc: 'Découvrez un monde vivant, réaliste et sans compromis.', IconComponent: MountainIcon },
  { href: '/reglement', label: 'Règlement',         desc: 'Les lois du comté pour préserver l\'immersion et le respect.', IconComponent: ScrollIcon },
  { href: '/journal',   label: 'Journal du Comté',  desc: 'Toutes les annonces, événements et nouvelles officielles.', IconComponent: NewspaperIcon },
  { href: '/archives',  label: 'Archives',          desc: 'Accédez aux archives vérifiées et aux anciens numéros.', IconComponent: BoxIcon },
]

const announcementDots = [
  { border: 'rgba(122,30,24,0.40)',  bg: 'var(--seal-lt)' },
  { border: 'rgba(42,110,42,0.40)',  bg: 'var(--green-dim)' },
  { border: 'rgba(139,105,20,0.40)', bg: 'var(--gold-tint)' },
]

const latestAnnouncements = [
  { date: '6j', title: 'Mise à jour — Règlement v2.3',     excerpt: 'Révision des règles de conflits armés et d\'arrestation.' },
  { date: '7j', title: 'Événement — Foire de Saint-Denis', excerpt: 'Grand rassemblement ce samedi, toute la journée.' },
  { date: '7j', title: 'Nouveau système d\'économie',      excerpt: 'Introduction des billets à ordre et du troc légal.' },
]

/* ── Reusable double-rule ornament divider ── */
function OrnamentDivider({ label }: { label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <div style={{ flex: 1, borderTop: '2px solid var(--rule-md)', borderBottom: '1px solid var(--rule)', paddingTop: 3 }} />
      <span style={{
        fontFamily: 'var(--font-display)',
        fontSize: '0.58rem',
        letterSpacing: '0.24em',
        textTransform: 'uppercase',
        color: 'var(--ink-40)',
        whiteSpace: 'nowrap',
      }}>
        ✦ &nbsp;{label}&nbsp; ✦
      </span>
      <div style={{ flex: 1, borderTop: '2px solid var(--rule-md)', borderBottom: '1px solid var(--rule)', paddingTop: 3 }} />
    </div>
  )
}

export default function HomePage() {
  const pad = 'clamp(0.75rem, 2vw, 1.2rem)'

  return (
    <>
      {/* ══ GAZETTE MASTHEAD ════════════════════════════════ */}
      <section style={{ backgroundColor: 'var(--bg)', padding: pad, paddingBottom: 0 }}>

        {/* Top rule — thick + thin */}
        <div style={{ borderTop: '3px solid var(--ink)', borderBottom: '1px solid var(--rule-strong)', padding: '3px 0' }} />

        {/* Masthead body */}
        <div style={{
          textAlign: 'center',
          padding: '8px clamp(0.5rem,2vw,1.5rem) 6px',
          borderLeft: '1px solid var(--rule-md)',
          borderRight: '1px solid var(--rule-md)',
        }}>
          {/* Rubric above */}
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(0.48rem, 1.3vw, 0.60rem)',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'var(--ink-40)',
            marginBottom: 8,
          }}>
            Gazette Officielle du Comté de New Austin
          </div>

          {/* Emblem — mix-blend-mode:multiply removes white bg on parchment */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 6 }}>
            <Image
              src="/logoWildFrontier.PNG"
              alt="Wild Frontier RP"
              width={96}
              height={96}
              style={{ objectFit: 'contain', mixBlendMode: 'multiply' }}
              priority
            />
          </div>

          {/* Main title — single line */}
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.7rem, 7.5vw, 4.8rem)',
            fontWeight: 400,
            letterSpacing: '0.04em',
            color: 'var(--ink)',
            lineHeight: 0.95,
            marginBottom: 8,
            whiteSpace: 'nowrap',
          }}>
            Wild Frontier RP
          </h1>

          {/* ✦ rule */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '4px 0' }}>
            <div style={{ flex: 1, height: '1px', background: 'var(--rule-md)' }} />
            <span style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)', fontSize: '0.80rem', lineHeight: 1 }}>✦</span>
            <div style={{ flex: 1, height: '1px', background: 'var(--rule-md)' }} />
          </div>

          {/* Edition tagline */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', alignItems: 'center',
            justifyContent: 'center', gap: '3px 8px',
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(0.42rem, 1.0vw, 0.52rem)',
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'var(--ink-40)',
          }}>
            <span>Fondée l&apos;an du Seigneur 1898</span>
            <span style={{ color: 'var(--rule-strong)' }}>·</span>
            <span>Whitelist stricte · RedM</span>
            <span style={{ color: 'var(--rule-strong)' }}>·</span>
            <span>Comté de New Austin</span>
          </div>
        </div>

        {/* Bottom rule — thin + thick */}
        <div style={{
          borderTop: '1px solid var(--rule-strong)',
          borderBottom: '3px solid var(--ink)',
          padding: '3px 0',
          marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
        }} />
      </section>

      {/* ══ HERO ════════════════════════════════════════════ */}
      <section style={{ backgroundColor: 'var(--bg)', padding: `0 ${pad} clamp(0.5rem, 1.5vw, 0.75rem)` }}>
        <div
          className="hero-western"
          style={{ padding: 'clamp(2.5rem, 6vw, 4rem) 1.5rem clamp(1.5rem, 4vw, 2.5rem)', textAlign: 'center', minHeight: 200 }}
        >
          {/* Chronique label */}
          <div style={{
            display: 'inline-block',
            fontFamily: 'var(--font-display)',
            fontSize: '0.56rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'rgba(212,170,32,0.85)',
            border: '1px solid rgba(212,170,32,0.35)',
            padding: '3px 12px',
            borderRadius: 1,
            marginBottom: '0.9rem',
          }}>
            Chronique du Comté
          </div>

          {/* Atmospheric subtitle — no duplicate title */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: 10, marginBottom: '1.25rem',
          }}>
            <div style={{ height: '1px', width: 22, background: 'rgba(212,170,32,0.35)' }} />
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.58rem',
              letterSpacing: '0.20em',
              textTransform: 'uppercase',
              color: 'rgba(250,245,236,0.55)',
              margin: 0, whiteSpace: 'nowrap',
            }}>
              Amérique du Far West — 1898
            </p>
            <div style={{ height: '1px', width: 22, background: 'rgba(212,170,32,0.35)' }} />
          </div>

          {/* CTA */}
          <Link href="/candidatures" style={{
            display: 'inline-block',
            fontFamily: 'var(--font-display)',
            fontSize: '0.68rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#FAF5EC',
            border: '1px solid rgba(212,170,32,0.45)',
            borderRadius: 1,
            padding: '8px 22px',
            textDecoration: 'none',
            background: 'rgba(10,6,2,0.58)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
          }}>
            Déposer ma candidature →
          </Link>
        </div>
      </section>

      {/* ══ QUICK ACTIONS (desktop only) ═══════════════════ */}
      <section className="hidden md:block" style={{ backgroundColor: 'var(--bg)', padding: `0 ${pad} 0.75rem` }}>
        <div style={{ display: 'flex', gap: 8 }}>
          <Link href="/reglement" className="quick-action-card">
            <BookIcon size={17} color="var(--ink-40)" />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.73rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--ink)', flex: 1 }}>Règlement</span>
            <span style={{ color: 'var(--ink-20)' }}>›</span>
          </Link>
          <Link href="/candidatures" className="quick-action-card primary">
            <HatIcon size={17} color="#FAF5EC" />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.73rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#FAF5EC', flex: 1 }}>Candidater</span>
            <span style={{ color: 'rgba(250,245,236,0.55)' }}>›</span>
          </Link>
          <Link href="https://discord.gg/" className="quick-action-card" target="_blank" rel="noopener noreferrer">
            <DiscordIcon size={17} />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.73rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--ink)', flex: 1 }}>Discord</span>
            <span style={{ color: 'var(--ink-20)' }}>›</span>
          </Link>
        </div>
      </section>

      {/* ══ SECTION DIVIDER ═════════════════════════════════ */}
      <div style={{ padding: `0.5rem ${pad}`, backgroundColor: 'var(--bg)' }}>
        <OrnamentDivider label="Dossiers & Chroniques" />
      </div>

      {/* ══ MAIN CONTENT GRID ═══════════════════════════════ */}
      <section style={{
        backgroundColor: 'var(--bg)',
        padding: `0.5rem ${pad} clamp(1rem, 3vw, 1.5rem)`,
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.4fr) minmax(0,1fr)', gap: 12 }} className="grid-responsive-content">

          {/* LEFT — navigation list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div className="nav-list-card">
              {/* Gazette rubric header */}
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '9px 18px', borderBottom: '2px solid var(--rule-strong)',
                background: 'var(--bg-tinted)',
              }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.70rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>§ Dossiers du comté</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.58rem', color: 'var(--ink-40)' }}>4 rubriques</span>
              </div>

              {navItems.map(item => (
                <Link key={item.href} href={item.href} className="nav-list-item">
                  <div className="nav-list-icon">
                    <item.IconComponent size={20} color="var(--gold)" />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.86rem', letterSpacing: '0.03em',
                      color: 'var(--ink)', marginBottom: 1,
                    }}>{item.label}</div>
                    <div style={{
                      fontFamily: 'var(--font-body)', fontSize: '0.68rem',
                      color: 'var(--ink-60)', lineHeight: 1.45,
                      overflow: 'hidden', display: '-webkit-box',
                      WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
                    }}>{item.desc}</div>
                  </div>
                  <span className="nav-list-arrow">›</span>
                </Link>
              ))}
            </div>

            {/* Mini cards: FAQ + Contact */}
            <div style={{ display: 'flex', gap: 8 }}>
              <Link href="/faq" className="mini-card">
                <div style={{ width: 34, height: 34, borderRadius: 3, background: 'var(--bg-tinted)', border: '1px solid var(--rule-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <QuestionIcon size={17} color="var(--gold)" />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.80rem', color: 'var(--ink)' }}>FAQ</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.62rem', color: 'var(--ink-40)' }}>Questions fréquentes</div>
                </div>
                <span style={{ color: 'var(--ink-20)', fontSize: '0.9rem' }}>›</span>
              </Link>
              <Link href="/contact" className="mini-card">
                <div style={{ width: 34, height: 34, borderRadius: 3, background: 'var(--bg-tinted)', border: '1px solid var(--rule-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MailIcon size={17} color="var(--gold)" />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.80rem', color: 'var(--ink)' }}>Contact</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.62rem', color: 'var(--ink-40)' }}>Nous contacter</div>
                </div>
                <span style={{ color: 'var(--ink-20)', fontSize: '0.9rem' }}>›</span>
              </Link>
            </div>
          </div>

          {/* RIGHT — candidature + annonces */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>

            {/* Candidature card */}
            <div style={{
              background: 'var(--bg-paper)',
              border: '1px solid var(--rule-md)',
              borderTop: '2px solid var(--rule-strong)',
              borderRadius: 4,
              padding: 12,
              boxShadow: 'var(--shadow-card)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-40)' }}>
                  Ma candidature
                </span>
                <span className="registry-badge registry-badge-active">En cours</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <ProgressRing pct={70} size={68} />
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.82rem', color: 'var(--ink)' }}>Étape 3 sur 5</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', color: 'var(--ink-60)' }}>Entretien en cours</div>
                </div>
                <Link href="/espace-joueur" className="btn-gold" style={{ width: '100%', justifyContent: 'center', padding: '8px 12px', fontSize: '0.63rem' }}>
                  Voir le dossier →
                </Link>
              </div>
            </div>

            {/* Announcements card */}
            <div style={{
              background: 'var(--bg-paper)',
              border: '1px solid var(--rule-md)',
              borderTop: '2px solid var(--rule-strong)',
              borderRadius: 4,
              padding: 12,
              boxShadow: 'var(--shadow-card)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 10, borderBottom: '2px solid var(--rule-md)', paddingBottom: 7 }}>
                <MegaphoneIcon size={13} color="var(--gold)" />
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>§ Dernières annonces</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {latestAnnouncements.map((a, i) => (
                  <div key={a.title} style={{
                    display: 'flex', alignItems: 'flex-start', gap: 8,
                    padding: '8px 0',
                    borderBottom: i < latestAnnouncements.length - 1 ? '1px solid var(--rule)' : 'none',
                  }}>
                    <div style={{ width: 7, height: 7, borderRadius: 1, marginTop: 5, background: announcementDots[i].bg, border: `1px solid ${announcementDots[i].border}`, flexShrink: 0 }} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 4, marginBottom: 1 }}>
                        <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.75rem', color: 'var(--ink)', lineHeight: 1.3, flex: 1 }}>{a.title}</span>
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.58rem', color: 'var(--ink-40)', flexShrink: 0 }}>{a.date}</span>
                      </div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', color: 'var(--ink-60)', lineHeight: 1.4 }}>{a.excerpt}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/journal" style={{
                display: 'block', textAlign: 'center', marginTop: 10,
                fontFamily: 'var(--font-display)', fontSize: '0.60rem',
                letterSpacing: '0.10em', textTransform: 'uppercase',
                color: 'var(--gold)', textDecoration: 'none',
              }}>
                Toutes les annonces →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ══ INSTITUTIONS (desktop only) ════════════════════ */}
      <section className="hidden md:block" style={{ backgroundColor: 'var(--bg-tinted)', borderTop: '2px solid var(--rule-md)' }}>
        <div className="container-wide" style={{ padding: '2rem clamp(1rem,3vw,2.5rem)' }}>
          {/* Masthead-style header */}
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ borderTop: '2px solid var(--rule-strong)', borderBottom: '1px solid var(--rule-md)', paddingTop: 3 }} />
            <div style={{ padding: '10px 0 8px', borderLeft: '1px solid var(--rule-md)', borderRight: '1px solid var(--rule-md)', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.56rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--ink-40)', marginBottom: 4 }}>
                Registre du comté
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.3rem, 3vw, 2rem)', letterSpacing: '0.05em', color: 'var(--ink)', lineHeight: 1 }}>
                Les Institutions
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '6px 0 0' }}>
                <div style={{ flex: 1, height: '1px', background: 'var(--rule-md)' }} />
                <span style={{ color: 'var(--gold)', fontSize: '0.65rem', fontFamily: 'var(--font-display)' }}>✦</span>
                <div style={{ flex: 1, height: '1px', background: 'var(--rule-md)' }} />
              </div>
            </div>
            <div style={{ borderTop: '1px solid var(--rule-md)', borderBottom: '2px solid var(--rule-strong)', paddingTop: 3 }} />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { initial: 'M', name: 'Mairie',          desc: 'Conseil municipal & taxes' },
              { initial: 'T', name: 'Tribunal',        desc: 'Juge, procès & verdicts' },
              { initial: 'S', name: 'Shérif',          desc: 'Ordre & enquêtes' },
              { initial: 'N', name: 'Notariat',        desc: 'Actes & contrats' },
              { initial: 'C', name: 'Cabinet médical', desc: 'Soins & certificats' },
              { initial: 'P', name: 'Presse',          desc: 'Journal & archives' },
              { initial: 'B', name: 'Banque',          desc: 'Comptes & prêts' },
              { initial: 'E', name: 'Église',          desc: 'Mariages & registres' },
            ].map(inst => (
              <Link key={inst.name} href="/institutions" style={{
                display: 'block', background: 'var(--bg-paper)',
                border: '1px solid var(--rule-md)', borderRadius: 3,
                padding: '1rem 0.85rem', textAlign: 'center', textDecoration: 'none',
                boxShadow: 'var(--shadow-paper)',
                transition: 'box-shadow 0.2s, border-color 0.2s',
              }}>
                <div className="monogram mx-auto mb-2" style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem' }}>{inst.initial}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.80rem', letterSpacing: '0.03em', color: 'var(--ink)', marginBottom: 3 }}>{inst.name}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', color: 'var(--ink-40)' }}>{inst.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
