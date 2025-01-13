/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', 
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        metalmania: ['Metalmania', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}
