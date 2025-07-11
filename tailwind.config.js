/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // adjust paths to match your project
    "./public/index.html"
  ],
  darkMode: "media",
  theme: {
    extend: {}, // You can extend default theme here
  },
  plugins: [], // You can add plugins here
}