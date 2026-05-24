'use client'

import Link from 'next/link'
import { useState } from 'react'

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

  return (
    <header style={{ backgroundColor: 'var(--ink)', borderBottom: '3px solid var(--gold)' }}>

      {/* Bandeau supérieur */}
      <div style={{ borderBottom: '1px solid rgba(184, 134, 11, 0.2)', padding: '5px 0' }}>
        <div className="container-wide flex justify-between items-center">
          <span className="label-display" style={{ color: 'var(--gold)', opacity: 0.55, fontSize: '0.6rem' }}>
            Comté de New Hanover — Territoire de l&apos;Ouest — An de grâce 1886
          </span>
          <div className="flex items-center gap-5">
            <Link href="/espace-joueur" className="nav-link-dark">Espace Joueur</Link>
            <span style={{ color: 'rgba(184, 134, 11, 0.25)' }}>|</span>
            <Link href="/espace-staff" className="nav-link-dark">Administration</Link>
          </div>
        </div>
      </div>

      {/* Masthead */}
      <div className="container-wide py-8 text-center">
        <Link href="/" style={{ textDecoration: 'none', display: 'block' }}>
          {/* Ligne décorative supérieure */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div style={{ height: '1px', width: '80px', background: 'linear-gradient(to right, transparent, rgba(184,134,11,0.4))' }} />
            <span className="label-display" style={{ color: 'var(--gold)', opacity: 0.55, letterSpacing: '0.35em' }}>
              Gazette Officielle
            </span>
            <div style={{ height: '1px', width: '80px', background: 'linear-gradient(to left, transparent, rgba(184,134,11,0.4))' }} />
          </div>

          {/* Titre principal */}
          <h1
            className="display-heading"
            style={{
              fontSize: 'clamp(2.2rem, 6vw, 4.2rem)',
              color: 'var(--parchment-50)',
              letterSpacing: '0.06em',
              textShadow: '0 2px 8px rgba(0,0,0,0.35)',
            }}
          >
            Wild Frontier
          </h1>

          <div
            className="label-display mt-2"
            style={{ color: 'var(--gold)', opacity: 0.6, letterSpacing: '0.55em', fontSize: '0.65rem' }}
          >
            Roleplay
          </div>

          {/* Ligne décorative inférieure */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <div style={{ height: '1px', width: '48px', background: 'rgba(184,134,11,0.35)' }} />
            <div style={{ height: '3px', width: '96px', background: 'rgba(184,134,11,0.5)' }} />
            <div style={{ height: '1px', width: '48px', background: 'rgba(184,134,11,0.35)' }} />
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav style={{ borderTop: '1px solid rgba(184, 134, 11, 0.18)' }}>
        <div className="container-wide">
          {/* Desktop */}
          <ul className="hidden md:flex items-stretch justify-center">
            {navLinks.map((link, i) => (
              <li key={link.href} className="flex items-stretch">
                <Link
                  href={link.href}
                  className="nav-link-dark flex items-center px-5 py-4 hover:bg-white/5"
                  style={{ transition: 'color 0.15s ease, background-color 0.15s ease' }}
                >
                  {link.label}
                </Link>
                {i < navLinks.length - 1 && (
                  <span
                    className="self-center"
                    style={{ color: 'rgba(184,134,11,0.2)', userSelect: 'none', fontSize: '0.4rem' }}
                  >
                    ◆
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile */}
          <div className="md:hidden flex justify-end py-3">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              className="label-display px-4 py-2 transition-colors"
              style={{
                color: 'var(--gold)',
                border: '1px solid rgba(184,134,11,0.35)',
                fontSize: '0.62rem',
                background: 'none',
                cursor: 'pointer',
              }}
            >
              {menuOpen ? 'Fermer' : 'Menu'}
            </button>
          </div>

          {menuOpen && (
            <ul className="md:hidden pb-2">
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="nav-link-dark block px-4 py-3"
                    style={{ borderBottom: '1px solid rgba(184,134,11,0.1)' }}
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
