import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="hidden md:block" style={{ backgroundColor: 'var(--bg-deep)', borderTop: '1px solid rgba(200,150,60,0.18)' }}>
      <div className="container-wide" style={{ paddingTop: 'clamp(2rem, 5vw, 3rem)', paddingBottom: 'clamp(2rem, 5vw, 3rem)' }}>

        {/* Brand row */}
        <div style={{ marginBottom: 'clamp(1.25rem, 3vw, 2rem)', paddingBottom: 'clamp(1.25rem, 3vw, 2rem)', borderBottom: '1px solid rgba(200,150,60,0.12)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '0.6rem' }}>
            <span style={{ color: 'var(--gold)', fontSize: '0.9rem' }}>✦</span>
            <span style={{ fontFamily: 'var(--font-cinzel)', fontWeight: 700, fontSize: '1rem', letterSpacing: '0.07em', color: 'var(--fg)', textTransform: 'uppercase' }}>
              Wild Frontier RP
            </span>
          </div>
          <p className="body-text" style={{ fontSize: '0.82rem', lineHeight: 1.7, maxWidth: '28rem' }}>
            Serveur RedM à RP dur et organique. Amérique du XIXe siècle.
            Chaque acte laisse une trace.
          </p>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-3 gap-8">

          <div>
            <div className="label-display mb-4" style={{ borderBottom: '1px solid var(--rule)', paddingBottom: '6px' }}>Le Serveur</div>
            <ul className="space-y-2.5">
              {[
                { href: '/univers',   label: 'Univers & Lore' },
                { href: '/reglement', label: 'Règlement' },
                { href: '/metiers',   label: 'Métiers' },
                { href: '/archives',  label: 'Archives' },
              ].map(l => (
                <li key={l.href}><Link href={l.href} className="footer-link">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="label-display mb-4" style={{ borderBottom: '1px solid var(--rule)', paddingBottom: '6px' }}>Publications</div>
            <ul className="space-y-2.5">
              {[
                { href: '/journal', label: 'Journal du comté' },
                { href: '/faq',     label: 'F.A.Q.' },
                { href: '/contact', label: 'Contact' },
              ].map(l => (
                <li key={l.href}><Link href={l.href} className="footer-link">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="label-display mb-4" style={{ borderBottom: '1px solid var(--rule)', paddingBottom: '6px' }}>Rejoindre</div>
            <p className="body-text mb-4" style={{ fontSize: '0.82rem' }}>
              Whitelist strict. Trois comptes requis : Discord, Steam/Rockstar, CFX.re.
            </p>
            <Link href="/candidatures" className="btn-primary" style={{ fontSize: '0.66rem' }}>
              Candidater
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(200,150,60,0.10)', padding: '0.75rem 0' }}>
        <div className="container-wide" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.58rem', color: 'var(--fg-40)' }}>
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
