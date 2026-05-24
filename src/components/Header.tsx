'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { href: '/univers', label: 'Univers' },
  { href: '/reglement', label: 'Règlement' },
  { href: '/institutions', label: 'Institutions' },
  { href: '/metiers', label: 'Métiers' },
  { href: '/journal', label: 'Journal' },
  { href: '/archives', label: 'Archives' },
  { href: '/candidatures', label: 'Candidatures' },
  { href: '/faq', label: 'F.A.Q.' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      style={{
        backgroundColor: 'var(--color-ink)',
        borderBottom: '3px solid var(--color-gold)',
      }}
    >
      {/* Bandeau supérieur */}
      <div
        style={{
          borderBottom: '1px solid rgba(184, 134, 11, 0.3)',
          padding: '6px 0',
        }}
      >
        <div className="container-wide flex justify-between items-center">
          <span
            className="display-text text-xs uppercase tracking-widest"
            style={{ color: 'var(--color-gold)', opacity: 0.7 }}
          >
            Comté de New Hanover — Territoire de l&apos;Ouest
          </span>
          <div className="flex items-center gap-4">
            <Link
              href="/espace-joueur"
              className="display-text text-xs uppercase tracking-widest transition-colors"
              style={{ color: 'rgba(240, 230, 200, 0.6)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-gold)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240, 230, 200, 0.6)')}
            >
              Espace Joueur
            </Link>
            <span style={{ color: 'rgba(184, 134, 11, 0.4)' }}>|</span>
            <Link
              href="/espace-staff"
              className="display-text text-xs uppercase tracking-widest transition-colors"
              style={{ color: 'rgba(240, 230, 200, 0.6)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-gold)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240, 230, 200, 0.6)')}
            >
              Administration
            </Link>
          </div>
        </div>
      </div>

      {/* Logo principal */}
      <div className="container-wide py-6 md:py-8 text-center">
        <Link href="/" className="block group">
          {/* Ligne décorative supérieure */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <div style={{ height: '1px', width: '60px', backgroundColor: 'var(--color-gold)', opacity: 0.5 }} />
            <span className="display-text text-xs uppercase tracking-[0.3em]" style={{ color: 'var(--color-gold)', opacity: 0.7 }}>
              ✦ Gazette Officielle ✦
            </span>
            <div style={{ height: '1px', width: '60px', backgroundColor: 'var(--color-gold)', opacity: 0.5 }} />
          </div>

          {/* Titre principal */}
          <h1
            className="font-serif font-black uppercase leading-none"
            style={{
              fontSize: 'clamp(2rem, 6vw, 4rem)',
              color: 'var(--color-parchment)',
              letterSpacing: '0.05em',
              textShadow: '0 2px 4px rgba(0,0,0,0.4)',
            }}
          >
            Wild Frontier
          </h1>
          <div
            className="display-text uppercase tracking-[0.5em] mt-1"
            style={{
              fontSize: 'clamp(0.7rem, 2vw, 1rem)',
              color: 'var(--color-gold)',
            }}
          >
            — Roleplay —
          </div>

          {/* Ligne décorative inférieure */}
          <div className="flex items-center justify-center gap-3 mt-3">
            <div style={{ height: '1px', width: '40px', backgroundColor: 'var(--color-gold)', opacity: 0.5 }} />
            <div style={{ height: '3px', width: '80px', backgroundColor: 'var(--color-gold)', opacity: 0.6 }} />
            <div style={{ height: '1px', width: '40px', backgroundColor: 'var(--color-gold)', opacity: 0.5 }} />
          </div>
        </Link>
      </div>

      {/* Navigation desktop */}
      <nav style={{ borderTop: '1px solid rgba(184, 134, 11, 0.25)' }}>
        <div className="container-wide">
          {/* Desktop */}
          <ul className="hidden md:flex items-center justify-center flex-wrap">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="display-text block px-4 py-4 text-xs uppercase tracking-widest transition-all duration-200"
                  style={{ color: 'rgba(240, 230, 200, 0.75)', letterSpacing: '0.15em' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--color-gold)'
                    e.currentTarget.style.backgroundColor = 'rgba(184, 134, 11, 0.08)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'rgba(240, 230, 200, 0.75)'
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }}
                >
                  {link.label}
                </Link>
                {i < navLinks.length - 1 && (
                  <span style={{ color: 'rgba(184, 134, 11, 0.3)', userSelect: 'none' }} className="hidden md:inline">·</span>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <div className="md:hidden flex justify-end py-3">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="display-text text-xs uppercase tracking-widest py-2 px-4"
              style={{ color: 'var(--color-gold)', border: '1px solid rgba(184, 134, 11, 0.4)' }}
              aria-label="Menu"
            >
              {menuOpen ? '✕ Fermer' : '☰ Menu'}
            </button>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <ul className="md:hidden py-2">
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="display-text block px-4 py-3 text-xs uppercase tracking-widest border-b"
                    style={{
                      color: 'rgba(240, 230, 200, 0.75)',
                      borderColor: 'rgba(184, 134, 11, 0.15)',
                    }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  )
}
