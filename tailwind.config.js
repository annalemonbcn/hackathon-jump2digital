/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-green": "#9fded5",
        "main-green-dark": "#71A494",
        "blue-soft": "#b2daed",
        "brown-soft": "d5c8b8",
        "brown-dark": "#70592d",
        "main-grey": "#303032",
      },
      fontFamily: {
        custom: ['"Indie Flower"', "sans"], // Reemplaza "Font Name" con el nombre de la fuente de Google Fonts
      },
    },
  },
  plugins: [],
};
