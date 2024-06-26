/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Opensans: ["Opensans", "sans-serif"],
        Tiltnoon: ["Tilt Neon", "sans-serif"],
        ntr: ["NTR", "sans-serif"],
        Dosis: ["Dosis", "sans-serif"],
        Fjalla: ["Fjalla One", "sans-serif"],
      },
      colors: {
        circleColor: "#4C544F",
        smallParagraph: "#717171",
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [],
  },
};
