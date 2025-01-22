import React, { useState, memo } from "react";
import Images from "../../../Helper/ImagesConstant";
import { FaArrowCircleLeft, FaArrowCircleRight, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ContactFormContent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isFlipped, setIsFlipped] = useState(false);

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

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <div
        className={`flex w-full rounded-3xl shadow-lg border-secondary border-2 p-2 bg-secondary transform transition-transform duration-700 ease-in-out ${
          isFlipped ? "flex-row-reverse translate-x-0" : "flex-row translate-x-0"
        }`}
      >
        {/* Left Section */}
        <div
          className={`flex flex-col justify-center items-center bg-primary text-secondary overflow-hidden p-10 flex-1 transition-all duration-700 ease-in-out ${
            isFlipped
              ? "rounded-tr-3xl md:rounded-tr-3xl md:rounded-br-3xl animate-flip"
              : "rounded-tl-3xl md:rounded-tl-3xl md:rounded-bl-3xl animate-flip"
          }`}
        >
          <h1 className="text-3xl font-bold text-center mb-4">Welcome Back!</h1>
          <p className="text-center text-lg">
            Leave your feedback, queries, or contact us for support. We're here to help!
          </p>

          <div>
          <button
            onClick={toggleSections}
            className="mt-4 w-full p-3 bg-secondary text-primary border-primary border-2 font-bold rounded-full shadow-lg transition duration-300 flex items-center justify-center gap-2"
          >
<span>{isFlipped ? <FaArrowLeft size={30} /> : <FaArrowRight  size={30}/>}</span>
</button>
          </div>
        </div>

        {/* Right Section */}
        <div
          className={`flex-1 overflow-hidden bg-secondary p-10 transition-all duration-700 ease-in-out border-gray-300 ${
            isFlipped
              ? "rounded-tl-3xl md:rounded-tl-3xl md:rounded-bl-3xl animate-flip"
              : "rounded-tr-3xl md:rounded-tr-3xl md:rounded-br-3xl animate-flip"
          }`}
        >
          {/* Logo */}
          <div className="text-center mb-4">
            <img
              alt="Logo"
              src={Images.LOGO_IMG}
              className="shadow-md bg-primary w-50 h-50 rounded-3xl mx-auto"
            />
          </div>

          {/* Form */}
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
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
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
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
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Write your message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="mt-4 w-full py-3 bg-primary text-secondary border-secondary border-2 font-bold rounded-lg shadow-lg transition duration-300 flex items-center justify-center gap-2"
            >
              <span>&larr;</span> Submit
            </button>
          </form>
       
        </div>
      </div>
    </div>
  );
};

export default memo(ContactFormContent);
