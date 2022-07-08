/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        Anek: 'Anek Latin',
        Montserrat: 'Montserrat',
      },
      colors: {
        'warmgray-200': '#e7e5e4',
        'warmgray-400': '#a8a29e',
      },
    },
  },
  plugins: [],
};
