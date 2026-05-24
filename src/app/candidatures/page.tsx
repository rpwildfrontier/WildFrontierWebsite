import type { Metadata } from 'next'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import SignInButton from '@/components/SignInButton'
import CandidatureForm from '@/components/CandidatureForm'

export const metadata: Metadata = {
  title: 'Candidatures',
  description: 'Déposez votre candidature pour rejoindre Wild Frontier RP. Discord, Steam et CFX.re requis.',
}

const comptes = [
  { initial: 'D', name: 'Discord', desc: 'Canal principal de communication avec le staff et la communauté.' },
  { initial: 'S', name: 'Steam',   desc: 'Votre identité sur la plateforme. RedDeadRedemption II requis.' },
  { initial: 'C', name: 'CFX.re', desc: 'Compte RedM/FiveM pour accéder au serveur de jeu.' },
]

const etapes = [
  { n: '1', title: 'Lire',      desc: 'Lisez le règlement et découvrez l\'univers du serveur.' },
  { n: '2', title: 'Connecter', desc: 'Reliez vos comptes Discord, Steam et CFX.re.' },
  { n: '3', title: 'Rédiger',   desc: 'Remplissez le formulaire de candidature avec soin.' },
  { n: '4', title: 'Attendre',  desc: 'Le staff examine votre dossier et vous contacte.' },
]

export default async function CandidaturesPage() {
  const session = await getServerSession(authOptions)

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

      {/* Formulaire et comptes requis */}
      <section className="py-16 md:py-20">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Colonne gauche */}
            <div className="lg:col-span-1 space-y-6">
              <div className="document-panel">
                <h3 className="section-heading mb-5" style={{ fontSize: '1.1rem', color: 'var(--rust)' }}>
                  Comptes requis
                </h3>
                <div className="space-y-4">
                  {comptes.map(compte => (
                    <div
                      key={compte.name}
                      className="flex items-start gap-3 p-3"
                      style={{ border: '1px solid var(--border-light)', backgroundColor: 'rgba(253,249,240,0.6)' }}
                    >
                      <div className="monogram flex-shrink-0" style={{ width: '36px', height: '36px', fontSize: '0.9rem' }}>
                        {compte.initial}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <span className="section-heading" style={{ fontSize: '0.95rem' }}>{compte.name}</span>
                          <span className="badge badge-closed">Obligatoire</span>
                        </div>
                        <p className="body-text" style={{ fontSize: '0.85rem' }}>{compte.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  className="mt-4 p-3"
                  style={{ backgroundColor: 'rgba(139,58,30,0.06)', border: '1px solid rgba(139,58,30,0.25)' }}
                >
                  <div className="label-display mb-1" style={{ color: 'var(--rust)' }}>Attention</div>
                  <p className="body-text" style={{ fontSize: '0.85rem' }}>
                    Sans les trois comptes liés, le formulaire ne peut pas être soumis.
                  </p>
                </div>
              </div>

              <div className="parchment-card">
                <h3 className="section-heading mb-4" style={{ fontSize: '1rem' }}>Avant de candidater</h3>
                <ul className="space-y-2">
                  {[
                    { href: '/univers',   label: 'Lire l\'univers du serveur' },
                    { href: '/reglement', label: 'Lire le règlement complet' },
                    { href: '/metiers',   label: 'Découvrir les métiers whitelist' },
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
            </div>

            {/* Colonne droite : formulaire */}
            <div className="lg:col-span-2">
              <div className="document-panel">
                <div className="label-display mb-2" style={{ color: 'var(--rust)', letterSpacing: '0.3em' }}>
                  Dossier de candidature
                </div>
                <h2 className="section-heading mb-6" style={{ fontSize: '1.6rem' }}>
                  Formulaire d&apos;admission
                </h2>

                {session ? (
                  /* Formulaire actif — utilisateur connecté */
                  <CandidatureForm />
                ) : (
                  /* Portail de connexion */
                  <div
                    className="p-6 text-center"
                    style={{ border: '2px dashed var(--border)', backgroundColor: 'rgba(232,213,163,0.25)' }}
                  >
                    <div
                      className="official-seal mx-auto mb-4"
                      style={{ width: '56px', height: '56px', color: 'var(--ink-40)', borderColor: 'var(--border)', fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '1rem' }}
                    >
                      §
                    </div>
                    <h3 className="section-heading mb-2" style={{ fontSize: '1.1rem' }}>
                      Connexion requise
                    </h3>
                    <p className="body-text mb-5" style={{ fontSize: '0.95rem' }}>
                      Connectez-vous avec Discord pour accéder au formulaire. Votre identité Discord sera
                      liée à votre dossier.
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
