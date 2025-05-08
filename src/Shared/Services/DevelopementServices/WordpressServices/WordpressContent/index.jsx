import {
  FaCog,
  FaHdd,
  FaLock,
  FaTools,
  FaClock,
  FaCloud,
  FaPenFancy,
  FaWordpress,
  FaUserCheck,
  FaHandshake,
  FaLightbulb,
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
import TechnologiesSection from "../../../../PagesSectionComponents/TechnologiesSection";
import TestimonialsSection from "../../../../PagesSectionComponents/TestimonialsSection";
import WhyChooseUsSection from "../../../../PagesSectionComponents/WhyChooseUsSection";

const WordpressContent = () => {
  const services = [
    {
      icon: <FaWordpress size={50} className="mt-6" />,
      title: "WordPress Installation",
      description:
        "Setting up WordPress for your website efficiently and quickly.",
    },
    {
      icon: <FaTools size={50} className="mt-6" />,
      title: "Theme Customization",
      description: "Tailoring themes to align with your brand identity.",
    },
    {
      icon: <FaCog size={50} className="mt-6" />,
      title: "Website Maintenance",
      description: "Ongoing support and maintenance to keep your site updated.",
    },
    {
      icon: <FaCloud size={50} className="mt-6" />,
      title: "Hosting Setup",
      description: "Setting up reliable and secure hosting solutions.",
    },
    {
      icon: <FaLock size={50} className="mt-6" />,
      title: "Security Enhancements",
      description:
        "Implementing advanced security measures to protect your website.",
    },
    {
      icon: <FaPenFancy size={50} className="mt-6" />,
      title: "Content Creation",
      description: "Creating engaging content tailored for your audience.",
    },
  ];

  const testimonialsData = [
    {
      quote:
        "AmeerSync revamped our WordPress website, making it more professional and responsive.",
      author: "Jessica Parker",
      company: "Creative Agency",
    },
    {
      quote: "They customized our WordPress theme to fit our brand perfectly.",
      author: "Alex Turner",
      company: "BrandPro",
    },
    {
      quote:
        "Their SEO optimizations helped our WordPress site rank higher on Google.",
      author: "Ethan Lewis",
      company: "WebBoost",
    },
    {
      quote:
        "AmeerSync secured our WordPress site against cyber threats and malware.",
      author: "Linda Thomas",
      company: "SafeWeb",
    },
    {
      quote:
        "They set up an automated blog posting system for us, saving hours of manual work.",
      author: "Michael Roberts",
      company: "ContentFlow",
    },
    {
      quote:
        "Their expertise in WooCommerce helped us launch a fully functional online store.",
      author: "Rachel Green",
      company: "EcomPro",
    },
    {
      quote:
        "They integrated advanced WordPress plugins that enhanced our site’s functionality.",
      author: "Nathan Clark",
      company: "WPExperts",
    },
    {
      quote:
        "AmeerSync improved our site's loading speed, reducing bounce rates significantly.",
      author: "Emily Wilson",
      company: "FastPages",
    },
    {
      quote:
        "Their team provided excellent support, ensuring our WordPress site runs smoothly 24/7.",
      author: "James Carter",
      company: "SupportPro",
    },
  ];

  const faqs = [
    {
      question: "Can you create a custom WordPress theme?",
      answer:
        "Yes, we specialize in developing custom WordPress themes tailored to your needs.",
    },
    {
      question: "Do you provide WordPress plugin development?",
      answer:
        "Yes, we develop plugins to add unique functionalities to your website.",
    },
    {
      question: "What hosting providers do you recommend?",
      answer:
        "We recommend reliable providers like Bluehost, SiteGround, and WP Engine.",
    },
    {
      question: "Can you optimize my existing WordPress site?",
      answer:
        "Yes, we offer optimization services to improve performance and user experience.",
    },
    {
      question: "Do you offer WordPress training?",
      answer:
        "Yes, we provide training to help you manage your WordPress site effectively.",
    },
  ];

  const technologies = [
    {
      icon: <FaWordpress size={50} />,
      title: "WordPress Core",
      description: "The backbone of WordPress development.",
    },
    {
      icon: <FaCog size={50} />,
      title: "Gutenberg Editor",
      description: "A modern block editor for building dynamic content.",
    },
    {
      icon: <FaCloud size={50} />,
      title: "Elementor",
      description: "A powerful page builder for WordPress.",
    },
    {
      icon: <FaHdd size={50} />,
      title: "WooCommerce",
      description: "The go-to plugin for e-commerce solutions.",
    },
    {
      icon: <FaLightbulb size={50} />,
      title: "Yoast SEO",
      description: "Optimizing WordPress sites for search engines.",
    },
    {
      icon: <FaNetworkWired size={50} />,
      title: "Jetpack",
      description:
        "A suite of security, performance, and site management tools.",
    },
  ];

  const reasons = [
    {
      icon: <FaCheckCircle />,
      title: "WordPress Expertise",
      description: "Our team has years of experience in WordPress development.",
    },
    {
      icon: <FaUserCheck />,
      title: "Client-Focused Approach",
      description:
        "We prioritize your needs to deliver tailored WordPress solutions.",
    },
    {
      icon: <FaClock />,
      title: "Timely Deliveries",
      description: "We complete projects on time without compromising quality.",
    },
    {
      icon: <FaHandshake />,
      title: "Reliable Support",
      description: "We offer continuous support for all your WordPress needs.",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovative Solutions",
      description:
        "We use the latest tools and practices for WordPress development.",
    },
  ];

  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="wordpress-content w-100 bg-Bg">
      <motion.div
        className=""
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection
          icon={FaWordpress}
          imageAlt="WordPress Solutions"
          buttonText="Get Started"
          title="WordPress Development Services"
          onButtonClick={handleButtonClick}
          imageSrc={Images.WORDPRESS_DEVELOPMENT_IMG}
          description="Elevate your online presence with our expert WordPress services. From custom theme and plugin development to optimization and maintenance, we provide solutions that ensure your success in the digital world."
          details={
            "Our WordPress services cater to businesses and individuals looking to create a robust online presence. Whether it's a new website or enhancing an existing one, our solutions are designed for growth and scalability."
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

export default memo(WordpressContent);
