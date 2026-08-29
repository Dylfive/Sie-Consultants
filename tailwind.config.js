/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#3d2817', // Dark charcoal/brown
        'brand-gold': '#b8923a', // Darker Gold/Ochre
        'brand-gold-light': '#d4af37', // Lighter Gold
        'brand-light': '#f8f7f5', // Light Cream
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
