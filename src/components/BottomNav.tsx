'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HomeIcon, MapIcon, HatIcon, MegaphoneIcon, MenuIcon } from './Icons'

const tabs = [
  { href: '/',             Icon: HomeIcon,      label: 'Accueil' },
  { href: '/univers',      Icon: MapIcon,        label: 'Univers' },
  { href: '/candidatures', Icon: HatIcon,        label: 'Candidature' },
  { href: '/journal',      Icon: MegaphoneIcon,  label: 'Annonces' },
  { href: '/faq',          Icon: MenuIcon,       label: 'Plus' },
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
          <span className="bottom-nav-icon"><tab.Icon size={22} color="currentColor" /></span>
          <span>{tab.label}</span>
        </Link>
      ))}
    </nav>
  )
}
