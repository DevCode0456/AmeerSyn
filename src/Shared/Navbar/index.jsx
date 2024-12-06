import React, { useState } from "react";
import { FaBars, FaUserPlus } from "react-icons/fa";

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="bg-gradient-to-r from-blue-300 via-blue-200 to-blue-400 min-h-screen shadow-md">
      <header className="text-gray-700 body-font shadow-lg">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
         

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
                className="mr-5 hover:text-gray-900 text-gray-600 transition duration-300 transform hover:scale-110 hover:underline"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Buttons */}
          <div className="flex items-center">
            <button className="inline-flex items-center font-semibold bg-indigo-500 text-white border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-base transition duration-300 transform hover:scale-105">
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
      </header>
    </section>
  );
};

export default Index;
