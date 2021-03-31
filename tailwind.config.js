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
        primaryD: "var(--color-primary-darker)",
        priumaryL: "var(--color-primary-ligther)",
        secondary: "var(--color-secondary)",
        secondaryL: "var(--color-secondary-ligther)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
