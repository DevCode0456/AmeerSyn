import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import React, { memo, useState } from "react";
import Images from "../../../Helper/ImagesConstant";

const Topbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div>
      <header className="text-gray-600 body-font bg-container shadow">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-2">
          <a
            className="flex title-font font-medium items-center md:mb-0"
            href="#"
          >
            <img
              alt="logo"
              src={Images.LOGO_IMG}
              className="w-25 h-14 rounded-full flex-shrink-0 object-cover object-center"
            />
          </a>

          <nav className="hidden lg:flex flex-wrap items-center text-base justify-center">
            <Link
              to={"/portfolio"}
              className="mr-5 text-primary font-semibold transition"
            >
              Portfolio
            </Link>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="mr-5 text-primary font-semibold transition focus:outline-none"
              >
                Services
              </button>
              {isDropdownOpen && (
                <div className="mt-2 z-50 absolute bg-gray-200 rounded-lg w-64">
                  <Link
                    to="/services/web-development"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-secondary"
                  >
                    Web Development
                  </Link>
                  <Link
                    to="/services/node.js"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-secondary"
                  >
                    Node.js
                  </Link>
                  <Link
                    to="/services/react.js"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-secondary"
                  >
                    React.js
                  </Link>
                  <Link
                    to="/services/shopify"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-secondary"
                  >
                    Shopify
                  </Link>
                  <Link
                    to="/services/wordpress"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-secondary"
                  >
                    WordPress
                  </Link>
                  <Link
                    to="/services/andriod-app"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-secondary"
                  >
                    Android App
                  </Link>
                  <Link
                    to="/services/static-website"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-secondary"
                  >
                    Static Website
                  </Link>
                  <Link
                    to="/services/email-invoices"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-secondary"
                  >
                    Email Invoices
                  </Link>
                  <Link
                    to="/services/ai"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-secondary"
                  >
                    AI
                  </Link>
                  <Link
                    to="/services/linux"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-secondary"
                  >
                    Linux
                  </Link>
                  <Link
                    to="/services/databases"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-secondary"
                  >
                    Databases
                  </Link>
                  <Link
                    to="/services/networking"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-secondary"
                  >
                    Networking
                  </Link>
                  <Link
                    to="/services/cloud-computing"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-secondary"
                  >
                    Cloud Computing
                  </Link>
                  <Link
                    to="/services/cyber-security"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-secondary"
                  >
                    Cyber Security
                  </Link>
                  <Link
                    to="/services/data-structure-algorithm"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-secondary"
                  >
                    Data Structure & Algorithm
                  </Link>
                  <Link
                    to="/services/custom-programs"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-secondary"
                  >
                    Custom Programs
                  </Link>
                  <Link
                    to="/services/final-year-project"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-secondary"
                  >
                    Final Year Project
                  </Link>
                  <Link
                    to="/services/project-management"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-secondary"
                  >
                    Project Management
                  </Link>
                  <Link
                    to="/services/thesis"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-secondary"
                  >
                    Thesis
                  </Link>
                  <Link
                    to="/services/assignments"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-secondary"
                  >
                    Assignments
                  </Link>
                  <Link
                    to="/services/proof-reading"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-secondary"
                  >
                    Proof Reading
                  </Link>
                  <Link
                    to="/services/research-paper"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-secondary"
                  >
                    Research Paper
                  </Link>
                </div>
              )}
            </div>
            <Link
              to={"/need-help"}
              className="mr-5 text-primary font-semibold transition"
            >
              Need Help?
            </Link>
            <Link
              to={"/feedback"}
              className="mr-5 text-primary font-semibold transition"
            >
              Feedbacks
            </Link>
            <Link
              to={"/terms&conditions"}
              className="mr-5 text-primary font-semibold transition"
            >
              Terms and Conditions
            </Link>
          </nav>

          <Link
            to={"/contact-us"}
            className="px-4 py-2 text-secondary bg-primary border rounded-lg shadow-md hover:shadow-lg transition"
          >
            Get Started
          </Link>

          <div className="block lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <FiX className="w-6 h-6 text-primary" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden">
            <nav className="flex flex-col items-start space-y-2 p-4 bg-gray-100 rounded-lg">
              <Link
                to="/portfolio"
                className="mr-5 text-primary font-semibold transition"
              >
                Portfolio
              </Link>
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="mr-5 text-primary font-semibold transition focus:outline-none"
                >
                  Services
                </button>
                {isDropdownOpen && (
                  <div className="mt-2 bg-gray-200 w-full rounded-lg">
                    <Link
                      to="/services/web-development"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-secondary"
                    >
                      Web Development
                    </Link>
                    <Link
                      to="/services/node.js"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-secondary"
                    >
                      Node.js
                    </Link>
                    <Link
                      to="/services/react.js"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-secondary"
                    >
                      React.js
                    </Link>
                    <Link
                      to="/services/shopify"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-secondary"
                    >
                      Shopify
                    </Link>
                    <Link
                      to="/services/wordpress"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-secondary"
                    >
                      WordPress
                    </Link>
                    <Link
                      to="/services/andriod-app"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-secondary"
                    >
                      Android App
                    </Link>
                    <Link
                      to="/services/static-website"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-secondary"
                    >
                      Static Website
                    </Link>
                    <Link
                      to="/services/email-invoices"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-secondary"
                    >
                      Email Invoices
                    </Link>
                    <Link
                      to="/services/ai"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-secondary"
                    >
                      AI
                    </Link>
                    <Link
                      to="/services/linux"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-secondary"
                    >
                      Linux
                    </Link>
                    <Link
                      to="/services/databases"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-secondary"
                    >
                      Databases
                    </Link>
                    <Link
                      to="/services/networking"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-secondary"
                    >
                      Networking
                    </Link>
                    <Link
                      to="/services/cloud-computing"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-secondary"
                    >
                      Cloud Computing
                    </Link>
                    <Link
                      to="/services/cyber-security"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-secondary"
                    >
                      Cyber Security
                    </Link>
                    <Link
                      to="/services/data-structure-algorithm"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-secondary"
                    >
                      Data Structure & Algorithm
                    </Link>
                    <Link
                      to="/services/custom-programs"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-secondary"
                    >
                      Custom Programs
                    </Link>
                    <Link
                      to="/services/final-year-project"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-secondary"
                    >
                      Final Year Project
                    </Link>
                    <Link
                      to="/services/project-management"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-secondary"
                    >
                      Project Management
                    </Link>
                    <Link
                      to="/services/thesis"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-secondary"
                    >
                      Thesis
                    </Link>
                    <Link
                      to="/services/assignments"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-secondary"
                    >
                      Assignments
                    </Link>
                    <Link
                      to="/services/proof-reading"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-secondary"
                    >
                      Proof Reading
                    </Link>
                    <Link
                      to="/services/research-paper"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-secondary"
                    >
                      Research Paper
                    </Link>
                  </div>
                )}
              </div>
              <Link
                to="/need-help"
                className="mr-5 text-primary font-semibold transition"
              >
                Need Help?
              </Link>
              <Link
                to="/feedback"
                className="mr-5 text-primary font-semibold transition"
              >
                Feedbacks
              </Link>
              <Link
                to="/terms&conditions"
                className="mr-5 text-primary font-semibold transition"
              >
                Terms and Conditions
              </Link>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default memo(Topbar);
