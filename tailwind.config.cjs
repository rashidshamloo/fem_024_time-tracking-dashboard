/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "hsl(246, 80%, 60%)",
        lightRedW: "hsl(15, 100%, 70%)",
        softBlue: "hsl(195, 74%, 62%)",
        lightRedS: "hsl(348, 100%, 68%)",
        limeGreen: "hsl(145, 58%, 55%)",
        violet: "hsl(264, 64%, 52%)",
        softOrange: "hsl(43, 84%, 65%)",
        veryDarkBlue: "hsl(226, 43%, 10%)",
        darkBlue: "hsl(235, 46%, 20%)",
        darkBlueHover: "hsl(235, 46%, 30%)",
        desaturatedBlue: "hsl(235, 45%, 61%)",
        paleBlue: "hsl(236, 100%, 87%)",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
