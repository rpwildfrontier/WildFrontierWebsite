import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        wf: {
          base:    '#060402',
          surface: '#0d0a05',
          card:    '#131008',
          hover:   '#201c12',
        },
        amber: {
          DEFAULT: '#c89018',
          light:   '#e8b430',
          dark:    '#7a5a10',
        },
        cream: {
          DEFAULT: '#e4d4a8',
          80: 'rgba(228,212,168,0.80)',
          60: 'rgba(228,212,168,0.60)',
          40: 'rgba(228,212,168,0.40)',
          20: 'rgba(228,212,168,0.20)',
        },
        // Legacy aliases
        parchment: {
          50:      '#e8d8b4',
          100:     '#0f0c07',
          DEFAULT: '#1a1408',
          dark:    '#0d0a05',
        },
        ink: {
          DEFAULT: '#e4d4a8',
          light:   '#c8b888',
          medium:  '#a89868',
        },
        western: {
          gold:  '#c89018',
          rust:  '#c05820',
          amber: '#c89018',
          dark:  '#060402',
        },
      },
      fontFamily: {
        serif:   ['var(--font-playfair)', 'Georgia', 'serif'],
        cinzel:  ['var(--font-cinzel)',   'Georgia', 'serif'],
        body:    ['var(--font-crimson)',  'Georgia', 'serif'],
        display: ['var(--font-special-elite)', 'monospace'],
      },
      boxShadow: {
        amber: '0 0 24px rgba(200,144,24,0.18)',
        'amber-lg': '0 0 40px rgba(200,144,24,0.35)',
        glow: '0 0 32px rgba(200,144,24,0.25)',
      },
    },
  },
  plugins: [],
}

export default config
