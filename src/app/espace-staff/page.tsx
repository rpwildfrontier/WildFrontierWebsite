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
          borderBottom: '3px solid var(--color-gold)',
        }}
      >
        <div className="container-narrow text-center">
          <div
            className="display-text text-xs uppercase tracking-[0.5em] mb-4"
            style={{ color: 'var(--color-gold)', opacity: 0.6 }}
          >
            ✦ Accès Restreint ✦
          </div>
          <h1
            className="font-serif font-black uppercase mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--color-parchment)', letterSpacing: '0.05em' }}
          >
            Administration
          </h1>
          <p style={{ color: 'rgba(240, 230, 200, 0.5)', fontFamily: 'var(--font-crimson)', fontSize: '1.1rem' }}>
            Zone strictement réservée au staff de Wild Frontier RP.
          </p>
        </div>
      </section>

      {/* Connexion */}
      <section className="py-20" style={{ backgroundColor: '#1a0a00' }}>
        <div className="container-narrow max-w-md mx-auto">
          <div
            className="p-8 text-center"
            style={{
              border: '2px solid rgba(184, 134, 11, 0.4)',
              backgroundColor: 'rgba(240, 230, 200, 0.04)',
            }}
          >
            <div
              className="official-seal w-20 h-20 mx-auto mb-6"
              style={{ color: 'var(--color-gold)', borderColor: 'var(--color-gold)' }}
            >
              <span className="display-text text-2xl">⚖</span>
            </div>

            <h2
              className="font-serif font-bold text-2xl mb-2"
              style={{ color: 'var(--color-parchment)' }}
            >
              Authentification Staff
            </h2>
            <p className="mb-8" style={{ color: 'rgba(240, 230, 200, 0.5)', fontFamily: 'var(--font-crimson)' }}>
              Connexion requise avec un compte Discord lié à un rôle staff actif.
            </p>

            <button
              className="btn-gold w-full mb-4"
            >
              💬 Connexion Discord Staff
            </button>

            <p
              className="display-text text-xs uppercase tracking-wider"
              style={{ color: 'rgba(240, 230, 200, 0.3)' }}
            >
              Accès non autorisé = exclusion définitive
            </p>
          </div>
        </div>
      </section>

      {/* Avertissement */}
      <section style={{ backgroundColor: '#0d0500', borderTop: '1px solid rgba(184, 134, 11, 0.15)' }} className="py-8">
        <div className="container-narrow text-center">
          <p
            className="display-text text-xs uppercase tracking-widest"
            style={{ color: 'rgba(240, 230, 200, 0.2)' }}
          >
            Toutes les actions sur cet espace sont journalisées et tracées.
          </p>
        </div>
      </section>
    </>
  )
}
