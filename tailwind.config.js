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
        'btn-hover': '#0B44CD',
        'background': "#F9F9F9",
        'text-primary': '#111111'
      },
      backgroundImage: {
        "hero-bg": "linear-gradient(rgba(46, 47, 66, 0.7), rgba(46, 47, 66, 0.7)), url('/src/images/homeImg.jpg')"
      }
    },
  },
  plugins: [],
};
