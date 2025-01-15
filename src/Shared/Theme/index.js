import React, { useState, useEffect, memo } from "react";

const ThemeToggle = () => {
  const [currentTheme, setCurrentTheme] = useState(0);
  const themes = [ "theme-light", "theme-red", "theme-dark", "theme-blue", "theme-green"];
  const themeNames = ["Light", "Red", "Dark", "Blue" ,"green"];

  useEffect(() => {
    document.documentElement.className = themes[currentTheme];
  }, [currentTheme]);

  const toggleTheme = () => {
    setCurrentTheme((prev) => (prev + 1) % themes.length);
  };

  return (
<>
</>
  );
};

export default memo(ThemeToggle);
