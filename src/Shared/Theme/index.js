import React, { useState, useEffect, memo } from "react";
import { Sun } from "lucide-react";

const Topbar = () => {
  const [currentTheme, setCurrentTheme] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const themes = [
    { name: "theme-dark", color: "#238636" },
    { name: "theme-modern-oceanic", color: "#004d40" },
    { name: "theme-cyber-blue", color: "#3B82F6" },
    { name: "theme-minimal-white", color: "#4B5563" },
    { name: "theme-classic-green", color: "#10B981" },
    { name: "theme-elegant-purple", color: "#8B5CF6" },
    { name: "theme-black-gold", color: "#FACC15" },
    { name: "theme-dynamic-red", color: "#EF4444" },
    { name: "theme-oceanic-blue", color: "#00ACC1" },
    { name: "theme-black-white-cream", color: "#863083" },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem("themeIndex");
    if (savedTheme) setCurrentTheme(parseInt(savedTheme, 10));

    themes.forEach((theme) => document.documentElement.classList.remove(theme.name));
    document.documentElement.classList.add(themes[currentTheme].name);
  }, [currentTheme]);

  return (
    <div className="w-full h-16 bg-gray-800 flex justify-end items-center pr-6 relative z-50">
      {/* Theme Toggle Button */}
      <div className="relative">
        <button
          className="p-2 bg-primary border-secondary border rounded-full shadow-lg transition-all duration-300 ease-in-out text-white"
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
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full transition-all duration-200 hover:scale-110 border-2 ${
                    currentTheme === index ? "border-gray-400" : "border-transparent"
                  } focus:ring-2 focus:ring-gray-300`}
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
    </div>
  );
};

export default memo(Topbar);
