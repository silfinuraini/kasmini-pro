/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },

  },
  plugins: [
    require("flyonui"),
    require('tailwindcss-motion')
  ],
  flyonui: {
    themes: ["light", "dark", "gourmet", "corporate", "luxury", "soft"]
  }
}

