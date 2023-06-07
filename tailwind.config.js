/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'NeueMontreal': ['NeueMontreal'],
        custom: ['Mukta', 'sans-serif']
      }
    },
  },
  plugins: [],
}

