import React, { useState, memo } from "react";
import Images from "../../../Helper/ImagesConstant";
import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";
import { motion } from "framer-motion";

const ContactFormContent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobileFlipped, setIsMobileFlipped] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };

  const toggleSections = () => {
    setIsFlipped((prev) => !prev);
  };

  const toggleMobileSections = () => {
    setIsMobileFlipped((prev) => !prev);
  };

  return (
    <div className="relative w-full mx-auto p-4 overflow-hidden flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`flex flex-col md:flex-row w-full max-w-7xl rounded-3xl shadow-lg border-2 border-secondary p-2 bg-secondary transform transition-transform duration-700 ease-in-out ${
          isFlipped ? "md:flex-row-reverse" : ""
        } ${isMobileFlipped ? "flex-col-reverse" : ""}`}
      >
        {/* Left Section */}
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className={`flex flex-col justify-center items-center bg-primary  text-secondary  overflow-hidden p-6 flex-1 transition-all duration-700 ease-in-out ${
            isFlipped
              ? "rounded-tr-3xl md:rounded-tr-3xl md:rounded-br-3xl"
              : "rounded-tl-3xl md:rounded-tl-3xl md:rounded-bl-3xl"
          }`}
        >
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Welcome Back!
          </h1>
          <p className="text-center text-base md:text-lg">
            Leave your feedback, queries, or contact us for support. We're here
            to help!
          </p>
          <button
            onClick={toggleSections}
            className="mt-4 p-3 bg-secondary text-primary border-primary border-2 font-bold rounded-full shadow-lg transition duration-300 flex items-center justify-center gap-2 hidden md:flex"
          >
            {isFlipped ? <FaArrowLeft size={24} /> : <FaArrowRight size={24} />}
          </button>
          <button
            onClick={toggleMobileSections}
            className="mt-4 p-3 bg-secondary text-primary border-primary border-2 font-bold rounded-full shadow-lg transition duration-300 flex items-center justify-center gap-2 md:hidden"
          >
            {isMobileFlipped ? (
              <FaArrowUp size={24} />
            ) : (
              <FaArrowDown size={24} />
            )}
          </button>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className={`flex-1 overflow-hidden bg-secondary p-6 transition-all duration-700 ease-in-out border-gray-300 ${
            isFlipped
              ? "rounded-tl-3xl md:rounded-tl-3xl md:rounded-bl-3xl"
              : "rounded-tr-3xl md:rounded-tr-3xl md:rounded-br-3xl"
          }`}
        >
          {/* Logo */}
          <div className="text-center mb-4">
            <img
              alt="Logo"
              src={Images.LOGO_IMG}
              className="shadow-md bg-primary w-80 h-32 rounded-3xl mx-auto"
            />
          </div>

          {/* Form */}
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Write your message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="mt-4 py-3 bg-primary text-secondary border-secondary border-2 font-bold rounded-lg shadow-lg transition duration-300 flex items-center justify-center gap-2"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default memo(ContactFormContent);
