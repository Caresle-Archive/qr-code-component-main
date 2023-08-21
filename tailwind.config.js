/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'qr-white': 'hsl(0, 0%, 100%)',
        'qr-light-gray': 'hsl(212, 45%, 89%)',
        'qr-grayish-blue': 'hsl(220, 15%, 55%)',
        'qr-dark-blue': 'hsl(218, 44%, 22%)',
      },
      fontWeight: {
        'qr-normal': 400,
        'qr-bold': 700,
      },
      fontFamily: {
        'qr-font': 'Outfit',
      },
    },
  },
  plugins: [],
}