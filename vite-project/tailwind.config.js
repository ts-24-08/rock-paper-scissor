/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Metalmania', 'sans-serif']
      },
      lineHeight: {
        'extranone': '0.8',
      },
      fontSize: {
        '10xl': '10rem',
      }
    },
  },
  plugins: [],
}

