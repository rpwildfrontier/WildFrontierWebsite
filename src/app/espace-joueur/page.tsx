import type { Metadata } from 'next'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import SignInButton from '@/components/SignInButton'
import SignOutButton from '@/components/SignOutButton'

export const metadata: Metadata = {
  title: 'Espace Joueur',
  description: 'Espace réservé aux joueurs validés de Wild Frontier RP — Statut, dossier et ressources.',
}

const fonctionnalites = [
  { initial: 'D', title: 'Mon dossier',    desc: 'Consultez votre candidature et son historique d\'état.' },
  { initial: 'P', title: 'Mon personnage', desc: 'Informations sur votre personnage validé : identité, statut, rôles.' },
  { initial: 'N', title: 'Notifications',  desc: 'Messages du staff, mises à jour et annonces importantes.' },
  { initial: 'R', title: 'Documents liés', desc: 'Vos documents officiels in-game accessibles ici.' },
  { initial: 'F', title: 'Formations',     desc: 'Ressources et guides pour les métiers whitelist.' },
  { initial: 'C', title: 'Paramètres',     desc: 'Gérer vos liaisons de comptes et préférences.' },
]

export default async function EspaceJoueurPage() {
  const session = await getServerSession(authOptions)

  return (
    <>
      {/* Hero */}
      <section
        className="py-20 md:py-32"
        style={{ background: 'linear-gradient(160deg, #2d1500 0%, #4a2500 60%)', borderBottom: '2px solid var(--gold)' }}
      >
        <div className="container-narrow text-center">
          <div className="label-display mb-4" style={{ color: 'var(--gold)', opacity: 0.7, letterSpacing: '0.35em' }}>
            Accès restreint
          </div>
          <h1 className="display-heading mb-5" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', color: 'var(--parchment)' }}>
            Espace Joueur
          </h1>
          {session && (
            <p className="body-text" style={{ color: 'rgba(240,230,200,0.65)' }}>
              Connecté en tant que <strong style={{ color: 'var(--gold)' }}>{session.user?.name}</strong>
            </p>
          )}
        </div>
      </section>

      {!session ? (
        /* ── Connexion requise ───────────────────────────────── */
        <section className="py-20">
          <div className="container-narrow" style={{ maxWidth: '32rem', marginLeft: 'auto', marginRight: 'auto' }}>
            <div className="document-panel text-center">
              <div
                className="official-seal mx-auto mb-5"
                style={{ width: '64px', height: '64px', color: 'var(--ink-40)', borderColor: 'var(--border)', fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '1.1rem' }}
              >
                §
              </div>
              <h2 className="section-heading mb-3" style={{ fontSize: '1.4rem' }}>
                Authentification requise
              </h2>
              <p className="body-text mb-6">
                Cet espace est réservé aux joueurs dont la candidature a été validée par le staff.
                Connectez-vous avec votre compte Discord pour accéder à votre espace personnel.
              </p>
              <SignInButton />
              <p className="body-text mt-4" style={{ fontSize: '0.9rem' }}>
                Pas encore joueur validé ?{' '}
                <Link href="/candidatures" style={{ color: 'var(--rust)' }}>Déposez une candidature</Link>
              </p>
            </div>
          </div>
        </section>
      ) : (
        /* ── Dashboard joueur ────────────────────────────────── */
        <>
          <section className="py-14">
            <div className="container-wide">
              <div className="document-panel mb-8">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="monogram monogram-lg">
                      {(session.user?.name ?? 'J').charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div className="label-display mb-1" style={{ color: 'var(--gold)' }}>Joueur connecté</div>
                      <h2 className="section-heading" style={{ fontSize: '1.3rem' }}>{session.user?.name}</h2>
                      <p className="body-text" style={{ fontSize: '0.88rem' }}>{session.user?.email}</p>
                    </div>
                  </div>
                  <SignOutButton />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {fonctionnalites.map(feature => (
                  <div key={feature.title} className="parchment-card">
                    <div className="flex items-start gap-4">
                      <div className="monogram flex-shrink-0">{feature.initial}</div>
                      <div>
                        <h3 className="section-heading mb-1" style={{ fontSize: '1.05rem' }}>{feature.title}</h3>
                        <p className="body-text" style={{ fontSize: '0.88rem' }}>{feature.desc}</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <span className="badge badge-pending">En développement</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Aperçu (non-connecté seulement) */}
      {!session && (
        <section
          className="py-16"
          style={{ backgroundColor: 'var(--parchment-dark)', borderTop: '2px solid var(--border)' }}
        >
          <div className="container-wide">
            <div className="text-center mb-10">
              <h2 className="section-heading" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>
                Contenu de l&apos;espace joueur
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-50 pointer-events-none select-none">
              {fonctionnalites.map(feature => (
                <div key={feature.title} className="parchment-card text-center">
                  <div className="monogram monogram-lg mx-auto mb-4">{feature.initial}</div>
                  <h3 className="section-heading mb-2" style={{ fontSize: '1.05rem' }}>{feature.title}</h3>
                  <p className="body-text" style={{ fontSize: '0.88rem' }}>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
