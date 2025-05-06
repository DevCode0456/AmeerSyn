import React, { memo, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";
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
      await emailjs.send(serviceID, welcomeTemplateID, {
        name: values.name,
        email: values.email,
      }, publicKey);

      await emailjs.send(serviceID, ownerTemplateID, {
        name: values.name,
        email: values.email,
        message: values.message,
      }, publicKey);

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
      name: Yup.string()
        .required("Name is required")
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name must be at most 50 characters"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string()
        .required("Message is required")
        .min(10, "Message must be at least 10 characters"),
    }),
    onSubmit: async (values, { resetForm }) => {
      await sendContactEmail(values);
      resetForm();
    },
  });

  return (
    <div className="w-full max-w-lg mx-auto p-4" style={{ perspective: "1200px" }}>
      <motion.div
        initial={{ rotateY: 0 }}
        animate={{ rotateY: isHovered ? -10 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="bg-white rounded-xl shadow-lg p-6 transform"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="text-center mb-6">
          <img
            alt="Logo"
            src={Images.LOGO_IMG}
            className="w-40 h-20 mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-primary mb-2">
            Contact Us
          </h1>
          <p className="text-sm text-gray-600">
            We’d love to hear from you! Fill out the form and we’ll get back to you.
          </p>
        </div>

        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-1 text-primary">
              Name
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-primary" />
              <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                placeholder="Your name"
                className="w-full pl-10 pr-3 py-2 border border-primary rounded-md outline-none"
              />
            </div>
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-600 text-xs mt-1">{formik.errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-1 text-primary">
              Email
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-primary" />
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                placeholder="Your email"
                className="w-full pl-10 pr-3 py-2 border border-primary rounded-md outline-none"
              />
            </div>
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-600 text-xs mt-1">{formik.errors.email}</p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-1 text-primary">
              Message
            </label>
            <div className="relative">
              <FaCommentDots className="absolute left-3 top-3 text-primary" />
              <textarea
                id="message"
                name="message"
                rows={4}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                placeholder="Your message"
                className="w-full pl-10 pr-3 py-2 border border-primary rounded-md outline-none"
              />
            </div>
            {formik.touched.message && formik.errors.message && (
              <p className="text-red-600 text-xs mt-1">{formik.errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-primary text-white font-bold rounded-md hover:bg-primary-dark transition"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default memo(ContactFormContent);
