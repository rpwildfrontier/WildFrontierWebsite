import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Wild Frontier RP — Gazette du Comté'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#edddb2',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Georgia, serif',
          position: 'relative',
        }}
      >
        {/* Outer border */}
        <div
          style={{
            position: 'absolute',
            inset: 20,
            border: '2px solid #c4a878',
            display: 'flex',
          }}
        />
        {/* Inner border */}
        <div
          style={{
            position: 'absolute',
            inset: 28,
            border: '1px solid #d8be96',
            display: 'flex',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 0,
          }}
        >
          <div
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 13,
              letterSpacing: 12,
              textTransform: 'uppercase',
              color: '#9a6a48',
              marginBottom: 28,
            }}
          >
            Comté de New Hanover · Territoire de l&apos;Ouest · 1887
          </div>

          {/* Masthead double rule */}
          <div style={{ width: 800, height: 3, background: '#c4a878', marginBottom: 6, display: 'flex' }} />
          <div style={{ width: 800, height: 1, background: '#c4a878', marginBottom: 28, display: 'flex' }} />

          <div
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 86,
              fontWeight: 900,
              color: '#190c00',
              textTransform: 'uppercase',
              letterSpacing: -2,
              lineHeight: 1,
            }}
          >
            Wild Frontier RP
          </div>

          {/* Rule */}
          <div style={{ width: 800, height: 1, background: '#c4a878', marginTop: 20, marginBottom: 20, display: 'flex' }} />
          <div style={{ width: 800, height: 3, background: '#c4a878', marginBottom: 28, display: 'flex' }} />

          <div
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 22,
              color: '#8b3a1e',
              letterSpacing: 8,
              textTransform: 'uppercase',
            }}
          >
            Gazette du Comté — RP dur & organique — RedM 1887
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
