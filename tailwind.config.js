/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.js"],
  theme: {
    extend: {
      animation: {
        blob1: "blob1 20s infinite",
        blob2: "blob2 20s infinite",
        "blob1-mobile": "blob1-mobile 20s infinite",
        "blob2-mobile": "blob2-mobile 20s infinite",
        rocket: "rocket 5s infinite",
        boxBounce: "boxBounce 1s linear",
        loader: "loader 1s infinite linear",
      },
      keyframes: {
        blob1: {
          "0%": {
            transform: "translate(-50%, -50%) scale(1)",
          },
          "25%": {
            transform: "translate(200%, -50%) scale(1.1)",
          },
          "50%": {
            transform: "translate(200%, 70%) scale(0.9)",
          },
          "75%": {
            transform: "translate(-50%, 70%) scale(1.1)",
          },
          "100%": {
            transform: "translate(-50%, -50%) scale(1)",
          },
        },
        blob2: {
          "0%": {
            transform: "translate(200%, 70%) scale(1)",
          },
          "25%": {
            transform: "translate(-50%, 70%) scale(1.1)",
          },
          "50%": {
            transform: "translate(-50%, -50%) scale(0.9)",
          },
          "75%": {
            transform: "translate(200%, -50%) scale(1.1)",
          },
          "100%": {
            transform: "translate(200%, 50%) scale(1)",
          },
        },
        "blob1-mobile": {
          "0%": {
            transform: "translate(-50%, -50%) scale(1)",
          },
          "25%": {
            transform: "translate(80%, -50%) scale(1.1)",
          },
          "50%": {
            transform: "translate(80%, 50%) scale(0.9)",
          },
          "75%": {
            transform: "translate(-50%, 50%) scale(1.1)",
          },
          "100%": {
            transform: "translate(-50%, -50%) scale(1)",
          },
        },
        "blob2-mobile": {
          "0%": {
            transform: "translate(80%, 50%) scale(1)",
          },
          "25%": {
            transform: "translate(-50%, 50%) scale(1.1)",
          },
          "50%": {
            transform: "translate(-50%, -50%) scale(0.9)",
          },
          "75%": {
            transform: "translate(80%, -50%) scale(1.1)",
          },
          "100%": {
            transform: "translate(80%, 50%) scale(1)",
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
        boxBounce: {
          "0%": {
            transform: "scale(0.25)",
          },
          "100% ": {
            transform: "scale(1)",
          },
        },
        loader: {
          to: { transform: "rotate(1turn)" },
        },
      },
    },
    fontFamily: {
      poppin: ["Poppins"],
    },
  },
  plugins: [],
};
