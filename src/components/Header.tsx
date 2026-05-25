'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { BookIcon, HatIcon, SearchIcon, BellIcon } from './Icons'

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
    <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 9, flexShrink: 0 }}>
      {/* Sheriff star badge */}
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M14 2L16.5 8.5L23.5 7L20.5 13.5L26 17L20.5 20.5L23.5 27L16.5 25.5L14 26L11.5 25.5L4.5 27L7.5 20.5L2 17L7.5 13.5L4.5 7L11.5 8.5L14 2Z"
          fill="#C9982A"
          stroke="#9A7018"
          strokeWidth="0.6"
        />
        <circle cx="14" cy="17" r="4.5" fill="#F8F7F4" stroke="#9A7018" strokeWidth="0.8"/>
        <circle cx="14" cy="17" r="2.5" fill="#C9982A"/>
      </svg>
      <div>
        <div style={{
          fontFamily: 'var(--font-cinzel)',
          fontWeight: 700,
          fontSize: '0.84rem',
          letterSpacing: '0.08em',
          color: 'var(--fg)',
          lineHeight: 1,
        }}>
          WILD FRONTIER <span style={{ fontSize: '0.54rem', letterSpacing: '0.20em', color: 'var(--fg-40)' }}>RP</span>
        </div>
      </div>
    </Link>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      backgroundColor: 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(28,20,8,0.08)',
      boxShadow: scrolled
        ? '0 4px 24px rgba(28,20,8,0.10)'
        : '0 1px 0 rgba(28,20,8,0.05)',
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
            <Link href="/espace-joueur" className="btn-outline-sand" style={{ padding: '7px 14px', fontSize: '0.68rem' }}>
              Espace Joueur
            </Link>
            <Link href="/candidatures" className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.68rem' }}>
              Candidater
            </Link>
          </div>

          {/* Mobile: search + bell + avatar */}
          <div className="md:hidden" style={{ display: 'flex', alignItems: 'center', gap: 4, marginLeft: 'auto' }}>
            <button style={{
              width: 36, height: 36,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: 'none', background: 'transparent', cursor: 'pointer',
              color: 'var(--fg-60)',
            }}>
              <SearchIcon size={20} color="currentColor" />
            </button>
            <button style={{
              width: 36, height: 36,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: 'none', background: 'transparent', cursor: 'pointer',
              color: 'var(--fg-60)',
              position: 'relative',
            }}>
              <BellIcon size={20} color="currentColor" />
              {/* notification dot */}
              <span style={{
                position: 'absolute', top: 7, right: 7,
                width: 6, height: 6,
                borderRadius: '50%',
                background: '#C9982A',
                border: '1.5px solid rgba(255,255,255,0.92)',
              }} />
            </button>
            {/* Avatar chip */}
            <Link href="/espace-joueur" style={{
              display: 'flex', alignItems: 'center', gap: 5,
              background: 'rgba(28,20,8,0.06)',
              border: '1px solid rgba(28,20,8,0.10)',
              borderRadius: 9999,
              padding: '4px 10px 4px 4px',
              textDecoration: 'none',
            }}>
              <div style={{
                width: 26, height: 26, borderRadius: '50%',
                background: 'linear-gradient(135deg,#C9982A,#9A7018)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.75rem', color: '#0D0804', fontWeight: 700,
              }}>J</div>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="var(--fg-40)" strokeWidth="1.5" strokeLinecap="round">
                <path d="M2 3.5L5 6.5L8 3.5"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* ── Tab bar (mobile only) ───────────────────── */}
      <div className="md:hidden" style={{ borderTop: '1px solid rgba(28,20,8,0.06)' }}>
        <div style={{ maxWidth: 480, margin: '0 auto', display: 'flex' }}>

          {/* RÈGLEMENT */}
          <Link href="/reglement" style={{
            flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            padding: '11px 6px', textDecoration: 'none',
            borderRight: '1px solid rgba(28,20,8,0.06)',
          }}>
            <BookIcon size={14} color="currentColor" />
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: '0.65rem', fontWeight: 700,
              letterSpacing: '0.06em', textTransform: 'uppercase',
              color: 'var(--fg-60)',
            }}>Règlement</span>
            <span style={{ color: 'var(--fg-20)', fontSize: '0.85rem' }}>→</span>
          </Link>

          {/* CANDIDATER — featured */}
          <Link href="/candidatures" style={{
            flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            padding: '11px 6px', textDecoration: 'none',
            background: 'linear-gradient(135deg, rgba(196,148,42,0.10) 0%, rgba(196,148,42,0.05) 100%)',
            borderRight: '1px solid rgba(28,20,8,0.06)',
          }}>
            <HatIcon size={14} color="#C4942A" />
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: '0.65rem', fontWeight: 800,
              letterSpacing: '0.06em', textTransform: 'uppercase',
              color: '#C4942A',
            }}>Candidater</span>
            <span style={{ color: '#C4942A', fontSize: '0.85rem', opacity: 0.6 }}>→</span>
          </Link>

          {/* DISCORD */}
          <Link href="https://discord.gg/" target="_blank" rel="noopener noreferrer" style={{
            flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            padding: '11px 6px', textDecoration: 'none',
          }}>
            <svg width="16" height="16" viewBox="0 0 71 55" fill="#5865F2">
              <path d="M60.1 4.9A58.5 58.5 0 0 0 45.5.4a40 40 0 0 0-1.8 3.6 54 54 0 0 0-16.4 0A40 40 0 0 0 25.6.4 58.3 58.3 0 0 0 11 4.9C1.6 19 -.9 32.7.3 46.3a59 59 0 0 0 17.9 9 42.7 42.7 0 0 0 3.7-6 38.2 38.2 0 0 1-5.8-2.8l1.4-1.1a42 42 0 0 0 35.9 0l1.4 1.1a38.3 38.3 0 0 1-5.8 2.8 42.6 42.6 0 0 0 3.7 6 58.8 58.8 0 0 0 17.9-9C72 30.4 68.8 16.8 60.1 4.9ZM23.7 38a6.7 6.7 0 0 1-6.3-7 6.7 6.7 0 0 1 6.3-7 6.7 6.7 0 0 1 6.3 7 6.7 6.7 0 0 1-6.3 7Zm23.6 0a6.7 6.7 0 0 1-6.3-7 6.7 6.7 0 0 1 6.3-7 6.7 6.7 0 0 1 6.3 7 6.7 6.7 0 0 1-6.3 7Z"/>
            </svg>
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: '0.65rem', fontWeight: 700,
              letterSpacing: '0.06em', textTransform: 'uppercase',
              color: 'var(--fg-60)',
            }}>Discord</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
