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
      }
    },
  },
  plugins: [],
}

