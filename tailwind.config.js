/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quattrocento: ["Quattrocento", "serif"],
        "quattrocento-sans": ["Quattrocento-sans", "sans-serif"],
      },
      keyframes: {
        wiggle: {
          '25%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
          '75%': { transform: 'rotate(-2deg)' },
        },
        float: {
          '33%': { transform: 'translateY(6px)' },
          '66%': { transform: 'translateY(-6px)' },
        },
        zoom: {
          '100%' : {transform: 'scale(1.25)'}
        },
      },
      animation:{
        wiggle: 'wiggle 2s ease-in-out infinite',
        wiggleOnce: 'wiggle 1s ease-in-out',
        float: 'float 2s linear infinite',
        floatOnce: 'float 2s ease-in-out',
        zoom: 'zoom 1s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}

