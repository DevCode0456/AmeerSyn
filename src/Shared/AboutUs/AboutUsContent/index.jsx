import React from "react";
import "../../../index.css";
import FlipCard from "../../FlipCard";
import { motion } from "framer-motion";
import FeedbackSection from "../../Testimonials";
import Images from "../../../Helper/ImagesConstant";
import ContactUsSection from "../../ContactUsSection";
import {
  FaWordpress,
  FaShopify,
  FaAndroid,
  FaTools,
  FaHandshake,
  FaUsers,
} from "react-icons/fa";
import Accordin from "../../Accordin";

const AboutUs = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We specialize in WordPress, Shopify, and Android app development, along with IT academic services such as research work, thesis writing, and final year projects.",
    },
    {
      question: "Do you provide custom WordPress and Shopify development?",
      answer:
        "Yes, we create custom themes, plugins, and eCommerce solutions tailored to your business needs.",
    },
    {
      question: "Can you help with final year projects and academic assignments?",
      answer:
        "Absolutely! We assist students with research work, thesis writing, and IT-related academic projects.",
    },
    {
      question: "What technologies do you use for development?",
      answer:
        "We work with WordPress, Shopify, React, Kotlin, Java, Firebase, and other modern tools to ensure high-quality solutions.",
    },
    {
      question: "How can I get in touch with you?",
      answer:
        "You can contact us via WhatsApp at +923047914358 or email at ameerhamzabscs02@gmail.com.",
    },
    {
      question: "Do you offer post-development support and maintenance?",
      answer:
        "Yes, we provide ongoing support and maintenance for websites, mobile apps, and IT solutions.",
    },
  ];
  
  const AboutOwner = () => {
    return (
      <div className="my-12">
        <div className="container mx-auto bg-container  rounded-2xl shadow-lg p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-section space-y-4">
              <h3 className="text-2xl font-bold text-primary ">
                Hi! I am Ameer Hamza, a professional WordPress, Shopify, and
                Android app developer.
              </h3>
              <p className="text-lg text-gray-600">
                I am an IT academic expert offering a range of services:
              </p>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-gray-800">
                  Contact me for:
                </h4>
                <p>Final Year Projects, Thesis, Research Work, Assignments</p>
                <p className="text-primary">
                  WhatsApp: <strong>+923047914358</strong>
                </p>
                <p className="text-primary">
                  Email: <strong>ameerhamzabscs02@gmail.com</strong>
                </p>
                <span className="text-gray-500">
                  For any questions or concerns
                </span>
                <div>
                  <button className="px-4 py-2 bg-button text-white rounded shadow">
                    Get Started Now
                  </button>
                </div>
              </div>
            </div>
            <div className="image-section relative flex justify-center items-center">
              <div className="relative">
                <img
                  alt="User Dummy"
                  src={Images.USER_DUMMY_IMG}
                  className="w-100 rounded-full border-4 shadow animate-fadeIn"
                />
                <div className="absolute w-24 h-24 bg-yellow-400 rounded-full top-4 left-4 animate-bounce"></div>
                <div className="absolute w-24 h-24 bg-blue-300 rounded-full bottom-4 right-4 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>

        <section className="services-section py-10 my-6  rounded-2xl">
          <div className="container mx-auto grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaTools size={100} />,
                title: "24/7 Support",
                description:
                  "Always here to assist you at any time of the day.",
              },
              {
                icon: <FaHandshake size={100} />,
                title: "Let's Work Together",
                description:
                  "Providing quality solutions for every IT challenge.",
              },
              {
                icon: <FaUsers size={100} />,
                title: "Team Work",
                description: "Collaborating with you for the best outcomes.",
              },
            ].map((service, index) => (
              <div className="" key={index}>
                <FlipCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  color="yellow-500"
                  textColor="white"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  };
  return (
    <div className=" py-12 px-6 sm:px-12 lg:px-24">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-primary mb-4">About Us</h1>
        <p className="text-lg text-text">
          We are a team of passionate professionals, dedicated to providing
          exceptional solutions in web development, mobile app development, and
          IT services. Our mission is to deliver high-quality work that empowers
          your digital presence.
        </p>
        <AboutOwner />
      </motion.div>

      <motion.div
        className="bg-primary text-secondary md:flex items-center justify-center gap-5 p-8 rounded-lg shadow-md text-center mb-12"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-center items-center p-3 bg-container rounded-3xl">
          <img src={Images.OUR_MISSION_IMG} alt="img" />
        </div>
        <div className="">
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            Our Mission
          </h2>
          <p className="text-secondary">
            Our mission is to enable businesses to thrive in the digital world
            by creating innovative, scalable, and secure digital solutions
            tailored to your needs.
          </p>
        </div>
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
          <h3 className="text-xl font-semibold text-primary mb-2">
            WordPress Development
          </h3>
          <p className="text-text mb-4">
            We create stunning, responsive WordPress websites that meet your
            business needs and deliver a flawless user experience.
          </p>
          <button className="px-4 py-2 bg-button text-white rounded-lg hover:bg-primary">
            Learn More
          </button>
        </div>

        {/* Service 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaShopify size={40} className="text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-primary mb-2">
            Shopify Development
          </h3>
          <p className="text-text mb-4">
            Build powerful and optimized Shopify stores to grow your e-commerce
            business with ease.
          </p>
          <button className="px-4 py-2 bg-button text-white rounded-lg hover:bg-primary">
            Learn More
          </button>
        </div>

        {/* Service 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FaAndroid size={40} className="text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-primary mb-2">
            Android App Development
          </h3>
          <p className="text-text mb-4">
            We create high-performance Android applications that provide a
            seamless user experience and exceptional functionality.
          </p>
          <button className="px-4 py-2 bg-button text-white rounded-lg hover:bg-primary">
            Learn More
          </button>
        </div>
      </motion.div>

      {/* Contact Section */}
      <ContactUsSection />

      {/* Testimonials Section */}
      <motion.div
        className="my-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center text-3xl font-bold mb-6">
          What Our Clients Say
        </h2>
        <div className="">
          <FeedbackSection />
        </div>
      </motion.div>
      <motion.div
        className="my-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Accordin faqs={faqs} />
      </motion.div>
    </div>
  );
};

export default AboutUs;
