import {
  FaReact,
  FaClock,
  FaCloud,
  FaDatabase,
  FaUserCheck,
  FaHandshake,
  FaLightbulb,
  FaShieldAlt,
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
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ContactUsSection from "../../../../ContactUsSection";
import ServicesSection from "../../../../PagesSectionComponents/ServicesSection";
import TechnologiesSection from "../../../../PagesSectionComponents/TechnologiesSection";
import TestimonialsSection from "../../../../PagesSectionComponents/TestimonialsSection";
import ProjectsSection from "../../../../PagesSectionComponents/ProjectsSection";
import WhyChooseUsSection from "../../../../PagesSectionComponents/WhyChooseUsSection";

const ReactContent = () => {
  const projects = [
    {
      title: "React Dashboards",
      description: "Designed and developed interactive dashboards using React.",
      image: Images.REACT_DEV_IMG1,
    },
    {
      title: "Single Page Applications",
      description: "Built SPAs with smooth navigation and fast loading times.",
      image: Images.REACT_DEV_IMG2,
    },
    {
      title: "React Native Apps",
      description:
        "Developed cross-platform mobile applications with React Native.",
      image: Images.REACT_DEV_IMG3,
    },
    {
      title: "Component Libraries",
      description: "Created reusable and scalable component libraries.",
      image: Images.REACT_DEV_IMG4,
    },
  ];

  const services = [
    {
      icon: <FaReact size={100} className="mt-6" />,
      title: "Custom React Development",
      description:
        "Building tailored React solutions to meet your unique needs.",
    },
    {
      icon: <FaCodeBranch size={100} className="mt-6" />,
      title: "State Management",
      description:
        "Implementing Redux, Context API, and other state management tools.",
    },
    {
      icon: <FaLaptopCode size={100} className="mt-6" />,
      title: "React Native Apps",
      description:
        "Developing mobile apps with React Native for iOS and Android.",
    },
    {
      icon: <FaNetworkWired size={100} className="mt-6" />,
      title: "API Integration",
      description: "Seamlessly integrating APIs for enhanced functionality.",
    },
    {
      icon: <FaShieldAlt size={100} className="mt-6" />,
      title: "Performance Optimization",
      description: "Ensuring fast and efficient React applications.",
    },
    {
      icon: <FaCloud size={100} className="mt-6" />,
      title: "Cloud Deployment",
      description: "Deploying React apps to cloud platforms for scalability.",
    },
  ];

  const testimonialsData = [
    {
      text: "Their React solutions transformed our web presence!",
      name: "James Carter",
      role: "Product Manager",
      image: "https://via.placeholder.com/150",
    },
    {
      text: "Highly impressed with their state management expertise!",
      name: "Emma Stone",
      role: "Software Engineer",
      image: "https://via.placeholder.com/150",
    },
    {
      text: "Our mobile app is now a market leader, thanks to them!",
      name: "Oliver Smith",
      role: "CEO",
      image: "https://via.placeholder.com/150",
    },
  ];

  const faqs = [
    {
      question: "Do you specialize in React development?",
      answer:
        "Yes, React is our core expertise, and we deliver exceptional solutions.",
    },
    {
      question: "Can you create mobile apps with React Native?",
      answer:
        "Absolutely, we excel at building cross-platform apps with React Native.",
    },
    {
      question: "Do you handle API integrations?",
      answer:
        "Yes, we integrate RESTful and GraphQL APIs into React applications.",
    },
    {
      question: "What kind of React projects have you completed?",
      answer:
        "From SPAs to complex dashboards and mobile apps, we've done it all.",
    },
    {
      question: "Do you offer React maintenance services?",
      answer:
        "Yes, we provide ongoing support and optimization for React projects.",
    },
  ];

  const technologies = [
    {
      icon: <FaReact size={100} />,
      title: "React",
      description: "A powerful library for building dynamic user interfaces.",
    },
    {
      icon: <FaCodeBranch size={100} />,
      title: "Redux",
      description: "Efficient state management for complex applications.",
    },
    {
      icon: <FaCloud size={100} />,
      title: "GraphQL",
      description: "A query language for API communication in React apps.",
    },
    {
      icon: <FaLaptopCode size={100} />,
      title: "React Native",
      description: "Cross-platform mobile app development framework.",
    },
    {
      icon: <FaDatabase size={100} />,
      title: "Firebase",
      description: "Backend services and hosting for React applications.",
    },
    {
      icon: <FaNetworkWired size={100} />,
      title: "Webpack",
      description: "Module bundler for optimizing React projects.",
    },
  ];

  const reasons = [
    {
      icon: <FaCheckCircle />,
      title: "Expert Developers",
      description: "Highly skilled in crafting React solutions.",
    },
    {
      icon: <FaUserCheck />,
      title: "Client Satisfaction",
      description: "We prioritize our clients' success in every project.",
    },
    {
      icon: <FaClock />,
      title: "Timely Delivery",
      description:
        "Delivering projects on schedule without compromising quality.",
    },
    {
      icon: <FaHandshake />,
      title: "Collaborative Approach",
      description: "We work closely with clients to bring their ideas to life.",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovative Solutions",
      description: "Leveraging the latest in React to build cutting-edge apps.",
    },
  ];

  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="react-development-content w-100 bg-white">
      <HeroSection
        icon={FaReact}
        imageWidth="600px"
        imageHeight="400px"
        imageAlt="React Development Services"
        buttonText="Get Started"
        title="React Development Services"
        onButtonClick={handleButtonClick}
        imageSrc={Images.REACT_DEV_IMG1}
        description="Elevate your digital solutions with our expert React development services. From dynamic SPAs to powerful React Native apps, we build experiences that engage and deliver."
        details={
          "Our React development services are tailored to meet the diverse needs of businesses. Whether it's a responsive web application, interactive dashboard, or mobile app, we deliver solutions that exceed expectations."
        }
      />
      <ServicesSection services={services} />
      <TechnologiesSection technologies={technologies} />
      <TestimonialsSection testimonials={testimonialsData} />
      <ProjectsSection projects={projects} />
      <ContactUsSection />
      <WhyChooseUsSection reasons={reasons} />
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

export default memo(ReactContent);
