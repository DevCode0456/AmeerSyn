import {
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
  FaHtml5,
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
import ProjectsSection from "../../../../PagesSectionComponents/ProjectsSection";

const WebDevelopementContent = () => {
  const projects = [
    {
      title: "Responsive Websites",
      description: "Built fully responsive websites for various devices.",
      image: Images.WEB_DEV_IMG1,
    },
    {
      title: "E-commerce Platforms",
      description: "Developed online stores with seamless user experiences.",
      image: Images.WEB_DEV_IMG2,
    },
    {
      title: "Web Applications",
      description:
        "Created custom web applications tailored to business needs.",
      image: Images.WEB_DEV_IMG3,
    },
    {
      title: "API Integrations",
      description: "Integrated third-party APIs for added functionalities.",
      image: Images.WEB_DEV_IMG4,
    },
  ];

  const services = [
    {
      icon: <FaHtml5 size={100} className="mt-6" />,
      title: "Front-end Development",
      description: "Crafting visually appealing and user-friendly interfaces.",
    },
    {
      icon: <FaCodeBranch size={100} className="mt-6" />,
      title: "Back-end Development",
      description: "Building robust and scalable server-side solutions.",
    },
    {
      icon: <FaLaptopCode size={100} className="mt-6" />,
      title: "Full-stack Development",
      description: "Providing end-to-end web development services.",
    },
    {
      icon: <FaNetworkWired size={100} className="mt-6" />,
      title: "Website Optimization",
      description: "Enhancing performance and load times of websites.",
    },
    {
      icon: <FaShieldAlt size={100} className="mt-6" />,
      title: "Web Security",
      description: "Implementing measures to safeguard websites from threats.",
    },
    {
      icon: <FaCloud size={100} className="mt-6" />,
      title: "Cloud Integration",
      description: "Integrating cloud services for improved functionality.",
    },
  ];

  const testimonialsData = [
    {
      text: "Their front-end designs are both functional and beautiful!",
      name: "Alice Brown",
      role: "Creative Director",
      image: "https://via.placeholder.com/150",
    },
    {
      text: "Thanks to their back-end expertise, our platform runs smoothly.",
      name: "David Lee",
      role: "CTO",
      image: "https://via.placeholder.com/150",
    },
    {
      text: "They optimized our website, and the results are amazing!",
      name: "Sarah Wilson",
      role: "Marketing Manager",
      image: "https://via.placeholder.com/150",
    },
  ];

  const faqs = [
    {
      question: "Do you offer responsive web design?",
      answer:
        "Yes, we specialize in creating websites that look great on all devices.",
    },
    {
      question: "Can you develop custom web applications?",
      answer:
        "Absolutely, we tailor web applications to meet your business needs.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We use modern frameworks like React, Angular, Node.js, and more.",
    },
    {
      question: "Do you offer maintenance services?",
      answer:
        "Yes, we provide ongoing support and maintenance for your website.",
    },
    {
      question: "How secure are your web solutions?",
      answer:
        "We implement best practices to ensure your website is secure from threats.",
    },
  ];

  const technologies = [
    {
      icon: <FaHtml5 size={100} />,
      title: "HTML5",
      description: "The standard markup language for creating web pages.",
    },
    {
      icon: <FaLaptopCode size={100} />,
      title: "CSS3",
      description:
        "Styling language for creating visually engaging web designs.",
    },
    {
      icon: <FaCodeBranch size={100} />,
      title: "JavaScript",
      description: "Programming language for dynamic and interactive content.",
    },
    {
      icon: <FaNetworkWired size={100} />,
      title: "React",
      description: "A popular library for building user interfaces.",
    },
    {
      icon: <FaCloud size={100} />,
      title: "Node.js",
      description: "Server-side JavaScript for scalable applications.",
    },
    {
      icon: <FaDatabase size={100} />,
      title: "Databases",
      description: "Efficient data management with SQL and NoSQL solutions.",
    },
  ];

  const reasons = [
    {
      icon: <FaCheckCircle />,
      title: "Proven Expertise",
      description:
        "Years of experience in delivering high-quality web solutions.",
    },
    {
      icon: <FaUserCheck />,
      title: "Client-Centric Approach",
      description: "We tailor our services to meet your specific requirements.",
    },
    {
      icon: <FaClock />,
      title: "On-Time Delivery",
      description:
        "We ensure timely completion of projects without compromising quality.",
    },
    {
      icon: <FaHandshake />,
      title: "Reliable Partnership",
      description: "Building long-term relationships with our clients.",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovative Solutions",
      description:
        "We embrace the latest trends and technologies in web development.",
    },
  ];

  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="web-development-content w-100 bg-white">
      <HeroSection
        icon={FaLaptopCode}
        imageWidth="600px"
        imageHeight="400px"
        imageAlt="Web Development Services"
        buttonText="Get Started"
        title="Web Development Services"
        onButtonClick={handleButtonClick}
        imageSrc={Images.WEB_DEVELOPMENT_IMG}
        description="Take your online presence to the next level with our comprehensive web development services. From responsive designs to robust back-end solutions, we deliver results that drive success."
        details={
          "Our web development services cater to businesses aiming for digital transformation. Whether it's a corporate website, e-commerce platform, or custom application, we ensure top-notch quality and performance."
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

export default memo(WebDevelopementContent);
