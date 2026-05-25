export function HomeIcon({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9.5L10 3l7 6.5V17a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5Z"/>
      <path d="M7 18V11h6v7"/>
    </svg>
  )
}

export function MapIcon({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="1,4 7,1 13,4 19,1 19,16 13,19 7,16 1,19"/>
      <line x1="7" y1="1" x2="7" y2="16"/>
      <line x1="13" y1="4" x2="13" y2="19"/>
    </svg>
  )
}

export function StarIcon({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  // 6-pointed sheriff star
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth="1.6" strokeLinejoin="round">
      <polygon points="10,2 12,7 17,7 13,11 15,16 10,13 5,16 7,11 3,7 8,7"/>
    </svg>
  )
}

export function BellIcon({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 2.5a5.5 5.5 0 0 1 5.5 5.5c0 3 .8 4.5 1.5 5.5H3c.7-1 1.5-2.5 1.5-5.5A5.5 5.5 0 0 1 10 2.5Z"/>
      <path d="M8.5 16.5a1.5 1.5 0 0 0 3 0"/>
    </svg>
  )
}

export function MenuIcon({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round">
      <line x1="3" y1="6" x2="17" y2="6"/>
      <line x1="3" y1="10" x2="17" y2="10"/>
      <line x1="3" y1="14" x2="17" y2="14"/>
    </svg>
  )
}

export function BookIcon({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 2h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z"/>
      <path d="M10 2v16"/>
      <line x1="6" y1="7" x2="8" y2="7"/>
      <line x1="6" y1="10" x2="8" y2="10"/>
    </svg>
  )
}

export function NewspaperIcon({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="12" height="14" rx="1"/>
      <path d="M14 7h3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-3"/>
      <line x1="5" y1="7" x2="11" y2="7"/>
      <line x1="5" y1="10" x2="11" y2="10"/>
      <line x1="5" y1="13" x2="9" y2="13"/>
    </svg>
  )
}

export function ArchiveIcon({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="16" height="4" rx="1"/>
      <path d="M4 8v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8"/>
      <line x1="8" y1="12" x2="12" y2="12"/>
    </svg>
  )
}

export function QuestionIcon({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round">
      <circle cx="10" cy="10" r="8"/>
      <path d="M7.5 7.5a2.5 2.5 0 0 1 5 0c0 2-2.5 2.5-2.5 4"/>
      <circle cx="10" cy="15" r="0.5" fill={color} stroke="none"/>
    </svg>
  )
}

export function MailIcon({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="16" height="12" rx="2"/>
      <path d="M2 7l8 5 8-5"/>
    </svg>
  )
}

export function MegaphoneIcon({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 3v14"/>
      <path d="M16 4L5 8v4l11 4"/>
      <path d="M5 12v4a2 2 0 0 0 4 0v-4"/>
    </svg>
  )
}

export function HatIcon({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  // Cowboy hat silhouette
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 13c0 0 2-1 8-1s8 1 8 1"/>
      <path d="M4 13c0-3 1-7 6-7s6 4 6 7"/>
      <path d="M1 13.5C1 13 1.5 13 2 13h16c.5 0 1 0 1 .5s-.8 2-9 2-9-1.5-9-2Z"/>
    </svg>
  )
}

export function SearchIcon({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round">
      <circle cx="9" cy="9" r="5.5"/>
      <path d="M13.5 13.5L17 17"/>
    </svg>
  )
}

export function MountainIcon({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="1,18 8,6 13,13 15,10 19,18"/>
      <path d="M13 6 l1.5 2.5"/>
    </svg>
  )
}

export function ScrollIcon({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3h10a2 2 0 0 1 0 4H6a2 2 0 0 0 0 4h10a2 2 0 0 1 0 4H4"/>
      <path d="M4 15a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2"/>
    </svg>
  )
}

export function BoxIcon({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 2L2 6v8l8 4 8-4V6Z"/>
      <path d="M2 6l8 4 8-4"/>
      <line x1="10" y1="10" x2="10" y2="18"/>
    </svg>
  )
}

export function DiscordIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 71 55" fill="#5865F2">
      <path d="M60.1 4.9A58.5 58.5 0 0 0 45.5.4a40 40 0 0 0-1.8 3.6 54 54 0 0 0-16.4 0A40 40 0 0 0 25.6.4 58.3 58.3 0 0 0 11 4.9C1.6 19 -.9 32.7.3 46.3a59 59 0 0 0 17.9 9 42.7 42.7 0 0 0 3.7-6 38.2 38.2 0 0 1-5.8-2.8l1.4-1.1a42 42 0 0 0 35.9 0l1.4 1.1a38.3 38.3 0 0 1-5.8 2.8 42.6 42.6 0 0 0 3.7 6 58.8 58.8 0 0 0 17.9-9C72 30.4 68.8 16.8 60.1 4.9ZM23.7 38a6.7 6.7 0 0 1-6.3-7 6.7 6.7 0 0 1 6.3-7 6.7 6.7 0 0 1 6.3 7 6.7 6.7 0 0 1-6.3 7Zm23.6 0a6.7 6.7 0 0 1-6.3-7 6.7 6.7 0 0 1 6.3-7 6.7 6.7 0 0 1 6.3 7 6.7 6.7 0 0 1-6.3 7Z"/>
    </svg>
  )
}
