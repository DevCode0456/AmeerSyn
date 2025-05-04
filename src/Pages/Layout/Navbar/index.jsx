import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Images from "../../../Helper/ImagesConstant";
import { memo, useEffect, useRef, useState } from "react";

const Topbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

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

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

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
    { name: "Data Structure & Algorithm", path: "/services/data-structure-algorithm" },
  ];

  const navLinkClass = (path) =>
    `text-sm transition duration-300 ease-in-out pb-1 ${
      location.pathname === path
        ? "font-bold border-b-2 border-secondary text-secondary"
        : "font-medium hover:text-secondary"
    }`;

  const serviceIsActive = location.pathname.startsWith("/services");

  return (
    <header className="bg-primary text-secondary shadow w-full">
      <div className="mx-auto flex items-center justify-between px-4 py-3 xl:px-10">
        <div>
          <img src={Images.LOGO_IMG} alt="logo" width="150" height="150" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-6">
          <Link to="/" className={navLinkClass("/")}>Home</Link>
          <Link to="/about-us" className={navLinkClass("/about-us")}>About Us</Link>
          <Link to="/why-choose-us" className={navLinkClass("/why-choose-us")}>Why Choose Us</Link>
          <Link to="/portfolio" className={navLinkClass("/portfolio")}>Portfolio</Link>
          <Link to="/projects" className={navLinkClass("/projects")}>Projects</Link>

          <div className="relative group" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className={`text-sm transition duration-300 ease-in-out flex items-center focus:outline-none pb-1 ${
                serviceIsActive
                  ? "font-bold border-b-2 border-secondary text-secondary"
                  : "font-medium hover:text-secondary"
              }`}
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
                        className={`block px-4 py-2 text-Heading transition duration-300 ease-in-out ${
                          location.pathname === service.path
                            ? "font-bold border-b-2 border-secondary text-secondary"
                            : "hover:text-secondary"
                        }`}
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Link to="/need-help" className={navLinkClass("/need-help")}>Need Help?</Link>
          <Link to="/terms&conditions" className={navLinkClass("/terms&conditions")}>Terms and Conditions</Link>
          <Link to="/privacy-policy" className={navLinkClass("/privacy-policy")}>Privacy Policy</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="block lg:hidden focus:outline-none">
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
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about-us" },
              { name: "Why Choose Us", path: "/why-choose-us" },
              { name: "Portfolio", path: "/portfolio" },
              { name: "Projects", path: "/projects" },
              { name: "Need Help?", path: "/need-help" },
              { name: "Terms and Conditions", path: "/terms&conditions" },
              { name: "Privacy Policy", path: "/privacy-policy" },
            ].map((item, i) => (
              <Link
                key={i}
                to={item.path}
                onClick={toggleMenu}
                className={`block px-4 py-2 text-sm transition duration-300 ease-in-out ${
                  location.pathname === item.path
                    ? "font-bold border-b-2 border-secondary text-secondary"
                    : "font-medium hover:text-secondary"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <details className="w-full">
              <summary
                className={`block px-4 py-2 text-sm transition duration-300 ease-in-out cursor-pointer ${
                  serviceIsActive
                    ? "font-bold border-b-2 border-secondary text-secondary"
                    : "font-medium hover:text-secondary"
                }`}
              >
                Services ▾
              </summary>
              <div className="ml-4 mt-2">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    onClick={toggleMenu}
                    className={`block px-4 py-2 text-sm transition duration-300 ease-in-out ${
                      location.pathname === service.path
                        ? "font-bold border-b-2 border-secondary text-secondary"
                        : "hover:text-secondary"
                    }`}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </details>
          </nav>
        </div>
      )}
    </header>
  );
};

export default memo(Topbar);
