import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        'space-primary': 'var(--color-space-primary)',
        'space-accents': 'var(--color-space-accents)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Inter', 'ui-sans-serif']
      },
      keyframes: {
        'pulse-slow': { '0%': { opacity: '1' }, '50%': { opacity: '.6' }, '100%': { opacity: '1' } },
        float: { '0%': { transform: 'translateY(0)' }, '100%': { transform: 'translateY(-6px)' } },
        glow: { '0%': { filter: 'drop-shadow(0 0 0 rgba(255,255,255,0))' }, '100%': { filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.3))' } }
      }
    }
  },
  plugins: []
}

export default config
