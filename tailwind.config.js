/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        custom:
          "0px 0px 0px 0px rgba(255, 213, 104, 0.24), 0px 1px 3px 0px rgba(255, 213, 104, 0.24), 0px 5px 5px 0px rgba(255, 213, 104, 0.20), 0px 11px 7px 0px rgba(255, 213, 104, 0.12), 0px 20px 8px 0px rgba(255, 213, 104, 0.04), 0px 31px 9px 0px rgba(255, 213, 104, 0.00)",
      },
      colors: {
        light: {
          blue: "#19202D",
          white: "#FFFFFF",
          yellow: "#FFB800",
          background: "#F2F4F8",
          gray: "#333E4F",
          lightgray: "#737A86",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
