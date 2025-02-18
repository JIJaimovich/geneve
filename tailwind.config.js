/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: '#ff0000', // Example custom color
        secondary: '#14171A',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], 
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

