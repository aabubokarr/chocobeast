/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          'dark-brown': '#3E1F0D',
          'deep-brown': '#2A1206',
          'caramel': '#D9A55C',
          'gold': '#F4C77C',
          'cream': '#FFF8F0',
          'plum': '#5C1D42',
          'plum-light': '#8A2E50',
        }
      },
      fontFamily: {
        serif: ['Fraunces', 'Playfair Display', 'serif'],
        sans: ['Inter', 'Manrope', 'sans-serif'],
      },
      transitionTimingFunction: {
        'lux': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'accordion-down': 'accordion-down 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
        'accordion-up': 'accordion-up 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(2deg)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      backgroundImage: {
        'chocolate-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'lux-sm': '0 2px 8px -1px rgba(62, 31, 13, 0.08), 0 1px 3px -1px rgba(62, 31, 13, 0.03)',
        'lux-md': '0 8px 16px -2px rgba(62, 31, 13, 0.1), 0 2px 6px -2px rgba(62, 31, 13, 0.05)',
        'lux-lg': '0 20px 32px -4px rgba(62, 31, 13, 0.15), 0 4px 12px -4px rgba(62, 31, 13, 0.08)',
        'glow-caramel': '0 0 20px 2px rgba(217, 165, 92, 0.4)',
        'glow-gold': '0 0 25px 3px rgba(244, 199, 124, 0.5)',
      }
    },
  },
  plugins: [],
}
