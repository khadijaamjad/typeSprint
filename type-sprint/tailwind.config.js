/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "400px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#fafafa",
      gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827"
      },
      blue: "#22223B",
      "blue-gray": "#4A4E69",
      "spanish-gray": "#9A8C98",
      "silver-pink": "#C9ADA7",
      "alabaster": "#F2E9E4",
      "pastel-red": "#FF675E",
      "rich-lavender": "#FFA2F6"
    },
    fontFamily: {
      sans: ["Raleway", "sans-serif"]
    },
    extend: {}
  },
  plugins: []
};
