import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Espace Staff',
  description: 'Accès réservé — Administration de Wild Frontier RP.',
}

export default function EspaceStaffPage() {
  return (
    <>
      {/* Hero sombre */}
      <section
        className="py-20 md:py-32"
        style={{
          background: 'linear-gradient(160deg, #0d0500 0%, #1a0a00 100%)',
          borderBottom: '3px solid var(--gold)',
        }}
      >
        <div className="container-narrow text-center">
          <div
            className="label-display mb-4"
            style={{ color: 'var(--gold)', opacity: 0.55, letterSpacing: '0.5em' }}
          >
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

      {/* Connexion */}
      <section className="py-20" style={{ backgroundColor: '#1a0a00' }}>
        <div className="container-narrow" style={{ maxWidth: '28rem', marginLeft: 'auto', marginRight: 'auto' }}>
          <div
            className="p-8 text-center"
            style={{
              border: '2px solid rgba(184,134,11,0.4)',
              backgroundColor: 'rgba(240,230,200,0.04)',
            }}
          >
            <div
              className="official-seal mx-auto mb-6"
              style={{
                width: '72px',
                height: '72px',
                color: 'var(--gold)',
                borderColor: 'var(--gold)',
                fontFamily: 'var(--font-serif)',
                fontWeight: 800,
                fontSize: '1.5rem',
              }}
            >
              S.F.
            </div>

            <h2
              className="section-heading mb-2"
              style={{ color: 'var(--parchment)', fontSize: '1.4rem' }}
            >
              Authentification Staff
            </h2>
            <p className="body-text mb-8" style={{ color: 'rgba(240,230,200,0.45)' }}>
              Connexion requise avec un compte Discord lié à un rôle staff actif.
            </p>

            <button className="btn-gold" style={{ width: '100%', justifyContent: 'center', marginBottom: '1rem' }}>
              Connexion Discord Staff
            </button>

            <p
              className="label-display"
              style={{ color: 'rgba(240,230,200,0.25)' }}
            >
              Accès non autorisé — exclusion définitive
            </p>
          </div>
        </div>
      </section>

      {/* Avertissement */}
      <section
        style={{ backgroundColor: '#0d0500', borderTop: '1px solid rgba(184,134,11,0.15)' }}
        className="py-8"
      >
        <div className="container-narrow text-center">
          <p
            className="label-display"
            style={{ color: 'rgba(240,230,200,0.2)', letterSpacing: '0.3em' }}
          >
            Toutes les actions sur cet espace sont journalisées et tracées.
          </p>
        </div>
      </section>
    </>
  )
}
