import React, { useState, useEffect, memo } from "react";

const ThemeToggle = () => {
  const [currentTheme, setCurrentTheme] = useState(0);

  // Array of theme classes
  const themes = [
    "theme-modern-tech",
    "theme-cyber-blue",
    "theme-minimal-white",
    "theme-classic-green",
    "theme-elegant-purple",
    "theme-black-gold",
    "theme-dynamic-red",
    "theme-oceanic-blue",
    "theme-sunset-orange",
    "theme-professional-gray",
  ];

  // Corresponding theme names
  const themeNames = [
    "Modern Tech",
    "Cyber Blue",
    "Minimal White",
    "Classic Green",
    "Elegant Purple",
    "Sleek Black & Gold",
    "Dynamic Red",
    "Oceanic Blue",
    "Sunset Orange",
    "Professional Gray",
  ];

  useEffect(() => {
    // Remove all existing theme classes
    themes.forEach((theme) => document.documentElement.classList.remove(theme));
    // Add the current theme class
    document.documentElement.classList.add(themes[currentTheme]);
  }, [currentTheme]);

  const toggleTheme = () => {
    setCurrentTheme((prev) => (prev + 1) % themes.length); 
  };

  return (
    <div >
      
    </div>
  );
};

export default memo(ThemeToggle);
