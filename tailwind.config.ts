import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx}",
    "./src/lib/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
    montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        "body-light": "rgb(29, 29, 27)",
        "body-dark": "rgb(23, 23, 23)",
        body: "rgb(28, 28, 26)",
        primary: "#6c4796",
      },
    },
  },
  plugins: [],
};
export default config;
