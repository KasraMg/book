/** @type {import('tailwindcss').Config} */

const { heroui } = require("@heroui/react");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        purple: "#7731d8",
      },
      screens: {
        md: { min: "900px" },
        xs: { min: "400px" },
      },
      fontFamily: {
        vazir: ["var(--font-vazir)"],
      },
      backgroundImage: {
        "white-overlay-gradient":
          "linear-gradient(to bottom, #ffffff0a, #ffffff91, #ffffffe3, #fff)",
        "gray-overlay-gradient":
          "linear-gradient(to bottom, #f5f0fe08, #f5f0fea8, #f5f0fede, #f5f0fe)",
        "black-overlay-gradient":
          "linear-gradient(#0000000a, #000000d9, #000000fc, #000)",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
