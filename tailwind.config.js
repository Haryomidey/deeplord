/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
      'smallest': '250px',
      'small': '350px',
      'mobile_small': '420px',
      'mobile': '512px',
      'tablet': '640px',
      'laptop': '950px',
      'desktop': '1024px',
    },
    },
  },
  plugins: [],
}