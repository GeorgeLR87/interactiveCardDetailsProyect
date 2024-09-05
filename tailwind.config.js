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
        'light-grayish-violet': '#dbdce4',
        'dark-grayish-violet': '#8f869e',
        'very-dark-violet': '#19042e',
      },
      fontSize: {
        xs: '0.6rem',
      },
      fontFamily: {
        'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

