import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import SignInButton from '@/components/SignInButton'
import SignOutButton from '@/components/SignOutButton'

export const metadata: Metadata = {
  title: 'Espace Joueur',
  description: 'Espace réservé aux joueurs validés de Wild Frontier RP.',
}

const ressources = [
  { href: '/univers',    label: 'Bible narrative',  desc: 'Histoire et géographie du comté' },
  { href: '/reglement',  label: 'Règlement',         desc: 'Règles et code de conduite' },
  { href: '/metiers',    label: 'Métiers whitelist', desc: 'Rôles à accès restreint' },
  { href: '/institutions',label: 'Institutions',    desc: 'Structure politique du comté' },
]

const sections = [
  { initial: 'D', title: 'Mon dossier',    desc: 'Historique et statut de votre candidature.' },
  { initial: 'P', title: 'Mon personnage', desc: 'Identité, statut et rôles de votre personnage.' },
  { initial: 'N', title: 'Notifications',  desc: 'Messages du staff et annonces importantes.' },
  { initial: 'R', title: 'Documents',      desc: 'Vos actes, contrats et documents officiels.' },
]

type SessionUser = {
  name?: string | null
  email?: string | null
  image?: string | null
  id?: string
  isStaff?: boolean
  isJoueurValide?: boolean
}

