import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Wild Frontier RP — Portail Officiel',
}

// SVG circular progress ring
function ProgressRing({ pct, size = 80 }: { pct: number; size?: number }) {
  const r = (size - 10) / 2
  const circ = 2 * Math.PI * r
  const offset = circ - (pct / 100) * circ
  return (
    <div className="progress-ring-container" style={{ width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#F0E8D5" strokeWidth={7} />
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#E07820" strokeWidth={7}
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="progress-ring-label">
        <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--fg)' }}>{pct}%</div>
      </div>
    </div>
  )
}

const navItems = [
  { href: '/univers',   label: 'Univers',         desc: 'Découvrez un monde vivant, réaliste et sans compromis.',         thumb: 'linear-gradient(135deg,#5C8A6A 0%,#2E5A3E 100%)', icon: '🏔️' },
  { href: '/reglement', label: 'Règlement',        desc: 'Les lois du comté pour préserver l\'immersion et le respect.',   thumb: 'linear-gradient(135deg,#8A6A3E 0%,#5A3E1E 100%)', icon: '📖' },
  { href: '/journal',   label: 'Journal du Comté', desc: 'Toutes les annonces, événements et nouvelles officielles.',      thumb: 'linear-gradient(135deg,#4A6A8A 0%,#2E4A5A 100%)', icon: '📰' },
  { href: '/archives',  label: 'Archives',         desc: 'Accédez aux archives vérifiées et aux anciens numéros.',         thumb: 'linear-gradient(135deg,#7A6E4A 0%,#5A5230 100%)', icon: '🗄️' },
]

const announcementIcons: Record<number, { bg: string; icon: string }> = {
  0: { bg: 'linear-gradient(135deg,#8A6A3E,#5A3E1E)', icon: '📖' },
  1: { bg: 'linear-gradient(135deg,#5C7A5C,#2E5A2E)', icon: '🎪' },
  2: { bg: 'linear-gradient(135deg,#4A6A8A,#2E4A5A)', icon: '💰' },
}

const latestAnnouncements = [
  { date: '6 jours',  title: 'Mise à jour — Règlement v2.3',         excerpt: 'Révision des règles de conflits armés et d\'arrestation.' },
  { date: '7 jours',  title: 'Événement — Foire de Saint-Denis',     excerpt: 'Grand rassemblement ce samedi, toute la journée.' },
  { date: '7 jours',  title: 'Nouveau système d\'économie',          excerpt: 'Introduction des billets à ordre et du troc légal.' },
]

export default function HomePage() {
  return (
    <>
      {/* ══ HERO ════════════════════════════════════════════ */}
      <section style={{ backgroundColor: 'var(--bg)', padding: 'clamp(1rem, 3vw, 1.5rem)' }}>
        <div className="hero-western" style={{ padding: 'clamp(2.5rem, 7vw, 4rem) 1.5rem', textAlign: 'center', minHeight: 200 }}>
          {/* Decorative star */}
          <div style={{ fontSize: '1.5rem', color: '#E8C87A', marginBottom: '0.6rem', textShadow: '0 0 12px rgba(232,200,122,0.6)' }}>✦</div>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.2rem, 8vw, 4.5rem)',
            letterSpacing: '0.08em',
            color: '#F5EBD0',
            lineHeight: 1.05,
            marginBottom: '0.6rem',
            textShadow: '0 2px 16px rgba(0,0,0,0.5)',
          }}>
            WILD FRONTIER RP
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: '1.2rem' }}>
            <div style={{ height: '1px', width: 32, background: 'rgba(232,200,122,0.5)' }} />
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(232,200,122,0.9)', margin: 0, whiteSpace: 'nowrap' }}>
              Le portail officiel de la whitelist
            </p>
            <div style={{ height: '1px', width: 32, background: 'rgba(232,200,122,0.5)' }} />
          </div>
          <a href="/candidatures" style={{
            display: 'inline-block',
            fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'rgba(232,200,122,0.95)',
            border: '1px solid rgba(232,200,122,0.45)',
            borderRadius: 9999, padding: '9px 22px',
            textDecoration: 'none',
            backdropFilter: 'blur(2px)',
          }}>
            L&apos;expérience western immersive
          </a>
        </div>
      </section>

      {/* ══ QUICK ACTIONS (desktop only — mobile has tab bar in header) ════ */}
      <section className="hidden md:block" style={{ backgroundColor: 'var(--bg)', padding: '0 clamp(1rem,3vw,1.5rem) 1rem' }}>
        <div style={{ display: 'flex', gap: 10 }}>
          <Link href="/reglement" className="quick-action-card" style={{ textDecoration: 'none' }}>
            <span style={{ fontSize: '1.1rem' }}>📖</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--fg)', flex: 1 }}>Règlement</span>
            <span style={{ color: 'var(--fg-20)' }}>›</span>
          </Link>
          <Link href="/candidatures" className="quick-action-card primary" style={{ textDecoration: 'none' }}>
            <span style={{ fontSize: '1.1rem' }}>🤠</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#FFFFFF', flex: 1 }}>Candidater</span>
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>›</span>
          </Link>
          <Link href="/faq" className="quick-action-card" style={{ textDecoration: 'none' }}>
            <span style={{ fontSize: '1.1rem' }}>💬</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--fg)', flex: 1 }}>Discord</span>
            <span style={{ color: 'var(--fg-20)' }}>›</span>
          </Link>
        </div>
      </section>

      {/* ══ MAIN CONTENT GRID ═══════════════════════════════ */}
      <section style={{ backgroundColor: 'var(--bg)', padding: 'clamp(0.75rem,2vw,1rem) clamp(1rem,3vw,1.5rem) clamp(1.5rem,4vw,2rem)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.3fr) minmax(0,1fr)', gap: 12 }} className="grid-responsive-content">

          {/* LEFT COLUMN — navigation list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div className="nav-list-card">
              {navItems.map(item => (
                <Link key={item.href} href={item.href} className="nav-list-item">
                  <div className="nav-list-icon" style={{ background: item.thumb, border: 'none', fontSize: '1.4rem' }}>{item.icon}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.88rem', color: 'var(--fg)', marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'var(--fg-60)', lineHeight: 1.4, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{item.desc}</div>
                  </div>
                  <span className="nav-list-arrow">›</span>
                </Link>
              ))}

              {/* FAQ + Contact inside card bottom */}
              <div style={{ display: 'flex', borderTop: '1px solid rgba(120,90,50,0.08)' }}>
                <Link href="/faq" style={{
                  flex: 1, display: 'flex', alignItems: 'center', gap: 10, padding: '13px 16px',
                  textDecoration: 'none', transition: 'background 0.12s',
                }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg,#B8852E,#8F6420)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }}>❓</div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.82rem', color: 'var(--fg)' }}>FAQ</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', color: 'var(--fg-40)' }}>Questions fréquentes</div>
                  </div>
                </Link>
                <div style={{ width: 1, background: 'rgba(120,90,50,0.08)', alignSelf: 'stretch' }} />
                <Link href="/contact" style={{
                  flex: 1, display: 'flex', alignItems: 'center', gap: 10, padding: '13px 16px',
                  textDecoration: 'none', transition: 'background 0.12s',
                }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg,#6A8A7A,#3E5A4A)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }}>✉️</div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.82rem', color: 'var(--fg)' }}>Contact</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', color: 'var(--fg-40)' }}>Nous contacter</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — candidature + annonces */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>

            {/* Candidature card */}
            <div style={{ background: '#FFFFFF', border: '1px solid rgba(120,90,50,0.12)', borderRadius: 20, padding: '16px 14px', boxShadow: '0 8px 24px rgba(60,40,20,0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fg-40)' }}>
                  Ma candidature
                </div>
                <span style={{ background: 'rgba(40,120,40,0.12)', color: '#287828', fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', padding: '3px 8px', borderRadius: 9999, border: '1px solid rgba(40,120,40,0.2)' }}>
                  En cours
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
                <ProgressRing pct={70} size={80} />
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.78rem', color: 'var(--fg)' }}>Étape 3 sur 5</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', color: 'var(--fg-60)' }}>Entretien en cours</div>
                </div>
                <Link href="/espace-joueur" style={{
                  display: 'block', width: '100%', textAlign: 'center',
                  background: '#F7F2EA', border: '1px solid rgba(120,90,50,0.20)', borderRadius: 10,
                  padding: '9px 12px', textDecoration: 'none',
                  fontFamily: 'var(--font-body)', fontSize: '0.65rem', fontWeight: 700,
                  letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--fg)',
                }}>
                  Voir ma candidature
                </Link>
              </div>
            </div>

            {/* Announcements card */}
            <div style={{ background: '#FFFFFF', border: '1px solid rgba(120,90,50,0.12)', borderRadius: 20, padding: '16px 14px', boxShadow: '0 8px 24px rgba(60,40,20,0.06)' }}>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fg-40)', marginBottom: 12 }}>
                Dernières annonces
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {latestAnnouncements.map((a, i) => (
                  <div key={a.title} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '10px 0', borderBottom: i < latestAnnouncements.length - 1 ? '1px solid rgba(120,90,50,0.08)' : 'none' }}>
                    <div style={{ width: 38, height: 38, borderRadius: 10, background: announcementIcons[i].bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', flexShrink: 0 }}>
                      {announcementIcons[i].icon}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 6, marginBottom: 2 }}>
                        <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.75rem', color: 'var(--fg)', lineHeight: 1.3, flex: 1 }}>{a.title}</span>
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.60rem', color: 'var(--fg-40)', flexShrink: 0 }}>{a.date}</span>
                      </div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', color: 'var(--fg-60)', lineHeight: 1.4 }}>{a.excerpt}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/journal" style={{
                display: 'block', textAlign: 'center', marginTop: 12,
                background: '#F7F2EA', border: '1px solid rgba(120,90,50,0.18)', borderRadius: 10,
                padding: '8px', textDecoration: 'none',
                fontFamily: 'var(--font-body)', fontSize: '0.62rem', fontWeight: 700,
                letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--gold)',
              }}>
                Voir toutes les annonces →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ══ INSTITUTIONS (desktop only — keep existing section) ══ */}
      <section className="hidden md:block py-16" style={{ backgroundColor: 'var(--bg-section)', borderTop: '1px solid var(--border)' }}>
        <div className="container-wide text-center">
          <div className="label-display mb-2" style={{ color: 'var(--gold)' }}>Structure du comté</div>
          <h2 className="section-heading" style={{ fontSize: 'clamp(1.4rem,3vw,2rem)' }}>Les Institutions</h2>
          <div style={{ width: 40, height: '2px', background: 'var(--gold)', margin: '1rem auto 2rem', borderRadius: 1, opacity: 0.5 }} />
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
              <Link key={inst.name} href="/institutions" className="parchment-card text-center" style={{ textDecoration: 'none' }}>
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
