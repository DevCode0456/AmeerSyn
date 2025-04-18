import React, { useState, useEffect, memo } from "react";
import { Sun } from "lucide-react";

const ThemeToggle = () => {
  const [currentTheme, setCurrentTheme] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const themes = [
    { name: "theme-modern-tech", color: "#FB8C00" },
    { name: "theme-cyber-blue", color: "#3A86FF" },
    { name: "theme-minimal-white", color: "#006D77" },
    { name: "theme-classic-green", color: "#52B788" },
    { name: "theme-elegant-purple", color: "#8B5CF6" },
    { name: "theme-black-gold", color: "#000000" },
    { name: "theme-dynamic-red", color: "#ce2449" },
    { name: "theme-oceanic-blue", color: "#00796B" },
    { name: "theme-professional-gray", color: "#828282" },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem("themeIndex");
    if (savedTheme) setCurrentTheme(parseInt(savedTheme, 10));

    themes.forEach((theme) => document.documentElement.classList.remove(theme.name));
    document.documentElement.classList.add(themes[currentTheme].name);
  }, [currentTheme]);

  return (
    <div className="fixed right-0.5 top-1/2 transform -translate-y-1/2 z-50">
      <button
        className="p-2 bg-button border-secondary border rounded-full shadow-lg transition-all duration-300 ease-in-out text-white"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        aria-label="Toggle theme menu"
      >
        <Sun size={15} />
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-3 w-48 sm:w-64 max-h-64 overflow-y-auto shadow-xl bg-white rounded-3xl p-4 transition-all duration-300">
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {themes.map((theme, index) => (
              <button
                key={index}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full transition-all duration-200 hover:scale-110 border-2 border-transparent focus:ring-2 focus:ring-gray-300"
                style={{ backgroundColor: theme.color }}
                onClick={() => {
                  setCurrentTheme(index);
                  setIsDropdownOpen(false);
                  localStorage.setItem("themeIndex", index);
                }}
                aria-label={`Select theme ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(ThemeToggle);
