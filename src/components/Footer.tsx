'use client'

import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-ink)',
        borderTop: '3px solid var(--color-gold)',
        color: 'rgba(240, 230, 200, 0.6)',
      }}
    >
      {/* Séparateur décoratif */}
      <div
        className="text-center py-4"
        style={{ borderBottom: '1px solid rgba(184, 134, 11, 0.2)' }}
      >
        <span className="display-text text-xs" style={{ color: 'var(--color-gold)', opacity: 0.5 }}>
          ✦ ✦ ✦
        </span>
      </div>

      <div className="container-wide py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Bloc identité */}
          <div className="md:col-span-1">
            <h3
              className="font-serif font-bold uppercase mb-4"
              style={{ color: 'var(--color-parchment)', letterSpacing: '0.08em', fontSize: '1.1rem' }}
            >
              Wild Frontier RP
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(240, 230, 200, 0.5)', fontFamily: 'var(--font-crimson)' }}>
              Serveur RedM à RP dur et organique. Amérique du XIXe siècle. Chaque action laisse une trace.
            </p>
            <div className="mt-4">
              <span
                className="display-text text-xs uppercase tracking-widest block"
                style={{ color: 'var(--color-gold)', opacity: 0.6 }}
              >
                Est. An de grâce {year}
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="display-text text-xs uppercase tracking-widest mb-4"
              style={{ color: 'var(--color-gold)', opacity: 0.7 }}
            >
              Le Serveur
            </h4>
            <ul className="space-y-2">
              {[
                { href: '/univers', label: 'Univers & Lore' },
                { href: '/reglement', label: 'Règlement' },
                { href: '/institutions', label: 'Institutions' },
                { href: '/metiers', label: 'Métiers whitelist' },
              ].map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors"
                    style={{
                      color: 'rgba(240, 230, 200, 0.5)',
                      fontFamily: 'var(--font-crimson)',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-parchment)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240, 230, 200, 0.5)')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contenu */}
          <div>
            <h4
              className="display-text text-xs uppercase tracking-widest mb-4"
              style={{ color: 'var(--color-gold)', opacity: 0.7 }}
            >
              Publications
            </h4>
            <ul className="space-y-2">
              {[
                { href: '/journal', label: 'Journal du comté' },
                { href: '/archives', label: 'Archives' },
                { href: '/faq', label: 'F.A.Q.' },
                { href: '/contact', label: 'Contact' },
              ].map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors"
                    style={{
                      color: 'rgba(240, 230, 200, 0.5)',
                      fontFamily: 'var(--font-crimson)',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-parchment)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240, 230, 200, 0.5)')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Candidature */}
          <div>
            <h4
              className="display-text text-xs uppercase tracking-widest mb-4"
              style={{ color: 'var(--color-gold)', opacity: 0.7 }}
            >
              Rejoindre
            </h4>
            <p className="text-sm mb-4" style={{ color: 'rgba(240, 230, 200, 0.5)', fontFamily: 'var(--font-crimson)' }}>
              Déposez votre dossier de candidature. Steam, Discord et CFX.re requis.
            </p>
            <Link
              href="/candidatures"
              className="btn-gold text-xs"
              style={{ fontSize: '0.7rem' }}
            >
              Candidater
            </Link>
          </div>
        </div>
      </div>

      {/* Bas de page */}
      <div
        style={{ borderTop: '1px solid rgba(184, 134, 11, 0.15)' }}
        className="py-4"
      >
        <div className="container-wide flex flex-col md:flex-row justify-between items-center gap-2">
          <p
            className="display-text text-xs"
            style={{ color: 'rgba(240, 230, 200, 0.3)' }}
          >
            © {year} Wild Frontier RP — Tous droits réservés
          </p>
          <div className="flex gap-6">
            <Link
              href="/contact"
              className="display-text text-xs uppercase tracking-wider transition-colors"
              style={{ color: 'rgba(240, 230, 200, 0.3)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(240, 230, 200, 0.6)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240, 230, 200, 0.3)')}
            >
              Contact
            </Link>
            <span style={{ color: 'rgba(184, 134, 11, 0.2)' }}>|</span>
            <Link
              href="/espace-staff"
              className="display-text text-xs uppercase tracking-wider transition-colors"
              style={{ color: 'rgba(240, 230, 200, 0.3)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(240, 230, 200, 0.6)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240, 230, 200, 0.3)')}
            >
              Accès staff
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
