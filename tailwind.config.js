module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        's-d-blue': '#303E4F',
        's-darkblue': '#393F4B',
        's-darkgray': '#2f333a',
        's-gray': 'rgba(255, 255, 255, 0.2)',
        's-yellow': '#fddf78',
        's-blue': '#54c1e5',
        's-semitrans': 'rgba(255, 255, 255, 0.1)',
      },
      letterSpacing: {
        'extra-wide': '0.25em',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
