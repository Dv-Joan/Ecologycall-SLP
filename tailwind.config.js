/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        Anek: 'Anek Latin',
        Montserrat: 'Montserrat',
        Edu: 'Edu VIC WA NT Beginner',
        RobotoCondensed: 'Roboto Condensed',
      },
      colors: {
        'warmgray-200': '#e7e5e4',
      },
      fontSize: {
        footersize: '15px',
      },
    },
  },
  plugins: [],
};
