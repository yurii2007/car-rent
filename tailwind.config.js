/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'primary': "Manrope",
        'secondary': "Montserrat",
      },
      colors: {
        'btn-primary': '#3470FF',
        'overlay': "#121417",
        'btn-hover': '#0B44CD'
      }
    },
  },
  plugins: [],
};
