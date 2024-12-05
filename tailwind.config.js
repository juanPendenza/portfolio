import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // modo oscuro
  darkMode: "class",
  theme: {
    extend: {
      // animación de la imagen en la home
      // los keyframes son los pasos de la animación
      keyframes: {
        randomMove: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(20px, -30px)" },
          "20%": { transform: "translate(-10px, -20px)" },
          "30%": { transform: "translate(-5px, 0px)" },
          "40%": { transform: "translate(15px, 20px)" },
          "50%": { transform: "translate(-10px, 5px)" },
          "60%": { transform: "translate(-30px, 25px)" },
          "70%": { transform: "translate(20px, -30px)" },
          "80%": { transform: "translate(15px, 20px)" },
          "80%": { transform: "translate(-20px, 0px)" },
        },
      },
      // esto es como se utiliza la animación
      animation: {
        randomMove: "randomMove 10s infinite ease-in-out",
      },
      // verde personalizado
      colors: {
        myGreen: "#70ffaf",
      },
    },
    fontFamily: {
      poppins: ["Poppins"],
    },
  },
  plugins: [daisyui],
};
