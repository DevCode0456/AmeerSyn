import {
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import React, { useState } from "react";
import Images from "../../../Helper/ImagesConstant";

const Footer = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);

    if (tab === "Contact Us") {
      window.location.href = "/contact"; 
    } else {
      const sectionId = tab.toLowerCase().replace(/\s+/g, "-");
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <footer className="text-gray-600 body-font border-t w-full border-gray-200">
      <div className="container px-5 py-16 mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="w-64 text-center md:text-left mb-6 md:mb-0">
          <a
            href="#"
            className="flex items-center justify-center md:justify-start"
          >
  <img
              alt="logo"
              src={Images.LOGO_IMG}
              className="w-25 h-14 rounded-full flex-shrink-0 object-cover object-center"
            />          </a>
          <p className="mt-4 text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>

        <div className="py-6 flex flex-col md:ps-4  gap-8">
          <nav className="flex flex-col md:flex-row md:items-center  flex-wrap  space-y-6 md:space-y-0  md:space-x-5">
            {[     "Home",
              "About Us",
              "Our Team",
              "Services",
              "Projects",
              "Portfolio",
              "Feedbacks",
              "Why Choose Us",
              "Contact Us",,].map(
              (tab) => (
                <a
                  href="#"
                  key={tab}
                  className={`${
                    activeTab === tab
                      ? "text-[#0052DE] font-semibold  m-0 p-0"
                      : "text-gray-600 hover:text-[#0052DE] "
                  }`}
                  onClick={(e) => {
                    e.preventDefault(); 
                    handleTabClick(tab);
                  }}
                >
                  {tab}
                </a>
              )
            )}
          </nav>

          <div>
            <div className="md:flex  md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-full my-2  mr-4">
                <label
                  htmlFor="footer-field"
                  className="leading-7 text-sm text-gray-800 font-semibold"
                >
                  Your Email
                </label>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  placeholder="Enter your email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            <div className="md:inline-flex my-2 text-center mx-auto w-full md:w-auto  ">
            <button className=" text-white bg-indigo-500 border-0 py-2  px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Subscribe
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-4 px-5">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            AmeerSync © 2024. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com"
              className="p-2 border rounded-full text-gray-800 border-gray-500 hover:text-[#0052DE]"
            >
              <FaYoutube />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-gray-500 rounded-full text-gray-800 hover:text-[#0052DE]"
            >
              <FaTwitter />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com"
              className="p-2 border border-gray-500 rounded-full text-gray-800 hover:text-[#0052DE]"
            >
              <FaInstagram />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com"
              className="p-2 border border-gray-500 rounded-full text-gray-800 hover:text-[#0052DE]"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
