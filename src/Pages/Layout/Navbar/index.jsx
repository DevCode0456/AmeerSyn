
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; 
import {React,  memo, useEffect, useState } from "react";

const Topbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentTheme, setCurrentTheme] = useState(0);
   
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
       themes.forEach((theme) => document.documentElement.classList.remove(theme));
       document.documentElement.classList.add(themes[currentTheme]);
     }, [currentTheme]);
   
     const toggleTheme = () => {
       setCurrentTheme((prev) => (prev + 1) % themes.length); 
     };
   
  
  

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div>
      <header className=" body-font bg-primary text-secondary shadow">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-2">
     

          <nav className="hidden lg:flex flex-wrap items-center text-base justify-center">
            <Link to={"/"}  className="mr-5 text-secondary font-semibold transition">
              Home
            </Link>
          
            <Link to={"/about-us"} className="mr-5 text-secondary font-semibold transition">
           About Us 
            </Link>
            <Link to={"/services"}  className="mr-5 text-secondary font-semibold transition">
            Services
            </Link>
        

            <Link to={"/why-choose-us"}  className="mr-5 text-secondary font-semibold transition">
              Why Choose Us
            </Link>
          
         
         
          
          </nav>

      

          <button
        onClick={toggleTheme}
        className="px-4 py-2 text-secondary bg-primary border rounded-lg shadow-md hover:shadow-lg transition"
      >
        Change Theme  
    </button>

          <div className="block lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <FiX className="w-6 h-6 text-secondary" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden">
            <nav className="flex flex-col items-start space-y-2 p-4 bg-gray-100 rounded-lg">
            <a  className="mr-5 text-primary font-semibold transition">
              Home
            </a>
          
            <a  className="mr-5 text-primary font-semibold transition">
           About Us 
            </a>
            <a  className="mr-5 text-primary font-semibold transition">
            Services
            </a>
            <a  className="mr-5 text-primary font-semibold transition">
           Projects
            </a>

            <a  className="mr-5 text-primary font-semibold transition">
              Why Choose Us
            </a>
          
            <a  className="mr-5 text-primary font-semibold transition">
           FaQs
            </a>
            <a  className="mr-5 text-primary font-semibold transition">
            Technologies
            </a>
            <a  className="mr-5 text-primary font-semibold transition">
           Testimonials
            </a>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default memo(Topbar);

                   
                  