/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'outfit' : ['Outfit', 'sans-serif'],
      },
      colors:{
        'lightGray':'hsl(212, 45%, 89%)',
        'grayishBlue':'hsl(220, 15%, 55%)',
        'darkBlue':'hsl(218, 44%, 22%)'
      }

    },

    maxWidth:{
      'qr':'360px'
    }
  },
  plugins: [],
}
