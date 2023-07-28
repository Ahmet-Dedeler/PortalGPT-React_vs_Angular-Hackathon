/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './client/src/components/**/*.{js,jsx,ts,tsx}',
    './client/dist/**/*.html',
    './client/src/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'media', // or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
