'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const navLinks = [
  { href: '/univers',      label: 'Univers' },
  { href: '/reglement',    label: 'Règlement' },
  { href: '/institutions', label: 'Institutions' },
  { href: '/metiers',      label: 'Métiers' },
  { href: '/journal',      label: 'Journal' },
  { href: '/faq',          label: 'F.A.Q.' },
]

function Logo() {
  return (
    <Link href="/" style={{ textDecoration: 'none', flexShrink: 0, display: 'flex', alignItems: 'baseline', gap: 6 }}>
      <span style={{ fontFamily: 'var(--font-cinzel)', fontWeight: 700, fontSize: '1.2rem', letterSpacing: '0.06em', color: 'var(--fg)' }}>
        Wild Frontier
      </span>
      <span style={{ fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: '0.58rem', letterSpacing: '0.22em', color: 'rgba(42,54,68,0.40)', textTransform: 'uppercase' }}>
        RP
      </span>
    </Link>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const headerStyle: React.CSSProperties = {
    position:        'sticky',
    top:             0,
    zIndex:          50,
    backgroundColor: '#F9F6F0',
    borderBottom:    '1px solid rgba(42,54,68,0.14)',
    boxShadow:       scrolled ? '0 2px 16px rgba(42,54,68,0.10)' : 'none',
    transition:      'box-shadow 0.3s',
  }

  return (
    <header style={headerStyle}>

      {/* ── Desktop row ────────────────────────────────────── */}
      <div className="hidden md:block">
        <div className="container-wide">
          <div style={{ display: 'flex', alignItems: 'center', height: 64 }}>

            <Logo />

            {/* Nav — centered in remaining space */}
            <nav style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
              {navLinks.map(link => (
                <Link key={link.href} href={link.href} className="nav-link-dark" style={{ padding: '8px 10px' }}>
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Action buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
              <Link href="/espace-joueur" className="btn-outline-sand" style={{ padding: '8px 16px', fontSize: '0.68rem' }}>
                Espace Joueur
              </Link>
              <Link href="/candidatures" className="btn-primary" style={{ padding: '9px 18px', fontSize: '0.68rem' }}>
                Candidater
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile row ─────────────────────────────────────── */}
      <div className="md:hidden">
        <div className="container-wide">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56 }}>

            <Logo />

            <button
              onClick={() => setMenuOpen(v => !v)}
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={menuOpen}
              style={{
                width:          44,
                height:         44,
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'center',
                color:          'var(--fg)',
                border:         '1px solid rgba(42,54,68,0.25)',
                borderRadius:   '3px',
                background:     menuOpen ? 'rgba(42,54,68,0.06)' : 'transparent',
                cursor:         'pointer',
                fontSize:       '1.15rem',
                lineHeight:     1,
                transition:     'background 0.15s',
                flexShrink:     0,
              }}
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div style={{ backgroundColor: '#F9F6F0', borderTop: '1px solid rgba(42,54,68,0.10)' }}>
            <div className="container-wide" style={{ paddingTop: '0.5rem', paddingBottom: '1rem' }}>
              <ul style={{ listStyle: 'none' }}>
                {navLinks.map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      style={{
                        display:       'flex',
                        alignItems:    'center',
                        padding:       '13px 0',
                        borderBottom:  '1px solid rgba(42,54,68,0.08)',
                        fontFamily:    'var(--font-body)',
                        fontSize:      '0.92rem',
                        fontWeight:    500,
                        color:         'var(--fg)',
                        textDecoration: 'none',
                        minHeight:     44,
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', gap: 8, marginTop: '1rem' }}>
                <Link
                  href="/espace-joueur"
                  className="btn-outline-sand"
                  onClick={() => setMenuOpen(false)}
                  style={{ flex: 1, justifyContent: 'center', fontSize: '0.70rem' }}
                >
                  Espace Joueur
                </Link>
                <Link
                  href="/candidatures"
                  className="btn-primary"
                  onClick={() => setMenuOpen(false)}
                  style={{ flex: 1, justifyContent: 'center', fontSize: '0.70rem' }}
                >
                  Candidater
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

    </header>
  )
}
