/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0a0a0a',
          800: '#111111',
          700: '#1f1f1f',
          600: '#2a2a2a',
          500: '#3a3a3a',
        },
        accent: {
          DEFAULT: '#e63946',
          hover: '#d62839',
          light: '#ff4d5a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
