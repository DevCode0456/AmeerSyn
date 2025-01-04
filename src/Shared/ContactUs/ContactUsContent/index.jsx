import React, { useState, memo } from "react";
import Images from "../../../Helper/ImagesConstant";

const ContactFormContent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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

  return (
    <div className="flex flex-col md:flex-row w-full overflow-hidden rounded-lg bg-gray-100 shadow-lg animate-fadeIn">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-center bg-primary rounded-lg text-white p-10 flex-1 animate-slideInLeft">
        <h1 className="text-3xl font-bold text-center mb-4">Welcome Back!</h1>
        <p className="text-center text-lg">
          Leave your feedback, queries, or contact us for support. We're here to help!
        </p>
      </div>

      {/* Right Section */}
      <div className="flex-1 bg-white p-10 animate-slideInRight border border-gray-300  ">
        {/* Logo */}
        <div className="text-center mb-4">
          <img
            alt="Logo"
            src={Images.LOGO_IMG}
            className="rounded-full shadow-lg border w-24 h-24 mx-auto"
          />
        </div>

        {/* Form */}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* Name Input */}
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

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Message Input */}
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

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 w-full py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default memo(ContactFormContent);
