'use client'

import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

export default function CandidatureSearch({ value }: { value: string }) {
  const router       = useRouter()
  const pathname     = usePathname()
  const searchParams = useSearchParams()

  const update = useCallback(
    (q: string) => {
      const params = new URLSearchParams(searchParams.toString())
      if (q) params.set('q', q)
      else   params.delete('q')
      router.replace(`${pathname}?${params.toString()}`)
    },
    [router, pathname, searchParams],
  )

  return (
    <input
      type="search"
      defaultValue={value}
      onChange={e => update(e.target.value)}
      placeholder="Rechercher par nom, Discord, CFX.re…"
      style={{
        padding:         '7px 14px',
        border:          '1px solid rgba(184,134,11,0.25)',
        backgroundColor: 'rgba(240,230,200,0.04)',
        color:           'var(--parchment)',
        fontFamily:      'var(--font-body)',
        fontSize:        '0.85rem',
        width:           '100%',
        maxWidth:        '22rem',
        outline:         'none',
      }}
    />
  )
}
