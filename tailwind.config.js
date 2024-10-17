/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        grey: {
          100: '#4F4D55',
          200: '#515153',
          300: '#7D7D7E',
        },
        primary: '#027056',
      },
    },
  },
  plugins: [],
};
