/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    container: {
      padding:{
        DEFAULT: '0px',
      },
    },
    screens: {
      sm: '640',
      md: '768',
      lg: '960',
      xl: '1200',

    },
    extend: {
      fontFamily: {
        work: ["Work Sans", "sans-serif"],
    },
    backgroundImage: {
      'heroimg': "url('../asset/hero-image.png')",
      'img002': "url('../asset/image02.png')",
     
    },
  
  },
  },
  plugins: [],
}