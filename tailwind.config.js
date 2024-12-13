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
  ],
  flyonui: {
    themes: ["light", "dark", "gourmet", "corporate", "luxury", "soft"]
  }
}

