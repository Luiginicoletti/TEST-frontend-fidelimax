import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          blue: "#19202D",
          white: "#FFFFFF",
          yellow: "#FFAE00",
          background: "#CCD0D6",
          gray: "#333E4F",
        },
      },
    },
  },
  plugins: [],
};
export default config;
