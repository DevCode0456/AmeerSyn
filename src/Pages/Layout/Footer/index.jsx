import React from "react";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import Images from "../../../Helper/ImagesConstant";

const Footer = () => {
  return (
    <footer className=" bg-gradient-to-b from-primary  to-black  text-secondary hover:text-text py-5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Intro */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img
                src={Images.LOGO_IMG}
                className="h-40 w-72 object-contain"
                alt="Company Logo"
              />
            </Link>
            <p className="text-secondary text-sm">
              Providing top-notch services in web development, AI, and
              cybersecurity.
            </p>
          </div>

          {/* Services by Category */}
          <div>
            <h2 className="mb-4 text-lg font-semibold uppercase border-b pb-2 text-secondary">
              Development Services
            </h2>
            <ul className="text-secondary space-y-2">
              <li>
                <Link to="/services/node.js" className=" hover:text-text">
                  Node.js
                </Link>
              </li>
              <li>
                <Link to="/services/shopify" className=" hover:text-text">
                  Shopify
                </Link>
              </li>
              <li>
                <Link to="/services/react.js" className=" hover:text-text">
                  React.js
                </Link>
              </li>
              <li>
                <Link to="/services/wordpress" className=" hover:text-text">
                  WordPress
                </Link>
              </li>
              <li>
                <Link
                  to="/services/static-website"
                  className=" hover:text-text"
                >
                  Static Websites
                </Link>
              </li>
              <li>
                <Link
                  to="/services/web-development"
                  className=" hover:text-text"
                >
                  Web Development
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold uppercase border-b pb-2 text-secondary">
              IT & Security
            </h2>
            <ul className="text-secondary space-y-2">
              <li>
                <Link to="/services/linux" className=" hover:text-text">
                  Linux
                </Link>
              </li>
              <li>
                <Link to="/services/databases" className=" hover:text-text">
                  Databases
                </Link>
              </li>
              <li>
                <Link to="/services/networking" className=" hover:text-text">
                  Networking
                </Link>
              </li>
              <li>
                <Link
                  to="/services/cyber-security"
                  className=" hover:text-text"
                >
                  Cyber Security
                </Link>
              </li>
              <li>
                <Link
                  to="/services/cloud-computing"
                  className=" hover:text-text"
                >
                  Cloud Computing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold uppercase border-b pb-2 text-secondary">
              Academic Services
            </h2>
            <ul className="text-secondary space-y-2">
             
              <li>
                <Link to="/services/assignments" className=" hover:text-text">
                  Assignments
                </Link>
              </li>
              <li>
                <Link to="/services/thesis" className=" hover:text-text">
                  Thesis Writing
                </Link>
              </li>
              <li>
                <Link to="/services/proof-reading" className=" hover:text-text">
                  Proof Reading
                </Link>
              </li>
              <li>
                <Link
                  to="/services/research-paper"
                  className=" hover:text-text"
                >
                  Research Papers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-8 text-secondary">
          <div>
            <h2 className="mb-4 text-lg font-semibold uppercase border-b pb-2 text-secondary">
              Company
            </h2>
            <ul className="text-secondary space-y-2">
              <li>
                <Link to="/about-us" className=" hover:text-text">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className=" hover:text-text">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/projects" className=" hover:text-text">
                  {" "}
                  Our Projects
                </Link>
              </li>

              <li>
                <Link to="/why-choose-us" className=" hover:text-text">
                  Why Choose Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold uppercase border-b pb-2 text-secondary">
              Legal
            </h2>
            <ul className="text-secondary space-y-2">
              <li>
                <Link
                  to="/need-help"
                  className="text-secondary  hover:text-text"
                >
                  Need Help?
                </Link>
              </li>
           
              <li>
                <Link
                  to="/privacy-policy"
                  className=" text-secondary  hover:text-text"
                >
                  Privacy & Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms&conditions"
                  className=" text-secondary  hover:text-text"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-secondary my-6"></div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <p className="text-secondary text-sm">
          © 2024 AmeerSync. All rights reserved.
        </p>

        <div className="flex space-x-4 mt-4  md:mt-0">
          {[
            { icon: <FaFacebook />, url: "https://facebook.com" },

            { icon: <FaLinkedinIn />, url: "https://linkedin.com" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-secondary rounded-full text-secondary  hover:text-text hover:border-primary transition duration-300"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
