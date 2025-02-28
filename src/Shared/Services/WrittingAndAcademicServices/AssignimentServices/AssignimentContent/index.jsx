import React, { useState, useEffect, memo } from "react";
import { motion } from "framer-motion";
import {
  FaFileAlt,
  FaUserEdit,
  FaRegMoneyBillAlt,
  FaComments,
  FaLaptopCode,
  FaDatabase,
  FaRobot,
  FaCloud,
} from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import HeroSection from "../../../../HeroSection";
import ServicesSection from "../../../../PagesSectionComponents/ServicesSection";
import TechnologiesSection from "../../../../PagesSectionComponents/TechnologiesSection";
import TestimonialsSection from "../../../../PagesSectionComponents/TestimonialsSection";
import WhyChooseUsSection from "../../../../PagesSectionComponents/WhyChooseUsSection";
import ContactUsSection from "../../../../ContactUsSection";
import Accordin from "../../../../Accordin";
import Images from "../../../../../Helper/ImagesConstant";

const services = [
  {
    icon: <FaFileAlt size={100} className="mt-6" />,
    title: "Custom Assignment Writing",
    description:
      "We write customized assignments as per the requirements, ensuring top-notch quality and originality.",
  },

  {
    icon: <FaUserEdit size={100} className="mt-6" />,
    title: "Plagiarism-Free Work",
    description:
      "We ensure that every assignment is 100% plagiarism-free with proper citations and references.",
  },
  {
    icon: <FaRegMoneyBillAlt size={100} className="mt-6" />,
    title: "Affordable Pricing",
    description:
      "Our pricing is competitive and designed to offer you high-quality assignments without breaking your budget.",
  },
  {
    icon: <FaComments size={100} className="mt-6" />,
    title: "24/7 Customer Support",
    description:
      "Our customer support team is available 24/7 to help you with any issues related to your assignments.",
  },
];

const technologies = [
  {
    icon: <FaLaptopCode size={100} className="text-blue-500" />,
    title: "Web Development",
    description:
      "We leverage modern web technologies to ensure fast, responsive, and secure assignment ordering platforms.",
  },
  {
    icon: <FaDatabase size={100} className="text-green-500" />,
    title: "Database Management",
    description:
      "Our platform uses advanced database solutions for secure handling and storage of student information.",
  },
  {
    icon: <FaRobot size={100} className="text-yellow-500" />,
    title: "AI-Powered Solutions",
    description:
      "AI tools help us ensure plagiarism-free work, automated grading, and personalized feedback for every assignment.",
  },
  {
    icon: <FaCloud size={100} className="text-gray-500" />,
    title: "Cloud Infrastructure",
    description:
      "We host our services on cloud platforms, ensuring scalability, data security, and high uptime.",
  },
];
const testimonialsData = [
  {
    quote:
      "Completing assignments was tough, but AmeerSync provided clear, well-researched solutions that helped me understand the concepts better.",
    author: "Ryan Scott",
    company: "University Student",
  },
  {
    quote:
      "They helped me with my programming assignments, ensuring high-quality code and proper documentation.",
    author: "Sophia Kim",
    company: "CS Student",
  },
  {
    quote:
      "AmeerSync’s assistance in my finance assignments was outstanding. Their solutions were precise and well-explained.",
    author: "David Williams",
    company: "Business School",
  },
  {
    quote:
      "They delivered my statistics assignment on time with clear explanations. I scored an A!",
    author: "Ethan Lewis",
    company: "Data Analytics",
  },
  {
    quote:
      "Their research and writing support helped me complete my psychology assignment with great insights.",
    author: "Rachel Green",
    company: "Social Sciences",
  },
  {
    quote:
      "AmeerSync ensured my assignment was plagiarism-free and properly formatted. Highly recommended!",
    author: "Michael Carter",
    company: "Law School",
  },
  {
    quote:
      "They simplified complex engineering concepts, making my assignment easier to understand.",
    author: "Olivia Brown",
    company: "Engineering Department",
  },
  {
    quote:
      "AmeerSync’s academic support boosted my grades and improved my understanding of the subject.",
    author: "Nathan Scott",
    company: "Medical Student",
  },
  {
    quote:
      "Their 24/7 support helped me meet my tight assignment deadline stress-free.",
    author: "James Carter",
    company: "MBA Student",
  },
];

const reasons = [
  {
    icon: <FaFileAlt />,
    title: "Custom-Tailored Solutions",
    description:
      "Every assignment is customized to meet your specific requirements, ensuring relevance and quality.",
  },
  {
    icon: <FaUserEdit />,
    title: "Expert Writers",
    description:
      "Our team of experts in various fields delivers assignments written with in-depth knowledge and attention to detail.",
  },
  {
    icon: <FaRegMoneyBillAlt />,
    title: "Affordable Pricing",
    description:
      "Get high-quality assignments at prices that fit your budget without compromising on quality.",
  },
  {
    icon: <FaComments />,
    title: "Customer-Centric Support",
    description:
      "Our dedicated support team is available around the clock to ensure a smooth experience from order to delivery.",
  },
];

const faqs = [
  {
    question: "How do I place an order?",
    answer:
      "Simply fill out the order form with your assignment requirements, and our team will get to work on it.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "We charge based on the complexity and length of the assignment. You can get an instant quote on the order form.",
  },
  {
    question: "How do I make the payment?",
    answer:
      "We accept payments via credit/debit cards, PayPal, and bank transfers. All transactions are secure.",
  },
  {
    question: "Can I get a revision?",
    answer:
      "Yes, we offer free revisions if the delivered work does not meet your initial requirements.",
  },
];

const AssignmentContent = () => {
  const handleButtonClick = () => {
    alert("Get Started with Your Assignment Order Now!");
  };

  return (
    <div className="assignment-writing-platform w-full">     

      <motion.div
        className="mt-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
         <HeroSection
        icon={FaFileAlt}
        imageAlt="Assignment Writing"
        buttonText="Get Started"
        title="Expert Assignment Writing Services"
        onButtonClick={handleButtonClick}
        imageSrc={Images.ASSIGNMENT_WRITING_IMG}
        description="Need help with your assignments? We offer expert writing services for students across various fields."
        details="Get high-quality, plagiarism-free assignments written by professionals in your field. Affordable prices and timely delivery."
      />
      <ServicesSection services={services} />
      <TechnologiesSection technologies={technologies} />
      <WhyChooseUsSection reasons={reasons} />
        <Accordin faqs={faqs} />
      <ContactUsSection />
      <TestimonialsSection testimonials={testimonialsData} />
      </motion.div>
    </div>
  );
};

export default memo(AssignmentContent);
