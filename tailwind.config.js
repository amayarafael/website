/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#cbd5e1',
        'secondary': '#d1d5db',
        'tertiary': '#86efac',
        'tertiary-hover': '#16a34a'
      },
      backgroundImage: {
        'toothIcon': "url('.//img/tooth-icon.png')"
      }
    },
  },
  plugins: [require('tailwind-scrollbar'), require('daisyui'),],
  daisyui: {
    themes: []
  }
}