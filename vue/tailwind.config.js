/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif']
      },
      colors: {
        mainly: "#080808",
        markText: '#01ff48',
        second:'#1b1b1b'
      },
    },
  },
  plugins: [],
};
