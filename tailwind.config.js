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
          DEFAULT: '#1a1a1a', 
          card: '#2a2a2a',    
        },
        accent: {
          blue: '#00d2ff',    
          orange: '#ff9d00',  
        }
      }
    },
  },
  plugins: [],
}
