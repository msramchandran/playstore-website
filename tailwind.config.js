/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f0',
          100: '#dcf2dc',
          500: '#1f8449',
          600: '#188a3a',
          700: '#0d6e2d',
        },
        'play-gray': {
          50: '#fafafa',
          100: '#f5f5f5',
          300: '#e0e0e0',
          500: '#9e9e9e',
          700: '#616161',
          900: '#212121',
        }
      },
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      }
    },
  },
  plugins: [],
}
