/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#1a1a1a', // Dark gray
          card: '#2a2a2a',    // Slightly lighter gray
        },
        accent: {
          blue: '#00d2ff',    // Neon blue
          orange: '#ff9d00',  // Neon orange
        }
      }
    },
  },
  plugins: [],
}
