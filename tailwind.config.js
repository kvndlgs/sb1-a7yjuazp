/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        beige: {
          DEFAULT: 'hsl(37, 49%, 92%)',
          100: 'hsl(37, 49%, 92%)',
          200: 'hsl(37, 49%, 82%)',
          300: 'hsl(37, 49%, 72%)',
          500: 'hsl(37, 49%, 62%)',
          500: 'hsl(37, 49%, 52%)',
          600: 'hsl(37, 49%, 42%)',
          700: 'hsl(37, 49%, 32%)',
          800: 'hsl(37, 49%, 22%)',
          900: 'hsl(37, 49%, 12%)',
        },
      },
    },
  },
  plugins: [],
};
