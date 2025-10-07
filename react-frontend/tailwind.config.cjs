/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        'tp-dark-blue': '#0b2545',
        'tp-green': '#1aa962',
      },
    },
  },
  plugins: [],
}
