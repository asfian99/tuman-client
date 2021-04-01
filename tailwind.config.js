module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        primary: "var(--color-primary)",
        primary100: "var(--color-primary-100)",
        primary200: "var(--color-primary-200)",
        primary300: "var(--color-primary-300)",
        primary400: "var(--color-primary-400)",
        primary600: "var(--color-primary-600)",
        secondary: "var(--color-secondary)",
        secondaryL: "var(--color-secondary-ligther)",
      },
    },
  },
  variants: {
    extend: {},
    scrollbar: ["rounded"],
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
