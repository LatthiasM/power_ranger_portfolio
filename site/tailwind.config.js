/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // <-- 💡 MODIFICATION AJOUTÉE
  theme: {
    extend: {
      transitionProperty: {
        'spacing': 'margin, padding',
      },
      transitionDuration: {
          1500: '1500ms',
          1800: '1800ms',
          2000: '2000ms',
    },
  },
  plugins: [],
}
}