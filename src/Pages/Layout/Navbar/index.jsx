import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { React, memo, useEffect, useState } from "react";
import Images from "../../../Helper/ImagesConstant";

const Topbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

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

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const services = [
    { name: "Web Development", path: "/services/web-development" },
    { name: "Node.js", path: "/services/node.js" },
    { name: "React.js", path: "/services/react.js" },
    { name: "Shopify", path: "/services/shopify" },
    { name: "WordPress", path: "/services/wordpress" },
    { name: "Android App", path: "/services/android-app" },
    { name: "Static Website", path: "/services/static-website" },
    { name: "Email Invoices", path: "/services/email-invoices" },
    { name: "AI", path: "/services/ai" },
    { name: "Linux", path: "/services/linux" },
    { name: "Databases", path: "/services/databases" },
    { name: "Networking", path: "/services/networking" },
    { name: "Cloud Computing", path: "/services/cloud-computing" },
    { name: "Cyber Security", path: "/services/cyber-security" },
    { name: "Data Structure & Algorithm", path: "/services/data-structure-algorithm" },
    { name: "Custom Programs", path: "/services/custom-programs" },
    { name: "Final Year Project", path: "/services/final-year-project" },
    { name: "Project Management", path: "/services/project-management" },
    { name: "Thesis", path: "/services/thesis" },
    { name: "Assignments", path: "/services/assignments" },
    { name: "Proof Reading", path: "/services/proof-reading" },
    { name: "Research Paper", path: "/services/research-paper" },
  ];

  return (
    <header className="bg-primary text-secondary shadow w-full">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <div>
          <img src={Images.LOGO_IMG} alt="logo" width={"100px"} height={"100px"} />
        </div>
        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-5">
          <Link to="/" className="font-semibold transition">Home</Link>
          <Link to="/about-us" className="font-semibold transition">About Us</Link>
          <Link to="/why-choose-us" className="font-semibold transition">Why Choose Us</Link>
          <Link to="/portfolio" className="font-semibold transition">Portfolio</Link>

          {/* Dropdown Menu */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="font-semibold transition focus:outline-none"
            >
              Services
            </button>
            {isDropdownOpen && (
              <div className="absolute z-50 bg-gray-200 rounded-lg w-64 mt-2 shadow-md">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className="block px-4 py-2 text-gray-700 hover:bg-primary hover:text-secondary"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/need-help" className="font-semibold transition">Need Help?</Link>
          <Link to="/feedback" className="font-semibold transition">Feedbacks</Link>
          <Link to="/terms&conditions" className="font-semibold transition">Terms and Conditions</Link>
        </nav>

        {/* Theme Button */}
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-secondary text-primary border rounded-lg shadow-md hover:shadow-lg transition"
        >
          Change Theme
        </button>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="block lg:hidden focus:outline-none">
          {isMenuOpen ? <FiX className="w-6 h-6 text-secondary" /> : <FiMenu className="w-6 h-6 text-secondary" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-100 w-full px-4 py-3">
          <nav className="flex flex-col space-y-2">
            <Link to="/" onClick={closeMenu} className=" text-primary font-semibold transition">Home</Link>
            <Link to="/about-us" onClick={closeMenu} className= "text-primary font-semibold transition">About Us</Link>
            <Link to="/why-choose-us" onClick={closeMenu} className=" text-primary font-semibold transition">Why Choose Us</Link>
            <Link to="/portfolio" onClick={closeMenu} className="text-primary  font-semibold transition">Portfolio</Link>

            {/* Mobile Dropdown */}
            <div className="relative">
              <button onClick={toggleDropdown} className="text-primary font-semibold text-primary transition focus:outline-none">
                Services
              </button>
              {isDropdownOpen && (
                <div className="mt-2 bg-gray-200 rounded-lg w-64">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      onClick={closeMenu}
                      className="block px-4 py-2 text-primary hover:bg-primary hover:text-secondary"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/need-help" onClick={closeMenu} className=" text-primary font-semibold transition">Need Help?</Link>
            <Link to="/feedback" onClick={closeMenu} className="text-primary font-semibold transition">Feedbacks</Link>
            <Link to="/terms&conditions" onClick={closeMenu} className="text-primary font-semibold transition">Terms and Conditions</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default memo(Topbar);
