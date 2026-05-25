'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const items = [
  { href: '/',             icon: '🏠', label: 'Accueil' },
  { href: '/reglement',    icon: '📜', label: 'Ordres' },
  { href: '/candidatures', icon: '🤠', label: 'Candidature', center: true },
  { href: '/journal',      icon: '📣', label: 'Annonces' },
  { href: '/faq',          icon: '≡',  label: 'Plus' },
]

export default function BottomNav() {
  const path = usePathname()

  return (
    <nav className="bottom-nav md:hidden" aria-label="Navigation principale">
      {items.map(item => {
        const isActive = item.href === '/' ? path === '/' : path.startsWith(item.href)

        if (item.center) {
          return (
            <div key={item.href} className="bottom-nav-center">
              <Link href={item.href} className="bottom-nav-center-btn" aria-label={item.label}>
                <span style={{ fontSize: '1.3rem', lineHeight: 1 }}>{item.icon}</span>
              </Link>
              <span className="bottom-nav-center-label">{item.label}</span>
            </div>
          )
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`bottom-nav-item${isActive ? ' active' : ''}`}
            aria-label={item.label}
          >
            <span className="bottom-nav-item-icon">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
