import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contacter le staff de Wild Frontier RP — Questions, signalements et support.',
}

const canaux = [
  {
    initial: 'D',
    name: 'Discord',
    desc: 'Canal principal. Rejoignez notre serveur Discord pour toutes les discussions.',
    note: 'Réponse sous 24h',
  },
  {
    initial: 'F',
    name: 'Formulaire de contact',
    desc: 'Pour les demandes formelles, signalements et rapports officiels.',
    note: 'Réponse sous 48–72h',
  },
  {
    initial: 'U',
    name: 'Urgences staff',
    desc: 'Pour les incidents graves en jeu (triche, harcèlement, bug critique).',
    note: 'Ticket Discord prioritaire',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="page-hero"
        style={{ background: 'linear-gradient(170deg, var(--parchment-dark) 0%, var(--parchment) 60%)', borderBottom: '2px solid var(--border)' }}
      >
        <div className="container-narrow text-center">
          <div className="label-display mb-4" style={{ color: 'var(--ink-20)', letterSpacing: '0.25em' }}>
            Bureau du staff
          </div>
          <h1 className="display-heading mb-5" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
            Contact
          </h1>
          <p className="body-text mx-auto" style={{ maxWidth: '36rem' }}>
            Pour toute question concernant une candidature, un signalement ou une information générale,
            vous pouvez contacter le staff par les voies indiquées ci-dessous.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Canaux de contact */}
            <div className="lg:col-span-1 space-y-4">
              <h2 className="section-heading mb-6" style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)' }}>
                Canaux officiels
              </h2>

              {canaux.map(channel => (
                <div key={channel.name} className="parchment-card">
                  <div className="flex items-start gap-3">
                    <div className="monogram flex-shrink-0" style={{ width: '40px', height: '40px', fontSize: '1rem' }}>
                      {channel.initial}
                    </div>
                    <div>
                      <h3 className="section-heading mb-1" style={{ fontSize: '1rem' }}>
                        {channel.name}
                      </h3>
                      <p className="body-text mb-2" style={{ fontSize: '0.88rem' }}>{channel.desc}</p>
                      <span className="label-display" style={{ color: 'var(--ink-20)' }}>
                        {channel.note}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              <div
                className="p-4"
                style={{ border: '1px dashed var(--border)', backgroundColor: 'rgba(232,213,163,0.25)' }}
              >
                <div className="label-display mb-2" style={{ color: 'var(--ink-20)' }}>À noter</div>
                <p className="body-text" style={{ fontSize: '0.88rem' }}>
                  Le staff répond dans les délais indiqués. Merci de ne pas relancer plusieurs fois
                  la même demande — cela ralentit le traitement de tous les dossiers.
                </p>
              </div>
            </div>

            {/* Formulaire */}
            <div className="lg:col-span-2">
              <div className="document-panel">
                <div className="label-display mb-2" style={{ color: 'var(--rust)', letterSpacing: '0.3em' }}>
                  Formulaire de contact
                </div>
                <h2 className="section-heading mb-6" style={{ fontSize: '1.6rem' }}>
                  Envoyer un message
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
