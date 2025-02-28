import React from "react";
import { motion } from "framer-motion";
import { FiCheck, FiUser, FiTrendingUp, FiFlag, FiClock, FiLifeBuoy } from "react-icons/fi";
import { FaAward, FaHandsHelping, FaRocket, FaQuoteLeft } from "react-icons/fa";
import { BsShieldLock } from "react-icons/bs";
import WhyChooseUsSection from "../../Shared/PagesSectionComponents/WhyChooseUsSection";
import ContactUsSection from "../../Shared/ContactUsSection";

const reasons = [
  {
    icon: <FaAward size={32} />,
    title: "Proven Expertise",
    description: "With years of experience, we bring excellence to every project.",
  },
  {
    icon: <FiUser size={32} />,
    title: "Client-Centric Approach",
    description: "We tailor our solutions to fit your needs, ensuring satisfaction.",
  },
  {
    icon: <FiTrendingUp size={32} />,
    title: "Future-Ready Solutions",
    description: "We utilize the latest technologies to give your business an edge.",
  },
  {
    icon: <FiFlag size={32} />,
    title: "Commitment to Quality",
    description: "Our quality standards guarantee top-notch results every time.",
  },
  {
    icon: <FiClock size={32} />,
    title: "Timely Delivery",
    description: "We value your time and ensure projects are completed on schedule.",
  },
  {
    icon: <FiLifeBuoy size={32} />,
    title: "Dedicated Support",
    description: "From start to finish, we’re here to support your journey.",
  },
];

const testimonials = [
  {
    quote: "AmeerSync transformed our business with their cutting-edge solutions!",
    author: "John Doe",
    company: "TechCorp",
  },
  {
    quote: "Their customer support is unmatched. Highly recommend!",
    author: "Jane Smith",
    company: "Web Solutions",
  },
];

const companies = ["Google", "Microsoft", "Amazon", "Meta", "Netflix"];

const WhyChooseUs = () => {
  return (
    <div className="bg-container  m-0 p-0">
      {/* Hero Section */}
  <WhyChooseUsSection reasons={reasons}   />

      {/* Client Testimonials Section */}
      <div className="bg-gradient-to-b from-secondary to-container text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl text-primary font-bold">What Our Clients Say</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white text-gray-900 p-6 rounded-3xl shadow-lg"
              >
                <div className="flex items-center">
                  <FaQuoteLeft className="text-primary text-2xl mr-3" />
                  <p className="text-lg">{testimonial.quote}</p>
                </div>
                <p className="mt-4 text-blue-600 font-semibold">{testimonial.author}</p>
                <p className="text-sm">{testimonial.company}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>



      <ContactUsSection />
    </div>
  );
};

export default WhyChooseUs;
