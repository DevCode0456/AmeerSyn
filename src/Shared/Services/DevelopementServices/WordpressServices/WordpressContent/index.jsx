import {
  FaCog,
  FaHdd,
  FaLock,
  FaRobot,
  FaTools,
  FaClock,
  FaCloud,
  FaBrain,
  FaPenFancy,
  FaDatabase,
  FaUserCheck,
  FaHandshake,
  FaLightbulb,
  FaShieldAlt,
  FaCodeBranch,
  FaLaptopCode,
  FaCheckCircle,
  FaNetworkWired,
  FaLinux,
  FaShopify,
  FaWordpress
} from "react-icons/fa";
import React, { memo } from "react";
import { motion } from "framer-motion";
import Accordin from "../../../../Accordin";
import FlipCard from "../../../../FlipCard";
import HeroSection from "../../../../HeroSection";
import Testimonials from "../../../../Testimonials";
import ServicesCard from "../../../../ServicesCard";
import { Carousel } from "react-responsive-carousel";
import Images from "../../../../../Helper/ImagesConstant";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ContactUsSection from "../../../../ContactUsSection";

const WordpressContent = () => {
  const projects = [
    {
      title: "Custom WordPress Themes",
      description:
        "Designed unique WordPress themes to match client branding.",
      image: Images.WORDPRESS_IMG1,
    },
    {
      title: "Plugin Development",
      description:
        "Developed custom plugins to add specific functionalities to websites.",
      image: Images.WORDPRESS_IMG2,
    },
    {
      title: "SEO Optimization",
      description:
        "Enhanced website visibility through advanced SEO techniques.",
      image: Images.WORDPRESS_IMG3,
    },
    {
      title: "E-commerce Solutions",
      description:
        "Built WooCommerce stores for seamless online shopping experiences.",
      image: Images.WORDPRESS_IMG4,
    },
  ];

  const services = [
    {
      icon: <FaWordpress size={100} className="mt-6" />, 
      title: "WordPress Installation",
      description: "Setting up WordPress for your website efficiently and quickly.",
    },
    {
      icon: <FaTools size={100} className="mt-6" />, 
      title: "Theme Customization",
      description: "Tailoring themes to align with your brand identity.",
    },
    {
      icon: <FaCog size={100} className="mt-6" />, 
      title: "Website Maintenance",
      description: "Ongoing support and maintenance to keep your site updated.",
    },
    {
      icon: <FaCloud size={100} className="mt-6" />, 
      title: "Hosting Setup",
      description: "Setting up reliable and secure hosting solutions.",
    },
    {
      icon: <FaLock size={100} className="mt-6" />, 
      title: "Security Enhancements",
      description: "Implementing advanced security measures to protect your website.",
    },
    {
      icon: <FaPenFancy size={100} className="mt-6" />, 
      title: "Content Creation",
      description: "Creating engaging content tailored for your audience.",
    },
  ];

  const testimonialsData = [
    {
      text: "Their custom WordPress theme transformed our online presence!",
      name: "John Smith",
      role: "Business Owner",
      image: "https://via.placeholder.com/150",
    },
    {
      text: "The plugin they developed saved us countless hours of work.",
      name: "Jane Doe",
      role: "Project Manager",
      image: "https://via.placeholder.com/150",
    },
    {
      text: "SEO improvements doubled our website traffic in months!",
      name: "Mike Johnson",
      role: "Marketing Lead",
      image: "https://via.placeholder.com/150",
    },
  ];

  const faqs = [
    {
      question: "Can you create a custom WordPress theme?",
      answer: "Yes, we specialize in developing custom WordPress themes tailored to your needs.",
    },
    {
      question: "Do you provide WordPress plugin development?",
      answer: "Yes, we develop plugins to add unique functionalities to your website.",
    },
    {
      question: "What hosting providers do you recommend?",
      answer: "We recommend reliable providers like Bluehost, SiteGround, and WP Engine.",
    },
    {
      question: "Can you optimize my existing WordPress site?",
      answer: "Yes, we offer optimization services to improve performance and user experience.",
    },
    {
      question: "Do you offer WordPress training?",
      answer: "Yes, we provide training to help you manage your WordPress site effectively.",
    },
  ];

  const technologies = [
    {
      icon: <FaWordpress size={100} />, 
      title: "WordPress Core",
      description: "The backbone of WordPress development.",
    },
    {
      icon: <FaCog size={100} />, 
      title: "Gutenberg Editor",
      description: "A modern block editor for building dynamic content.",
    },
    {
      icon: <FaCloud size={100} />, 
      title: "Elementor",
      description: "A powerful page builder for WordPress.",
    },
    {
      icon: <FaHdd size={100} />, 
      title: "WooCommerce",
      description: "The go-to plugin for e-commerce solutions.",
    },
    {
      icon: <FaLightbulb size={100} />, 
      title: "Yoast SEO",
      description: "Optimizing WordPress sites for search engines.",
    },
    {
      icon: <FaNetworkWired size={100} />, 
      title: "Jetpack",
      description: "A suite of security, performance, and site management tools.",
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
      description: "We prioritize your needs to deliver tailored WordPress solutions.",
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
      description: "We use the latest tools and practices for WordPress development.",
    },
  ];

  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="wordpress-content w-100 bg-white">
      <HeroSection
        icon={FaWordpress}
        imageWidth="600px"
        imageHeight="400px"
        imageAlt="WordPress Solutions"
        buttonText="Get Started"
        title="WordPress Development Services"
        onButtonClick={handleButtonClick}
        imageSrc={Images.WORDPRESS_IMG1}
        description="Elevate your online presence with our expert WordPress services. From custom theme and plugin development to optimization and maintenance, we provide solutions that ensure your success in the digital world."
        details={
          "Our WordPress services cater to businesses and individuals looking to create a robust online presence. Whether it's a new website or enhancing an existing one, our solutions are designed for growth and scalability."
        }
      />
      <motion.div
        className="my-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
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

      <motion.div
        className="my-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center text-3xl font-bold mb-6">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              className="bg-white shadow-2xl p-6 rounded-3xl text-center"
              key={index}
            >
              <div className="mb-4 text-center text-blue-500">
                {reason.icon}
              </div>
              <h3 className="font-semibold text-xl mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
            <ContactUsSection />
      

      <motion.div
        className="my-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center text-3xl font-bold mb-6">
          Technologies We Use
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <FlipCard
              key={index}
              icon={tech.icon}
              title={tech.title}
              description={tech.description}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        className="my-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center text-3xl font-bold mb-6">Our Projects</h2>
        <Carousel showThumbs={false}>
          {projects.map((project, index) => (
            <div key={index}>
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg"
              />
              <p className="legend text-center mt-4 text-lg">
                <strong>{project.title}</strong>: {project.description}
              </p>
            </div>
          ))}
        </Carousel>
      </motion.div>

      <motion.div
        className="my-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center text-3xl font-bold mb-6">
          What Our Clients Say
        </h2>
        <div className="">
          <Testimonials testimonials={testimonialsData} />
        </div>
      </motion.div>

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

export default memo(WordpressContent);
