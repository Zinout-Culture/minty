/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {},
      backgroundImage: {
        banner: "url('./assets/banner.png')",
      },
    },
  },
  plugins: [],
}
