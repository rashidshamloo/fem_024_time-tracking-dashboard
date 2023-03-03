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
      backgroundImage:{
        "workBg":"url('/images/icon-work.svg'), linear-gradient(hsl(15, 100%, 70%) 0%, hsl(15, 100%, 70%) 50%, transparent 50%, transparent 100% )",
        "playBg":"url('/images/icon-play.svg'), linear-gradient(hsl(195, 74%, 62%) 0%, hsl(195, 74%, 62%) 50%, transparent 50%, transparent 100% )",
        "studyBg":"url('/images/icon-study.svg'), linear-gradient(hsl(348, 100%, 68%) 0%, hsl(348, 100%, 68%) 50%, transparent 50%, transparent 100% )",
        "exerciseBg":"url('/images/icon-exercise.svg'), linear-gradient(hsl(145, 58%, 55%) 0%, hsl(145, 58%, 55%) 50%, transparent 50%, transparent 100% )",
        "socialBg":"url('/images/icon-social.svg'), linear-gradient(hsl(264, 64%, 52%) 0%, hsl(264, 64%, 52%) 50%, transparent 50%, transparent 100% )",
        "selfCareBg":"url('/images/icon-self-care.svg'), linear-gradient(hsl(43, 84%, 65%) 0%, hsl(43, 84%, 65%) 50%, transparent 50%, transparent 100% )",
      },
      "backgroundPosition":{
        "subjectBgPs": "top -0.35rem right 1rem, 0 0",
      }
    },
  },
  plugins: [],
};
