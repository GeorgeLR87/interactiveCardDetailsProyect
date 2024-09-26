/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '425px',
      },
      colors: {
        'deep-violet': '#21092F',
        'purplish-grey': '#8F8694',
        'light-grey': '#DFDEE0',
        'red-card': '#FF5050',
        'gradient-blue-icon': '#6348FE',
        'gradient-purple-icon': '#610595',
        'light-grayish-violet': '#dbdce4',
        'dark-grayish-violet': '#8f869e',
        'very-dark-violet': '#19042e',
      },
      fontSize: {
        xs: '0.6rem',
        xsl: '0.84rem',
      },
      fontFamily: {
        'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

