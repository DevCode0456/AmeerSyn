import Images from "../../Helper/ImagesConstant";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Feedbacks = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("feedbacks"));
    if (storedData && storedData.length > 0) {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    const updatedFeedbacks = [...feedbacks, formData];

    localStorage.setItem("feedbacks", JSON.stringify(updatedFeedbacks));

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const [isFlipped, setIsFlipped] = useState(false);

  const toggleSections = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div className="relative max-w-4xl w-full mx-auto overflow-hidden my-5">


<div className="flex justify-center items-center p-3 bg-container   rounded-3xl">
<img src={Images.FEEDBACK_IMG} alt="terms&conditions" className={"  rounded mx-auto"} />

      </div>
      <h1 className="font-semibold text-4xl text-center my-3 text-primary">
        Feedback
      </h1>
      <p className="font-medium text-sm text-center my-3">
        We love to hear your comments about us!
      </p>
      <div
        className={`flex w-full rounded-3xl shadow-lg border-secondary border-2 p-2 bg-container transform transition-transform duration-700 ease-in-out ${
          isFlipped ? "flex-row-reverse translate-x-0" : "flex-row translate-x-0"
        }`}
      >
        <div
          className={`flex flex-col justify-center items-center bg-primary text-secondary overflow-hidden p-10 flex-1 transition-all duration-700 ease-in-out ${
            isFlipped
              ? "rounded-tr-3xl md:rounded-tr-3xl md:rounded-br-3xl"
              : "rounded-tl-3xl md:rounded-tl-3xl md:rounded-bl-3xl"
          }`}
        >
          <h1 className="text-4xl font-bold text-center mb-4 text-white">
            We Value Your Feedback!
          </h1>
          <p className="text-center text-lg mb-6">
            Your thoughts help us improve our services and make your experience
            better. We want to hear from you!
          </p>
          <button
            onClick={toggleSections}
            className=" text-center flex justify-center items-center w-20 h-20   bg-secondary text-white border-primary border-2 font-bold rounded-full shadow-lg transition duration-300 "
          >
            {isFlipped ? <FaArrowLeft size={30} /> : <FaArrowRight size={30} />}
          </button>
        </div>

        <div
          className={`flex-1 overflow-hidden bg-secondary p-10 transition-all duration-700 ease-in-out border-gray-300 ${
            isFlipped
              ? "rounded-tl-3xl md:rounded-tl-3xl md:rounded-bl-3xl"
              : "rounded-tr-3xl md:rounded-tr-3xl md:rounded-br-3xl"
          }`}
        >
          <div className="text-center mb-4">
            <img
              alt="Logo"
              src={Images.LOGO_IMG}
              className="shadow-md bg-primary w-full h-24 rounded-3xl mx-auto"
            />
          </div>
          <form
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">Your Name</label>
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="border border-gray-300 rounded-lg p-3"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">Your Email</label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="border border-gray-300 rounded-lg p-3"
              />
            </div>
            <div className="sm:col-span-2 flex flex-col">
              <label className="text-gray-700 font-medium mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject of your query"
                className="border border-gray-300 rounded-lg p-3"
              />
            </div>
            <div className="sm:col-span-2 flex flex-col">
              <label className="text-gray-700 font-medium mb-2">Your Message</label>
              <textarea
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your issue or query"
                className="border border-gray-300 rounded-lg p-3"
              ></textarea>
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="bg-button text-white py-3 px-6 rounded-lg "
              >
                Submit Feedback
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Feedbacks;
