import { FaMoon, FaSun } from "react-icons/fa";
import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [currentTheme, setCurrentTheme] = useState(0);
  const themes = ["", "theme-dark", "theme-blue", "theme-green"];

  useEffect(() => {
    document.documentElement.className = themes[currentTheme];
  }, [currentTheme]);

  const toggleTheme = () => {
    setCurrentTheme((prev) => (prev + 1) % themes.length);
  };

  return (
    <button
      onClick={toggleTheme}
      className="bg-primary absolute top-4 right-4  text-white p-3 px-6 rounded-3xl  shadow hover:bg-secondary transition"
    >
      <div className="flex items-center justify-center ">
        {" "}
        <FaMoon className="me-3" /> <FaSun />
      </div>
    </button>
  );
};

export default ThemeToggle;
