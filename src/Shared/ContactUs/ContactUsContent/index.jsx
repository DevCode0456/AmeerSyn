import React, { memo, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { MdMessage } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";
import Images from "../../../Helper/ImagesConstant";
import Toaster from "../../Toaster";

const ContactFormContent = () => {
  const [isHovered, setIsHovered] = useState(false);

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
    initialValues: { name: "", email: "", message: "" },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required").min(2).max(50),
      email: Yup.string().email("Invalid email").required("Email is required"),
      message: Yup.string().required("Message is required").min(10),
    }),
    onSubmit: async (values, { resetForm }) => {
      await sendContactEmail(values);
      resetForm();
    },
  });

  return (
    <div className="w-full h-full flex items-center justify-center bg-Bg sm:p-3 md:p-6">
      <motion.div
        className="relative bg-white rounded-3xl shadow-2xl sm:p-4 md:p-8 max-w-5xl w-full flex flex-col md:flex-row overflow-hidden"
        initial={{ rotateY: 0 }}
        animate={{ rotateY: isHovered ? -5 : 0 }}
        transition={{ duration: 0.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left Sidebar */}
        <div className="md:w-1/3 bg-primary text-white p-6 rounded-2xl flex flex-col justify-between shadow-lg">
          <img src={Images.LOGO_IMG} alt="" />

          <div>
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="text-sm">
              We’re here to help! Reach out via the form.
            </p>
          </div>

          <div className="mt-8 space-y-2">
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <div className="mt-8 space-y-2">
  <h2 className="text-2xl font-bold mb-4">Quick Links</h2>

  <Link
    to="/about-us"
    className="block w-full text-left px-4 py-2 bg-white text-primary rounded-3xl font-semibold hover:bg-orange-100 transition"
  >
    About Us
  </Link>

  <Link
    to="/portfolio"
    className="block w-full text-left px-4 py-2 bg-white text-primary rounded-3xl font-semibold hover:bg-orange-100 transition"
  >
    Portfolio
  </Link>

  <Link
    to="/need-help"
    className="block w-full text-left px-4 py-2 bg-white text-primary rounded-3xl font-semibold hover:bg-orange-100 transition"
  >
    Need Help ?
  </Link>

  <Link
    to="/privacy-policy"
    className="block w-full text-left px-4 py-2 bg-white text-primary rounded-3xl font-semibold hover:bg-orange-100 transition"
  >
    Privacy Policy
  </Link>

  <Link
    to="/terms&conditions"
    className="block w-full text-left px-4 py-2 bg-white text-primary rounded-3xl font-semibold hover:bg-orange-100 transition"
  >
    Terms & Conditions
  </Link>
</div>

          </div>
        </div>

        {/* Main Form */}
        <div className="md:w-2/3 bg-[#0b131f] text-white p-8 rounded-2xl ml-0 md:ml-6">
          <h1 className="text-3xl font-bold mb-4 text-center text-Heading">
            Contact Us
          </h1>
          <p className="text-sm text-white mb-6 text-center">
            Fill the form below and we will get back to you.
          </p>
          <form className="space-y-4" onSubmit={formik.handleSubmit}>
            {/* Name Field */}
            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className="w-full bg-white text-black pl-12 pr-4 py-3 rounded-xl border-2 border-Heading focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {formik.errors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="w-full bg-white text-black pl-12 pr-4 py-3 rounded-xl border-2 border-Heading focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {formik.errors.email}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div className="relative">
              <MdMessage className="absolute left-4 top-5 text-primary" />
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Your message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                className="w-full bg-white text-black pl-12 pr-4 py-3 rounded-xl border-2 border-Heading focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {formik.touched.message && formik.errors.message && (
                <p className="text-red-500 text-xs mt-1">
                  {formik.errors.message}
                </p>
              )}
            </div>
            <div className="flex items-center justify-center gap-3 text-white">
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
                <FaLinkedinIn size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 hover:scale-110 transition-transform"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 hover:scale-110 transition-transform"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-button text-white font-bold py-3 rounded-xl transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Floating Tabs (right side) */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 space-y-4">
          <div className="bg-[#3b82f6] text-white px-3 py-1 rounded-l-lg shadow-md cursor-pointer rotate-12">
            Ameer
          </div>
          <div className="bg-[#ff7f50] text-white px-3 py-1 rounded-l-lg shadow-md cursor-pointer -rotate-12">
            Sync
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default memo(ContactFormContent);
