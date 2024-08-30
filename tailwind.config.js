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
        'light-grayish-violet': 'hsl(270, 3 %, 87 %)',
        'dark-grayish-violet': 'hsl(279, 6 %, 55 %)',
        'very-dark-violet': 'hsl(278, 68 %, 11 %)',
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

