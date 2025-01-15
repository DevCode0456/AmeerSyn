import { FiMenu, FiX } from "react-icons/fi"; 
import React, { memo, useState } from "react";
import Images from "../../../Helper/ImagesConstant";

const Topbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div>
      <header className="text-gray-600 body-font bg-white shadow">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-2">
          <a
            className="flex title-font font-medium items-cente  md:mb-0"
            href="#"
          >
            <img
              alt="logo"
              src={Images.LOGO_IMG}
              className="w-25 h-14 rounded-full flex-shrink-0 object-cover object-center"
            />
          </a>

          <nav className="hidden lg:flex flex-wrap items-center text-base justify-center">
            <a href="#" className="mr-5 text-primary font-semibold transition">
              Portfolio
            </a>
          
            <a href="#" className="mr-5 text-primary font-semibold transition">
            Need Help?
            </a>
            <a href="#" className="mr-5 text-primary font-semibold transition">
            FeedBacks
            </a>
            <a href="#" className="mr-5 text-primary font-semibold transition">
            Terms and Conditions
            </a>
          </nav>

          <button className="px-4 py-2 text-secondary bg-primary border rounded-lg shadow-md hover:shadow-lg transition">
            Get Started
          </button>

          <div className="block lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <FiX className="w-6 h-6 text-primary" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden">
            <nav className="flex flex-col items-start space-y-2 p-4 bg-gray-100 rounded-lg">
              <a
                href="#"
                className="mr-5 text-primary font-semibold transition"
              >
                Portfolio
              </a>
              <a href="#" className="mr-5 text-primary font-semibold transition">
            Need Help?
            </a>
            <a href="#" className="mr-5 text-primary font-semibold transition">
            FeedBacks
            </a>
              <a
                href="#"
                className="mr-5 text-primary font-semibold transition"
              >
                 Terms and Conditions
              </a>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default memo(Topbar);
