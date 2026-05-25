'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const navLinks = [
  { href: '/univers',      label: 'Univers' },
  { href: '/reglement',    label: 'Règlement' },
  { href: '/institutions', label: 'Institutions' },
  { href: '/metiers',      label: 'Métiers' },
  { href: '/journal',      label: 'Journal' },
  { href: '/archives',     label: 'Archives' },
  { href: '/candidatures', label: 'Candidatures' },
  { href: '/faq',          label: 'F.A.Q.' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position:        'sticky',
        top:             0,
        zIndex:          50,
        backgroundColor: scrolled ? 'rgba(6,4,2,0.97)' : 'rgba(6,4,2,0.92)',
        backdropFilter:  'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom:    '1px solid rgba(200,144,24,0.3)',
        boxShadow:       scrolled ? '0 4px 32px rgba(0,0,0,0.6)' : 'none',
        transition:      'background-color 0.3s, box-shadow 0.3s',
      }}
    >
      {/* Top micro-bar — desktop only */}
      <div className="hidden md:block" style={{ borderBottom: '1px solid rgba(200,144,24,0.1)', padding: '4px 0' }}>
        <div className="container-wide flex justify-between items-center">
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.55rem', letterSpacing: '0.28em', color: 'rgba(200,144,24,0.55)', textTransform: 'uppercase' }}>
            Comté de New Hanover — An de grâce 1886
          </span>
          <div className="flex items-center gap-5">
            <Link href="/espace-joueur" className="nav-link-dark">Espace Joueur</Link>
            <span style={{ color: 'rgba(200,144,24,0.3)' }}>|</span>
            <Link href="/espace-staff" className="nav-link-dark">Administration</Link>
          </div>
        </div>
      </div>

      {/* Masthead row */}
      <div className="container-wide">

        {/* Mobile: single compact row */}
        <div className="flex md:hidden items-center justify-between py-3">
          <Link href="/" style={{ textDecoration: 'none' }}>
            <span style={{
              fontFamily:    'var(--font-cinzel)',
              fontWeight:    900,
              fontSize:      '1.45rem',
              letterSpacing: '0.1em',
              background:    'linear-gradient(180deg, #f2e6cc 0%, #d4a040 55%, #8a6018 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight:    1,
            }}>
              Wild Frontier
            </span>
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            style={{
              minWidth:        44,
              minHeight:       44,
              display:         'flex',
              alignItems:      'center',
              justifyContent:  'center',
              color:           'var(--amber)',
              border:          '1px solid rgba(200,144,24,0.45)',
              background:      menuOpen ? 'rgba(200,144,24,0.08)' : 'none',
              cursor:          'pointer',
              fontSize:        '1.1rem',
              transition:      'background 0.15s, border-color 0.15s',
              flexShrink:      0,
            }}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Desktop: centered masthead */}
        <div className="hidden md:block py-5 text-center">
          <Link href="/" style={{ textDecoration: 'none', display: 'block' }}>
            <div className="flex items-center justify-center gap-5 mb-3">
              <div style={{ height: '1px', width: '60px', background: 'linear-gradient(to right, transparent, rgba(200,144,24,0.5))' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.5rem', letterSpacing: '0.4em', color: 'rgba(200,144,24,0.55)', textTransform: 'uppercase' }}>
                ✦ Whitelist Strict · RP Dur & Organique · RedM ✦
              </span>
              <div style={{ height: '1px', width: '60px', background: 'linear-gradient(to left, transparent, rgba(200,144,24,0.5))' }} />
            </div>

            <h1
              style={{
                fontFamily:    'var(--font-cinzel)',
                fontWeight:    900,
                fontSize:      'clamp(1.8rem, 5vw, 3.2rem)',
                letterSpacing: '0.12em',
                background:    'linear-gradient(180deg, #f2e6cc 0%, #d4a040 55%, #8a6018 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight:    1.1,
                textShadow:    'none',
              }}
            >
              Wild Frontier
            </h1>

            <div style={{
              fontFamily:    'var(--font-display)',
              fontSize:      '0.58rem',
              letterSpacing: '0.65em',
              color:         'rgba(200,144,24,0.55)',
              textTransform: 'uppercase',
              marginTop:     '6px',
            }}>
              Roleplay
            </div>

            <div className="flex items-center justify-center gap-2 mt-3">
              <div style={{ height: '1px', flex: 1, maxWidth: 80, background: 'linear-gradient(to right, transparent, rgba(200,144,24,0.4))' }} />
              <div style={{ width: 6, height: 6, background: 'var(--amber)', borderRadius: '50%', boxShadow: '0 0 8px rgba(200,144,24,0.8)' }} />
              <div style={{ height: '2px', width: 120, background: 'linear-gradient(to right, rgba(200,144,24,0.3), rgba(200,144,24,0.6), rgba(200,144,24,0.3))' }} />
              <div style={{ width: 6, height: 6, background: 'var(--amber)', borderRadius: '50%', boxShadow: '0 0 8px rgba(200,144,24,0.8)' }} />
              <div style={{ height: '1px', flex: 1, maxWidth: 80, background: 'linear-gradient(to left, transparent, rgba(200,144,24,0.4))' }} />
            </div>
          </Link>
        </div>
      </div>

      {/* Desktop navigation */}
      <nav className="hidden md:block" style={{ borderTop: '1px solid rgba(200,144,24,0.12)' }}>
        <div className="container-wide">
          <ul className="flex items-stretch justify-center">
            {navLinks.map((link, i) => (
              <li key={link.href} className="flex items-stretch">
                <Link
                  href={link.href}
                  className="nav-link-dark flex items-center px-5 py-3"
                  style={{ position: 'relative', transition: 'color 0.15s' }}
                >
                  {link.label}
                </Link>
                {i < navLinks.length - 1 && (
                  <span style={{ alignSelf: 'center', color: 'rgba(200,144,24,0.25)', fontSize: '0.35rem' }}>◆</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <nav className="md:hidden" style={{ borderTop: '1px solid rgba(200,144,24,0.15)' }}>
          <div className="container-wide pb-2">
            <ul>
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="nav-link-dark flex items-center px-2 py-4"
                    style={{ borderBottom: '1px solid rgba(200,144,24,0.1)', minHeight: 44 }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li style={{ borderTop: '1px solid rgba(200,144,24,0.15)', marginTop: '6px', paddingTop: '6px' }}>
                <Link href="/espace-joueur" className="nav-link-dark flex items-center px-2 py-4" style={{ minHeight: 44 }} onClick={() => setMenuOpen(false)}>
                  Espace Joueur
                </Link>
              </li>
              <li>
                <Link href="/espace-staff" className="nav-link-dark flex items-center px-2 py-4" style={{ minHeight: 44 }} onClick={() => setMenuOpen(false)}>
                  Administration
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      )}

      {/* Bottom amber glow line */}
      <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(200,144,24,0.5), transparent)' }} />
    </header>
  )
}
