import React, { useState, useEffect, memo } from 'react';
import { FaFileAlt, FaUserEdit, FaRegMoneyBillAlt, FaComments } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AssignmentCard from './AssignmentCard';
import HeroSection from './HeroSection';
import ServicesCard from './ServicesCard';
import Testimonials from './Testimonials';
import Accordin from './Accordin';
import { Carousel } from 'react-responsive-carousel';
import Images from './ImagesConstant';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Fake data for assignments, services, and testimonials
const assignments = [
  { id: 1, title: 'Research Paper on Data Structures', description: 'A detailed research paper on Data Structures and Algorithms.', price: 100 },
  { id: 2, title: 'Android App Development Guide', description: 'Complete guide and implementation of Android App development.', price: 120 },
  { id: 3, title: 'AI in Healthcare Systems', description: 'Research paper on AI applications in the healthcare sector.', price: 150 },
  { id: 4, title: 'E-commerce Website Development', description: 'Assignment on building a responsive e-commerce website using React and Node.js.', price: 130 }
];

const services = [
  {
    icon: <FaFileAlt size={100} className="mt-6" />,
    title: 'Custom Assignment Writing',
    description: 'We write customized assignments as per the requirements, ensuring top-notch quality and originality.',
  },
  {
    icon: <FaUserEdit size={100} className="mt-6" />,
    title: 'Plagiarism-Free Work',
    description: 'We ensure that every assignment is 100% plagiarism-free with proper citations and references.',
  },
  {
    icon: <FaRegMoneyBillAlt size={100} className="mt-6" />,
    title: 'Affordable Pricing',
    description: 'Our pricing is competitive and designed to offer you high-quality assignments without breaking your budget.',
  },
  {
    icon: <FaComments size={100} className="mt-6" />,
    title: '24/7 Customer Support',
    description: 'Our customer support team is available 24/7 to help you with any issues related to your assignments.',
  }
];

const testimonialsData = [
  {
    text: 'The assignment I received was well-written and highly detailed. It was exactly what I needed. Great service!',
    name: 'John Doe',
    role: 'Engineering Student',
    image: 'https://via.placeholder.com/150'
  },
  {
    text: 'They delivered my project ahead of the deadline and provided quality work. Highly recommend!',
    name: 'Sarah Smith',
    role: 'Medical Student',
    image: 'https://via.placeholder.com/150'
  },
  {
    text: 'I have ordered multiple assignments from them, and they have always been professional and prompt.',
    name: 'Emily Clark',
    role: 'Business Administration Student',
    image: 'https://via.placeholder.com/150'
  }
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
  }
];

// Assignment Writing Platform Component
const AssignmentWriting = () => {
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  useEffect(() => {
    // Fetch assignments from API or database if needed
  }, []);

  const handleSelectAssignment = (assignment) => {
    setSelectedAssignment(assignment);
  };

  const handleButtonClick = () => {
    alert("Get Started with Your Assignment Order Now!");
  };

  return (
    <div className="assignment-writing-platform w-full bg-gray-100">
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

      {/* Assignment Cards Section */}
      <motion.div
        className="my-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center text-3xl font-bold mb-6">Our Popular Assignments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {assignments.map((assignment) => (
            <AssignmentCard
              key={assignment.id}
              assignment={assignment}
              onClick={() => handleSelectAssignment(assignment)}
            />
          ))}
        </div>
      </motion.div>

      {/* Services Section */}
      <motion.div
        className="my-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center text-3xl font-bold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServicesCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        className="my-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center text-3xl font-bold mb-6">What Our Clients Say</h2>
        <div className="flex justify-center">
          <Carousel showThumbs={false}>
            {testimonialsData.map((testimonial, index) => (
              <div key={index}>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-full w-24 h-24 mx-auto"
                />
                <p className="legend text-center mt-4 text-lg">{testimonial.text}</p>
                <p className="text-center text-sm font-semibold">{testimonial.name}</p>
                <p className="text-center text-xs text-gray-500">{testimonial.role}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        className="my-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <Accordin faqs={faqs} />
      </motion.div>

      {/* Contact Section */}
      <motion.div
        className="my-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center text-3xl font-bold mb-6">Get in Touch</h2>
        <div className="flex justify-center">
          <Link
            to="/contact"
            className="bg-blue-500 text-white py-2 px-6 rounded-full"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default memo(AssignmentWriting);
