module.exports = {
  darkMode: "class", // Enable dark mode based on the class
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Define paths to the content files
  theme: {
    extend: {
      colors: {
        text: "var(--color-text)", // Use the CSS variable for text color
        primary: "var(--color-primary)", // Use the CSS variable for primary color
        secondary: "var(--color-secondary)", // Use the CSS variable for secondary color
        container: "var(--color-container)", // Use the CSS variable for container color
        button: "var(--color-button)", // Add button color to be used
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Add default sans-serif font family
        heading: ["Poppins", "sans-serif"], // Add heading font family
      },
    },
  },
  plugins: [],
};
