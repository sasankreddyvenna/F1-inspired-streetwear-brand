// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7C3AED', // vibrant purple
        secondary: '#F5F3FF', // light lavender/white background
        textDark: '#1F2937', // for text
        textLight: '#F9FAFB' // light text
      },
    },
  },
  plugins: [],
}
