module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        bg: "#F9F9F9",
        blue: "#7398CA",
        "blue-bg": "#EDF1F6",
        "blue-light": "#C8DCF8",
        "blue-lighter": "#E8EFF9",
        "blue-lightest": "#def0ff",
        orange: "#FC9422",
        "orange-light": "#FFEFDE",
        yellow: "#EFE256",
        "yellow-light": "#F9F7DD",
        dark: "#323531",
        grey: "#838383",
      },
    },
  },
  plugins: [],
  important: true,
};
