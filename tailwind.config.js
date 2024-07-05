/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    container: {
      padding:{
        DEFAULT: '0px',
      },
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