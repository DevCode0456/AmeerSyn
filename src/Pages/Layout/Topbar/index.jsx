import React, { useState, useEffect, memo } from "react";
import { Sun } from "lucide-react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarked,
  FaWhatsapp,
} from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";

const Topbar = () => {
  const [currentTheme, setCurrentTheme] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const themes = [
    { name: "theme-dark", color: "#238636" },
    { name: "theme-cyber-blue", color: "#3B82F6" },
    { name: "theme-black-gold", color: "#FACC15" },
    { name: "theme-dynamic-red", color: "#EF4444" },
    { name: "theme-oceanic-blue", color: "#00ACC1" },
    { name: "theme-minimal-white", color: "#4B5563" },
    { name: "theme-classic-green", color: "#10B981" },
    { name: "theme-modern-oceanic", color: "#004d40" },
    { name: "theme-elegant-purple", color: "#8B5CF6" },
    { name: "theme-black-white-cream", color: "#863083" },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem("themeIndex");
    if (savedTheme) setCurrentTheme(parseInt(savedTheme, 10));
    themes.forEach((theme) =>
      document.documentElement.classList.remove(theme.name)
    );
    document.documentElement.classList.add(themes[currentTheme].name);
  }, [currentTheme]);

  return (
    <div className="w-full bg-black text-white text-sm shadow-md z-50 px-4 sm:px-6 py-2">
      <div className="flex flex-wrap justify-between items-center gap-4">
        {/* Contact Info */}
        <div className="flex flex-wrap items-center gap-4">
          {/* UK Number */}
          <a
            href="tel:+447440095528"
            className="flex items-center gap-2 hover:text-primary transition-all group"
          >
            <MdOutlinePhoneIphone
              className="group-hover:scale-110 transition-transform"
              size={16}
            />
            <span className="hidden lg:inline">(+44) 7440 095528</span>
          </a>

          {/* Pakistan Number */}
          <a
            href="tel:+923047914358"
            className="flex items-center gap-2 hover:text-primary transition-all group"
          >
            <FaPhoneAlt
              className="group-hover:scale-110 transition-transform"
              size={16}
            />
            <span className="hidden lg:inline">(+92) 304-7914358</span>
          </a>

          {/* Location */}
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-all group"
          >
            <FaMapMarked
              className="group-hover:scale-110 transition-transform"
              size={16}
            />
            <span className="hidden lg:inline">Morden, London UK</span>
          </a>

          {/* Email */}
          <a
            href="mailto:ameersync.com@gmail.com"
            className="flex items-center gap-2 hover:text-primary transition-all group"
          >
            <FaEnvelope
              className="group-hover:scale-110 transition-transform"
              size={16}
            />
            <span className="hidden lg:inline">ameersync.com@gmail.com</span>
          </a>
        </div>

        {/* Social Icons + Theme */}
        <div className="flex items-center gap-3 text-white">
          <a
            href="https://www.facebook.com/profile.php?id=61575707057172"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 hover:scale-110 transition-transform"
          >
            <FaFacebookF size={16} />
          </a>
          {/* <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 hover:scale-110 transition-transform"
          >
            <FaLinkedinIn size={16} />
          </a> */}
          <a
                   href="https://www.instagram.com/ameersync"
                   target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 hover:scale-110 transition-transform"
          >
            <FaInstagram size={16} />
          </a>
          <a
            href="https://wa.me/447440095528"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 hover:scale-110 transition-transform"
          >
            <FaWhatsapp size={16} />
          </a>

          <div className="relative">
            <button
              className="p-2 bg-primary rounded-full shadow-lg transition-all duration-500 ease-in-out transform hover:scale-110 hover:rotate-3 hover:translate-y-2 active:scale-95 text-white flex items-center justify-center hover:animate-pulse focus:outline-none focus:ring-2 focus:ring-varientColor ring-offset-2"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-label="Toggle theme menu"
            >
              <Sun
                size={22}
                className="transition-all duration-300 ease-in-out transform hover:scale-125 hover:text-yellow-300 hover:rotate-12"
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-3 w-48 sm:w-64 max-h-64 overflow-y-auto shadow-xl bg-white rounded-3xl p-4 z-50">
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {themes.map((theme, index) => (
                    <button
                      key={index}
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full transition-all duration-200 hover:scale-110 border-2 ${
                        currentTheme === index
                          ? "border-white"
                          : "border-transparent"
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
      </div>
    </div>
  );
};

export default memo(Topbar);
