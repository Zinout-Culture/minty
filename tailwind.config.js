/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'minty-dark': '#242424',
      },
      backgroundImage: {
        banner: "url('./assets/banner.png')",
      },
    },
  },
  plugins: [],
}
