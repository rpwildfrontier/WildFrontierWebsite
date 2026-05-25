import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ backgroundColor: 'var(--bg-deep)', borderTop: '1px solid rgba(42,54,68,0.18)' }}>
      <div className="container-wide py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-1">
            <div style={{ fontFamily: 'var(--font-cinzel)', fontWeight: 700, fontSize: '1rem', letterSpacing: '0.06em', color: 'var(--fg)', marginBottom: '1rem' }}>
              Wild Frontier RP
            </div>
            <p className="body-text" style={{ fontSize: '0.85rem', lineHeight: 1.75, marginBottom: '1rem' }}>
              Serveur RedM à RP dur et organique.<br />
              Amérique du XIXe siècle.<br />
              Chaque acte laisse une trace.
            </p>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.60rem', fontWeight: 600, letterSpacing: '0.15em', color: 'var(--fg-40)', textTransform: 'uppercase' }}>
              Est. {year}
            </div>
          </div>

          {/* Serveur */}
          <div>
            <div className="label-display mb-4" style={{ borderBottom: '1px solid var(--rule)', paddingBottom: '6px' }}>Le Serveur</div>
            <ul className="space-y-2.5">
              {[
                { href: '/univers',      label: 'Univers & Lore' },
                { href: '/reglement',    label: 'Règlement' },
                { href: '/institutions', label: 'Institutions' },
                { href: '/metiers',      label: 'Métiers' },
              ].map(l => (
                <li key={l.href}><Link href={l.href} className="footer-link">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Publications */}
          <div>
            <div className="label-display mb-4" style={{ borderBottom: '1px solid var(--rule)', paddingBottom: '6px' }}>Publications</div>
            <ul className="space-y-2.5">
              {[
                { href: '/journal',  label: 'Journal du comté' },
                { href: '/archives', label: 'Archives' },
                { href: '/faq',      label: 'F.A.Q.' },
                { href: '/contact',  label: 'Contact' },
              ].map(l => (
                <li key={l.href}><Link href={l.href} className="footer-link">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Rejoindre */}
          <div>
            <div className="label-display mb-4" style={{ borderBottom: '1px solid var(--rule)', paddingBottom: '6px' }}>Rejoindre</div>
            <p className="body-text mb-4" style={{ fontSize: '0.85rem' }}>
              Whitelist strict. Trois comptes requis : Discord, Steam/Rockstar, CFX.re.
            </p>
            <Link href="/candidatures" className="btn-primary" style={{ fontSize: '0.68rem' }}>
              Candidater
            </Link>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(42,54,68,0.12)' }} className="py-4">
        <div className="container-wide flex flex-col md:flex-row justify-between items-center gap-2">
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.62rem', color: 'var(--fg-40)' }}>
            &copy; {year} Wild Frontier RP — Tous droits réservés
          </p>
          <div className="flex items-center gap-5">
            <Link href="/contact"      className="footer-link-sm">Contact</Link>
            <span style={{ color: 'var(--fg-20)' }}>|</span>
            <Link href="/espace-staff" className="footer-link-sm">Accès Staff</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
