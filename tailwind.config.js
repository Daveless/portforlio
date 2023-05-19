/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dav-green': '#10B33B',
        'dav-gray': '#282C33',
        'dav-light-gray': '#4E4E4E',
        'dav-border-gray': '#ABB2BF'
      }
    },
  },
  plugins: [],
}

