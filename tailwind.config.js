module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "#202733",
        grayBlue: "#4F5D74",
        darkGrayBlue: "#313A48",
        lightCyan: "#CEE3E9",
        neon: "#53FFAA",
      },
      boxShadow: {
        cyan: "0px 0px 40px #53FFAA",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
