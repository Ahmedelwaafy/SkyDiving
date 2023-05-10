/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Rubik", "sans-serif"],
        "sub-heading": ["Oswald", "sans-serif"],
        cursive: ["Pacifico", "cursive"],
        body: ["Montserrat", "sans-serif"],
      },

      backgroundImage: (theme) => ({
        grad: "linear-gradient(25deg, rgba(231,235,239,1) 0%, rgba(183,226,247,1) 100%)",
      }),

      colors: {
        bg: "#f2fafe",
        primary: "#401b72",
        secondary: "#b795e3",
        accent: "#401b72",
        test: "#2cacde",
        test2: "#4cc9f0",
      },
    },
    screens: {
      xxxl: { max: "1500px" },
      xxl: { max: "1300px" },
      xl: { max: "1230px" },
      alg: { max: "1088px" },
      lg: { max: "1060px" },
      amd: { max: "920px" },
      md: { max: "768px" },
      asm: { max: "630px" },
      sm: { max: "500px" },
      xs: { max: "375px" },
    },
  },
  plugins: [],
};
