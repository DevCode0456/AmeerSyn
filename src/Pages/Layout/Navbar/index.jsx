import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Images from "../../../Helper/ImagesConstant";
import { memo, useEffect, useRef, useState } from "react";

const Topbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setIsDropdownOpen(false);
  };

  const services = [
    { name: "AI", path: "/services/ai" },
    { name: "Linux", path: "/services/linux" },
    { name: "Thesis", path: "/services/thesis" },
    { name: "Node.js", path: "/services/node.js" },
    { name: "Shopify", path: "/services/shopify" },
    { name: "React.js", path: "/services/react.js" },
    { name: "WordPress", path: "/services/wordpress" },
    { name: "Databases", path: "/services/databases" },
    { name: "Networking", path: "/services/networking" },
    { name: "Android App", path: "/services/andriod-app" },
    { name: "Assignments", path: "/services/assignments" },
    { name: "Proof Reading", path: "/services/proof-reading" },
    { name: "Research Paper", path: "/services/research-paper" },
    { name: "Static Website", path: "/services/static-website" },
    { name: "Email Invoices", path: "/services/email-invoices" },
    { name: "Cyber Security", path: "/services/cyber-security" },
    { name: "Cloud Computing", path: "/services/cloud-computing" },
    { name: "Custom Programs", path: "/services/custom-programs" },
    { name: "Web Development", path: "/services/web-development" },
    { name: "Final Year Project", path: "/services/final-year-project" },
    { name: "Project Management", path: "/services/project-management" },
    {
      name: "Data Structure & Algorithm",
      path: "/services/data-structure-algorithm",
    },
  ];

  return (
    <header className="bg-primary text-secondary shadow w-full">
      <div className="mx-auto flex items-center justify-between px-4 py-3 xl:px-10">
        {/* Logo */}
        <div>
          <img src={Images.LOGO_IMG} alt="logo" width="150" height="150" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-6">
          <Link to="/" className="font-medium text-sm transition">
            Home
          </Link>
          <Link to="/about-us" className="font-medium text-sm transition">
            About Us
          </Link>
          <Link to="/why-choose-us" className="font-medium text-sm transition">
            Why Choose Us
          </Link>
          <Link to="/portfolio" className="font-medium text-sm transition">
            Portfolio
          </Link>
          <Link to="/projects" className="font-medium text-sm transition">
            Projects
          </Link>

          {/* Services Dropdown */}
          <div className="relative group" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="font-medium text-sm transition focus:outline-none flex items-center"
            >
              Services ▾
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-64 bg-container shadow-lg rounded-md overflow-hidden z-40">
                <ul className="py-2">
                  {services.map((service, index) => (
                    <li key={index}>
                      <Link
                        to={service.path}
                        className="block px-4 py-2 text-Heading hover:bg-primary hover:text-secondary transition"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Link to="/need-help" className="font-medium text-sm transition">
            Need Help?
          </Link>

          <Link
            to="/terms&conditions"
            className="font-medium text-sm transition"
          >
            Terms and Conditions
          </Link>
          <Link to="/privacy-policy" className="font-medium text-sm transition">
            Privacy Policy
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="block lg:hidden focus:outline-none"
        >
          {isMenuOpen ? (
            <FiX className="w-6 h-6 text-secondary" />
          ) : (
            <FiMenu className="w-6 h-6 text-secondary" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-100 w-full px-6 py-3">
          <nav className="flex flex-col space-y-2">
            <Link
              to="/"
              onClick={toggleMenu}
              className="text-primary font-medium text-sm transition block px-4 py-2 hover:bg-primary hover:text-secondary"
            >
              Home
            </Link>
            <Link
              to="/about-us"
              onClick={toggleMenu}
              className="text-primary font-medium text-sm transition block px-4 py-2 hover:bg-primary hover:text-secondary"
            >
              About Us
            </Link>
            <Link
              to="/why-choose-us"
              onClick={toggleMenu}
              className="text-primary font-medium text-sm transition block px-4 py-2 hover:bg-primary hover:text-secondary"
            >
              Why Choose Us
            </Link>
            <Link
              to="/portfolio"
              onClick={toggleMenu}
              className="text-primary font-medium text-sm transition block px-4 py-2 hover:bg-primary hover:text-secondary"
            >
              Portfolio
            </Link>
            <Link
              to="/projects"
              onClick={toggleMenu}
              className="text-primary font-medium text-sm transition block px-4 py-2 hover:bg-primary hover:text-secondary"
            >
              Projects
            </Link>

            {/* Mobile Services Dropdown */}
            <details className="w-full">
              <summary className="text-primary font-medium text-sm transition block px-4 py-2 cursor-pointer hover:bg-primary hover:text-secondary">
                Services ▾
              </summary>
              <div className="ml-4 mt-2">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    onClick={toggleMenu}
                    className="block px-4 py-2 text-Heading hover:bg-primary hover:text-secondary"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </details>

            <Link
              to="/need-help"
              onClick={toggleMenu}
              className="text-primary font-medium text-sm transition block px-4 py-2 hover:bg-primary hover:text-secondary"
            >
              Need Help?
            </Link>

            <Link
              to="/terms&conditions"
              onClick={toggleMenu}
              className="text-primary font-medium text-sm transition block px-4 py-2 hover:bg-primary hover:text-secondary"
            >
              Terms and Conditions
            </Link>
            <Link
              to="/privacy-policy"
              onClick={toggleMenu}
              className="text-primary font-medium text-sm transition block px-4 py-2 hover:bg-primary hover:text-secondary"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default memo(Topbar);
