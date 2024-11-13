/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFD100',
          dark: '#E6BC00',
          light: '#FFF0B3'
        },
        accent: {
          DEFAULT: '#6366F1',
          dark: '#4F46E5',
          light: '#E0E7FF'
        },
        secondary: {
          DEFAULT: '#14B8A6',
          dark: '#0D9488',
          light: '#CCFBF1'
        }
      },
      boxShadow: {
        'neon': '0 0 30px rgba(255, 209, 0, 0.3)',
        'neon-accent': '0 0 30px rgba(99, 102, 241, 0.3)',
        'neon-secondary': '0 0 30px rgba(20, 184, 166, 0.3)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'sharp': '5px 5px 0 0 #FFD100',
        '3d': '20px 20px 60px #d4d4d4, -20px -20px 60px #ffffff',
        'neo': '8px 8px 0 0 #FFD100',
        'floating': '0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        spotlight: {
          '0%': { opacity: 0, transform: 'scale(0.8)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        spotlight: 'spotlight 2s ease-out forwards',
      }
    },
  },
  plugins: [],
};