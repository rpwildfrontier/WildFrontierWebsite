import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AuthProvider from '@/components/AuthProvider'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL ?? 'https://wildfrontierrp.com'),
  title: {
    default: 'Wild Frontier RP — Gazette du Comté',
    template: '%s | Wild Frontier RP',
  },
  description:
    'Serveur RedM à RP dur et organique. Amérique de la fin du XIXe siècle. Whitelist strict. Chaque action compte, chaque vie laisse une trace.',
  keywords: ['RedM', 'RolePlay', 'FiveM', 'Far West', 'RP dur', 'whitelist', 'RedDeadOnline', 'VORP'],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Wild Frontier RP',
    title: 'Wild Frontier RP — Gazette du Comté',
    description: 'Serveur RedM à RP dur et organique dans l\'Amérique du XIXe siècle.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wild Frontier RP — Gazette du Comté',
    description: 'Serveur RedM à RP dur et organique dans l\'Amérique du XIXe siècle.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&family=Crimson+Text:ital,wght@0,400;0,600;1,400;1,600&family=Special+Elite&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AuthProvider>
          <div className="page-wrapper">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
