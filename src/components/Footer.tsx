import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="hidden md:block" style={{
      backgroundColor: 'var(--bg-tinted)',
      borderTop: '2px solid var(--rule-md)',
    }}>
      <div className="container-wide" style={{
        paddingTop: 'clamp(2rem,5vw,3rem)',
        paddingBottom: 'clamp(2rem,5vw,3rem)',
      }}>
        {/* Branding row */}
        <div style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid var(--rule)' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 9, marginBottom: '0.6rem',
          }}>
            {/* Sheriff star badge */}
            <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
              <path
                d="M14 2L16.5 8.5L23.5 7L20.5 13.5L26 17L20.5 20.5L23.5 27L16.5 25.5L14 26L11.5 25.5L4.5 27L7.5 20.5L2 17L7.5 13.5L4.5 7L11.5 8.5L14 2Z"
                fill="#8B6914" stroke="#7A5C0A" strokeWidth="0.6"
              />
              <circle cx="14" cy="17" r="4.5" fill="#F0EAD8" stroke="#7A5C0A" strokeWidth="0.8"/>
              <circle cx="14" cy="17" r="2.5" fill="#8B6914"/>
            </svg>
            <div style={{
              fontFamily: 'var(--font-cinzel)',
              fontWeight: 700,
              fontSize: '0.95rem',
              letterSpacing: '0.06em',
              color: 'var(--ink)',
            }}>WILD FRONTIER RP</div>
          </div>
          <p style={{
            fontFamily: 'var(--font-heading)',
            fontStyle: 'italic',
            fontSize: '0.92rem',
            lineHeight: 1.7,
            maxWidth: '28rem',
            color: 'var(--ink-60)',
          }}>
            Serveur RedM à RP dur et organique. Amérique du XIXe siècle. Chaque acte laisse une trace.
          </p>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <div className="section-label">Le Serveur</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { href: '/univers',      label: 'Univers & Lore' },
                { href: '/reglement',    label: 'Règlement' },
                { href: '/institutions', label: 'Institutions' },
                { href: '/metiers',      label: 'Métiers' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="footer-link">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="section-label">Publications</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { href: '/journal',  label: 'Journal du comté' },
                { href: '/archives', label: 'Archives' },
                { href: '/faq',      label: 'F.A.Q.' },
                { href: '/contact',  label: 'Contact' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="footer-link">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="section-label">Rejoindre</div>
            <p className="body-text" style={{ fontSize: '0.82rem', marginBottom: '1rem' }}>
              Whitelist strict. Trois comptes requis : Discord, Steam/Rockstar, CFX.re.
            </p>
            <Link href="/candidatures" className="btn-primary" style={{ fontSize: '0.68rem' }}>
              Candidater
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid var(--rule)', padding: '0.875rem 0', background: 'var(--bg-rule)' }}>
        <div className="container-wide" style={{
          display: 'flex', flexWrap: 'wrap',
          justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem',
        }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.58rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--ink-40)',
          }}>&copy; {year} Wild Frontier RP — Tous droits réservés</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Link href="/contact" className="footer-link-sm">Contact</Link>
            <span style={{ color: 'var(--ink-20)', fontSize: '0.6rem' }}>|</span>
            <Link href="/espace-staff" className="footer-link-sm">Accès Staff</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
