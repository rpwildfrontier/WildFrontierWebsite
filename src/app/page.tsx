import type { Metadata } from 'next'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export const metadata: Metadata = {
  title: 'Wild Frontier RP — Gazette du Comté',
}

// Static announcements (fallback / seed data)
const latestArticles = [
  {
    date: '24 mai 1887',
    title: 'Assemblée extraordinaire du conseil municipal',
    excerpt: 'Le maire Harlan Webb convoque une réunion d\'urgence vendredi à l\'hôtel de ville.',
  },
  {
    date: '23 mai 1887',
    title: 'Procès retentissant au tribunal du comté',
    excerpt: 'Le juge Montgomery préside l\'affaire de vol de bétail agitant la région depuis mi-avril.',
  },
  {
    date: '22 mai 1887',
    title: 'Candidatures pour adjoint au shérif',
    excerpt: 'Le bureau du shérif ouvre les candidatures jusqu\'au 30 mai. Certificat de moralité requis.',
  },
]

const navCards = [
  { href: '/univers',   icon: '🌵', letter: 'U', title: 'Univers',              desc: 'Lore, histoire & territoire' },
  { href: '/reglement', icon: '📜', letter: 'R', title: 'Règlement',            desc: 'Règles du serveur & charte RP' },
  { href: '/journal',   icon: '📰', letter: 'J', title: 'Journal du Comté',     desc: 'Nouvelles, annonces & gazette' },
  { href: '/archives',  icon: '🗂️', letter: 'A', title: 'Archives',             desc: 'Actes, registres & documents' },
  { href: '/faq',       icon: '❓', letter: 'F', title: 'F.A.Q.',               desc: 'Questions fréquentes' },
  { href: '/contact',   icon: '✉️', letter: 'C', title: 'Contact',              desc: 'Nous écrire' },
]

// SVG Progress Ring component
function ProgressRing({ pct }: { pct: number }) {
  const radius = 28
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (pct / 100) * circumference

  return (
    <svg width="70" height="70" viewBox="0 0 70 70" style={{ flexShrink: 0 }}>
      <circle
        className="progress-ring-bg"
        cx="35" cy="35" r={radius}
        style={{ transform: 'rotate(-90deg)', transformOrigin: '35px 35px' }}
      />
      <circle
        className="progress-ring-fill"
        cx="35" cy="35" r={radius}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        style={{ transform: 'rotate(-90deg)', transformOrigin: '35px 35px' }}
      />
      <text
        x="35" y="40"
        textAnchor="middle"
        style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.9rem', fill: '#F0DDB8' }}
      >
        {pct}%
      </text>
    </svg>
  )
}

