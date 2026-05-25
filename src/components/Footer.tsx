import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ backgroundColor: '#060402', borderTop: '1px solid rgba(200,144,24,0.2)' }}>

      {/* Amber glow top line */}
      <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(200,144,24,0.5), transparent)', marginBottom: 0 }} />

      {/* Diamond separator */}
      <div className="text-center py-4" style={{ borderBottom: '1px solid rgba(200,144,24,0.1)' }}>
        <span style={{ color: 'rgba(200,144,24,0.3)', letterSpacing: '0.6em', fontSize: '0.5rem' }}>◆ ◆ ◆</span>
      </div>

      <div className="container-wide py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Identity */}
          <div className="md:col-span-1">
            <h3 style={{ fontFamily: 'var(--font-cinzel)', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '0.08em', marginBottom: '1rem',
              background: 'linear-gradient(180deg, #f2e6cc 0%, #d4a040 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Wild Frontier RP
            </h3>
            <p className="body-text" style={{ fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>
              Serveur RedM à RP dur et organique.<br />
              Amérique du XIXe siècle.<br />
              Chaque acte laisse une trace.
            </p>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.58rem', letterSpacing: '0.25em', color: 'rgba(200,144,24,0.35)', textTransform: 'uppercase' }}>
              Est. {year}
            </div>
          </div>

          {/* Le Serveur */}
          <div>
            <div className="label-display mb-5" style={{ color: 'rgba(200,144,24,0.5)' }}>Le Serveur</div>
            <ul className="space-y-2.5">
              {[
                { href: '/univers',      label: 'Univers & Lore' },
                { href: '/reglement',    label: 'Règlement' },
                { href: '/institutions', label: 'Institutions' },
                { href: '/metiers',      label: 'Métiers whitelist' },
              ].map(l => (
                <li key={l.href}><Link href={l.href} className="footer-link">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Publications */}
          <div>
            <div className="label-display mb-5" style={{ color: 'rgba(200,144,24,0.5)' }}>Publications</div>
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
            <div className="label-display mb-5" style={{ color: 'rgba(200,144,24,0.5)' }}>Rejoindre</div>
            <p className="body-text mb-5" style={{ fontSize: '0.88rem', lineHeight: 1.7 }}>
              Whitelist strict. Trois comptes requis : Discord, Steam, CFX.re.
            </p>
            <Link href="/candidatures" className="btn-gold" style={{ fontSize: '0.62rem' }}>
              Candidater
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(200,144,24,0.1)' }} className="py-4">
        <div className="container-wide flex flex-col md:flex-row justify-between items-center gap-2">
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.55rem', letterSpacing: '0.2em', color: 'rgba(228,212,168,0.18)', textTransform: 'uppercase' }}>
            &copy; {year} Wild Frontier RP — Tous droits réservés
          </p>
          <div className="flex items-center gap-5">
            <Link href="/contact"      className="footer-link-sm">Contact</Link>
            <span style={{ color: 'rgba(200,144,24,0.15)' }}>|</span>
            <Link href="/espace-staff" className="footer-link-sm">Accès Staff</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
