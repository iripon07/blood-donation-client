/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#991b1b',
        secondary:"#ef4444",
        white: '#FFFFFF',
      },
},
  },
  plugins: [
  ],
}