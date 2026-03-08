import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        fire: {
          core:   '#FF4500',
          bright: '#FF6B35',
          amber:  '#FFAA00',
          deep:   '#CC2200',
          glow:   '#2A0D00',
        },
        water: {
          core:   '#0EA5E9',
          teal:   '#06B6D4',
          deep:   '#6366F1',
          violet: '#8B5CF6',
          glow:   '#020617',
        },
        earth: {
          core:   '#22C55E',
          moss:   '#84CC16',
          amber:  '#D97706',
          brown:  '#92400E',
          glow:   '#052E16',
        },
        air: {
          core:     '#E0E7FF',
          sky:      '#BAE6FD',
          lavender: '#C4B5FD',
          mist:     '#94A3B8',
          glow:     '#0F0F1A',
        },
        brand: {
          primary:   '#7C3AED',
          secondary: '#06B6D4',
          accent:    '#F59E0B',
          glow:      '#4C1D95',
          DEFAULT:   '#7C3AED',
          light:     '#A855F7',
          dark:      '#6D28D9',
        },
        // Background surfaces — resolved via CSS custom properties for theme switching
        bg: {
          shell:    'var(--bg-shell)',
          surface1: 'var(--bg-surface1)',
          surface2: 'var(--bg-surface2)',
          surface3: 'var(--bg-surface3)',
        },
        // Text hierarchy — resolved via CSS custom properties for theme switching
        text: {
          display: 'var(--text-display)',
          heading: 'var(--text-heading)',
          body:    'var(--text-body)',
          caption: 'var(--text-caption)',
          muted:   'var(--text-muted)',
          inverse: 'var(--text-inverse)',
        },
        semantic: {
          success: '#10B981',
          warning: '#F59E0B',
          error:   '#EF4444',
          info:    '#3B82F6',
          danger:  '#DC2626',
        },
        dark: {
          900: '#0D0D1A',
          800: '#13131F',
          700: '#1A1A2E',
          600: '#252540',
        },
      },
      fontFamily: {
        display: ['"Cinzel Decorative"', 'serif'],
        body: ['Inter', 'sans-serif'],
        accent: ['Orbitron', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'orbit': 'orbit 8s linear infinite',
        'orbit-reverse': 'orbit 12s linear infinite reverse',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px currentColor' },
          '50%': { opacity: '0.6', boxShadow: '0 0 40px currentColor' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(60px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(60px) rotate(-360deg)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

export default config
