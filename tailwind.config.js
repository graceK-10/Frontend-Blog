/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'header-pattern': '#FFECEC', 
        'custom-bg-color': '#FFB0B0',
      },
      backgroundImage: {
        'hero-pattern': "url('src/assets/3.png')", 
      // },
      boxShadow: {
        'header-bottom': '0 4px 10px -2px #FFB0B0', // Custom shadow
      },
      fontFamily: {
        'custom': ['Roboto', 'sans-serif'], // Custom font family
      },
    },
  },
  plugins: [],
}

