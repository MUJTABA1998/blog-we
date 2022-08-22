/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,tsx,ts}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Roboto Slab", "serif"],
        secondary: ["Montserrat", "sans-serif"],
        main: ["Oswald", "sans-serif"],
      },
      colors: {
        primary: "#FFE14B",
        secondary: "#0DB033",
        back: "#E5E5E5",
      },
      backgroundImage: {
        header: "url('./assets/bg.png')",
        video: "url('./assets/video.jpg')",
      },
    },
  },
  plugins: [],
};
