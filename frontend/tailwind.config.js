/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [    require('@tailwindcss/forms'),],

  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 4px 60px 20px rgba(0, 0, 0, 0.4)',
      }
    }
  }
}