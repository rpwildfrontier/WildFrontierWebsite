'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import ArticleForm from '@/components/ArticleForm'
import type { Article } from '@/lib/kv'

export default function StaffCmsPage() {
  const { data: session }           = useSession()
  const defaultAuthor               = session?.user?.name ?? 'Rédaction'
  const [articles,   setArticles]   = useState<Article[]>([])
  const [loading,    setLoading]    = useState(true)
  const [showForm,   setShowForm]   = useState(false)
  const [editing,    setEditing]    = useState<Article | null>(null)

  async function load() {
    setLoading(true)
    try {
      const res = await fetch('/api/staff/articles')
      if (res.ok) setArticles(await res.json())
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  function handleSaved() {
    setShowForm(false)
    setEditing(null)
    load()
  }

  return (
    <div style={{ backgroundColor: 'var(--paper)', minHeight: '100vh' }}>
      <div className="container-wide py-10">

        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div>
            <Link href="/espace-staff" className="label-display"
              style={{ color: 'var(--gold)', fontSize: '0.65rem' }}>
              ← Espace Staff
            </Link>
            <h1 className="display-heading mt-1" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: 'var(--ink)' }}>
              Gazette du Comté — CMS
            </h1>
          </div>
          {!showForm && !editing && (
            <button className="btn-gold" onClick={() => setShowForm(true)}>
              Nouvel article
            </button>
          )}
        </div>

        {/* Formulaire de création */}
        {showForm && (
          <div className="p-6 mb-8"
            style={{ border: '1px solid rgba(42,54,68,0.20)', backgroundColor: 'var(--paper-card)' }}>
            <div className="label-display mb-4" style={{ color: 'var(--gold)', fontSize: '0.65rem' }}>
              Nouvel article
            </div>
            <ArticleForm defaultAuthor={defaultAuthor} onSaved={() => { setShowForm(false); load() }} onCancel={() => setShowForm(false)} />
          </div>
        )}

        {/* Formulaire d'édition */}
        {editing && (
          <div className="p-6 mb-8"
            style={{ border: '1px solid rgba(42,54,68,0.20)', backgroundColor: 'var(--paper-card)' }}>
            <div className="label-display mb-4" style={{ color: 'var(--gold)', fontSize: '0.65rem' }}>
              Modifier : {editing.title}
            </div>
            <ArticleForm article={editing} defaultAuthor={defaultAuthor} onSaved={() => { setEditing(null); load() }} onCancel={() => setEditing(null)} />
          </div>
        )}

        {/* Liste */}
        {loading ? (
          <div className="text-center py-16">
            <p className="body-text" style={{ color: 'var(--ink-40)' }}>Chargement…</p>
          </div>
        ) : articles.length === 0 ? (
          <div className="text-center py-16">
            <p className="body-text" style={{ color: 'var(--ink-40)' }}>
              Aucun article. Créez le premier en cliquant sur &ldquo;Nouvel article&rdquo;.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {articles.map(a => (
              <div key={a.id} className="flex items-center gap-4 p-4"
                style={{ border: '1px solid rgba(42,54,68,0.20)', backgroundColor: 'var(--paper-card)' }}>

                {a.featured && (
                  <div style={{ width: 4, height: 40, backgroundColor: 'var(--gold)', flexShrink: 0, borderRadius: 2 }} />
                )}

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="section-heading" style={{ color: 'var(--ink)', fontSize: '0.95rem' }}>
                      {a.title}
                    </span>
                    <span className="label-display" style={{ color: 'var(--gold)', fontSize: '0.6rem' }}>
                      {a.category}
                    </span>
                    {a.featured && (
                      <span className="label-display" style={{ color: 'var(--gold)', fontSize: '0.6rem' }}>À LA UNE</span>
                    )}
                  </div>
                  <div className="flex gap-4 mt-0.5 flex-wrap">
                    <span className="body-text" style={{ color: 'var(--ink-60)', fontSize: '0.75rem' }}>
                      {a.date}
                    </span>
                    <span className="body-text" style={{ color: 'var(--ink-60)', fontSize: '0.75rem' }}>
                      Par {a.author}
                    </span>
                    <span className="body-text" style={{ color: 'var(--ink-40)', fontSize: '0.75rem' }}>
                      Modifié le {new Date(a.updatedAt).toLocaleDateString('fr-FR')}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => { setEditing(a); setShowForm(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                  className="btn-secondary"
                  style={{ fontSize: '0.72rem', padding: '5px 14px', flexShrink: 0 }}>
                  Modifier
                </button>
              </div>
            ))}
          </div>
        )}

        {articles.length > 0 && (
          <div className="mt-6">
            <Link href="/journal" target="_blank" className="label-display"
              style={{ color: 'var(--gold)', fontSize: '0.65rem' }}>
              Voir le journal public →
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
