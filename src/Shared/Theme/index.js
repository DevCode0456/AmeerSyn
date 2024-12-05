import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const themes = ["", "theme-dark", "theme-blue", "theme-green"];
  const [currentTheme, setCurrentTheme] = useState(0);

  useEffect(() => {
    document.documentElement.className = themes[currentTheme];
  }, [currentTheme]);

  const toggleTheme = () => {
    setCurrentTheme((prev) => (prev + 1) % themes.length);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 bg-primary text-white px-4 py-2 rounded-lg shadow hover:bg-secondary transition"
    >
      Switch Theme
    </button>
  );
};

export default ThemeToggle;
