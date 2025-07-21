module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/index.css"
  ],
  darkMode: 'class', // o 'media' según prefieras
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}