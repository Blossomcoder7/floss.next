/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin";
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#fff",
        primary: "#538C4D",
        text: "#231F20",
        accent: "#ffb4c8",

      },
    },
  },
  plugins: [
    // Custom plugin example
    plugin(({ addBase }) => {
      addBase({
        body: { color: "#171717", backgroundColor: "#fff" },
        h1: { fontSize: "2.25rem" },
      });
    }),
  ],
};

export default config;
