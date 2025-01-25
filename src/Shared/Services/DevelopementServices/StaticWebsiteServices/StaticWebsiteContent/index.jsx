import {
  FaGlobe,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaCode,
  FaDesktop,
  FaCogs,
  FaMagic,
  FaShieldAlt,
  FaCheckCircle,
  FaUserCheck,
  FaClock,
  FaHandshake,
  FaLightbulb,
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

const StaticWebsiteContent = () => {
  const projects = [
    {
      title: "Corporate Websites",
      description: "Developed modern, clean, and responsive websites for businesses.",
      image: Images.STATIC_WEBSITE_IMG1,
    },
    {
      title: "Portfolio Websites",
      description: "Created visually stunning and user-friendly portfolios.",
      image: Images.STATIC_WEBSITE_IMG2,
    },
    {
      title: "Landing Pages",
      description: "Designed high-converting landing pages for marketing campaigns.",
      image: Images.STATIC_WEBSITE_IMG3,
    },
    {
      title: "Blog Websites",
      description: "Built sleek and responsive blogs with easy content management.",
      image: Images.STATIC_WEBSITE_IMG4,
    },
  ];

  const services = [
    {
      icon: <FaGlobe size={100} className="mt-6" />,
      title: "Custom Static Websites",
      description: "Creating static websites that are fast, secure, and SEO-optimized.",
    },
    {
      icon: <FaHtml5 size={100} className="mt-6" />,
      title: "HTML5 & CSS3",
      description: "Crafting clean, modern, and responsive designs with HTML5 and CSS3.",
    },
    {
      icon: <FaGithub size={100} className="mt-6" />,
      title: "Version Control",
      description: "Using GitHub for version control and collaboration.",
    },
    {
      icon: <FaCode size={100} className="mt-6" />,
      title: "SEO Optimization",
      description: "Optimizing static websites for search engines to enhance visibility.",
    },
    {
      icon: <FaDesktop size={100} className="mt-6" />,
      title: "Cross-Browser Compatibility",
      description: "Ensuring the website works seamlessly across all major browsers.",
    },
    {
      icon: <FaShieldAlt size={100} className="mt-6" />,
      title: "Security & Performance",
      description: "Securing websites and optimizing them for fast load times.",
    },
  ];

  const testimonialsData = [
    {
      text: "Our new website is a game-changer for our business!",
      name: "John Doe",
      role: "CEO",
      image: "https://via.placeholder.com/150",
    },
    {
      text: "Incredibly happy with the website design and performance!",
      name: "Alice Johnson",
      role: "Marketing Manager",
      image: "https://via.placeholder.com/150",
    },
    {
      text: "They delivered on time and exceeded expectations!",
      name: "Michael Brown",
      role: "Project Lead",
      image: "https://via.placeholder.com/150",
    },
  ];

  const faqs = [
    {
      question: "Do you offer custom static website development?",
      answer: "Yes, we specialize in creating custom static websites that meet your needs.",
    },
    {
      question: "Are your websites SEO-friendly?",
      answer: "Absolutely! We optimize every website for SEO to ensure better search engine rankings.",
    },
    {
      question: "Can you integrate third-party services?",
      answer: "Yes, we can integrate third-party services like forms, maps, and more.",
    },
    {
      question: "Do you provide website maintenance?",
      answer: "Yes, we offer ongoing maintenance services for all the websites we build.",
    },
    {
      question: "What platforms do you use for hosting?",
      answer: "We recommend platforms like Netlify, Vercel, or GitHub Pages for hosting static websites.",
    },
  ];

  const technologies = [
    {
      icon: <FaHtml5 size={100} />,
      title: "HTML5",
      description: "Modern and semantic markup for building fast websites.",
    },
    {
      icon: <FaCss3Alt size={100} />,
      title: "CSS3",
      description: "Styling websites with the latest CSS3 features for responsive design.",
    },
    {
      icon: <FaGithub size={100} />,
      title: "GitHub",
      description: "Version control and collaboration with GitHub.",
    },
    {
      icon: <FaCogs size={100} />,
      title: "Gulp/Grunt",
      description: "Task runners for automating the build process.",
    },
    {
      icon: <FaMagic size={100} />,
      title: "Web Performance Optimization",
      description: "Ensuring websites are fast, reliable, and performant.",
    },
  ];

  const reasons = [
    {
      icon: <FaCheckCircle />,
      title: "Expert Designers",
      description: "We create visually appealing websites with a focus on user experience.",
    },
    {
      icon: <FaUserCheck />,
      title: "Client-Focused Approach",
      description: "We listen to your needs and deliver exactly what you're looking for.",
    },
    {
      icon: <FaClock />,
      title: "On-Time Delivery",
      description: "We guarantee timely delivery without compromising on quality.",
    },
    {
      icon: <FaHandshake />,
      title: "Collaboration",
      description: "We work closely with you to bring your ideas to life.",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovative Solutions",
      description: "We use the latest techniques and technologies to ensure a modern, secure website.",
    },
  ];

  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="static-website-development-content w-100 bg-white">
      <HeroSection
        icon={FaGlobe}
        imageWidth="600px"
        imageHeight="400px"
        imageAlt="Static Website Development Services"
        buttonText="Get Started"
        title="Static Website Development Services"
        onButtonClick={handleButtonClick}
        imageSrc={Images.STATIC_WEBSITE_IMG1}
        description="Transform your online presence with our expert static website development services. We design fast, responsive, and SEO-optimized websites that elevate your brand."
        details={
          "Our static websites are designed to be lightweight, fast-loading, and easy to maintain. We specialize in creating beautiful and secure websites that are tailored to your business needs."
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

export default memo(StaticWebsiteContent);
