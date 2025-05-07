import React from "react";
import { FaLinkedinIn, FaFacebook, FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import Images from "../../../Helper/ImagesConstant";

const Footer = () => {
  return (
    <footer className="bg-black  hover:text-white py-5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Intro */}
          <div className="animate-fade-in">
            <Link to="/" className="flex items-center mb-4">
              <img
                src={Images.LOGO_IMG}
                className="h-40 w-72 object-contain"
                alt="Company Logo"
              />
            </Link>
            <p className="text-Heading text-sm animate-fade-in-text">
              Providing top-notch services in web development, AI, and
              cybersecurity.
            </p>
          </div>

          {/* Services by Category */}
          <div>
            <h2 className="mb-4 text-lg font-semibold uppercase border-b pb-2 text-Heading animate-fade-in-text">
              Development Services
            </h2>
            <ul className="text-white space-y-2">
              <li>
                <Link
                  to="/services/node.js"
                  className="hover:text-Heading hover:font-bold hover:border-b-2 hover:border-Heading transition-all animate-text-glide"
                >
                  Node.js
                </Link>
              </li>
              <li>
                <Link
                  to="/services/shopify"
                  className="hover:text-Heading hover:font-bold hover:border-b-2 hover:border-Heading transition-all animate-text-glide"
                >
                  Shopify
                </Link>
              </li>
              <li>
                <Link
                  to="/services/react.js"
                  className="hover:text-Heading hover:font-bold hover:border-b-2 hover:border-Heading transition-all animate-text-glide"
                >
                  React.js
                </Link>
              </li>
              <li>
                <Link
                  to="/services/wordpress"
                  className="hover:text-Heading hover:font-bold hover:border-b-2 hover:border-Heading transition-all animate-text-glide"
                >
                  WordPress
                </Link>
              </li>
              <li>
                <Link
                  to="/services/static-website"
                  className="hover:text-Heading hover:font-bold hover:border-b-2 hover:border-Heading transition-all animate-text-glide"
                >
                  Static Websites
                </Link>
              </li>
              <li>
                <Link
                  to="/services/web-development"
                  className="hover:text-Heading hover:font-bold hover:border-b-2 hover:border-Heading transition-all animate-text-glide"
                >
                  Web Development
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold uppercase border-b pb-2 text-Heading animate-fade-in-text">
              IT & Security
            </h2>
            <ul className="text-white space-y-2">
              <li>
                <Link
                  to="/services/linux"
                  className="hover:text-Heading hover:font-bold hover:border-b-2 hover:border-Heading transition-all animate-text-glide"
                >
                  Linux
                </Link>
              </li>
              <li>
                <Link
                  to="/services/databases"
                  className="hover:text-Heading hover:font-bold hover:border-b-2 hover:border-Heading transition-all animate-text-glide"
                >
                  Databases
                </Link>
              </li>
              <li>
                <Link
                  to="/services/networking"
                  className="hover:text-Heading hover:font-bold hover:border-b-2 hover:border-Heading transition-all animate-text-glide"
                >
                  Networking
                </Link>
              </li>
              <li>
                <Link
                  to="/services/cyber-security"
                  className="hover:text-Heading hover:font-bold hover:border-b-2 hover:border-Heading transition-all animate-text-glide"
                >
                  Cyber Security
                </Link>
              </li>
              <li>
                <Link
                  to="/services/cloud-computing"
                  className="hover:text-Heading hover:font-bold hover:border-b-2 hover:border-Heading transition-all animate-text-glide"
                >
                  Cloud Computing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold uppercase border-b pb-2 text-Heading animate-fade-in-text">
              Academic Services
            </h2>
            <ul className="text-white space-y-2">
              <li>
                <Link
                  to="/services/assignments"
                  className="hover:text-Heading hover:font-bold hover:border-b-2 hover:border-Heading transition-all animate-text-glide"
                >
                  Assignments
                </Link>
              </li>
              <li>
                <Link
                  to="/services/thesis"
                  className="hover:text-Heading hover:font-bold hover:border-b-2 hover:border-Heading transition-all animate-text-glide"
                >
                  Thesis Writing
                </Link>
              </li>
              <li>
                <Link
                  to="/services/proof-reading"
                  className="hover:text-Heading hover:font-bold hover:border-b-2 hover:border-Heading transition-all animate-text-glide"
                >
                  Proof Reading
                </Link>
              </li>
              <li>
                <Link
                  to="/services/research-paper"
                  className="hover:text-Heading hover:font-bold hover:border-b-2 hover:border-Heading transition-all animate-text-glide"
                >
                  Research Papers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-8 text-secondary">
          <div>
            <h2 className="mb-4 text-lg font-semibold uppercase border-b pb-2 text-Heading animate-fade-in-text">
              Company
            </h2>
            <ul className="text-white space-y-2">
              <li>
                <Link
                  to="/about-us"
                  className="hover:text-Heading hover:font-bold hover:border-b-2 hover:border-Heading transition-all animate-text-glide"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="hover:text-Heading hover:font-bold hover:border-b-2 hover:border-Heading transition-all animate-text-glide"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="hover:text-Heading hover:font-bold hover:border-b-2 hover:border-Heading transition-all animate-text-glide"
                >
                  Our Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/why-choose-us"
                  className="hover:text-Heading hover:font-bold hover:border-b-2 hover:border-Heading transition-all animate-text-glide"
                >
                  Why Choose Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold uppercase border-b pb-2 text-Heading animate-fade-in-text">
              Legal
            </h2>
            <ul className="text-white space-y-2">
              <li>
                <Link
                  to="/need-help"
                  className="hover:text-Heading hover:font-bold hover:border-b-2 hover:border-Heading transition-all animate-text-glide"
                >
                  Need Help?
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className=" hover:text-Heading hover:font-bold hover:border-b-2 hover:border-Heading transition-all animate-text-glide"
                >
                  Privacy & Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms&conditions"
                  className="hover:text-Heading hover:font-bold hover:border-b-2 hover:border-Heading transition-all animate-text-glide"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white my-6"></div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <p className="text-Heading font-semibold text-sm animate-fade-in-text">
          © 2024 AmeerSync. All rights reserved.
        </p>

        <div className="flex space-x-4 mt-4 items-center  md:mt-0">
        <a
                   href="https://facebook.com"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="hover:text-blue-500 hover:scale-110 transition-transform"
                 >
                   <FaFacebookF size={24} />
                 </a>
                 <a
                   href="https://linkedin.com"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="hover:text-blue-400 hover:scale-110 transition-transform"
                 >
                   <FaLinkedinIn size={24}  />
                 </a>
                 <a
                   href="https://instagram.com"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="hover:text-pink-500 hover:scale-110 transition-transform"
                 >
                   <FaInstagram size={24}  />
                 </a>
                 <a
                   href="https://whatsapp.com"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="hover:text-green-500 hover:scale-110 transition-transform"
                 >
                   <FaWhatsapp size={24}  />
                 </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
