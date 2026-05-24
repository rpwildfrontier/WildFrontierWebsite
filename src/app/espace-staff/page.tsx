import type { Metadata } from 'next'
import Image from 'next/image'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { fetchGuildStats } from '@/lib/discord'
import SignInButton from '@/components/SignInButton'
import SignOutButton from '@/components/SignOutButton'

export const metadata: Metadata = {
  title: 'Espace Staff',
  description: 'Administration de Wild Frontier RP.',
}

type SessionUser = {
  name?: string | null
  email?: string | null
  image?: string | null
  id?: string
  isStaff?: boolean
  isJoueurValide?: boolean
}

const outilsStaff = [
  {
    initial: 'C', title: 'Candidatures',
    desc: 'Dossiers reçus via le site — consultez le canal Discord dédié.',
    action: null,
  },
  {
    initial: 'J', title: 'Joueurs actifs',
    desc: 'Gérez les rôles et accès depuis le serveur Discord.',
    action: null,
  },
  {
    initial: 'R', title: 'Registres officiels',
    desc: 'Archives du comté accessibles depuis la page Archives.',
    href: '/archives',
  },
  {
    initial: 'G', title: 'Gazette du Comté',
    desc: 'Publiez des articles depuis la page Journal.',
    href: '/journal',
  },
  {
    initial: 'S', title: 'Signalements',
    desc: 'Incidents en jeu — consultez le canal staff Discord.',
    action: null,
  },
  {
    initial: 'A', title: 'Annonces',
    desc: 'Publiez des annonces sur le site et Discord.',
    action: null,
  },
]

