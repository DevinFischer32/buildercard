module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        builderGreen: '#476653',
        builderBlue: '#BCDAE1',
      },
      fontFamily: {
        Rampart: ['Rampart One', 'cursive'],
        Playfair: ['Playfair Display', 'serif'],
        Raleway: ['Raleway', 'sans-serif'],
      },
      keyframes: {
        drive: {
          '0%': { transform: 'translateX(5rem)' },
          '100%': { transform: 'translateX(10rem)' },
        },
        slide_left: {
          '100%': { transform: 'translateX(10rem)' },
          '0%': { transform: 'translateX(0rem)' },
        },
      },
      animation: {
        drive: 'drive 3s linear infinite running slidein',
        slide_left: 'slide_left 7s linear ',
      },
    },
  },
  plugins: [],
}
