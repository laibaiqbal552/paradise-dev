import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      montserrat: "var(--montserrat)",
    },
    extend: {
      colors: {
        "body-light": "rgb(29, 29, 27)",
        body: "rgb(28, 28, 26)",
      },
    },
  },
  plugins: [],
};
export default config;
