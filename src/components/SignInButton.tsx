'use client'

import { signIn } from 'next-auth/react'

interface Props {
  label?: string
  className?: string
  style?: React.CSSProperties
}

export default function SignInButton({ label = 'Se connecter avec Discord', className = 'btn-primary', style }: Props) {
  return (
    <button className={className} style={style} onClick={() => signIn('discord')}>
      {label}
    </button>
  )
}
