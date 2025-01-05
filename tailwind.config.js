/** @type {import('tailwindcss').Config} */
import { COLORS } from "./src/constants/data/Colors";

const safelist = [
  ...COLORS.map(({ color }) => [
    `bg-${color}-500`,
    `hover:bg-${color}-600`,
  ]).flat(),
];

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: safelist,
  theme: {
    extend: {
      colors: {
        gray: "#F2F0F1",
        "gray-60": "#5d5d5d",
        "gray-10": "#e7e7e7",
      },
      fontFamily: {
        sans: ["Jost", "Arial", "sans-serif"],
      },
      gridTemplateColumns: {
        3: "repeat(auto-fill, minmax(250px, 1fr))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#000000",
          "primary-content": "#ffffff",
          secondary: "#F2F0F1",
          warning: "#fecaca",
        },
        // mytheme: {
        //   primary: "#000000",
        //   "gray-60": "#5d5d5d",
        //   "gray-10": "#e7e7e7",
        // },
      },
    ],
  },
  plugins: [require("daisyui")],
};
// sans: ["Jost", "Arial", "sans-serif"],

// mytheme: {

//   "primary": "#ff00ff",

//   "primary-content": "#160016",

//   "secondary": "#ff00ff",

//   "secondary-content": "#160016",

//   "accent": "#00ffff",

//   "accent-content": "#001616",

//   "neutral": "#ff00ff",

//   "neutral-content": "#160016",

//   "base-100": "#ffffff",

//   "base-200": "#dedede",

//   "base-300": "#bebebe",

//   "base-content": "#161616",

//   "info": "#2563eb",

//   "info-content": "#c6dbff",

//   "success": "#00ff00",

//   "success-content": "#001600",

//   "warning": "#00ff00",

//   "warning-content": "#001600",

//   "error": "#ff0000",

//   "error-content": "#160000",
//             },
