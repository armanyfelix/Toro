module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      mate: ['Mate'],
     },
    extend: {
      gridAutoColums: {
        'cart': '1fr 4fr 1fr 1fr 1fr',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}