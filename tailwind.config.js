/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E8E337",
        secondary: "#00BCBC",
      },
      boxShadow: {
        "features-card-shadow": "0px 0px 40px 0px #CDFF64A3;",
      },
      backgroundImage: {
        "input-gradient":
          "linear-gradient(309.97deg, rgba(255, 255, 255, 0) 67.96%, #FFFFFF 83.77%)",
        dashboardGradient: "linear-gradient(to right, #00BCBC, #00BCBC)",
        dashboardCircleGradient: "radial-gradient(circle, #00BCBC 100%)",
        dynamicGradient:
          // "radial-gradient(circle, #E8E337 0%, rgba(232, 227, 55, 0) 70%)",
          "radial-gradient(circle, #E8E337 0%, rgba(232, 227, 55, 0.6) 30%, rgba(232, 227, 55, 0.2) 60%, rgba(232, 227, 55, 0) 90%)",

        footerPrimaryGradient:
          "radial-gradient(circle, #00BCBC 0%, rgba(232, 227, 55, 0) 70%)",
        hoverGradient: "linear-gradient(130deg, #E8E337 30%, #00BCBC  100%);",
      },
      fontFamily: {
        gilroy: ["Gilroy", "cursive"],
      },
      animation: {
        moveCircle: "moveCircle 5s linear infinite",
        "move-diagonal": "moveDiagonal 1s ease-in-out infinite",
        "move-vertical": "moveVertical 1s ease-in-out infinite",
      },
      keyframes: {
        moveCircle: {
          "0%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(50px, 0)" },
          "50%": { transform: "translate(50px, 50px)" },
          "75%": { transform: "translate(0, 50px)" },
          "100%": { transform: "translate(0, 0)" },
        },
      },
    },
  },
  plugins: [],
};
