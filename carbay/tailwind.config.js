/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#0A0E17",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      maxHeight: {
        128: "448px",
      },
    },
  },
  plugins: [require("daisyui")],
};
