import type { Metadata } from 'next'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { readSignedCookie, generateCfxCode } from '@/lib/signed-cookie'
import SignInButton from '@/components/SignInButton'
import CandidatureForm from '@/components/CandidatureForm'

export const metadata: Metadata = {
  title: 'Candidatures',
  description: 'Déposez votre candidature pour rejoindre Wild Frontier RP.',
}

export type SteamData  = { id: string; name: string; avatar: string; ownsRdr2: boolean }
export type CfxreData  = { username: string; name: string; avatar: string }

const etapes = [
  { n: '1', title: 'Lire',      desc: 'Lisez le règlement et l\'univers du serveur.' },
  { n: '2', title: 'Connecter', desc: 'Liez vos trois comptes (Discord, Steam, CFX.re).' },
  { n: '3', title: 'Rédiger',   desc: 'Remplissez le formulaire de candidature avec soin.' },
  { n: '4', title: 'Attendre',  desc: 'Le staff examine votre dossier et vous contacte.' },
]

export default async function CandidaturesPage() {
  const session    = await getServerSession(authOptions)
  const cookieStore = cookies()

  const steamRaw  = cookieStore.get('wf_steam')?.value
  const cfxreRaw  = cookieStore.get('wf_cfxre')?.value

  const steamData = steamRaw  ? readSignedCookie<SteamData>(steamRaw)  : null
  const cfxreData = cfxreRaw  ? readSignedCookie<CfxreData>(cfxreRaw)  : null

  const discordId = (session?.user as { id?: string })?.id ?? ''
  const cfxCode   = discordId ? generateCfxCode(discordId) : ''

  return (
    <>
      {/* Hero */}
      <section
        className="page-hero"
        style={{ background: 'linear-gradient(170deg, var(--parchment-dark) 0%, var(--parchment) 60%)', borderBottom: '2px solid var(--border)' }}
      >
        <div className="container-narrow text-center">
          <div className="label-display mb-4" style={{ color: 'var(--ink-20)', letterSpacing: '0.25em' }}>
            Accès au territoire
          </div>
          <h1 className="display-heading mb-5" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
            Candidatures
          </h1>
          <p className="body-text mx-auto" style={{ maxWidth: '36rem' }}>
            L&apos;accès à Wild Frontier RP est soumis à whitelist. Chaque dossier est examiné
            individuellement. La qualité prime sur la quantité.
          </p>
        </div>
      </section>

      {/* Étapes */}
      <section className="py-16" style={{ borderBottom: '2px solid var(--border)' }}>
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="section-heading" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
              Parcours de candidature
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {etapes.map(step => (
              <div key={step.n} className="text-center">
                <div
                  className="official-seal mx-auto mb-4"
                  style={{ width: '56px', height: '56px', color: 'var(--rust)', borderColor: 'var(--rust)', fontFamily: 'var(--font-serif)', fontWeight: 800, fontSize: '1.25rem' }}
                >
                  {step.n}
                </div>
                <h3 className="section-heading mb-2" style={{ fontSize: '1.05rem' }}>{step.title}</h3>
                <p className="body-text" style={{ fontSize: '0.9rem' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section className="py-16 md:py-20">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Liens utiles */}
            <div className="lg:col-span-1 space-y-6">
              <div className="parchment-card">
                <h3 className="section-heading mb-4" style={{ fontSize: '1rem' }}>Avant de candidater</h3>
                <ul className="space-y-2">
                  {[
                    { href: '/univers',    label: 'Lire l\'univers' },
                    { href: '/reglement', label: 'Lire le règlement' },
                    { href: '/metiers',   label: 'Découvrir les métiers' },
                    { href: '/faq',       label: 'Consulter la FAQ' },
                  ].map(link => (
                    <li key={link.href}>
                      <Link href={link.href} className="body-text" style={{ color: 'var(--rust)', fontSize: '0.9rem' }}>
                        → {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="p-4"
                style={{ border: '1px dashed var(--border)', backgroundColor: 'rgba(232,213,163,0.2)' }}
              >
                <div className="label-display mb-2" style={{ color: 'var(--ink-20)' }}>Délai de réponse</div>
                <p className="body-text" style={{ fontSize: '0.88rem' }}>
                  Le staff répond sous <strong>48h à 7 jours</strong>.
                  Ne soumettez pas un second dossier — cela ralentit le traitement.
                </p>
              </div>
            </div>

            {/* Formulaire principal */}
            <div className="lg:col-span-2">
              <div className="document-panel">
                <div className="label-display mb-2" style={{ color: 'var(--rust)', letterSpacing: '0.3em' }}>
                  Dossier de candidature
                </div>
                <h2 className="section-heading mb-6" style={{ fontSize: '1.6rem' }}>
                  Formulaire d&apos;admission
                </h2>

                {session ? (
                  <CandidatureForm
                    discordName={session.user?.name ?? ''}
                    discordAvatar={session.user?.image ?? ''}
                    steamData={steamData}
                    cfxreData={cfxreData}
                    cfxCode={cfxCode}
                  />
                ) : (
                  <div
                    className="p-6 text-center"
                    style={{ border: '2px dashed var(--border)', backgroundColor: 'rgba(232,213,163,0.2)' }}
                  >
                    <div
                      className="official-seal mx-auto mb-4"
                      style={{ width: '56px', height: '56px', color: 'var(--ink-40)', borderColor: 'var(--border)', fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '1rem' }}
                    >
                      §
                    </div>
                    <h3 className="section-heading mb-2" style={{ fontSize: '1.1rem' }}>
                      Connexion Discord requise
                    </h3>
                    <p className="body-text mb-5" style={{ fontSize: '0.95rem' }}>
                      Connectez-vous avec Discord pour accéder au formulaire et lier vos comptes.
                    </p>
                    <SignInButton label="Se connecter avec Discord" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
