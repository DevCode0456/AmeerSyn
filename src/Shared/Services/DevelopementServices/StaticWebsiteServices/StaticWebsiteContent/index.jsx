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
import WhyChooseUsSection from "../../../../PagesSectionComponents/WhyChooseUsSection";

const StaticWebsiteContent = () => {


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
      quote: "We needed a static website for our startup, and AmeerSync delivered a clean, modern, and ultra-fast site.",
      author: "Lucas Turner",
      company: "Startup Solutions"
    },
    {
      quote: "Their SEO-friendly static website helped us rank higher on search engines, bringing in more customers.",
      author: "Sophia Kim",
      company: "Marketing Pro"
    },
    {
      quote: "AmeerSync built a lightning-fast static landing page that increased our conversion rate by 40%.",
      author: "David Williams",
      company: "ClickBoost"
    },
    {
      quote: "Their static website solution ensured security and speed while maintaining a professional look.",
      author: "Rachel Green",
      company: "PortfolioHub"
    },
    {
      quote: "They designed a simple yet elegant static site for my personal blog, and I absolutely love it!",
      author: "Michael Carter",
      company: "BlogWriter"
    },
    {
      quote: "AmeerSync's optimized static pages reduced our website load time significantly.",
      author: "Ethan Lewis",
      company: "FastWeb"
    },
    {
      quote: "Their expertise in static website hosting helped us deploy our site at minimal costs.",
      author: "Olivia Brown",
      company: "BudgetWeb"
    },
    {
      quote: "They provided an intuitive static website with mobile-friendly design, enhancing user experience.",
      author: "Nathan Scott",
      company: "MobileFirst"
    },
    {
      quote: "AmeerSync delivered a pixel-perfect static site that aligns perfectly with our brand image.",
      author: "James Carter",
      company: "BrandVisuals"
    }
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
    <div className="static-website-development-content w-100 bg-Bg">
     
      <motion.div
        className=""
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
         <HeroSection
        icon={FaGlobe}
      
        imageAlt="Static Website Development Services"
        buttonText="Get Started"
        title="Static Website Development Services"
        onButtonClick={handleButtonClick}
        imageSrc={Images.STATIC_IMG}
        description="Transform your online presence with our expert static website development services. We design fast, responsive, and SEO-optimized websites that elevate your brand."
        details={
          "Our static websites are designed to be lightweight, fast-loading, and easy to maintain. We specialize in creating beautiful and secure websites that are tailored to your business needs."
        }
      />
         <ServicesSection services={services} />
      <TechnologiesSection technologies={technologies} />
      <WhyChooseUsSection reasons={reasons	}/>
        <Accordin faqs={faqs} />
      <ContactUsSection />
      <TestimonialsSection testimonials={testimonialsData} />
      </motion.div>
    </div>
  );
};

export default memo(StaticWebsiteContent);
