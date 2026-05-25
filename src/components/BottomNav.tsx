'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const tabs = [
  { href: '/',             icon: '🏠', label: 'Accueil' },
  { href: '/univers',      icon: '🗺️', label: 'Univers' },
  { href: '/candidatures', icon: '🤠', label: 'Candidature' },
  { href: '/journal',      icon: '📣', label: 'Annonces' },
  { href: '/faq',          icon: '≡',  label: 'Plus' },
]

export default function BottomNav() {
  const path = usePathname()
  return (
    <nav className="bottom-nav md:hidden">
      {tabs.map(tab => (
        <Link
          key={tab.href}
          href={tab.href}
          className="bottom-nav-item"
          data-active={path === tab.href ? 'true' : 'false'}
        >
          <span className="bottom-nav-icon">{tab.icon}</span>
          <span>{tab.label}</span>
        </Link>
      ))}
    </nav>
  )
}
