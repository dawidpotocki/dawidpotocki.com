const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./_site/**/*.html", "./_site/**/*.js"],
  theme: {
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.1rem",
      xl: "1.15rem",
      "2xl": "1.25rem",
      "3xl": "1.35rem",
      "4xl": "1.5rem",
      "5xl": "2rem",
      "6xl": "2.5rem",
      "7xl": "3rem",
      "8xl": "3.5rem",
    },
    extend: {
      colors: {
        gray: {
          "100": "#eeeeee",
          "200": "#cccccc",
          "300": "#aaaaaa",
          "400": "#717385",
          "500": "#4e4f5a",
          "600": "#3f414d",
          "700": "#2c2c38",
          "800": "#1a1f24",
          "900": "#15191e",
        },
      },
    },
  },
};