export default async function EspaceJoueurPage() {
  const session = await getServerSession(authOptions)
  const user = session?.user as SessionUser | undefined

  return (
    <>
      {/* Hero */}
      <section
        className="py-16 md:py-24"
        style={{ background: 'linear-gradient(160deg, #2d1500 0%, #4a2500 60%)', borderBottom: '2px solid var(--gold)' }}
      >
        <div className="container-narrow">
          <div className="flex items-center gap-6 flex-wrap">
            {user?.image && (
              <Image
                src={user.image}
                alt={user.name ?? ''}
                width={72}
                height={72}
                className="rounded-full flex-shrink-0"
                style={{ border: '2px solid var(--gold)', opacity: 0.9 }}
              />
            )}
            <div>
              <div className="label-display mb-1" style={{ color: 'var(--gold)', opacity: 0.7, letterSpacing: '0.3em' }}>
                {user ? (user.isJoueurValide ? 'Joueur validé' : 'Candidature en cours') : 'Accès restreint'}
              </div>
              <h1 className="display-heading" style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: 'var(--parchment)' }}>
                {user ? (user.name ?? 'Espace Joueur') : 'Espace Joueur'}
              </h1>
              {user && (
                <p className="body-text mt-1" style={{ color: 'rgba(240,230,200,0.5)', fontSize: '0.9rem' }}>
                  ID Discord : {user.id}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {!session ? (
        /* ── Non connecté ─────────────────────────────── */
        <>
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
                  Cet espace est réservé aux joueurs dont la candidature a été validée.
                  Connectez-vous avec votre compte Discord pour accéder à votre espace.
                </p>
                <SignInButton />
                <p className="body-text mt-4" style={{ fontSize: '0.9rem' }}>
                  Pas encore joueur ?{' '}
                  <Link href="/candidatures" style={{ color: 'var(--rust)' }}>Déposez une candidature</Link>
                </p>
              </div>
            </div>
          </section>

          {/* Aperçu verrouillé */}
          <section className="py-16" style={{ backgroundColor: 'var(--parchment-dark)', borderTop: '2px solid var(--border)' }}>
            <div className="container-wide">
              <div className="text-center mb-10">
                <div className="label-display mb-2" style={{ color: 'var(--ink-20)' }}>Aperçu</div>
                <h2 className="section-heading" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>Contenu de l&apos;espace joueur</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 opacity-40 pointer-events-none select-none">
                {sections.map(s => (
                  <div key={s.title} className="parchment-card text-center">
                    <div className="monogram monogram-lg mx-auto mb-3">{s.initial}</div>
                    <h3 className="section-heading mb-1" style={{ fontSize: '1rem' }}>{s.title}</h3>
                    <p className="body-text" style={{ fontSize: '0.85rem' }}>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : (
        /* ── Connecté ─────────────────────────────────── */
        <section className="py-14">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

              {/* Colonne gauche — profil + statut */}
              <div className="space-y-6">

                {/* Carte profil */}
                <div className="document-panel">
                  <div className="label-display mb-4" style={{ color: 'var(--ink-20)' }}>Profil Discord</div>
                  <div className="flex items-center gap-4 mb-5">
                    {user?.image ? (
                      <Image src={user.image} alt={user.name ?? ''} width={56} height={56} className="rounded-full flex-shrink-0" style={{ border: '1.5px solid var(--border)' }} />
                    ) : (
                      <div className="monogram monogram-lg flex-shrink-0">{(user?.name ?? 'J').charAt(0)}</div>
                    )}
                    <div>
                      <h2 className="section-heading" style={{ fontSize: '1.1rem' }}>{user?.name}</h2>
                      <p className="body-text" style={{ fontSize: '0.82rem' }}>{user?.email}</p>
                    </div>
                  </div>

                  {/* Statut */}
                  <div
                    className="p-3"
                    style={{
                      border: `1px solid ${user?.isJoueurValide ? 'rgba(26,92,26,0.3)' : 'rgba(122,94,0,0.3)'}`,
                      backgroundColor: user?.isJoueurValide ? 'rgba(26,92,26,0.06)' : 'rgba(122,94,0,0.06)',
                    }}
                  >
                    <div className="label-display mb-1" style={{ color: user?.isJoueurValide ? '#1a5c1a' : '#7a5e00' }}>
                      Statut sur le serveur
                    </div>
                    <p className="section-heading" style={{ fontSize: '0.95rem', color: user?.isJoueurValide ? '#1a5c1a' : '#7a5e00' }}>
                      {user?.isJoueurValide ? 'Joueur validé' : 'En attente de validation'}
                    </p>
                    {!user?.isJoueurValide && (
                      <p className="body-text mt-1" style={{ fontSize: '0.82rem' }}>
                        Le staff examinera votre dossier sous 48h à 7 jours.
                      </p>
                    )}
                  </div>

                  {user?.isStaff && (
                    <div className="mt-3">
                      <span className="badge badge-closed">Membre du staff</span>
                    </div>
                  )}

                  <div className="mt-5 pt-4" style={{ borderTop: '1px solid var(--border-light)' }}>
                    <SignOutButton label="Se déconnecter" />
                  </div>
                </div>

                {/* Ressources */}
                <div className="parchment-card">
                  <div className="label-display mb-4" style={{ color: 'var(--ink-20)' }}>Ressources</div>
                  <ul className="space-y-3">
                    {ressources.map(r => (
                      <li key={r.href}>
                        <Link href={r.href} style={{ textDecoration: 'none' }}>
                          <div className="flex items-start gap-3 py-2" style={{ borderBottom: '1px solid var(--border-light)' }}>
                            <span style={{ color: 'var(--gold)', fontFamily: 'var(--font-serif)', flexShrink: 0 }}>→</span>
                            <div>
                              <div className="section-heading" style={{ fontSize: '0.9rem', color: 'var(--rust)' }}>{r.label}</div>
                              <div className="body-text" style={{ fontSize: '0.82rem' }}>{r.desc}</div>
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Colonne droite — dashboard */}
              <div className="lg:col-span-2 space-y-6">

                {user?.isJoueurValide ? (
                  <>
                    {/* Personnage */}
                    <div className="document-panel">
                      <div className="label-display mb-2" style={{ color: 'var(--rust)' }}>Mon personnage</div>
                      <h3 className="section-heading mb-4" style={{ fontSize: '1.2rem' }}>Fiche de personnage</h3>
                      <div
                        className="p-5 text-center"
                        style={{ border: '1px dashed var(--border)', backgroundColor: 'rgba(232,213,163,0.2)' }}
                      >
                        <p className="body-text" style={{ fontSize: '0.9rem' }}>
                          Votre fiche de personnage sera complétée par le staff après votre première session en jeu.
                        </p>
                      </div>
                    </div>

                    {/* Sections disponibles */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {sections.map(s => (
                        <div key={s.title} className="accent-card flex items-start gap-4">
                          <div className="monogram flex-shrink-0">{s.initial}</div>
                          <div>
                            <h3 className="section-heading mb-1" style={{ fontSize: '1rem' }}>{s.title}</h3>
                            <p className="body-text" style={{ fontSize: '0.85rem' }}>{s.desc}</p>
                            <span className="badge badge-pending mt-2">En développement</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  /* En attente de validation */
                  <div className="document-panel">
                    <div className="label-display mb-2" style={{ color: 'var(--ink-20)' }}>Suivi de candidature</div>
                    <h3 className="section-heading mb-5" style={{ fontSize: '1.2rem' }}>Votre dossier est en cours d&apos;examen</h3>

                    {/* Timeline */}
                    <div className="space-y-4">
                      {[
                        { n: '1', label: 'Dossier soumis',       done: true,  note: 'Reçu par le staff' },
                        { n: '2', label: 'Examen du dossier',    done: false, note: 'En cours' },
                        { n: '3', label: 'Entretien RP',         done: false, note: 'Si dossier retenu' },
                        { n: '4', label: 'Validation & accès',   done: false, note: 'Rôle Discord attribué' },
                      ].map(step => (
                        <div key={step.n} className="flex items-start gap-4">
                          <div
                            className="official-seal flex-shrink-0"
                            style={{
                              width: '36px', height: '36px',
                              fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '0.85rem',
                              color: step.done ? '#1a5c1a' : 'var(--ink-40)',
                              borderColor: step.done ? '#1a5c1a' : 'var(--border-light)',
                              backgroundColor: step.done ? 'rgba(26,92,26,0.08)' : 'transparent',
                            }}
                          >
                            {step.done ? '✓' : step.n}
                          </div>
                          <div className="pt-1">
                            <div className="section-heading" style={{ fontSize: '0.95rem', color: step.done ? '#1a5c1a' : 'var(--ink)' }}>
                              {step.label}
                            </div>
                            <div className="body-text" style={{ fontSize: '0.82rem' }}>{step.note}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div
                      className="mt-6 p-4"
                      style={{ border: '1px solid var(--border-light)', backgroundColor: 'var(--parchment-50)' }}
                    >
                      <div className="label-display mb-1" style={{ color: 'var(--ink-20)' }}>Délai de réponse</div>
                      <p className="body-text" style={{ fontSize: '0.88rem' }}>
                        Le staff répond sous <strong>48h à 7 jours</strong>. Vous serez contacté sur Discord.
                        Ne soumettez pas un second dossier.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
