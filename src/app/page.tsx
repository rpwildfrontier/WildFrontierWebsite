import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Wild Frontier RP — Portail Officiel',
}

// Progress ring — gold on dark
function ProgressRing({ pct, size = 80 }: { pct: number; size?: number }) {
  const r = (size - 10) / 2
  const circ = 2 * Math.PI * r
  const offset = circ - (pct / 100) * circ
  return (
    <div className="progress-ring-container" style={{ width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle
          cx={size / 2} cy={size / 2} r={r}
          fill="none"
          stroke="rgba(201,152,42,0.18)"
          strokeWidth={7}
        />
        <circle
          cx={size / 2} cy={size / 2} r={r}
          fill="none"
          stroke="#C9982A"
          strokeWidth={7}
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="progress-ring-label">
        <div style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: '1.05rem',
          color: '#EDE0C4',
        }}>{pct}%</div>
      </div>
    </div>
  )
}

const navItems = [
  {
    href: '/univers',
    label: 'Univers',
    desc: 'Découvrez un monde vivant, réaliste et sans compromis.',
    thumb: 'linear-gradient(135deg,#1E4A2E 0%,#0D2818 100%)',
    icon: '🏔️',
  },
  {
    href: '/reglement',
    label: 'Règlement',
    desc: 'Les lois du comté pour préserver l\'immersion et le respect.',
    thumb: 'linear-gradient(135deg,#4A2E14 0%,#2A1A08 100%)',
    icon: '📖',
  },
  {
    href: '/journal',
    label: 'Journal du Comté',
    desc: 'Toutes les annonces, événements et nouvelles officielles.',
    thumb: 'linear-gradient(135deg,#1A2E4A 0%,#0A1A2E 100%)',
    icon: '📰',
  },
  {
    href: '/archives',
    label: 'Archives',
    desc: 'Accédez aux archives vérifiées et aux anciens numéros.',
    thumb: 'linear-gradient(135deg,#3A2E18 0%,#201A0A 100%)',
    icon: '🗄️',
  },
]

const announcementIcons: Record<number, { bg: string; icon: string }> = {
  0: { bg: 'linear-gradient(135deg,#4A2E14,#2A1A08)', icon: '📖' },
  1: { bg: 'linear-gradient(135deg,#1E3A1E,#0D2010)', icon: '🎪' },
  2: { bg: 'linear-gradient(135deg,#1A2E4A,#0A1A2E)', icon: '💰' },
}

const latestAnnouncements = [
  { date: '6 jours',  title: 'Mise à jour — Règlement v2.3',     excerpt: 'Révision des règles de conflits armés et d\'arrestation.' },
  { date: '7 jours',  title: 'Événement — Foire de Saint-Denis', excerpt: 'Grand rassemblement ce samedi, toute la journée.' },
  { date: '7 jours',  title: 'Nouveau système d\'économie',      excerpt: 'Introduction des billets à ordre et du troc légal.' },
]

