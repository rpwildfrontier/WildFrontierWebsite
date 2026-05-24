import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import SignInButton from '@/components/SignInButton'
import SignOutButton from '@/components/SignOutButton'

export const metadata: Metadata = {
  title: 'Espace Staff',
  description: 'Accès réservé — Administration de Wild Frontier RP.',
}

const outils = [
  { initial: 'C', title: 'Candidatures',   desc: 'Examiner les dossiers en attente, valider ou refuser.' },
  { initial: 'J', title: 'Joueurs actifs',  desc: 'Liste des joueurs validés, statuts et historiques.' },
  { initial: 'R', title: 'Registres',       desc: 'Accès aux registres officiels du comté.' },
  { initial: 'S', title: 'Signalements',    desc: 'Tickets et rapports d\'incidents en cours.' },
  { initial: 'A', title: 'Annonces',        desc: 'Publier des annonces sur le site et Discord.' },
  { initial: 'P', title: 'Paramètres',      desc: 'Configuration du serveur et des accès staff.' },
]

export default async function EspaceStaffPage() {
  const session = await getServerSession(authOptions)
  const isStaff = (session?.user as { isStaff?: boolean })?.isStaff ?? false

  return (
    <>
      {/* Hero sombre */}
      <section
        className="py-20 md:py-32"
        style={{ background: 'linear-gradient(160deg, #0d0500 0%, #1a0a00 100%)', borderBottom: '3px solid var(--gold)' }}
      >
        <div className="container-narrow text-center">
          <div className="label-display mb-4" style={{ color: 'var(--gold)', opacity: 0.55, letterSpacing: '0.5em' }}>
            ✦ Accès Restreint ✦
          </div>
          <h1
            className="display-heading mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--parchment)' }}
          >
            Administration
          </h1>
          <p className="body-text" style={{ color: 'rgba(240,230,200,0.45)' }}>
            Zone strictement réservée au staff de Wild Frontier RP.
          </p>
        </div>
      </section>

      {/* Corps */}
      <section className="py-20" style={{ backgroundColor: '#1a0a00' }}>
        <div className="container-narrow" style={{ maxWidth: '32rem', marginLeft: 'auto', marginRight: 'auto' }}>

          {!session ? (
            /* ── Connexion ─────────────────────────────────── */
            <div
              className="p-8 text-center"
              style={{ border: '2px solid rgba(184,134,11,0.4)', backgroundColor: 'rgba(240,230,200,0.04)' }}
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
              <SignInButton label="Connexion Discord Staff" className="btn-gold" style={{ width: '100%', justifyContent: 'center', marginBottom: '1rem' }} />
              <p className="label-display" style={{ color: 'rgba(240,230,200,0.25)' }}>
                Accès non autorisé — exclusion définitive
              </p>
            </div>

          ) : !isStaff ? (
            /* ── Accès refusé ──────────────────────────────── */
            <div
              className="p-8 text-center"
              style={{ border: '2px solid rgba(139,58,30,0.5)', backgroundColor: 'rgba(139,58,30,0.06)' }}
            >
              <div className="stamp stamp-refused inline-block mb-6">Accès refusé</div>
              <h2 className="section-heading mb-2" style={{ color: 'var(--parchment)', fontSize: '1.3rem' }}>
                Compte non autorisé
              </h2>
              <p className="body-text mb-6" style={{ color: 'rgba(240,230,200,0.55)' }}>
                Votre compte Discord ({session.user?.name}) ne dispose pas des droits staff.
                Contactez un administrateur si vous pensez qu&apos;il s&apos;agit d&apos;une erreur.
              </p>
              <SignOutButton label="Se déconnecter" className="btn-secondary" />
            </div>

          ) : (
            /* ── Dashboard staff ───────────────────────────── */
            <div>
              <div
                className="p-6 mb-8"
                style={{ border: '1px solid rgba(184,134,11,0.3)', backgroundColor: 'rgba(184,134,11,0.06)' }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="official-seal"
                      style={{ width: '44px', height: '44px', color: 'var(--gold)', borderColor: 'var(--gold)', fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '0.9rem' }}
                    >
                      S.F.
                    </div>
                    <div>
                      <div className="label-display" style={{ color: 'var(--gold)' }}>Staff authentifié</div>
                      <p className="section-heading" style={{ color: 'var(--parchment)', fontSize: '1rem' }}>
                        {session.user?.name}
                      </p>
                    </div>
                  </div>
                  <SignOutButton label="Déconnexion" className="btn-secondary" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {outils.map(outil => (
                  <div
                    key={outil.title}
                    className="p-5"
                    style={{ border: '1px solid rgba(184,134,11,0.25)', backgroundColor: 'rgba(240,230,200,0.04)', cursor: 'pointer' }}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="official-seal flex-shrink-0"
                        style={{ width: '36px', height: '36px', color: 'var(--gold)', borderColor: 'rgba(184,134,11,0.5)', fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '0.85rem' }}
                      >
                        {outil.initial}
                      </div>
                      <div>
                        <h3 className="section-heading mb-1" style={{ color: 'var(--parchment)', fontSize: '1rem' }}>
                          {outil.title}
                        </h3>
                        <p className="body-text" style={{ color: 'rgba(240,230,200,0.45)', fontSize: '0.85rem' }}>
                          {outil.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer de sécurité */}
      <section style={{ backgroundColor: '#0d0500', borderTop: '1px solid rgba(184,134,11,0.15)' }} className="py-8">
        <div className="container-narrow text-center">
          <p className="label-display" style={{ color: 'rgba(240,230,200,0.2)', letterSpacing: '0.3em' }}>
            Toutes les actions sur cet espace sont journalisées et tracées.
          </p>
        </div>
      </section>
    </>
  )
}
