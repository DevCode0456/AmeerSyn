import React, { memo, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";

import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";
import Images from "../../../Helper/ImagesConstant";
import Toaster from "../../Toaster";

const ContactFormContent = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobileFlipped, setIsMobileFlipped] = useState(false);

  const sendContactEmail = async (values) => {
    const serviceID = "service_il8atkb";
    const welcomeTemplateID = "template_nflovc7";
    const ownerTemplateID = "template_ttmslno";
    const publicKey = "dIIrl8MNMYPxYlifX";

    try {
      await emailjs.send(
        serviceID,
        welcomeTemplateID,
        {
          name: values.name,
          email: values.email,
        },
        publicKey
      );

      await emailjs.send(
        serviceID,
        ownerTemplateID,
        {
          name: values.name,
          email: values.email,
          message: values.message,
        },
        publicKey
      );

      Toaster.success("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      Toaster.error("Failed to send email. Please try again later.");
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required").min(2, "name could be at least 2 characters!").max(50, "name could be at most 50 characters!"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string().required("Message is required").min(10, "message could be at least 10 characters!"),
    }),
    onSubmit: async (values, { resetForm }) => {
      await sendContactEmail(values);
      resetForm();
    },
  });

  const toggleSections = () => {
    setIsFlipped((prev) => !prev);
  };

  const toggleMobileSections = () => {
    setIsMobileFlipped((prev) => !prev);
  };

  return (
    <div className="relative w-full mx-auto p-4 overflow-hidden flex justify-center items-center ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`flex border-primary border-2 flex-col md:flex-row w-full max-w-7xl rounded-3xl shadow-lg  p-2 bg-secondary transform transition-transform duration-700 ease-in-out ${
          isFlipped ? "md:flex-row-reverse" : ""
        } ${isMobileFlipped ? "flex-col-reverse" : ""}`}
      >
        {/* Left Section */}
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className={`flex flex-col justify-center items-center bg-primary text-secondary overflow-hidden p-6 flex-1 transition-all duration-700 ease-in-out ${
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
            to help! Your message is sent in the form of email invoices. An
            email invoice is also sent to you from AmeerSync.
          </p>
          <button
            onClick={toggleSections}
            className="mt-4 p-3 bg-secondary text-primary border-primary border-2 font-bold rounded-full shadow-lg transition duration-300 flex items-center justify-center gap-2 sm:hidden md:flex"
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
          className={`flex-1 overflow-hidden bg-secondary p-6 transition-all duration-700 ease-in-out   ${
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

<form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
  {/* Name Field */}
  <div className="relative">
    <label htmlFor="name" className="block  text-primary mb-1 font-semibold">
      Name
    </label>
    <div className="relative">
      <FaUser size={20} className="absolute top-1/2 left-3 transform -translate-y-1/2 text-primary" />
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        placeholder="Enter your name"
        className="w-full pl-10 pr-4 py-3 border border-primary rounded-lg shadow-sm outline-0"
      />
    </div>
    {formik.touched.name && formik.errors.name && (
      <p className="text-red-600 text-xs mt-1">{formik.errors.name}</p>
    )}
  </div>

  {/* Email Field */}
  <div className="relative">
    <label htmlFor="email" className="block  text-primary mb-1 font-semibold">
      Email
    </label>
    <div className="relative">
      <FaEnvelope size={20} className="absolute top-1/2 left-3 transform -translate-y-1/2 text-primary" />
      <input
        id="email"
        type="email"
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        placeholder="Enter your email"
        className="w-full pl-10 pr-4 py-3 border border-primary rounded-lg shadow-sm outline-0"
      />
    </div>
    {formik.touched.email && formik.errors.email && (
      <p className="text-red-600 text-xs mt-1">{formik.errors.email}</p>
    )}
  </div>

  {/* Message Field */}
  <div className="relative">
    <label htmlFor="message" className="block  text-primary mb-1 font-semibold">
      Message
    </label>
    <div className="relative">
      <FaCommentDots size={20} className="absolute top-4 left-3 text-primary " />
      <textarea
        id="message"
        name="message"
        rows={4}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.message}
        placeholder="Write your message"
        className="w-full pl-10 pr-4 py-3 border border-primary outline-0 rounded-lg shadow-sm"
      />
    </div>
    {formik.touched.message && formik.errors.message && (
      <p className="text-red-600 text-xs mt-1">{formik.errors.message}</p>
    )}
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
