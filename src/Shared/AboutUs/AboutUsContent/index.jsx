import React from "react";
import { motion } from "framer-motion";
import { FaWordpress, FaShopify, FaAndroid } from "react-icons/fa";
import ContactUsSection from "../../ContactUsSection";      

const AboutUs = () => {
  return (
    <div className="theme-black-gold py-12 px-6 sm:px-12 lg:px-24">
      {/* Header Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-primary mb-4">About Us</h1>
        <p className="text-lg text-text">
          We are a team of passionate professionals, dedicated to providing exceptional solutions in web development, mobile app development, and IT services. Our mission is to deliver high-quality work that empowers your digital presence.
        </p>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        className="bg-primary text-secondary p-8 rounded-lg shadow-md text-center mb-12"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold text-secondary mb-4">Our Mission</h2>
        <p className="text-secondary">
          Our mission is to enable businesses to thrive in the digital world by creating innovative, scalable, and secure digital solutions tailored to your needs.
        </p>
      </motion.div>

      {/* Our Services Section */}
      <motion.div
        className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Service 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaWordpress size={40} className="text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-primary mb-2">WordPress Development</h3>
          <p className="text-text mb-4">We create stunning, responsive WordPress websites that meet your business needs and deliver a flawless user experience.</p>
          <button className="px-4 py-2 bg-button text-white rounded-lg hover:bg-primary">
            Learn More
          </button>
        </div>

        {/* Service 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaShopify size={40} className="text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-primary mb-2">Shopify Development</h3>
          <p className="text-text mb-4">Build powerful and optimized Shopify stores to grow your e-commerce business with ease.</p>
          <button className="px-4 py-2 bg-button text-white rounded-lg hover:bg-primary">
            Learn More
          </button>
        </div>

        {/* Service 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaAndroid size={40} className="text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-primary mb-2">Android App Development</h3>
          <p className="text-text mb-4">We create high-performance Android applications that provide a seamless user experience and exceptional functionality.</p>
          <button className="px-4 py-2 bg-button text-white rounded-lg hover:bg-primary">
            Learn More
          </button>
        </div>
      </motion.div>

      {/* Contact Section */}
      <ContactUsSection />

      {/* Testimonials Section */}
      <motion.div
        className="my-12"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center text-primary mb-6">What Our Clients Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic text-text mb-4">"The team exceeded our expectations, delivering a stunning website that helped us grow our online presence."</p>
            <p className="font-bold text-primary">- John Smith, CEO</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic text-text mb-4">"We are thrilled with the Shopify store they developed for us. It’s intuitive and optimized for conversions."</p>
            <p className="font-bold text-primary">- Jane Doe, Entrepreneur</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic text-text mb-4">"The Android app they built was exactly what we needed. It’s fast, responsive, and user-friendly."</p>
            <p className="font-bold text-primary">- Sarah Lee, Business Owner</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
