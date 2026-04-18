/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#FAF8F4',
          soft: '#F7F4EF',
        },
        ink: {
          DEFAULT: '#151515',
          soft: '#202124',
        },
        graphite: '#111111',
        deep: '#080808',
        brand: {
          DEFAULT: '#FF5A1F',
          soft: '#FFE5D8',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        display: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      boxShadow: {
        card: '0 1px 2px rgba(0,0,0,0.04), 0 6px 24px rgba(0,0,0,0.04)',
      },
    },
  },
  plugins: [],
};
