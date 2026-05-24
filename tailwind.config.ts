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
        parchment: {
          50: '#fdf8ef',
          100: '#f9efda',
          200: '#f2ddb0',
          300: '#e9c47e',
          DEFAULT: '#e8d5a3',
          400: '#e0a84b',
          500: '#d4882a',
          600: '#c0711f',
          700: '#9f571b',
          800: '#7d461b',
          900: '#663b1a',
        },
        ink: {
          DEFAULT: '#1a0a00',
          light: '#2d1500',
          medium: '#4a2500',
        },
        sepia: {
          DEFAULT: '#8b5e3c',
          light: '#a8785a',
          dark: '#6b4428',
        },
        western: {
          gold: '#b8860b',
          rust: '#8b3a1e',
          sage: '#4a5240',
          dust: '#c4a882',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-crimson)', 'Georgia', 'serif'],
        display: ['var(--font-special-elite)', 'monospace'],
      },
      backgroundImage: {
        'parchment-texture': "url('/images/parchment.svg')",
      },
    },
  },
  plugins: [],
}

export default config
