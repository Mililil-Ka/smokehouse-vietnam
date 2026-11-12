/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'smoke': {
          DEFAULT: '#f97316',
          light: '#3d3024',
          dark: '#1a1410',
        },
        'fire': {
          DEFAULT: '#f97316',
          light: '#fd923c',
          dark: '#ea580c',
        },
        'cream': '#f5f0e8',
      },
      fontFamily: {
      'display': ['Oswald', 'sans-serif'],
      'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
  }

