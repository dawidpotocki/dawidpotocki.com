const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'media',
  purge: ["./_site/**/*.html", "./_site/**/*.js"],
  theme: {
    fontFamily: {
      "sans": ["Roboto", "sans-serif", "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"],
      "mono": ["DejaVu Sans Mono", "monospace"],
    },
    extend: {
      fontSize: {
        "3xl": "1.75rem",
        "4xl": "2rem",
      },
      colors: {
        orange: colors.orange,
        gray: {
          "600": "#4e4f5a",
          "700": "#3f414d",
          "800": "#2c2c38",
          "900": "#15191e",
        },
      },
    },
  },
};
