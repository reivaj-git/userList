/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '240px',
    },
    extend: {
      colors: {
        dark: "#2C3333",
        lightNight: "#774360",
        night: "#4C3A51",
        nightPeach: "#D27685",
        primary: "#555a88",
        secondary: "#D85D5D",
      },
    },
  },
  plugins: [],
};

