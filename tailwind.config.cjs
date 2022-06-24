const twColors = require("tailwindcss/colors");

//add default to colors so we don't always need -500 for base shade
Object.entries(twColors).forEach(
  ([name, color]) => (color.DEFAULT = color[500])
);

const colors = {
  ...twColors,
  primary: {
    DEFAULT: "#073A76",
    50: "#98C4F9",
    100: "#7BB4F7",
    200: "#4193F4",
    300: "#0E73EA",
    400: "#0A56B0",
    500: "#073A76",
    600: "#052C59",
    700: "#041E3C",
    800: "#020F1F",
    900: "#000102",
  },
  secondary: {
    DEFAULT: "#0074C8",
    50: "#AFDDFF",
    100: "#95D2FF",
    200: "#62BDFF",
    300: "#2FA8FF",
    400: "#0092FB",
    500: "#0074C8",
    600: "#00599A",
    700: "#003F6C",
    800: "#00243E",
    900: "#000A10",
  },
  accent: {
    DEFAULT: "#82D300",
    50: "#D3FF8C",
    100: "#CBFF77",
    200: "#BBFF4E",
    300: "#ACFF26",
    400: "#9BFC00",
    500: "#82D300",
    600: "#6CAF00",
    700: "#568C00",
    800: "#406800",
    900: "#2A4400",
  },
  "accent-content": "#FFFFFF",
  neutral: {
    100: "#F0F0F0",
    300: "#D4D4D4",
    450: "#868686",
    500: "#6A6A6A",
    800: "#242424",
    900: "#1C1C1C",
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{svelte,js,ts}"],
  theme: {
    screens: {
      sm: '43rem',//phones
      md: '63rem',//tablets
      lg: '82rem',//desktop
      xl: '102rem',//big desktop
      '2xl': '132rem',//fucking huge desktop
    },
    container: {
      center: true,
    },
    extend: {
      colors,
    },
  },
  daisyui: {
    themes: ['black']
  },
  plugins: [require("daisyui")],
};
