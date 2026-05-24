import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ backgroundColor: 'var(--ink)', borderTop: '3px solid var(--gold)' }}>

      {/* Séparateur */}
      <div
        className="text-center py-3"
        style={{ borderBottom: '1px solid rgba(184,134,11,0.15)' }}
      >
        <span className="label-display" style={{ color: 'var(--gold)', opacity: 0.35, letterSpacing: '0.4em' }}>
          ◆ ◆ ◆
        </span>
      </div>

      <div className="container-wide py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Identité */}
          <div className="md:col-span-1">
            <h3
              className="section-heading mb-4"
              style={{ color: 'var(--parchment-50)', fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.04em' }}
            >
              Wild Frontier RP
            </h3>
            <p className="body-text text-sm mb-5" style={{ color: 'rgba(240,228,204,0.4)', lineHeight: '1.65' }}>
              Serveur RedM à RP dur et organique.<br />
              Amérique du XIXe siècle.<br />
              Chaque acte laisse une trace.
            </p>
            <div className="label-display" style={{ color: 'var(--gold)', opacity: 0.4, letterSpacing: '0.2em' }}>
              Est. {year}
            </div>
          </div>

          {/* Le serveur */}
          <div>
            <div className="label-display mb-5" style={{ color: 'var(--gold)', opacity: 0.5, fontSize: '0.6rem' }}>
              Le Serveur
            </div>
            <ul className="space-y-2.5">
              {[
                { href: '/univers',      label: 'Univers & Lore' },
                { href: '/reglement',    label: 'Règlement' },
                { href: '/institutions', label: 'Institutions' },
                { href: '/metiers',      label: 'Métiers whitelist' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="footer-link">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Publications */}
          <div>
            <div className="label-display mb-5" style={{ color: 'var(--gold)', opacity: 0.5, fontSize: '0.6rem' }}>
              Publications
            </div>
            <ul className="space-y-2.5">
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

          {/* Rejoindre */}
          <div>
            <div className="label-display mb-5" style={{ color: 'var(--gold)', opacity: 0.5, fontSize: '0.6rem' }}>
              Rejoindre
            </div>
            <p className="body-text text-sm mb-5" style={{ color: 'rgba(240,228,204,0.4)', lineHeight: '1.65' }}>
              Whitelist strict. Trois comptes requis : Discord, Steam, CFX.re.
            </p>
            <Link href="/candidatures" className="btn-gold" style={{ fontSize: '0.62rem' }}>
              Candidater
            </Link>
          </div>
        </div>
      </div>

      {/* Bas */}
      <div style={{ borderTop: '1px solid rgba(184,134,11,0.1)' }} className="py-4">
        <div className="container-wide flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="label-display" style={{ color: 'rgba(240,228,204,0.2)', fontSize: '0.58rem' }}>
            &copy; {year} Wild Frontier RP — Tous droits réservés
          </p>
          <div className="flex items-center gap-5">
            <Link href="/contact" className="footer-link-sm">Contact</Link>
            <span style={{ color: 'rgba(184,134,11,0.15)', userSelect: 'none' }}>|</span>
            <Link href="/espace-staff" className="footer-link-sm">Accès staff</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
