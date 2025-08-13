/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#00FF88',
        'bg-start': '#010302',
        'bg-end': '#0A1411',
        'glass': {
          'bg': 'rgba(16, 25, 21, 0.25)',
          'border': 'rgba(255, 255, 255, 0.1)'
        },
        'text': {
          'primary': '#E0E0E0',
          'heading': '#FFFFFF',
          'subtle': '#888888'
        }
      },
      fontFamily: {
        'sans': ['Poppins', 'SF Pro Display', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'SF Pro Display', 'system-ui', 'sans-serif']
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'subsection': ['clamp(1.25rem, 2.5vw, 2rem)', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'component': ['clamp(1rem, 2vw, 1.5rem)', { lineHeight: '1.4' }],
        'accent': ['clamp(0.875rem, 1.5vw, 1.125rem)', { letterSpacing: '0.03em' }],
        'body-lg': ['clamp(1rem, 1.8vw, 1.25rem)', { lineHeight: '1.6' }],
        'body': ['clamp(0.875rem, 1.5vw, 1rem)', { lineHeight: '1.6' }]
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      borderRadius: {
        'glass': '1rem',
        'button': '0.5rem'
      },
      backdropBlur: {
        'glass': '24px',
        'button': '16px'
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'neon': '0 0 15px 5px rgba(0, 255, 136, 0.2)',
        'floating': '0 20px 40px rgba(0, 0, 0, 0.4)'
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'ripple': 'ripple-animation 0.6s ease-out',
        'skeleton': 'skeleton-loading 1.5s infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(0, 255, 136, 0.2)' },
          '50%': { boxShadow: '0 0 25px rgba(0, 255, 136, 0.2), 0 0 35px rgba(0, 255, 136, 0.2)' }
        },
        'ripple-animation': {
          'to': { transform: 'scale(4)', opacity: '0' }
        },
        'skeleton-loading': {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' }
        }
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, #010302 0%, #0A1411 100%)',
        'text-gradient': 'linear-gradient(135deg, #FFFFFF 0%, #00FF88 100%)',
        'border-gradient': 'linear-gradient(135deg, #00FF88, transparent, #00FF88)'
      }
    },
  },
  plugins: [],
}