export default async function EspaceStaffPage() {
  const session = await getServerSession(authOptions)
  const user    = session?.user as SessionUser | undefined
  const isStaff = user?.isStaff ?? false

  // Fetch stats uniquement si staff connecté
  const guildStats = isStaff ? await fetchGuildStats() : null

  return (
    <>
      {/* Hero sombre */}
      <section
        className="py-16 md:py-24"
        style={{ background: 'linear-gradient(160deg, #0d0500 0%, #1a0a00 100%)', borderBottom: '3px solid var(--gold)' }}
      >
        <div className="container-narrow">
          <div className="flex items-center gap-6 flex-wrap">
            {user?.image && isStaff && (
              <Image
                src={user.image}
                alt={user.name ?? ''}
                width={64}
                height={64}
                className="rounded-full flex-shrink-0"
                style={{ border: '2px solid var(--gold)', opacity: 0.85 }}
              />
            )}
            <div>
              <div className="label-display mb-1" style={{ color: 'var(--gold)', opacity: 0.55, letterSpacing: '0.4em' }}>
                ✦ Administration ✦
              </div>
              <h1 className="display-heading" style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: 'var(--parchment)' }}>
                {isStaff && user?.name ? `Bienvenue, ${user.name}` : 'Espace Staff'}
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: '#140800', minHeight: '60vh' }}>
        <div className="container-wide">

          {!session ? (
            /* ── Connexion ──────────────────────────────── */
            <div className="mx-auto" style={{ maxWidth: '28rem' }}>
              <div
                className="p-8 text-center"
                style={{ border: '2px solid rgba(184,134,11,0.4)', backgroundColor: 'rgba(240,230,200,0.03)' }}
              >
                <div
                  className="official-seal mx-auto mb-6"
                  style={{ width: '72px', height: '72px', color: 'var(--gold)', borderColor: 'var(--gold)', fontFamily: 'var(--font-serif)', fontWeight: 800, fontSize: '1.5rem' }}
                >
                  S.F.
                </div>
                <h2 className="section-heading mb-2" style={{ color: 'var(--parchment)', fontSize: '1.4rem' }}>
                  Authentification Staff
                </h2>
                <p className="body-text mb-8" style={{ color: 'rgba(240,230,200,0.45)' }}>
                  Connexion requise avec un compte Discord lié à un rôle staff actif.
                </p>
                <SignInButton label="Connexion Discord Staff" className="btn-gold" style={{ width: '100%', justifyContent: 'center' }} />
                <p className="label-display mt-4" style={{ color: 'rgba(240,230,200,0.2)' }}>
                  Accès non autorisé — exclusion définitive
                </p>
              </div>
            </div>

          ) : !isStaff ? (
            /* ── Accès refusé ───────────────────────────── */
            <div className="mx-auto text-center" style={{ maxWidth: '28rem' }}>
              <div
                className="p-8"
                style={{ border: '2px solid rgba(139,58,30,0.5)', backgroundColor: 'rgba(139,58,30,0.06)' }}
              >
                <div className="stamp stamp-refused inline-block mb-6">Accès refusé</div>
                <h2 className="section-heading mb-2" style={{ color: 'var(--parchment)', fontSize: '1.2rem' }}>
                  Compte non autorisé
                </h2>
                <p className="body-text mb-6" style={{ color: 'rgba(240,230,200,0.55)' }}>
                  Le compte <strong style={{ color: 'var(--gold)' }}>{user?.name}</strong> ne dispose pas du rôle staff sur le serveur Discord.
                </p>
                <SignOutButton label="Se déconnecter" className="btn-secondary" />
              </div>
            </div>

          ) : (
            /* ── Dashboard staff ────────────────────────── */
            <div className="space-y-8">

              {/* Barre supérieure */}
              <div
                className="flex items-center justify-between flex-wrap gap-4 p-5"
                style={{ border: '1px solid rgba(184,134,11,0.3)', backgroundColor: 'rgba(184,134,11,0.05)' }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="official-seal"
                    style={{ width: '44px', height: '44px', color: 'var(--gold)', borderColor: 'var(--gold)', fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '0.9rem' }}
                  >
                    S.F.
                  </div>
                  <div>
                    <div className="label-display" style={{ color: 'var(--gold)' }}>Staff authentifié</div>
                    <p className="section-heading" style={{ color: 'var(--parchment)', fontSize: '1rem' }}>{user?.name}</p>
                  </div>
                </div>
                <SignOutButton label="Déconnexion" className="btn-secondary" />
              </div>

              {/* Stats Discord */}
              {guildStats && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: 'Membres',       value: guildStats.memberCount.toString(),  color: 'var(--gold)' },
                    { label: 'En ligne',       value: guildStats.onlineCount.toString(),  color: '#3ba55d' },
                    { label: 'Serveur',        value: guildStats.name,                   color: 'var(--parchment)' },
                    { label: 'Statut',         value: 'Opérationnel',                    color: '#3ba55d' },
                  ].map(stat => (
                    <div
                      key={stat.label}
                      className="p-4 text-center"
                      style={{ border: '1px solid rgba(184,134,11,0.2)', backgroundColor: 'rgba(240,230,200,0.03)' }}
                    >
                      <div className="section-heading mb-1" style={{ fontSize: '1.3rem', color: stat.color }}>
                        {stat.value}
                      </div>
                      <div className="label-display" style={{ color: 'rgba(240,230,200,0.35)' }}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Outils */}
              <div>
                <div className="label-display mb-5" style={{ color: 'rgba(240,230,200,0.35)', letterSpacing: '0.25em' }}>
                  Outils d&apos;administration
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {outilsStaff.map(outil => (
                    <div
                      key={outil.title}
                      className="p-5"
                      style={{
                        border: '1px solid rgba(184,134,11,0.2)',
                        backgroundColor: 'rgba(240,230,200,0.03)',
                        cursor: outil.href ? 'pointer' : 'default',
                        transition: 'border-color 0.15s ease',
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="official-seal flex-shrink-0"
                          style={{ width: '40px', height: '40px', color: 'var(--gold)', borderColor: 'rgba(184,134,11,0.4)', fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '0.9rem' }}
                        >
                          {outil.initial}
                        </div>
                        <div>
                          <h3 className="section-heading mb-1" style={{ color: 'var(--parchment)', fontSize: '1rem' }}>
                            {outil.title}
                          </h3>
                          <p className="body-text" style={{ color: 'rgba(240,230,200,0.4)', fontSize: '0.85rem' }}>
                            {outil.desc}
                          </p>
                          {outil.href && (
                            <a
                              href={outil.href}
                              className="label-display mt-2 inline-block"
                              style={{ color: 'var(--gold)', fontSize: '0.6rem' }}
                            >
                              Accéder →
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Note technique */}
              <div
                className="p-4"
                style={{ border: '1px dashed rgba(184,134,11,0.2)', backgroundColor: 'rgba(240,230,200,0.02)' }}
              >
                <div className="label-display mb-1" style={{ color: 'rgba(240,230,200,0.25)' }}>
                  Note système
                </div>
                <p className="body-text" style={{ color: 'rgba(240,230,200,0.3)', fontSize: '0.85rem' }}>
                  Les candidatures soumises via le site sont transmises au canal Discord configuré.
                  La gestion des rôles joueur s&apos;effectue directement depuis le serveur Discord.
                  Toutes les actions sur cet espace sont journalisées.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer sécurité */}
      <section style={{ backgroundColor: '#0d0500', borderTop: '1px solid rgba(184,134,11,0.1)' }} className="py-6">
        <div className="container-narrow text-center">
          <p className="label-display" style={{ color: 'rgba(240,230,200,0.15)', letterSpacing: '0.3em' }}>
            Accès journalisé — Wild Frontier RP Administration
          </p>
        </div>
      </section>
    </>
  )
}
