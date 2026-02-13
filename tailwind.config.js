/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wpp': {
          'bg': '#0b141a',
          'panel': '#1f2c34',
          'green': '#00a884',
          'green-dark': '#008f72',
          'bubble-me': '#005c4b',
          'bubble-them': '#1f2c34',
          'input': '#2a3942',
          'text': '#e9edef',
          'muted': '#8696a0',
        }
      },
      fontFamily: {
        sans: ['Segoe UI', 'Helvetica Neue', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'bubble': '0 1px 0.5px rgba(0,0,0,0.13)',
      }
    },
  },
  plugins: [],
}
