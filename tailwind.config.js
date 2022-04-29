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
        builderBlueD: '#8EC1CC',

        builderBlueL: '#D5E8EC',
      },
      fontFamily: {
        Rampart: ['Rampart One', 'cursive'],
        Playfair: ['Playfair Display', 'serif'],
        Raleway: ['Raleway', 'sans-serif'],
      },
      // keyframes: {
      //   drive: {
      //     '0%': { transform: 'translateX(-200%)', opacity: 1 },
      //     '50%': { transform: 'translateX(50%)', opacity: 1 },
      //     '90%': { transform: 'translateX(200%)', opacity: 1 },
      //     '100%': { transform: 'translateX(0%)', opacity: 0 },
      //   },
      //   slide_left: {
      //     '100%': { transform: 'translateX(10rem)' },
      //     '0%': { transform: 'translateX(0rem)' },
      //   },
      // },
      // animation: {
      //   drive: ' drive 15s linear 1',
      //   slide_left: 'slide_left 7s linear ',
      // },
    },
  },
  plugins: [],
}