export default async function HomePage() {
  const session = await getServerSession(authOptions)
  const user = session?.user as { id?: string; isStaff?: boolean; isJoueurValide?: boolean; name?: string | null; image?: string | null } | undefined

  return (
    <>
      {/* ══ HERO ═════════════════════════════════════════════ */}
      <section className="western-hero" style={{ padding: 'clamp(3rem, 8vw, 5rem) 0', minHeight: 220 }}>
        <div className="container-narrow text-center">

          {/* Star ornament */}
          <div style={{ color: 'var(--gold)', fontSize: '1.4rem', marginBottom: '0.5rem', lineHeight: 1 }}>
            ✦
          </div>

          {/* Title */}
          <h1 style={{
            fontFamily:   'var(--font-display)',
            fontWeight:   400,
            fontSize:     'clamp(2.2rem, 7vw, 4rem)',
            letterSpacing: '0.08em',
            color:        '#F0DDB8',
            lineHeight:   1.15,
            marginBottom: '0.75rem',
            textShadow:   '0 2px 12px rgba(0,0,0,0.6)',
          }}>
            WILD FRONTIER RP
          </h1>

          {/* Subtitle with flanking rules */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: '1.5rem' }}>
            <div style={{ flex: 1, maxWidth: 60, height: 1, background: 'rgba(200,150,60,0.4)' }} />
            <span style={{
              fontFamily:    'var(--font-body)',
              fontSize:      '0.62rem',
              fontWeight:    600,
              letterSpacing: '0.18em',
              color:         'rgba(200,150,60,0.9)',
              textTransform: 'uppercase' as const,
              whiteSpace:    'nowrap' as const,
            }}>
              LE PORTAIL OFFICIEL DE LA WHITELIST
            </span>
            <div style={{ flex: 1, maxWidth: 60, height: 1, background: 'rgba(200,150,60,0.4)' }} />
          </div>

          {/* CTA outlined */}
          <Link
            href="/candidatures"
            style={{
              display:       'inline-flex',
              alignItems:    'center',
              gap:           8,
              border:        '1px solid rgba(200,150,60,0.6)',
              color:         '#C8963E',
              fontFamily:    'var(--font-body)',
              fontSize:      '0.68rem',
              fontWeight:    600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase' as const,
              padding:       '8px 20px',
              borderRadius:  3,
              textDecoration: 'none',
              transition:    'background 0.18s, color 0.18s',
            }}
          >
            L&apos;EXPÉRIENCE WESTERN IMMERSIVE
          </Link>

        </div>
      </section>

      {/* ══ MAIN CONTENT ════════════════════════════════════ */}
      <div className="container-wide" style={{ padding: '12px clamp(0.75rem, 3vw, 2.5rem)', paddingBottom: '2rem' }}>
        <div className="home-grid">

          {/* ── LEFT COLUMN — nav cards ───────────────────── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div className="label-display" style={{ color: 'var(--gold)', marginBottom: 4, paddingBottom: 6, borderBottom: '1px solid var(--rule)' }}>
              Navigation
            </div>

            {navCards.map(card => (
              <Link key={card.href} href={card.href} className="nav-card-western">
                {/* Icon square */}
                <div className="nav-card-icon">
                  <span style={{ fontFamily: 'var(--font-cinzel)', fontWeight: 700, fontSize: '1rem' }}>
                    {card.letter}
                  </span>
                </div>

                {/* Text */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontFamily:    'var(--font-cinzel)',
                    fontWeight:    600,
                    fontSize:      '0.88rem',
                    color:         '#F0DDB8',
                    letterSpacing: '0.04em',
                    marginBottom:  2,
                    whiteSpace:    'nowrap' as const,
                    overflow:      'hidden',
                    textOverflow:  'ellipsis',
                  }}>
                    {card.title}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontSize:   '0.72rem',
                    color:      '#9A7A4A',
                    lineHeight: 1.4,
                  }}>
                    {card.desc}
                  </div>
                </div>

                {/* Arrow */}
                <span style={{ color: 'var(--gold)', fontSize: '1.1rem', flexShrink: 0, lineHeight: 1 }}>›</span>
              </Link>
            ))}
          </div>

          {/* ── RIGHT COLUMN ─────────────────────────────── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>

            {/* Candidature card */}
            {user ? (
              /* ── User logged in — show progress ── */
              <div style={{
                background:   '#2A1508',
                border:       '1px solid rgba(200,150,60,0.25)',
                borderRadius: 6,
                padding:      14,
              }}>
                {/* Header row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                  <span className="label-display" style={{ color: 'var(--gold)' }}>MA CANDIDATURE</span>
                  <span style={{
                    fontFamily:    'var(--font-body)',
                    fontSize:      '0.55rem',
                    fontWeight:    700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase' as const,
                    background:    '#1A4020',
                    color:         '#5ABF50',
                    padding:       '2px 7px',
                    borderRadius:  2,
                  }}>
                    EN COURS
                  </span>
                </div>

                {/* Progress ring + step info */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <ProgressRing pct={70} />
                  <div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: '#F0DDB8', fontWeight: 600, marginBottom: 2 }}>
                      Étape 3 sur 5
                    </div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', color: '#9A7A4A' }}>
                      Entretien en cours
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <Link href="/espace-joueur" style={{
                  display:       'block',
                  width:         '100%',
                  textAlign:     'center',
                  background:    '#C8963E',
                  color:         '#1A0E05',
                  fontFamily:    'var(--font-body)',
                  fontSize:      '0.62rem',
                  fontWeight:    700,
                  letterSpacing: '0.07em',
                  textTransform: 'uppercase' as const,
                  padding:       '8px',
                  borderRadius:  4,
                  textDecoration: 'none',
                }}>
                  VOIR MA CANDIDATURE
                </Link>
              </div>
            ) : (
              /* ── No session — show join CTA ── */
              <div style={{
                background:   '#2A1508',
                border:       '1px solid rgba(200,150,60,0.25)',
                borderRadius: 6,
                padding:      14,
              }}>
                <div className="label-display" style={{ color: 'var(--gold)', marginBottom: 8 }}>CANDIDATER</div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: '#9A7A4A', marginBottom: 12, lineHeight: 1.55 }}>
                  Whitelist strict · RP dur &amp; organique<br />
                  Rejoignez le comté après examen de dossier.
                </p>
                <Link href="/candidatures" style={{
                  display:       'block',
                  width:         '100%',
                  textAlign:     'center',
                  background:    '#C8963E',
                  color:         '#1A0E05',
                  fontFamily:    'var(--font-body)',
                  fontSize:      '0.62rem',
                  fontWeight:    700,
                  letterSpacing: '0.07em',
                  textTransform: 'uppercase' as const,
                  padding:       '8px',
                  borderRadius:  4,
                  textDecoration: 'none',
                }}>
                  🤠 DÉPOSER MA CANDIDATURE
                </Link>
              </div>
            )}

            {/* Announcements card */}
            <div style={{
              background:   '#2A1508',
              border:       '1px solid rgba(200,150,60,0.15)',
              borderRadius: 6,
              padding:      14,
            }}>
              <div className="label-display" style={{ color: 'var(--gold)', marginBottom: 10, paddingBottom: 8, borderBottom: '1px solid rgba(200,150,60,0.15)' }}>
                DERNIÈRES ANNONCES
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {latestArticles.map((art, i) => (
                  <div
                    key={art.title}
                    style={{
                      paddingTop:    i > 0 ? 10 : 0,
                      paddingBottom: i < latestArticles.length - 1 ? 10 : 0,
                      borderBottom:  i < latestArticles.length - 1 ? '1px solid rgba(200,150,60,0.1)' : 'none',
                    }}
                  >
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.60rem', color: '#9A7A4A', marginBottom: 2, letterSpacing: '0.06em', textTransform: 'uppercase' as const }}>
                      {art.date}
                    </div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', fontWeight: 700, color: '#F0DDB8', marginBottom: 3, lineHeight: 1.35 }}>
                      {art.title}
                    </div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', color: '#9A7A4A', lineHeight: 1.45, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' as const }}>
                      {art.excerpt}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 10, paddingTop: 8, borderTop: '1px solid rgba(200,150,60,0.1)' }}>
                <Link href="/journal" style={{ fontFamily: 'var(--font-body)', fontSize: '0.62rem', fontWeight: 600, color: 'var(--gold)', letterSpacing: '0.06em', textTransform: 'uppercase' as const, textDecoration: 'none' }}>
                  VOIR TOUTES LES ANNONCES →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
