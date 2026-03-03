/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#0f172a',
          900: '#111827',
          800: '#1f2937',
          700: '#374151',
          600: '#4b5563',
        },
        cyan: {
          300: '#06d6d6',
          400: '#00d4ff',
          500: '#00bfff',
        },
        orange: {
          400: '#fb923c',
          500: '#f97316',
        }
      },
      animation: {
        bounce: 'bounce 2s infinite',
      }
    },
  },
  plugins: [],
}
