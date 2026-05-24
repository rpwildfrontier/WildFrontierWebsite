'use client'

import { signOut } from 'next-auth/react'

interface Props {
  label?: string
  className?: string
}

export default function SignOutButton({ label = 'Se déconnecter', className = 'btn-secondary' }: Props) {
  return (
    <button className={className} onClick={() => signOut()}>
      {label}
    </button>
  )
}
