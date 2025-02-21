import {
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaCloud,
  FaCodeBranch,
  FaShieldAlt,
  FaNetworkWired,
  FaLaptopCode,
  FaFire,
  FaCheckCircle,
  FaUserCheck,
  FaClock,
  FaHandshake,
  FaLightbulb
} from "react-icons/fa";
import React, { memo } from "react";
import { motion } from "framer-motion";
import Accordin from "../../../../Accordin";
import HeroSection from "../../../../HeroSection";

import Images from "../../../../../Helper/ImagesConstant";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ContactUsSection from "../../../../ContactUsSection";
import ServicesSection from "../../../../PagesSectionComponents/ServicesSection";
import TechnologiesSection from "../../../../PagesSectionComponents/TechnologiesSection";
import TestimonialsSection from "../../../../PagesSectionComponents/TestimonialsSection";
import ProjectsSection from "../../../../PagesSectionComponents/ProjectsSection";
import WhyChooseUsSection from "../../../../PagesSectionComponents/WhyChooseUsSection";

const NodeContent = () => {
  const projects = [
    {
      title: "Node.js Backend APIs",
      description: "Built scalable and efficient RESTful APIs using Node.js.",
      image: Images.NODE_DEV_IMG1,
    },
    {
      title: "Real-time Applications",
      description: "Developed real-time applications with WebSocket and Node.js.",
      image: Images.NODE_DEV_IMG2,
    },
    {
      title: "Microservices Architecture",
      description: "Implemented microservices using Node.js for modular and scalable solutions.",
      image: Images.NODE_DEV_IMG3,
    },
    {
      title: "Serverless Solutions",
      description: "Designed serverless applications with Node.js on cloud platforms.",
      image: Images.NODE_DEV_IMG4,
    },
  ];

  const services = [
    {
      icon: <FaNodeJs size={100} className="mt-6" />,
      title: "Custom Node.js Development",
      description: "Building high-performance Node.js solutions tailored to your needs.",
    },
    {
      icon: <FaCodeBranch size={100} className="mt-6" />,
      title: "API Development",
      description: "Creating RESTful APIs for seamless communication.",
    },
    {
      icon: <FaServer size={100} className="mt-6" />,
      title: "Backend Services",
      description: "Developing robust backend services with Node.js.",
    },
    {
      icon: <FaNetworkWired size={100} className="mt-6" />,
      title: "Database Management",
      description: "Integrating and optimizing databases with Node.js.",
    },
    {
      icon: <FaCloud size={100} className="mt-6" />,
      title: "Cloud Deployment",
      description: "Deploying Node.js applications to scalable cloud environments.",
    },
    {
      icon: <FaShieldAlt size={100} className="mt-6" />,
      title: "Security & Authentication",
      description: "Implementing robust security and authentication features.",
    },
  ];

  const testimonialsData = [
    {
      text: "Node.js services helped us build a scalable backend solution!",
      name: "Sophia Williams",
      role: "Tech Lead",
      image: "https://via.placeholder.com/150",
    },
    {
      text: "Their expertise in real-time apps is outstanding!",
      name: "David Taylor",
      role: "CTO",
      image: "https://via.placeholder.com/150",
    },
    {
      text: "The serverless architecture provided was exactly what we needed.",
      name: "Mason Green",
      role: "Founder",
      image: "https://via.placeholder.com/150",
    },
  ];

  const faqs = [
    {
      question: "Do you specialize in Node.js development?",
      answer: "Yes, we focus on creating efficient and scalable backend solutions with Node.js.",
    },
    {
      question: "Can you develop real-time applications with Node.js?",
      answer: "Absolutely, we have experience in building real-time solutions using Node.js and WebSocket.",
    },
    {
      question: "Do you offer API development services?",
      answer: "Yes, we design and develop RESTful APIs to integrate and enhance your applications.",
    },
    {
      question: "What types of Node.js projects have you completed?",
      answer: "From serverless solutions to real-time apps and backend services, we handle it all.",
    },
    {
      question: "Do you provide maintenance for Node.js applications?",
      answer: "Yes, we offer ongoing support and optimization for Node.js projects.",
    },
  ];

  const technologies = [
    {
      icon: <FaNodeJs size={100} />,
      title: "Node.js",
      description: "A powerful runtime for building server-side applications.",
    },
    {
      icon: <FaCodeBranch size={100} />,
      title: "Express.js",
      description: "Web framework for building APIs and server-side applications.",
    },
    {
      icon: <FaDatabase size={100} />,
      title: "MongoDB",
      description: "NoSQL database for storing and managing data.",
    },
    {
      icon: <FaLaptopCode size={100} />,
      title: "NestJS",
      description: "A modern framework for building scalable server-side applications.",
    },
    {
      icon: <FaFire size={100} />,
      title: "Socket.io",
      description: "Enabling real-time, bidirectional communication between web clients and servers.",
    },
    {
      icon: <FaNetworkWired size={100} />,
      title: "GraphQL",
      description: "A query language for APIs, optimizing data fetching.",
    },
  ];

  const reasons = [
    {
      icon: <FaCheckCircle />,
      title: "Expert Developers",
      description: "Experienced developers crafting efficient Node.js solutions.",
    },
    {
      icon: <FaUserCheck />,
      title: "Client Satisfaction",
      description: "We deliver projects that align with clients' goals and needs.",
    },
    {
      icon: <FaClock />,
      title: "Timely Delivery",
      description: "We meet deadlines and deliver high-quality Node.js applications.",
    },
    {
      icon: <FaHandshake />,
      title: "Collaborative Approach",
      description: "We work closely with clients to build the best solutions.",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovative Solutions",
      description: "We use the latest technologies to deliver cutting-edge Node.js applications.",
    },
  ];

  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="node-development-content w-100 bg-white">
      <HeroSection
        icon={FaNodeJs}
        imageWidth="600px"
        imageHeight="400px"
        imageAlt="Node.js Development Services"
        buttonText="Get Started"
        title="Node.js Development Services"
        onButtonClick={handleButtonClick}
        imageSrc={Images.NODE_IMG}
        description="Build scalable and high-performance applications with our expert Node.js development services."
        details={
          "Our Node.js development services provide solutions tailored to your business needs. Whether you need real-time apps, backend services, or scalable cloud solutions, we have the expertise to bring your ideas to life."
        }
      />
     <ServicesSection services={services} />
      <TechnologiesSection technologies={technologies} />
      <TestimonialsSection testimonials={testimonialsData} />
      <ProjectsSection projects={projects} />
      <ContactUsSection />
      <WhyChooseUsSection reasons={reasons	}/>
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

export default memo(NodeContent);
