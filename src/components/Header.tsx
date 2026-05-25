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
    <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
      {/* Sheriff badge icon */}
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 2L16.5 8.5L23.5 7L20.5 13.5L26 17L20.5 20.5L23.5 27L16.5 25.5L14 26L11.5 25.5L4.5 27L7.5 20.5L2 17L7.5 13.5L4.5 7L11.5 8.5L14 2Z"
          fill="#B8852E" stroke="#8F6420" strokeWidth="0.5"/>
        <circle cx="14" cy="17" r="4.5" fill="#FAF6EE" stroke="#8F6420" strokeWidth="0.8"/>
        <circle cx="14" cy="17" r="2.5" fill="#B8852E"/>
      </svg>
      <div>
        <div style={{ fontFamily: 'var(--font-cinzel)', fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.07em', color: 'var(--fg)', lineHeight: 1 }}>
          Wild Frontier <span style={{ fontSize: '0.55rem', letterSpacing: '0.18em', color: 'var(--fg-40)' }}>RP</span>
        </div>
      </div>
    </Link>
  )
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
      <circle cx="9" cy="9" r="5.5"/>
      <path d="M13.5 13.5L17 17"/>
    </svg>
  )
}

function BellIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 2.5a5.5 5.5 0 0 1 5.5 5.5c0 3 .8 4.5 1.5 5.5H3c.7-1 1.5-2.5 1.5-5.5A5.5 5.5 0 0 1 10 2.5Z"/>
      <path d="M8.5 16.5a1.5 1.5 0 0 0 3 0"/>
    </svg>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      backgroundColor: '#FFFFFF',
      borderBottom: '1px solid rgba(120,90,50,0.14)',
      boxShadow: scrolled ? '0 4px 20px rgba(60,40,20,0.09)' : '0 1px 0 rgba(120,90,50,0.08)',
      transition: 'box-shadow 0.3s',
    }}>

      {/* ── Main bar ───────────────────────────────── */}
      <div style={{ maxWidth: 480, margin: '0 auto', padding: '0 14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', height: 56, gap: 8 }}>

          <Logo />

          {/* Desktop nav */}
          <nav className="hidden md:flex" style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 2 }}>
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="nav-link-dark" style={{ padding: '6px 9px', fontSize: '0.78rem' }}>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex" style={{ alignItems: 'center', gap: 8 }}>
            <Link href="/espace-joueur" className="btn-outline-sand" style={{ padding: '7px 14px', fontSize: '0.68rem' }}>Espace Joueur</Link>
            <Link href="/candidatures" className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.68rem' }}>Candidater</Link>
          </div>

          {/* Mobile: search + bell + avatar */}
          <div className="md:hidden" style={{ display: 'flex', alignItems: 'center', gap: 4, marginLeft: 'auto' }}>
            <button style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--fg-60)' }}>
              <SearchIcon />
            </button>
            <button style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--fg-60)', position: 'relative' }}>
              <BellIcon />
              {/* notification dot */}
              <span style={{ position: 'absolute', top: 7, right: 7, width: 6, height: 6, borderRadius: '50%', background: '#E07820', border: '1.5px solid #FFFFFF' }} />
            </button>
            {/* Avatar chip */}
            <Link href="/espace-joueur" style={{
              display: 'flex', alignItems: 'center', gap: 5,
              background: '#F7F2EA', border: '1px solid rgba(120,90,50,0.18)',
              borderRadius: 9999, padding: '4px 10px 4px 4px',
              textDecoration: 'none',
            }}>
              <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'linear-gradient(135deg,#C8963E,#8F6420)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', color: '#FFF', fontWeight: 700 }}>J</div>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="rgba(43,33,24,0.45)" strokeWidth="1.5" strokeLinecap="round"><path d="M2 3.5L5 6.5L8 3.5"/></svg>
            </Link>
          </div>
        </div>
      </div>

      {/* ── Tab bar (mobile only) ───────────────────── */}
      <div className="md:hidden" style={{ borderTop: '1px solid rgba(120,90,50,0.09)' }}>
        <div style={{ maxWidth: 480, margin: '0 auto', display: 'flex' }}>

          {/* RÈGLEMENT */}
          <Link href="/reglement" style={{
            flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            padding: '11px 6px', textDecoration: 'none',
            borderRight: '1px solid rgba(120,90,50,0.09)',
          }}>
            <span style={{ fontSize: '1rem' }}>📖</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--fg-60)' }}>Règlement</span>
            <span style={{ color: 'rgba(43,33,24,0.25)', fontSize: '0.85rem' }}>→</span>
          </Link>

          {/* CANDIDATER — featured */}
          <Link href="/candidatures" style={{
            flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            padding: '11px 6px', textDecoration: 'none',
            background: 'linear-gradient(135deg, rgba(184,133,46,0.14) 0%, rgba(184,133,46,0.08) 100%)',
            borderRight: '1px solid rgba(120,90,50,0.09)',
          }}>
            <span style={{ fontSize: '1.1rem' }}>🤠</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--gold)' }}>Candidater</span>
            <span style={{ color: 'var(--gold)', fontSize: '0.85rem', opacity: 0.6 }}>→</span>
          </Link>

          {/* DISCORD */}
          <Link href="https://discord.gg/" target="_blank" rel="noopener noreferrer" style={{
            flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            padding: '11px 6px', textDecoration: 'none',
          }}>
            {/* Discord icon */}
            <svg width="16" height="16" viewBox="0 0 71 55" fill="#7289DA">
              <path d="M60.1 4.9A58.5 58.5 0 0 0 45.5.4a40 40 0 0 0-1.8 3.6 54 54 0 0 0-16.4 0A40 40 0 0 0 25.6.4 58.3 58.3 0 0 0 11 4.9C1.6 19 -.9 32.7.3 46.3a59 59 0 0 0 17.9 9 42.7 42.7 0 0 0 3.7-6 38.2 38.2 0 0 1-5.8-2.8l1.4-1.1a42 42 0 0 0 35.9 0l1.4 1.1a38.3 38.3 0 0 1-5.8 2.8 42.6 42.6 0 0 0 3.7 6 58.8 58.8 0 0 0 17.9-9C72 30.4 68.8 16.8 60.1 4.9ZM23.7 38a6.7 6.7 0 0 1-6.3-7 6.7 6.7 0 0 1 6.3-7 6.7 6.7 0 0 1 6.3 7 6.7 6.7 0 0 1-6.3 7Zm23.6 0a6.7 6.7 0 0 1-6.3-7 6.7 6.7 0 0 1 6.3-7 6.7 6.7 0 0 1 6.3 7 6.7 6.7 0 0 1-6.3 7Z"/>
            </svg>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--fg-60)' }}>Discord</span>
          </Link>
        </div>
      </div>

      {/* ── Desktop dropdown menu ───────────────────── */}
      {menuOpen && (
        <div className="md:hidden" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid rgba(120,90,50,0.08)' }}>
          <div style={{ padding: '0.5rem 14px 1rem' }}>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} onClick={() => setMenuOpen(false)} style={{
                    display: 'flex', alignItems: 'center', padding: '12px 0',
                    borderBottom: '1px solid rgba(120,90,50,0.07)',
                    fontFamily: 'var(--font-body)', fontSize: '0.9rem', fontWeight: 500,
                    color: 'var(--fg)', textDecoration: 'none', minHeight: 44,
                  }}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}
