import Images from "../../Helper/ImagesConstant";
import React, { useState, useEffect, memo } from "react";
import { FaBars, FaUserPlus, FaMoon, FaSun } from "react-icons/fa";

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const themes = ["theme-light", "theme-dark", "theme-blue", "theme-green"];

  useEffect(() => {
    document.documentElement.className = themes[currentTheme];
  }, [currentTheme]);

  const toggleTheme = () => {
    setCurrentTheme((prev) => (prev + 1) % themes.length);
  };

  return (
     <section className="bg-primary shadow-md">
      <header className=" body-font shadow-lg">
        <div className="container mx-auto flex flex-wrap p-4 items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex title-font font-medium items-center mb-4 md:mb-0"
          >
            <img
              alt="Logo"
              width="50px"
              height="50px"
              src={Images.LOGO_IMG}
              className="rounded-full"
            />
            <span className="ml-3 text-xl font-semibold ">
              AmeerSync
            </span>
          </a>

          {/* Navigation Menu */}
          <nav
            className={`${
              menuOpen ? "block" : "hidden"
            } md:flex flex-col md:flex-row font-semibold items-center text-base justify-center w-full md:w-auto`}
          >
            {[
              "Home",
              "About Us",
              "Our Team",
              "Services",
              "Projects",
              "Portfolio",
              "Feedbacks",
              "Why Choose Us",
              "Contact Us",
            ].map((item, index) => (
              <a
                key={index}
                href={`#${item.replace(/\s+/g, "").toLowerCase()}`}
                className="w-100 mr-3 hover:text-gray-900 transition duration-300 transform hover:scale-110 hover:underline"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* User Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center  p-3 px-5 rounded-3xl bg-black hover:bg-white text-white hover:text-black  border-1 border-white hover:border-black transition duration-300 transform hover:scale-110 hover:underline"
            >
              <FaMoon className="me-3 " />
              <FaSun className="" />


            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-primary z-40 shadow-lg rounded-lg">
                {/* Theme Selector */}
                <div className="p-4">
                  <h3 className="text-sm font-bold mb-2">Select Theme Color</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      "red",
                      "blue",
                      "orange",
                      "green",
                      "yellow",
                      "violet",
                    ].map((color) => (
                      <div key={color} className="text-center">
                        <button
                          className={`w-8 h-8 rounded-full bg-${color}-500`}
                        ></button>
                        <span className="block font-bold text-sm capitalize">
                          {color}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mode Selector */}
                <div className="p-4 border-t">
                  <h5 className="text-sm font-medium mb-2">Mode</h5>
                  <div className="flex space-x-4">
                    <button
                      className="flex items-center space-x-1 p-2 rounded border border-gray-300 hover:bg-gray-100"
                      onClick={() => setCurrentTheme(1)}
                    >
                      <FaMoon />
                      <span className="text-sm">Dark</span>
                    </button>
                    <button
                      className="flex items-center space-x-1 p-2 rounded border border-gray-300 hover:bg-gray-100"
                      onClick={() => setCurrentTheme(0)}
                    >
                      <FaSun />
                      <span className="text-sm">Light</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex items-center">
            <button className="hidden md:inline-flex items-center font-semibold bg-indigo-500 text-white border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-base transition duration-300 transform hover:scale-105">
              Hire Me <FaUserPlus size={20} className="ml-2" />
            </button>
            <button
              className="ml-4 md:hidden inline-flex items-center bg-indigo-500 text-white border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-base transition duration-300 transform hover:scale-105"
              aria-label="Toggle Menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <FaBars />
            </button>
          </div>
        </div>

        {/* Mobile Overlay */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 flex flex-col justify-center items-center"
            onClick={() => setMenuOpen(false)}
            role="presentation"
          >
            <div className="bg-white w-3/4 p-6 rounded-lg shadow-lg">
              {[
                "Home",
                "About Us",
                "Our Team",
                "Services",
                "Projects",
                "Portfolio",
                "Feedbacks",
                "Contact Us",
                "Why Choose Us",
              ].map((item, index) => (
                <a
                  key={index}
                  href={`#${item.replace(/\s+/g, "").toLowerCase()}`}
                  className="block w-full py-2 text-center font-semibold text-gray-600 hover:text-gray-900 transition duration-300"
                >
                  {item}
                </a>
              ))}
              <button className="mt-4 inline-flex items-center font-semibold bg-indigo-500 text-white border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-base transition duration-300 transform hover:scale-105">
                Hire Me <FaUserPlus size={20} className="ml-2" />
              </button>
            </div>
          </div>
        )}
      </header>
     </section>
  );
};

export default memo(Index);
