/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'white': '#fff',
      'rosewhite': 'hsl(330, 100%, 98%)',
      'eggshell': 'hsl(30, 54%, 90%)',
      'lightgrey': 'hsl(30, 18%, 87%)',
      'wengbrown': 'hsl(30, 10%, 34%)',
      'darkcha': 'hsl(24, 5%, 18%)',
      'Nutmeg': 'hsl(14, 45%, 36%)',
      'darkrasp': 'hsl(332, 51%, 32%)',
    },
    fontFamily: {
      'youngserif': ['Young Serif','serif'],
      'outfit': ['Outfit','sans-serif'],
    }
  },
  plugins: [],
}