/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['DM Serif Text', 'sans-serif']
      },
      colors: {
        mainly: "#080808",
        markText: '#01ff48',
        second:'#1b1b1b',
        back: '#f8f8f8',
      },
    },
  },
 
  plugins: [require("daisyui")],
};
