import type { Metadata } from 'next'
import Link from 'next/link'
import {
  MountainIcon, ScrollIcon, NewspaperIcon, BoxIcon,
  BookIcon, HatIcon, DiscordIcon, QuestionIcon, MailIcon,
  MegaphoneIcon,
} from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Wild Frontier RP — Portail Officiel',
}

// Progress ring — tarnished gold on light parchment
function ProgressRing({ pct, size = 72 }: { pct: number; size?: number }) {
  const r = (size - 10) / 2
  const circ = 2 * Math.PI * r
  const offset = circ - (pct / 100) * circ
  return (
    <div className="progress-ring-container" style={{ width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle
          cx={size / 2} cy={size / 2} r={r}
          fill="none"
          stroke="rgba(139,105,20,0.14)"
          strokeWidth={7}
        />
        <circle
          cx={size / 2} cy={size / 2} r={r}
          fill="none"
          stroke="#8B6914"
          strokeWidth={7}
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="progress-ring-label">
        <div style={{
          fontFamily: 'var(--font-cinzel)',
          fontWeight: 700,
          fontSize: '1.05rem',
          color: 'var(--ink)',
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
    IconComponent: MountainIcon,
  },
  {
    href: '/reglement',
    label: 'Règlement',
    desc: 'Les lois du comté pour préserver l\'immersion et le respect.',
    IconComponent: ScrollIcon,
  },
  {
    href: '/journal',
    label: 'Journal du Comté',
    desc: 'Toutes les annonces, événements et nouvelles officielles.',
    IconComponent: NewspaperIcon,
  },
  {
    href: '/archives',
    label: 'Archives',
    desc: 'Accédez aux archives vérifiées et aux anciens numéros.',
    IconComponent: BoxIcon,
  },
]

const announcementDots = [
  { border: 'rgba(122,30,24,0.40)', bg: 'var(--seal-lt)' },   // seal red
  { border: 'rgba(42,110,42,0.40)', bg: 'var(--green-dim)' },  // green
  { border: 'rgba(139,105,20,0.40)', bg: 'var(--gold-tint)' }, // gold
]

const latestAnnouncements = [
  { date: '6j', title: 'Mise à jour — Règlement v2.3',     excerpt: 'Révision des règles de conflits armés et d\'arrestation.' },
  { date: '7j', title: 'Événement — Foire de Saint-Denis', excerpt: 'Grand rassemblement ce samedi, toute la journée.' },
  { date: '7j', title: 'Nouveau système d\'économie',      excerpt: 'Introduction des billets à ordre et du troc légal.' },
]

export default function HomePage() {
  return (
    <>
      {/* ══ HERO ════════════════════════════════════════════ */}
      <section style={{ backgroundColor: 'var(--bg)', padding: 'clamp(1rem, 3vw, 1.5rem)' }}>
        <div
          className="hero-western"
          style={{
            padding: 'clamp(3.5rem, 8vw, 5rem) 1.5rem',
            textAlign: 'center',
            minHeight: 260,
          }}
        >
          {/* Gold star ornament — SVG */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="#D4AA20">
              <path d="M8 0L9.8 5.5H16L11 9L13 14.5L8 11L3 14.5L5 9L0 5.5H6.2Z"/>
            </svg>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-cinzel)',
            fontSize: 'clamp(2.4rem, 8vw, 5rem)',
            fontWeight: 700,
            letterSpacing: '0.06em',
            color: '#FAF5EC',
            lineHeight: 1.05,
            marginBottom: '0.75rem',
            textShadow: '0 2px 14px rgba(0,0,0,0.55)',
          }}>
            WILD FRONTIER RP
          </h1>

          {/* Subtitle with gold decorative lines */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: 10, marginBottom: '1.5rem',
          }}>
            <div style={{ height: '1px', width: 28, background: 'rgba(212,170,32,0.45)' }} />
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.58rem',
              fontWeight: 700,
              letterSpacing: '0.20em',
              textTransform: 'uppercase',
              color: 'rgba(250,245,236,0.65)',
              margin: 0,
              whiteSpace: 'nowrap',
            }}>
              Le portail officiel de la whitelist
            </p>
            <div style={{ height: '1px', width: 28, background: 'rgba(212,170,32,0.45)' }} />
          </div>

          {/* CTA — gold border, dark glass bg, near-square */}
          <Link href="/candidatures" style={{
            display: 'inline-block',
            fontFamily: 'var(--font-body)',
            fontSize: '0.68rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#FAF5EC',
            border: '1px solid rgba(212,170,32,0.40)',
            borderRadius: 3,
            padding: '9px 24px',
            textDecoration: 'none',
            background: 'rgba(10,6,2,0.50)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            transition: 'border-color 0.2s, background 0.2s',
          }}>
            Déposer ma candidature →
          </Link>
        </div>
      </section>

      {/* ══ QUICK ACTIONS (desktop only) ═══════════════════ */}
      <section
        className="hidden md:block"
        style={{ backgroundColor: 'var(--bg)', padding: '0 clamp(1rem,3vw,1.5rem) 1rem' }}
      >
        <div style={{ display: 'flex', gap: 10 }}>
          <Link href="/reglement" className="quick-action-card">
            <BookIcon size={18} color="var(--ink-40)" />
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.07em', textTransform: 'uppercase',
              color: 'var(--ink)', flex: 1,
            }}>Règlement</span>
            <span style={{ color: 'var(--ink-20)' }}>›</span>
          </Link>
          <Link href="/candidatures" className="quick-action-card primary">
            <HatIcon size={18} color="#FAF5EC" />
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.07em', textTransform: 'uppercase',
              color: '#FAF5EC', flex: 1,
            }}>Candidater</span>
            <span style={{ color: 'rgba(250,245,236,0.55)' }}>›</span>
          </Link>
          <Link href="https://discord.gg/" className="quick-action-card" target="_blank" rel="noopener noreferrer">
            <DiscordIcon size={18} />
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.07em', textTransform: 'uppercase',
              color: 'var(--ink)', flex: 1,
            }}>Discord</span>
            <span style={{ color: 'var(--ink-20)' }}>›</span>
          </Link>
        </div>
      </section>

      {/* ══ MAIN CONTENT GRID ═══════════════════════════════ */}
      <section style={{
        backgroundColor: 'var(--bg)',
        padding: 'clamp(0.75rem,2vw,1rem) clamp(1rem,3vw,1.5rem) clamp(1.5rem,4vw,2rem)',
      }}>
        <div
          style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.4fr) minmax(0,1fr)', gap: 14 }}
          className="grid-responsive-content"
        >

          {/* LEFT COLUMN — navigation list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div className="nav-list-card">
              {/* Dossier header */}
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '10px 20px', borderBottom: '1px solid var(--rule)',
              }}>
                <span style={{
                  fontFamily: 'var(--font-body)', fontSize: '0.58rem', fontWeight: 700,
                  letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-40)',
                }}>Dossiers du comté</span>
                <span style={{
                  fontFamily: 'var(--font-body)', fontSize: '0.62rem',
                  color: 'var(--ink-40)',
                }}>4 sections</span>
              </div>

              {navItems.map(item => (
                <Link key={item.href} href={item.href} className="nav-list-item">
                  <div className="nav-list-icon">
                    <item.IconComponent size={22} color="var(--gold)" />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      fontSize: '0.90rem',
                      color: 'var(--ink)',
                      marginBottom: 2,
                    }}>{item.label}</div>
                    <div style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.70rem',
                      color: 'var(--ink-60)',
                      lineHeight: 1.5,
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
                  width: 36, height: 36, borderRadius: 4,
                  background: 'var(--bg-tinted)', border: '1px solid var(--rule)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}><QuestionIcon size={18} color="var(--gold)" /></div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700, fontSize: '0.82rem', color: 'var(--ink)',
                  }}>FAQ</div>
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.65rem', color: 'var(--ink-40)',
                  }}>Questions fréquentes</div>
                </div>
                <span style={{ color: 'var(--ink-20)', fontSize: '1rem' }}>›</span>
              </Link>
              <Link href="/contact" className="mini-card">
                <div style={{
                  width: 36, height: 36, borderRadius: 4,
                  background: 'var(--bg-tinted)', border: '1px solid var(--rule)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}><MailIcon size={18} color="var(--gold)" /></div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700, fontSize: '0.82rem', color: 'var(--ink)',
                  }}>Contact</div>
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.65rem', color: 'var(--ink-40)',
                  }}>Nous contacter</div>
                </div>
                <span style={{ color: 'var(--ink-20)', fontSize: '1rem' }}>›</span>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN — candidature + annonces */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>

            {/* Candidature card */}
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--rule)',
              borderRadius: 6,
              padding: 16,
              boxShadow: 'var(--shadow-card)',
            }}>
              <div style={{
                display: 'flex', alignItems: 'center',
                justifyContent: 'space-between', marginBottom: 14,
              }}>
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.58rem', fontWeight: 700,
                  letterSpacing: '0.18em', textTransform: 'uppercase',
                  color: 'var(--ink-40)',
                }}>
                  Ma candidature
                </span>
                <span className="registry-badge registry-badge-active">En cours</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
                <ProgressRing pct={70} size={72} />
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700, fontSize: '0.82rem', color: 'var(--ink)',
                  }}>Étape 3 sur 5</div>
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.70rem', color: 'var(--ink-60)',
                  }}>Entretien en cours</div>
                </div>
                <Link href="/espace-joueur" className="btn-gold" style={{
                  width: '100%', justifyContent: 'center', padding: '9px 12px', fontSize: '0.65rem',
                }}>
                  Voir le dossier →
                </Link>
              </div>
            </div>

            {/* Announcements card */}
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--rule)',
              borderRadius: 6,
              padding: 16,
              boxShadow: 'var(--shadow-card)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
                <MegaphoneIcon size={14} color="var(--gold)" />
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.58rem', fontWeight: 700,
                  letterSpacing: '0.18em', textTransform: 'uppercase',
                  color: 'var(--ink-40)',
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
                        ? '1px solid var(--rule)'
                        : 'none',
                    }}
                  >
                    <div style={{
                      width: 8, height: 8, borderRadius: 2, marginTop: 5,
                      background: announcementDots[i].bg,
                      border: `1px solid ${announcementDots[i].border}`,
                      flexShrink: 0,
                    }} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{
                        display: 'flex', alignItems: 'baseline',
                        justifyContent: 'space-between', gap: 6, marginBottom: 2,
                      }}>
                        <span style={{
                          fontFamily: 'var(--font-heading)',
                          fontWeight: 700, fontSize: '0.78rem',
                          color: 'var(--ink)', lineHeight: 1.3, flex: 1,
                        }}>{a.title}</span>
                        <span style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.60rem', color: 'var(--ink-40)', flexShrink: 0,
                        }}>{a.date}</span>
                      </div>
                      <div style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.68rem', color: 'var(--ink-60)', lineHeight: 1.4,
                      }}>{a.excerpt}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/journal" style={{
                display: 'block', textAlign: 'center', marginTop: 12,
                fontFamily: 'var(--font-body)',
                fontSize: '0.62rem', fontWeight: 700,
                letterSpacing: '0.10em', textTransform: 'uppercase',
                color: 'var(--gold)', textDecoration: 'none',
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
        style={{ backgroundColor: 'var(--bg-tinted)', borderTop: '1px solid var(--rule-md)' }}
      >
        <div className="container-wide text-center">
          <div className="label-display mb-2" style={{ color: 'var(--gold)' }}>Structure du comté</div>
          <h2 className="section-heading" style={{ fontSize: 'clamp(1.4rem,3vw,2rem)' }}>Les Institutions</h2>
          <div style={{
            width: 40, height: '2px',
            background: 'var(--gold)',
            margin: '1rem auto 2rem',
            opacity: 0.5,
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
                className="parchment-card text-center group"
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
