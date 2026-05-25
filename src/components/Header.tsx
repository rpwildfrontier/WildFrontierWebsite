'use client'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
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

function ChevronDown() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M2 3.5L5 6.5L8 3.5"/>
    </svg>
  )
}

export default function Header() {
  const [scrolled, setScrolled]       = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const profileRef                    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setProfileOpen(false)
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setProfileOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onClickOutside)
      document.removeEventListener('keydown', onKeyDown)
    }
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
            {/* Profile dropdown */}
            <div ref={profileRef} style={{ position: 'relative' }}>
              <button
                onClick={() => setProfileOpen(v => !v)}
                aria-expanded={profileOpen}
                aria-haspopup="true"
                style={{
                  display: 'flex', alignItems: 'center', gap: 5,
                  background: profileOpen ? 'rgba(28,20,8,0.10)' : 'rgba(28,20,8,0.06)',
                  border: '1px solid rgba(28,20,8,0.10)',
                  borderRadius: 9999,
                  padding: '4px 10px 4px 4px',
                  cursor: 'pointer',
                  transition: 'background 0.15s',
                  color: 'var(--fg-40)',
                }}
              >
                <div style={{
                  width: 26, height: 26, borderRadius: '50%',
                  background: 'linear-gradient(135deg,#C9982A,#9A7018)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.75rem', color: '#fff', fontWeight: 700,
                  flexShrink: 0,
                }}>J</div>
                <span style={{
                  display: 'inline-block',
                  transition: 'transform 0.2s',
                  transform: profileOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                }}>
                  <ChevronDown />
                </span>
              </button>

              {/* Dropdown panel */}
              {profileOpen && (
                <div style={{
                  position: 'absolute', top: 'calc(100% + 8px)', right: 0,
                  minWidth: 200,
                  background: '#FFFFFF',
                  border: '1px solid rgba(28,20,8,0.10)',
                  borderRadius: 16,
                  boxShadow: '0 8px 32px rgba(28,20,8,0.12), 0 2px 8px rgba(28,20,8,0.06)',
                  overflow: 'hidden',
                  zIndex: 200,
                  animation: 'dropdownIn 0.15s ease-out both',
                }}>
                  {/* User info */}
                  <div style={{ padding: '14px 16px 12px', borderBottom: '1px solid rgba(28,20,8,0.07)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{
                        width: 36, height: 36, borderRadius: '50%',
                        background: 'linear-gradient(135deg,#C9982A,#9A7018)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '0.9rem', color: '#fff', fontWeight: 700, flexShrink: 0,
                      }}>J</div>
                      <div>
                        <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.82rem', color: 'var(--fg)', lineHeight: 1.2 }}>Joueur</div>
                        <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', color: 'var(--fg-40)', marginTop: 1 }}>Candidature en cours</div>
                      </div>
                    </div>
                  </div>

                  {/* Menu items */}
                  <div style={{ padding: '6px 0' }}>
                    {[
                      { href: '/espace-joueur',   label: 'Mon espace',        icon: <svg width="15" height="15" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="7" r="3.5"/><path d="M3 18c0-4 3-6.5 7-6.5s7 2.5 7 6.5"/></svg> },
                      { href: '/candidatures',    label: 'Ma candidature',    icon: <svg width="15" height="15" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="14" height="16" rx="2"/><line x1="7" y1="8" x2="13" y2="8"/><line x1="7" y1="11" x2="11" y2="11"/></svg> },
                      { href: '/journal',         label: 'Annonces',          icon: <svg width="15" height="15" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2.5a5.5 5.5 0 0 1 5.5 5.5c0 3 .8 4.5 1.5 5.5H3c.7-1 1.5-2.5 1.5-5.5A5.5 5.5 0 0 1 10 2.5Z"/><path d="M8.5 16.5a1.5 1.5 0 0 0 3 0"/></svg> },
                    ].map(item => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setProfileOpen(false)}
                        style={{
                          display: 'flex', alignItems: 'center', gap: 10,
                          padding: '9px 16px',
                          textDecoration: 'none',
                          color: 'var(--fg-60)',
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.80rem',
                          fontWeight: 500,
                          transition: 'background 0.1s, color 0.1s',
                        }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#F8F7F4'; (e.currentTarget as HTMLElement).style.color = 'var(--fg)' }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'var(--fg-60)' }}
                      >
                        <span style={{ color: 'var(--fg-40)', display: 'flex' }}>{item.icon}</span>
                        {item.label}
                      </Link>
                    ))}
                  </div>

                  {/* Divider + logout */}
                  <div style={{ borderTop: '1px solid rgba(28,20,8,0.07)', padding: '6px 0 4px' }}>
                    <Link
                      href="/api/auth/signout"
                      onClick={() => setProfileOpen(false)}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 10,
                        padding: '9px 16px',
                        textDecoration: 'none',
                        color: '#C84040',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.80rem',
                        fontWeight: 500,
                        transition: 'background 0.1s',
                      }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(200,64,64,0.06)'}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'transparent'}
                    >
                      <svg width="15" height="15" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M13 3h4a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-4"/>
                        <path d="M9 14l4-4-4-4"/>
                        <line x1="13" y1="10" x2="3" y2="10"/>
                      </svg>
                      Se déconnecter
                    </Link>
                  </div>
                </div>
              )}
            </div>
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
