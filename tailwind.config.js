/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        'gray-primary' : '#444444'
      },
      transitionDuration:{
        'normal' : '400ms',
        'fast'   : '200ms',
        'slow'   : '600ms'
      }
    },
  },
  plugins: [],
}