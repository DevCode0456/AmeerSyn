import React, { useState, useEffect, memo } from "react";
import { motion } from "framer-motion";
import { FaFileAlt, FaUserEdit, FaRegMoneyBillAlt, FaComments, FaLaptopCode, FaDatabase, FaRobot, FaCloud } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import HeroSection from "../../../../HeroSection";
import ServicesSection from "../../../../PagesSectionComponents/ServicesSection";
import ProjectsSection from "../../../../PagesSectionComponents/ProjectsSection";
import TechnologiesSection from "../../../../PagesSectionComponents/TechnologiesSection";
import TestimonialsSection from "../../../../PagesSectionComponents/TestimonialsSection";
import WhyChooseUsSection from "../../../../PagesSectionComponents/WhyChooseUsSection";
import ContactUsSection from "../../../../ContactUsSection";
import Accordin from "../../../../Accordin";
import Images from "../../../../../Helper/ImagesConstant";

// Fake data for services, FAQs, technologies, and reasons
const services = [
  {
    icon: <FaFileAlt size={100} className="mt-6" />,
    title: "Custom Assignment Writing",
    description: "We write customized assignments as per the requirements, ensuring top-notch quality and originality.",
  },
  {
    icon: <FaUserEdit size={100} className="mt-6" />,
    title: "Plagiarism-Free Work",
    description: "We ensure that every assignment is 100% plagiarism-free with proper citations and references.",
  },
  {
    icon: <FaRegMoneyBillAlt size={100} className="mt-6" />,
    title: "Affordable Pricing",
    description: "Our pricing is competitive and designed to offer you high-quality assignments without breaking your budget.",
  },
  {
    icon: <FaComments size={100} className="mt-6" />,
    title: "24/7 Customer Support",
    description: "Our customer support team is available 24/7 to help you with any issues related to your assignments.",
  },
];

const technologies = [
  {
    icon: <FaLaptopCode size={100} className="text-blue-500" />,
    title: "Web Development",
    description: "We leverage modern web technologies to ensure fast, responsive, and secure assignment ordering platforms.",
  },
  {
    icon: <FaDatabase size={100} className="text-green-500" />,
    title: "Database Management",
    description: "Our platform uses advanced database solutions for secure handling and storage of student information.",
  },
  {
    icon: <FaRobot size={100} className="text-yellow-500" />,
    title: "AI-Powered Solutions",
    description: "AI tools help us ensure plagiarism-free work, automated grading, and personalized feedback for every assignment.",
  },
  {
    icon: <FaCloud size={100} className="text-gray-500" />,
    title: "Cloud Infrastructure",
    description: "We host our services on cloud platforms, ensuring scalability, data security, and high uptime.",
  },
];

const reasons = [
  {
    icon: <FaFileAlt />,
    title: "Custom-Tailored Solutions",
    description: "Every assignment is customized to meet your specific requirements, ensuring relevance and quality.",
  },
  {
    icon: <FaUserEdit />,
    title: "Expert Writers",
    description: "Our team of experts in various fields delivers assignments written with in-depth knowledge and attention to detail.",
  },
  {
    icon: <FaRegMoneyBillAlt />,
    title: "Affordable Pricing",
    description: "Get high-quality assignments at prices that fit your budget without compromising on quality.",
  },
  {
    icon: <FaComments />,
    title: "Customer-Centric Support",
    description: "Our dedicated support team is available around the clock to ensure a smooth experience from order to delivery.",
  },
];

const faqs = [
  {
    question: "How do I place an order?",
    answer: "Simply fill out the order form with your assignment requirements, and our team will get to work on it.",
  },
  {
    question: "What is your pricing structure?",
    answer: "We charge based on the complexity and length of the assignment. You can get an instant quote on the order form.",
  },
  {
    question: "How do I make the payment?",
    answer: "We accept payments via credit/debit cards, PayPal, and bank transfers. All transactions are secure.",
  },
  {
    question: "Can I get a revision?",
    answer: "Yes, we offer free revisions if the delivered work does not meet your initial requirements.",
  },
];

// Assignment Writing Platform Component
const AssignmentContent = () => {
  const handleButtonClick = () => {
    alert("Get Started with Your Assignment Order Now!");
  };

  return (
    <div className="assignment-writing-platform w-full bg-gray-100">
      {/* Hero Section */}
      <HeroSection
        icon={FaFileAlt}
        imageWidth="600px"
        imageHeight="400px"
        imageAlt="Assignment Writing"
        buttonText="Get Started"
        title="Expert Assignment Writing Services"
        onButtonClick={handleButtonClick}
        imageSrc={Images.ASSIGNMENT_IMG1}
        description="Need help with your assignments? We offer expert writing services for students across various fields."
        details="Get high-quality, plagiarism-free assignments written by professionals in your field. Affordable prices and timely delivery."
      />
      
      {/* Services Section */}
      <ServicesSection services={services} />
      
      {/* Technologies Section */}
      <TechnologiesSection technologies={technologies} />
      
      {/* Reasons to Choose Us Section */}
      <WhyChooseUsSection reasons={reasons} />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Us Section */}
      <ContactUsSection />

      {/* FAQ Accordion Section */}
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

export default memo(AssignmentContent);
