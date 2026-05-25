'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/univers',      label: 'Univers' },
  { href: '/reglement',    label: 'Règlement' },
  { href: '/institutions', label: 'Institutions' },
  { href: '/metiers',      label: 'Métiers' },
  { href: '/journal',      label: 'Journal' },
  { href: '/faq',          label: 'F.A.Q.' },
]

const quickTabs = [
  { href: '/reglement',   icon: '📖', label: 'RÈGLEMENT' },
  { href: '/candidatures',icon: '🤠', label: 'CANDIDATER', primary: true },
  { href: 'https://discord.gg/', icon: '💬', label: 'DISCORD', external: true },
]

function Logo() {
  return (
    <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
      <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>✦</span>
      <div>
        <div style={{ fontFamily: 'var(--font-cinzel)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.06em', color: 'var(--fg)', lineHeight: 1.1 }}>
          Wild Frontier
        </div>
        <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.48rem', letterSpacing: '0.2em', color: 'var(--fg-40)', textTransform: 'uppercase' }}>
          RP
        </div>
      </div>
    </Link>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

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
      boxShadow: scrolled ? '0 4px 16px rgba(60,40,20,0.08)' : 'none',
      transition: 'box-shadow 0.3s',
    }}>
      {/* ── Main bar ── */}
      <div className="container-wide">
        <div style={{ display: 'flex', alignItems: 'center', height: 60, gap: 12 }}>
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden md:flex" style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 4 }}>
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="nav-link-dark" style={{ padding: '6px 10px', fontSize: '0.8rem' }}>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex" style={{ alignItems: 'center', gap: 8 }}>
            <Link href="/espace-joueur" className="btn-outline-sand" style={{ padding: '7px 14px', fontSize: '0.68rem' }}>Espace Joueur</Link>
            <Link href="/candidatures" className="btn-primary"     style={{ padding: '8px 16px', fontSize: '0.68rem' }}>Candidater</Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Fermer' : 'Menu'}
            style={{
              marginLeft: 'auto', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: '1px solid rgba(120,90,50,0.20)', borderRadius: '10px',
              background: menuOpen ? 'rgba(184,133,46,0.08)' : 'transparent',
              cursor: 'pointer', fontSize: '1.1rem', color: 'var(--fg)',
            }}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* ── Quick tab bar (mobile only, below main bar) ── */}
      <div className="md:hidden" style={{ borderTop: '1px solid rgba(120,90,50,0.08)', display: 'flex' }}>
        {quickTabs.map((tab, i) => (
          <Link
            key={tab.href}
            href={tab.href}
            style={{
              flex: 1,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              padding: '10px 6px',
              borderLeft: i > 0 ? '1px solid rgba(120,90,50,0.10)' : 'none',
              textDecoration: 'none',
              backgroundColor: tab.primary ? 'rgba(184,133,46,0.10)' : 'transparent',
              transition: 'background 0.15s',
            }}
            target={tab.external ? '_blank' : undefined}
            rel={tab.external ? 'noopener noreferrer' : undefined}
          >
            <span style={{ fontSize: '0.95rem' }}>{tab.icon}</span>
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: '0.62rem', fontWeight: 700,
              letterSpacing: '0.07em', textTransform: 'uppercase',
              color: tab.primary ? 'var(--gold)' : 'var(--fg-60)',
            }}>{tab.label}</span>
            <span style={{ color: 'var(--fg-20)', fontSize: '0.7rem' }}>›</span>
          </Link>
        ))}
      </div>

      {/* ── Mobile dropdown menu ── */}
      {menuOpen && (
        <div className="md:hidden" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid rgba(120,90,50,0.08)' }}>
          <div className="container-wide" style={{ paddingTop: '0.5rem', paddingBottom: '1rem' }}>
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
            <div style={{ display: 'flex', gap: 8, marginTop: '1rem' }}>
              <Link href="/espace-joueur" className="btn-outline-sand" onClick={() => setMenuOpen(false)}
                style={{ flex: 1, justifyContent: 'center', fontSize: '0.7rem' }}>Espace Joueur</Link>
              <Link href="/candidatures" className="btn-primary" onClick={() => setMenuOpen(false)}
                style={{ flex: 1, justifyContent: 'center', fontSize: '0.7rem' }}>Candidater</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
