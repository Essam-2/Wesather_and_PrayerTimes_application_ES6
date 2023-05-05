/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js","./index.html"
  ],
  theme: {
    extend: {
      colors:{
        "main": '#245953',
        "light_green": '#408E91',
        "light_orange": '#E49393',
        "light_yellow": '#D8D8D8'
      },
      fontFamily: {
        "Nunito": ['Nunito', 'sans-serif']
      },
    },
  plugins: [
    require("tw-elements/dist/plugin")
  ],
  }
}
