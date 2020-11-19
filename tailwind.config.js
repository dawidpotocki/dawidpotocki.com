const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./_site/**/*.html", "./_site/**/*.js"],
  theme: {
    extend: {
      fontSize: {
        "3xl": "1.75rem",
        "4xl": "2rem",
      },
      colors: {
        orange: colors.orange,
        gray: {
          "50":  "#fafafa",
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
