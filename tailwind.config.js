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
        primary: "#0181d3",
        secondary: "#7ec6f2",
        accent: "#401b72",
        test: "#2cacde",
        test2: "#4cc9f0",
      },
    },
    screens: {
      xxl: { max: "1500px" },
      xl: { max: "1200px" },
      lg: { max: "1060px" },
      amd: { max: "920px" },
      md: { max: "768px" },
      sm: { max: "550px" },
      xs: { max: "375px" },
    },
  },
  plugins: [],
};
