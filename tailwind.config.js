/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./script.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'fredoka': ['Fredoka One', 'cursive'],
        'bangers': ['Bangers', 'cursive'],
        'comic': ['Comic Neue', 'cursive'],
        'quicksand': ['Quicksand', 'sans-serif'],
      },
      colors: {
        'mustard': '#FFD700',
        'circus-red': '#FF6B6B',
        'puppet-teal': '#4ECDC4',
        'creamy': '#FFF8E7',
        'navy': '#2C3E50',
      },
    },
  },
  plugins: [],
}

