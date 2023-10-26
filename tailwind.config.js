/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        blob1: "blob1 20s infinite",
        blob2: "blob2 20s infinite",
        rocket: "rocket 5s infinite",
      },
      keyframes: {
        blob1: {
          "0%": {
            transform: "translate(-150px, -100px) scale(1)",
          },
          "25%": {
            transform: "translate(1300px, -200px) scale(1.1)",
          },
          "50%": {
            transform: "translate(1300px, 400px) scale(0.9)",
          },
          "75%": {
            transform: "translate(-100px, 500px) scale(1.1)",
          },
          "100%": {
            transform: "translate(-150px, -100px) scale(1)",
          },
        },
        blob2: {
          "0%": {
            transform: "translate(1300px, 400px) scale(1)",
          },
          "25%": {
            transform: "translate(-100px, 500px) scale(1.1)",
          },
          "50%": {
            transform: "translate(-150px, -100px) scale(0.9)",
          },
          "75%": {
            transform: "translate(1300px, -200px) scale(1.1)",
          },
          "100%": {
            transform: "translate(1300px, 400px) scale(1)",
          },
        },
        rocket: {
          "0%": {
            transform: "translate(0px, 0px) scale(1.1)",
          },
          "50%": {
            transform: "translate(10px, -10px) scale(1.1)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1.1)",
          },
        },
      },
    },
    fontFamily: {
      poppin: ["Poppins"],
    },
  },
  plugins: [],
};
