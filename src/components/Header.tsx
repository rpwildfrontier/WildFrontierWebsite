'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/univers',      label: 'Univers' },
  { href: '/reglement',    label: 'Règlement' },
  { href: '/journal',      label: 'Journal' },
  { href: '/archives',     label: 'Archives' },
  { href: '/faq',          label: 'F.A.Q.' },
  { href: '/contact',      label: 'Contact' },
]

const tabLinks = [
  { href: '/reglement',    icon: '📖', label: 'RÈGLEMENT',  arrow: true },
  { href: '/candidatures', icon: '🤠', label: 'CANDIDATER', featured: true },
  { href: 'https://discord.gg/wildfrontier', icon: '💬', label: 'DISCORD', external: true },
]

function Logo() {
  return (
    <Link href="/" style={{ textDecoration: 'none', flexShrink: 0, display: 'flex', alignItems: 'center', gap: 7 }}>
      <span style={{ color: 'var(--gold)', fontSize: '1rem', lineHeight: 1, flexShrink: 0 }}>✦</span>
      <span style={{
        fontFamily: 'var(--font-cinzel)',
        fontWeight: 700,
        fontSize: '1.05rem',
        letterSpacing: '0.08em',
        color: 'var(--fg)',
        textTransform: 'uppercase' as const,
        whiteSpace: 'nowrap' as const,
      }}>
        Wild Frontier RP
      </span>
    </Link>
  )
}

export default function Header() {
  const path = usePathname()

  const headerStyle: React.CSSProperties = {
    position: 'sticky',
    top: 0,
    zIndex: 50,
    backgroundColor: '#120A03',
    borderBottom: '1px solid rgba(200,150,60,0.3)',
  }

  return (
    <header style={headerStyle}>

      {/* ── Top bar ─────────────────────────────────────────── */}
      <div>
        <div className="container-wide">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 58 }}>

            <Logo />

            {/* Desktop nav — center */}
            <nav className="hidden md:flex" style={{ alignItems: 'center', gap: 2 }}>
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link-dark"
                  style={{ padding: '8px 10px', color: path.startsWith(link.href) ? 'var(--gold)' : undefined }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right icons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexShrink: 0 }}>
              {/* Search icon */}
              <button
                aria-label="Rechercher"
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(200,150,60,0.75)', fontSize: '1.1rem', lineHeight: 1, padding: 4 }}
              >
                🔍
              </button>
              {/* Bell icon */}
              <button
                aria-label="Notifications"
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(200,150,60,0.75)', fontSize: '1.1rem', lineHeight: 1, padding: 4 }}
              >
                🔔
              </button>
              {/* Avatar */}
              <Link href="/espace-joueur" aria-label="Espace Joueur">
                <div style={{
                  width: 30,
                  height: 30,
                  borderRadius: '50%',
                  background: 'var(--bg-warm)',
                  border: '1.5px solid rgba(200,150,60,0.45)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  color: 'var(--gold)',
                  fontFamily: 'var(--font-cinzel)',
                  fontWeight: 700,
                  flexShrink: 0,
                }}>
                  J
                </div>
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* ── Tab bar (mobile only) ────────────────────────────── */}
      <div className="md:hidden tab-nav">
        {tabLinks.map(tab => {
          const isActive = path.startsWith(tab.href) && !tab.external
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`tab-nav-item${isActive || tab.featured ? ' active' : ''}`}
              target={tab.external ? '_blank' : undefined}
              rel={tab.external ? 'noopener noreferrer' : undefined}
              style={tab.featured ? { background: '#2D1608', color: '#C8963E' } : undefined}
            >
              <span style={{ fontSize: '0.9rem' }}>{tab.icon}</span>
              <span>{tab.label}</span>
              {tab.arrow && <span style={{ opacity: 0.6, marginLeft: 2 }}>›</span>}
            </Link>
          )
        })}
      </div>

      {/* ── Desktop tab bar ──────────────────────────────────── */}
      <div className="hidden md:flex tab-nav">
        {tabLinks.map(tab => {
          const isActive = path.startsWith(tab.href) && !tab.external
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`tab-nav-item${isActive || tab.featured ? ' active' : ''}`}
              target={tab.external ? '_blank' : undefined}
              rel={tab.external ? 'noopener noreferrer' : undefined}
              style={tab.featured ? { background: '#2D1608', color: '#C8963E' } : undefined}
            >
              <span style={{ fontSize: '0.9rem' }}>{tab.icon}</span>
              <span>{tab.label}</span>
              {tab.arrow && <span style={{ opacity: 0.6, marginLeft: 2 }}>›</span>}
            </Link>
          )
        })}
      </div>

    </header>
  )
}
