/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
        alexandria: ['var(--font-alexandria)', 'sans-serif'],
      },
      colors: {
        brand: {
          gold: '#FFD700',
          'gold-dim': '#CUA311', // Fallback
          orange: '#FF9900',
          dark: '#050505',
          zinc: {
            800: '#27272a',
            900: '#18181b',
            950: '#09090b',
          }
        }
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #FFD700 0%, #FF8C00 100%)',
        'gold-gradient-hover': 'linear-gradient(135deg, #FFE55C 0%, #FFA500 100%)',
      },
      boxShadow: {
        'gold': '0 0 20px rgba(255, 215, 0, 0.3)',
        'gold-lg': '0 0 40px rgba(255, 215, 0, 0.4)',
        'gold-inner': 'inset 0 0 20px rgba(255, 215, 0, 0.1)',
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    }
  },
  plugins: [],
}