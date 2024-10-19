/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        grey: {
          100: '#4F4D55',
          200: '#515153',
          300: '#7D7D7E',
          400: '#919191',
          500: '#FAFAFA',
          600: '#F8F8F8',
          700: '#7E8986',
        },
        primary: '#027056',
        custom: {
          100: '#309E96',
          200: '#9106FF',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