export default function HomePage() {
  return (
    <>
      {/* ══ HERO ════════════════════════════════════════════ */}
      <section style={{ backgroundColor: 'var(--bg)', padding: 'clamp(1rem, 3vw, 1.5rem)' }}>
        <div
          className="hero-western"
          style={{
            padding: 'clamp(3rem, 7vw, 4.5rem) 1.5rem',
            textAlign: 'center',
            minHeight: 220,
          }}
        >
          {/* Gold star ornament */}
          <div style={{ fontSize: '1.4rem', color: '#C9982A', marginBottom: '0.65rem', opacity: 0.85 }}>✦</div>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.2rem, 8vw, 4.5rem)',
            letterSpacing: '0.08em',
            color: '#EDE0C4',
            lineHeight: 1.05,
            marginBottom: '0.6rem',
            textShadow: '0 2px 12px rgba(0,0,0,0.70)',
          }}>
            WILD FRONTIER RP
          </h1>

          {/* Subtitle with gold decorative lines */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: 10, marginBottom: '1.4rem',
          }}>
            <div style={{ height: '1px', width: 32, background: 'rgba(201,152,42,0.50)' }} />
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.6rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(237,224,196,0.65)',
              margin: 0,
              whiteSpace: 'nowrap',
            }}>
              Le portail officiel de la whitelist
            </p>
            <div style={{ height: '1px', width: 32, background: 'rgba(201,152,42,0.50)' }} />
          </div>

          {/* CTA pill — gold border, dark glass bg */}
          <a href="/candidatures" style={{
            display: 'inline-block',
            fontFamily: 'var(--font-body)',
            fontSize: '0.68rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#EDE0C4',
            border: '1px solid rgba(201,152,42,0.45)',
            borderRadius: 9999,
            padding: '9px 24px',
            textDecoration: 'none',
            background: 'rgba(13,8,4,0.55)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            transition: 'border-color 0.2s, background 0.2s',
          }}>
            L&apos;expérience western immersive
          </a>
        </div>
      </section>

      {/* ══ QUICK ACTIONS (desktop only) ═══════════════════ */}
      <section
        className="hidden md:block"
        style={{ backgroundColor: 'var(--bg)', padding: '0 clamp(1rem,3vw,1.5rem) 1rem' }}
      >
        <div style={{ display: 'flex', gap: 10 }}>
          <Link href="/reglement" className="quick-action-card" style={{ textDecoration: 'none' }}>
            <span style={{ fontSize: '1.1rem' }}>📖</span>
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.07em', textTransform: 'uppercase',
              color: 'var(--fg)', flex: 1,
            }}>Règlement</span>
            <span style={{ color: 'var(--fg-25)' }}>›</span>
          </Link>
          <Link href="/candidatures" className="quick-action-card primary" style={{ textDecoration: 'none' }}>
            <span style={{ fontSize: '1.1rem' }}>🤠</span>
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.07em', textTransform: 'uppercase',
              color: '#0D0804', flex: 1,
            }}>Candidater</span>
            <span style={{ color: 'rgba(13,8,4,0.50)' }}>›</span>
          </Link>
          <Link href="https://discord.gg/" className="quick-action-card" style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
            <svg width="18" height="18" viewBox="0 0 71 55" fill="#7289DA">
              <path d="M60.1 4.9A58.5 58.5 0 0 0 45.5.4a40 40 0 0 0-1.8 3.6 54 54 0 0 0-16.4 0A40 40 0 0 0 25.6.4 58.3 58.3 0 0 0 11 4.9C1.6 19 -.9 32.7.3 46.3a59 59 0 0 0 17.9 9 42.7 42.7 0 0 0 3.7-6 38.2 38.2 0 0 1-5.8-2.8l1.4-1.1a42 42 0 0 0 35.9 0l1.4 1.1a38.3 38.3 0 0 1-5.8 2.8 42.6 42.6 0 0 0 3.7 6 58.8 58.8 0 0 0 17.9-9C72 30.4 68.8 16.8 60.1 4.9ZM23.7 38a6.7 6.7 0 0 1-6.3-7 6.7 6.7 0 0 1 6.3-7 6.7 6.7 0 0 1 6.3 7 6.7 6.7 0 0 1-6.3 7Zm23.6 0a6.7 6.7 0 0 1-6.3-7 6.7 6.7 0 0 1 6.3-7 6.7 6.7 0 0 1 6.3 7 6.7 6.7 0 0 1-6.3 7Z"/>
            </svg>
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.07em', textTransform: 'uppercase',
              color: 'var(--fg)', flex: 1,
            }}>Discord</span>
            <span style={{ color: 'var(--fg-25)' }}>›</span>
          </Link>
        </div>
      </section>

      {/* ══ MAIN CONTENT GRID ═══════════════════════════════ */}
      <section style={{
        backgroundColor: 'var(--bg)',
        padding: 'clamp(0.75rem,2vw,1rem) clamp(1rem,3vw,1.5rem) clamp(1.5rem,4vw,2rem)',
      }}>
        <div
          style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.3fr) minmax(0,1fr)', gap: 12 }}
          className="grid-responsive-content"
        >

          {/* LEFT COLUMN — navigation list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div className="nav-list-card">
              {navItems.map(item => (
                <Link key={item.href} href={item.href} className="nav-list-item">
                  <div
                    className="nav-list-icon"
                    style={{ background: item.thumb, border: 'none', fontSize: '1.4rem' }}
                  >
                    {item.icon}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      fontSize: '0.88rem',
                      color: 'var(--fg)',
                      marginBottom: 2,
                    }}>{item.label}</div>
                    <div style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.72rem',
                      color: 'var(--fg-60)',
                      lineHeight: 1.4,
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                    }}>{item.desc}</div>
                  </div>
                  <span className="nav-list-arrow">›</span>
                </Link>
              ))}
            </div>

            {/* Mini cards: FAQ + Contact */}
            <div style={{ display: 'flex', gap: 10 }}>
              <Link href="/faq" className="mini-card">
                <div style={{
                  width: 38, height: 38, borderRadius: '50%',
                  background: 'linear-gradient(135deg,#C9982A,#9A7018)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.1rem', flexShrink: 0,
                }}>❓</div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700, fontSize: '0.82rem', color: 'var(--fg)',
                  }}>FAQ</div>
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.68rem', color: 'var(--fg-40)',
                  }}>Questions fréquentes</div>
                </div>
                <span style={{ color: 'rgba(237,224,196,0.22)', fontSize: '1rem' }}>›</span>
              </Link>
              <Link href="/contact" className="mini-card">
                <div style={{
                  width: 38, height: 38, borderRadius: '50%',
                  background: 'linear-gradient(135deg,#2E5A4A,#1A3A2E)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.1rem', flexShrink: 0,
                }}>✉️</div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700, fontSize: '0.82rem', color: 'var(--fg)',
                  }}>Contact</div>
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.68rem', color: 'var(--fg-40)',
                  }}>Nous contacter</div>
                </div>
                <span style={{ color: 'rgba(237,224,196,0.22)', fontSize: '1rem' }}>›</span>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN — candidature + annonces */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>

            {/* Candidature card — dark */}
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 20,
              padding: '16px 14px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.45)',
            }}>
              <div style={{
                display: 'flex', alignItems: 'center',
                justifyContent: 'space-between', marginBottom: 14,
              }}>
                <div style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.65rem', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: 'var(--fg-40)',
                }}>
                  Ma candidature
                </div>
                {/* "En cours" badge */}
                <span style={{
                  background: 'rgba(61,158,61,0.15)',
                  color: '#3D9E3D',
                  fontSize: '0.55rem',
                  fontWeight: 700,
                  letterSpacing: '0.07em',
                  textTransform: 'uppercase',
                  padding: '3px 8px',
                  borderRadius: 9999,
                  border: '1px solid rgba(61,158,61,0.25)',
                }}>
                  En cours
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
                <ProgressRing pct={70} size={80} />
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600, fontSize: '0.78rem', color: 'var(--fg)',
                  }}>Étape 3 sur 5</div>
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.68rem', color: 'var(--fg-60)',
                  }}>Entretien en cours</div>
                </div>
                {/* "Voir ma candidature" — gold fill small */}
                <Link href="/espace-joueur" style={{
                  display: 'block', width: '100%', textAlign: 'center',
                  background: 'var(--gold)',
                  border: '1px solid var(--gold)',
                  borderRadius: 10,
                  padding: '9px 12px',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.07em',
                  textTransform: 'uppercase',
                  color: '#0D0804',
                  transition: 'background 0.18s',
                }}>
                  Voir ma candidature
                </Link>
              </div>
            </div>

            {/* Announcements card — dark */}
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 20,
              padding: '16px 14px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.45)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
                <span style={{ fontSize: '0.9rem' }}>📣</span>
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.65rem', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: 'var(--fg-40)',
                }}>Dernières annonces</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {latestAnnouncements.map((a, i) => (
                  <div
                    key={a.title}
                    style={{
                      display: 'flex', alignItems: 'flex-start', gap: 10,
                      padding: '10px 0',
                      borderBottom: i < latestAnnouncements.length - 1
                        ? '1px solid rgba(201,152,42,0.08)'
                        : 'none',
                    }}
                  >
                    <div style={{
                      width: 38, height: 38, borderRadius: 10,
                      background: announcementIcons[i].bg,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1rem', flexShrink: 0,
                    }}>
                      {announcementIcons[i].icon}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{
                        display: 'flex', alignItems: 'baseline',
                        justifyContent: 'space-between', gap: 6, marginBottom: 2,
                      }}>
                        <span style={{
                          fontFamily: 'var(--font-heading)',
                          fontWeight: 700, fontSize: '0.75rem',
                          color: 'var(--fg)', lineHeight: 1.3, flex: 1,
                        }}>{a.title}</span>
                        <span style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.60rem', color: 'var(--fg-40)', flexShrink: 0,
                        }}>{a.date}</span>
                      </div>
                      <div style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.68rem', color: 'var(--fg-60)', lineHeight: 1.4,
                      }}>{a.excerpt}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/journal" style={{
                display: 'block', textAlign: 'center', marginTop: 12,
                background: 'rgba(201,152,42,0.08)',
                border: '1px solid rgba(201,152,42,0.18)',
                borderRadius: 10, padding: '8px',
                textDecoration: 'none',
                fontFamily: 'var(--font-body)',
                fontSize: '0.62rem', fontWeight: 700,
                letterSpacing: '0.07em', textTransform: 'uppercase',
                color: 'var(--gold)',
                transition: 'background 0.18s',
              }}>
                Voir toutes les annonces →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ══ INSTITUTIONS (desktop only) ════════════════════ */}
      <section
        className="hidden md:block py-16"
        style={{ backgroundColor: 'var(--bg-section)', borderTop: '1px solid var(--border)' }}
      >
        <div className="container-wide text-center">
          <div className="label-display mb-2" style={{ color: 'var(--gold)' }}>Structure du comté</div>
          <h2 className="section-heading" style={{ fontSize: 'clamp(1.4rem,3vw,2rem)' }}>Les Institutions</h2>
          <div style={{
            width: 40, height: '2px',
            background: 'var(--gold)',
            margin: '1rem auto 2rem',
            borderRadius: 1, opacity: 0.5,
          }} />
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
              <Link
                key={inst.name}
                href="/institutions"
                className="parchment-card text-center"
                style={{ textDecoration: 'none' }}
              >
                <div className="monogram mx-auto mb-2">{inst.initial}</div>
                <h3 className="section-heading mb-1" style={{ fontSize: '0.85rem' }}>{inst.name}</h3>
                <p className="meta-text" style={{ fontSize: '0.72rem' }}>{inst.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
