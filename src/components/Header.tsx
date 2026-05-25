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

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled,  setScrolled]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header style={{
      position:        'sticky',
      top:             0,
      zIndex:          50,
      backgroundColor: '#F9F6F0',
      borderBottom:    '1px solid rgba(42,54,68,0.14)',
      boxShadow:       scrolled ? '0 2px 16px rgba(42,54,68,0.10)' : 'none',
      transition:      'box-shadow 0.3s',
    }}>

      {/* Main nav row */}
      <div className="container-wide">
        <div className="flex items-center justify-between" style={{ height: 64 }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
            <span style={{
              fontFamily:    'var(--font-cinzel)',
              fontWeight:    700,
              fontSize:      '1.25rem',
              letterSpacing: '0.06em',
              color:         'var(--fg)',
            }}>
              Wild Frontier
            </span>
            <span style={{
              fontFamily:    'var(--font-body)',
              fontWeight:    400,
              fontSize:      '0.62rem',
              letterSpacing: '0.20em',
              color:         'rgba(42,54,68,0.42)',
              textTransform: 'uppercase',
              marginLeft:    '8px',
            }}>
              RP
            </span>
          </Link>

          {/* Nav — desktop center */}
          <nav className="hidden md:flex items-center gap-1" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="nav-link-dark" style={{ padding: '8px 12px' }}>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Action buttons — desktop right */}
          <div className="hidden md:flex items-center gap-2" style={{ flexShrink: 0 }}>
            <Link href="/espace-joueur" className="btn-outline-sand" style={{ padding: '8px 16px', fontSize: '0.68rem' }}>
              Espace Joueur
            </Link>
            <Link href="/candidatures" className="btn-primary" style={{ padding: '9px 18px', fontSize: '0.68rem' }}>
              Candidater
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fermer' : 'Menu'}
            style={{
              minWidth:       44,
              minHeight:      44,
              display:        'flex',
              alignItems:     'center',
              justifyContent: 'center',
              color:          'var(--fg)',
              border:         '1px solid rgba(42,54,68,0.25)',
              borderRadius:   '3px',
              background:     menuOpen ? 'rgba(42,54,68,0.06)' : 'none',
              cursor:         'pointer',
              fontSize:       '1.1rem',
              flexShrink:     0,
              transition:     'background 0.15s',
            }}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{ borderTop: '1px solid rgba(42,54,68,0.10)', backgroundColor: '#F9F6F0' }}>
          <div className="container-wide py-3">
            <nav>
              <ul>
                {navLinks.map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="nav-link-dark"
                      style={{ display: 'flex', alignItems: 'center', padding: '12px 4px', borderBottom: '1px solid rgba(42,54,68,0.08)', minHeight: 44 }}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex gap-2 mt-4">
              <Link href="/espace-joueur" className="btn-outline-sand" style={{ flex: 1, justifyContent: 'center', fontSize: '0.68rem' }} onClick={() => setMenuOpen(false)}>
                Espace Joueur
              </Link>
              <Link href="/candidatures" className="btn-primary" style={{ flex: 1, justifyContent: 'center', fontSize: '0.68rem' }} onClick={() => setMenuOpen(false)}>
                Candidater
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
