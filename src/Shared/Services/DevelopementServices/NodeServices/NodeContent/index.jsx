import {
  FaFire,
  FaCloud,
  FaClock,
  FaServer,
  FaNodeJs,
  FaDatabase,
  FaShieldAlt,
  FaUserCheck,
  FaLightbulb,
  FaHandshake,
  FaCodeBranch,
  FaLaptopCode,
  FaCheckCircle,
  FaNetworkWired,
} from "react-icons/fa";
import React, { memo } from "react";
import { motion } from "framer-motion";
import Accordin from "../../../../Accordin";
import HeroSection from "../../../../HeroSection";
import Images from "../../../../../Helper/ImagesConstant";
import ContactUsSection from "../../../../ContactUsSection";
import ServicesSection from "../../../../PagesSectionComponents/ServicesSection";
import WhyChooseUsSection from "../../../../PagesSectionComponents/WhyChooseUsSection";
import TechnologiesSection from "../../../../PagesSectionComponents/TechnologiesSection";
import TestimonialsSection from "../../../../PagesSectionComponents/TestimonialsSection";

const NodeContent = () => {
  const services = [
    {
      icon: <FaNodeJs size={50} className="mt-6" />,
      title: "Custom Node.js Development",
      description:
        "Building high-performance Node.js solutions tailored to your needs.",
    },
    {
      icon: <FaCodeBranch size={50} className="mt-6" />,
      title: "API Development",
      description: "Creating RESTful APIs for seamless communication.",
    },
    {
      icon: <FaServer size={50} className="mt-6" />,
      title: "Backend Services",
      description: "Developing robust backend services with Node.js.",
    },
    {
      icon: <FaNetworkWired size={50} className="mt-6" />,
      title: "Database Management",
      description: "Integrating and optimizing databases with Node.js.",
    },
    {
      icon: <FaCloud size={50} className="mt-6" />,
      title: "Cloud Deployment",
      description:
        "Deploying Node.js applications to scalable cloud environments.",
    },
    {
      icon: <FaShieldAlt size={50} className="mt-6" />,
      title: "Security & Authentication",
      description: "Implementing robust security and authentication features.",
    },
  ];

  const testimonialsData = [
    {
      quote:
        "For my Node.js project, AmeerSync provided exceptional backend development support. Their code was clean, scalable, and optimized for performance.",
      author: "Ethan Walker",
      company: "DevStudio",
    },
    {
      quote:
        "They helped us migrate from a monolithic to a microservices architecture using Node.js, improving scalability and performance.",
      author: "Alex Turner",
      company: "CloudFlex",
    },
    {
      quote:
        "Their real-time WebSocket integration made our chat application smooth and responsive.",
      author: "Sophia Kim",
      company: "ChatConnect",
    },
    {
      quote:
        "AmeerSync built a powerful REST API for our e-commerce platform using Node.js and Express.",
      author: "David Johnson",
      company: "ShopEase",
    },
    {
      quote:
        "Their expertise in database optimization for Node.js helped us reduce query response times by 50%.",
      author: "Rachel Green",
      company: "DataSphere",
    },
    {
      quote:
        "They improved the security of our Node.js app by implementing JWT authentication and role-based access control.",
      author: "Michael Roberts",
      company: "SecureApp",
    },
    {
      quote:
        "AmeerSync provided excellent debugging and optimization for our backend, solving performance bottlenecks.",
      author: "Olivia Adams",
      company: "TechSolutions",
    },
    {
      quote:
        "Their asynchronous programming techniques helped us handle high user traffic efficiently.",
      author: "Nathan Lewis",
      company: "ScaleUp",
    },
    {
      quote:
        "They integrated third-party APIs seamlessly, making our app feature-rich and scalable.",
      author: "Lucas Bennett",
      company: "APIConnect",
    },
  ];

  const faqs = [
    {
      question: "Do you specialize in Node.js development?",
      answer:
        "Yes, we focus on creating efficient and scalable backend solutions with Node.js.",
    },
    {
      question: "Can you develop real-time applications with Node.js?",
      answer:
        "Absolutely, we have experience in building real-time solutions using Node.js and WebSocket.",
    },
    {
      question: "Do you offer API development services?",
      answer:
        "Yes, we design and develop RESTful APIs to integrate and enhance your applications.",
    },
    {
      question: "What types of Node.js projects have you completed?",
      answer:
        "From serverless solutions to real-time apps and backend services, we handle it all.",
    },
    {
      question: "Do you provide maintenance for Node.js applications?",
      answer:
        "Yes, we offer ongoing support and optimization for Node.js projects.",
    },
  ];

  const technologies = [
    {
      icon: <FaNodeJs size={50} />,
      title: "Node.js",
      description: "A powerful runtime for building server-side applications.",
    },
    {
      icon: <FaCodeBranch size={50} />,
      title: "Express.js",
      description:
        "Web framework for building APIs and server-side applications.",
    },
    {
      icon: <FaDatabase size={50} />,
      title: "MongoDB",
      description: "NoSQL database for storing and managing data.",
    },
    {
      icon: <FaLaptopCode size={50} />,
      title: "NestJS",
      description:
        "A modern framework for building scalable server-side applications.",
    },
    {
      icon: <FaFire size={50} />,
      title: "Socket.io",
      description:
        "Enabling real-time, bidirectional communication between web clients and servers.",
    },
    {
      icon: <FaNetworkWired size={50} />,
      title: "GraphQL",
      description: "A query language for APIs, optimizing data fetching.",
    },
  ];

  const reasons = [
    {
      icon: <FaCheckCircle />,
      title: "Expert Developers",
      description:
        "Experienced developers crafting efficient Node.js solutions.",
    },
    {
      icon: <FaUserCheck />,
      title: "Client Satisfaction",
      description:
        "We deliver projects that align with clients' goals and needs.",
    },
    {
      icon: <FaClock />,
      title: "Timely Delivery",
      description:
        "We meet deadlines and deliver high-quality Node.js applications.",
    },
    {
      icon: <FaHandshake />,
      title: "Collaborative Approach",
      description: "We work closely with clients to build the best solutions.",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovative Solutions",
      description:
        "We use the latest technologies to deliver cutting-edge Node.js applications.",
    },
  ];

  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="node-development-content w-100 bg-Bg">
     
      <motion.div
        className=""
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
         <HeroSection
        icon={FaNodeJs}
        imageWidth="100%"
        imageHeight="500px"
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
      <WhyChooseUsSection reasons={reasons} />
        <Accordin faqs={faqs} />
        <ContactUsSection />
        <TestimonialsSection testimonials={testimonialsData} />
      </motion.div>
    </div>
  );
};

export default memo(NodeContent);
