/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        pink: "#FF2171",
        
      },
      stroke: {
        pink: "#FF2171",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};