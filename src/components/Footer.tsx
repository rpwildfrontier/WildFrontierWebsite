import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ backgroundColor: 'var(--bg-deep)', borderTop: '1px solid rgba(42,54,68,0.18)' }}>
      <div className="container-wide" style={{ paddingTop: 'clamp(2.5rem, 6vw, 3.5rem)', paddingBottom: 'clamp(2.5rem, 6vw, 3.5rem)' }}>

        {/* Brand — full width on mobile, 1 col on desktop */}
        <div style={{ marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)', paddingBottom: 'clamp(1.5rem, 4vw, 2.5rem)', borderBottom: '1px solid rgba(42,54,68,0.10)' }}>
          <div style={{ fontFamily: 'var(--font-cinzel)', fontWeight: 700, fontSize: '1rem', letterSpacing: '0.06em', color: 'var(--fg)', marginBottom: '0.75rem' }}>
            Wild Frontier RP
          </div>
          <p className="body-text" style={{ fontSize: '0.85rem', lineHeight: 1.7, maxWidth: '28rem' }}>
            Serveur RedM à RP dur et organique. Amérique du XIXe siècle.
            Chaque acte laisse une trace.
          </p>
        </div>

        {/* Link columns — 2 cols on mobile, 3 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">

          {/* Serveur */}
          <div>
            <div className="label-display mb-3" style={{ borderBottom: '1px solid var(--rule)', paddingBottom: '5px' }}>Le Serveur</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {[
                { href: '/univers',      label: 'Univers & Lore' },
                { href: '/reglement',    label: 'Règlement' },
                { href: '/institutions', label: 'Institutions' },
                { href: '/metiers',      label: 'Métiers' },
              ].map(l => (
                <li key={l.href}><Link href={l.href} className="footer-link" style={{ fontSize: '0.88rem' }}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Publications */}
          <div>
            <div className="label-display mb-3" style={{ borderBottom: '1px solid var(--rule)', paddingBottom: '5px' }}>Publications</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {[
                { href: '/journal',  label: 'Journal du comté' },
                { href: '/archives', label: 'Archives' },
                { href: '/faq',      label: 'F.A.Q.' },
                { href: '/contact',  label: 'Contact' },
              ].map(l => (
                <li key={l.href}><Link href={l.href} className="footer-link" style={{ fontSize: '0.88rem' }}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Rejoindre — spans 2 cols on mobile so it's full width */}
          <div className="col-span-2 md:col-span-1">
            <div className="label-display mb-3" style={{ borderBottom: '1px solid var(--rule)', paddingBottom: '5px' }}>Rejoindre</div>
            <p className="body-text mb-4" style={{ fontSize: '0.85rem' }}>
              Whitelist strict — Discord, Steam/Rockstar, CFX.re requis.
            </p>
            <Link href="/candidatures" className="btn-primary" style={{ fontSize: '0.68rem' }}>
              Candidater
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(42,54,68,0.10)', padding: '0.875rem 0' }}>
        <div className="container-wide" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.60rem', color: 'var(--fg-40)' }}>
            &copy; {year} Wild Frontier RP — Tous droits réservés
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <Link href="/contact"      className="footer-link-sm">Contact</Link>
            <span style={{ color: 'var(--fg-20)', fontSize: '0.6rem' }}>|</span>
            <Link href="/espace-staff" className="footer-link-sm">Accès Staff</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
