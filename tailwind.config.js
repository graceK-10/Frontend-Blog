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
      },
      backgroundImage: {
        'hero-pattern': "url('src/assets/3.png')", 
        // 'header-pattern': "url('src/assets/3_1.png')",
      },
      boxShadow: {
        'header-bottom': '0 4px 10px -2px #FFB0B0', // Custom shadow
      },
    },
  },
  plugins: [],
}

