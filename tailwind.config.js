/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        neu: {
          base: '#e0e5ec',
          text: '#4a5568',
          accent: '#7b68ee', // Soft lavender/purple
        }
      },
      boxShadow: {
        'neu': '9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5)',
        'neu-pressed': 'inset 6px 6px 10px 0 rgba(163,177,198, 0.7), inset -6px -6px 10px 0 rgba(255,255,255, 0.8)',
        'neu-sm': '5px 5px 10px rgb(163,177,198,0.6), -5px -5px 10px rgba(255,255,255, 0.5)',
        'neu-pressed-sm': 'inset 3px 3px 5px 0 rgba(163,177,198, 0.7), inset -3px -3px 5px 0 rgba(255,255,255, 0.8)',
      }
    },
  },
  plugins: [],
}
