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

const DatabasesContent = () => {
  const projects = [
    {
      title: "Database Optimization",
      description:
        "Enhanced database performance through query optimization and indexing strategies.",
      image: Images.DATABASE_IMG1,
    },
    {
      title: "Data Warehousing",
      description:
        "Design and implementation of robust data warehousing solutions for analytical insights.",
      image: Images.DATABASE_IMG2,
    },
    {
      title: "Database Migration",
      description:
        "Seamless migration of databases with minimal downtime and data integrity.",
      image: Images.DATABASE_IMG3,
    },
    {
      title: "Backup and Recovery",
      description:
        "Comprehensive backup and disaster recovery solutions for critical databases.",
      image: Images.DATABASE_IMG4,
    },
  ];

  const services = [
    {
      icon: <FaDatabase size={100} className="mt-6" />,
      title: "Database Design",
      description:
        "Custom database architecture tailored to meet your business needs.",
    },
    {
      icon: <FaTools size={100} className="mt-6" />,
      title: "Database Management",
      description:
        "Comprehensive management services ensuring database reliability and scalability.",
    },
    {
      icon: <FaLock size={100} className="mt-6" />,
      title: "Data Security",
      description:
        "Implementing robust security measures to protect sensitive information.",
    },
    {
      icon: <FaCloud size={100} className="mt-6" />,
      title: "Cloud Databases",
      description:
        "Leveraging cloud platforms for scalable and high-performance database solutions.",
    },
    {
      icon: <FaCog size={100} className="mt-6" />,
      title: "Database Automation",
      description:
        "Automating routine tasks for improved efficiency and reduced operational costs.",
    },
    {
      icon: <FaPenFancy size={100} className="mt-6" />,
      title: "Custom Queries",
      description:
        "Crafting advanced queries for specific data retrieval and analysis needs.",
    },
  ];

  const testimonialsData = [
    {
      text: "The database optimization service improved our system's performance significantly.",
      name: "Michael Lee",
      role: "Data Analyst",
      image: "https://via.placeholder.com/150",
    },
    {
      text: "Seamless database migration with zero data loss. Highly recommend their expertise!",
      name: "Sarah Wilson",
      role: "IT Manager",
      image: "https://via.placeholder.com/150",
    },
    {
      text: "Exceptional support and cutting-edge solutions for our cloud databases.",
      name: "David Brown",
      role: "CTO",
      image: "https://via.placeholder.com/150",
    },
  ];

  const faqs = [
    {
      question: "What database platforms do you support?",
      answer:
        "We support MySQL, PostgreSQL, MongoDB, Oracle, SQL Server, and more.",
    },
    {
      question: "Can you handle large-scale database migrations?",
      answer:
        "Yes, we specialize in large-scale migrations with minimal downtime.",
    },
    {
      question: "Do you offer database monitoring services?",
      answer:
        "Yes, we provide 24/7 monitoring to ensure optimal database performance.",
    },
    {
      question: "How secure are your database solutions?",
      answer:
        "We implement industry-standard encryption and access control protocols.",
    },
    {
      question: "Can you integrate databases with third-party applications?",
      answer:
        "Yes, we specialize in seamless integration with various applications.",
    },
  ];

  const technologies = [
    {
      icon: <FaDatabase size={100} />,
      title: "MySQL",
      description:
        "A widely-used open-source relational database management system.",
    },
    {
      icon: <FaNetworkWired size={100} />,
      title: "PostgreSQL",
      description:
        "A powerful, open-source object-relational database system.",
    },
    {
      icon: <FaCloud size={100} />,
      title: "MongoDB",
      description:
        "A NoSQL database for modern, high-volume applications.",
    },
    {
      icon: <FaHdd size={100} />,
      title: "Oracle",
      description:
        "A comprehensive database solution for enterprise applications.",
    },
    {
      icon: <FaCog size={100} />,
      title: "SQL Server",
      description:
        "Microsoft's relational database for structured data storage and analysis.",
    },
    {
      icon: <FaLightbulb size={100} />,
      title: "Firebase",
      description:
        "A cloud-hosted database solution for real-time applications.",
    },
  ];

  const reasons = [
    {
      icon: <FaCheckCircle />,
      title: "Expert Database Engineers",
      description:
        "Our team has extensive experience in handling complex database projects.",
    },
    {
      icon: <FaUserCheck />,
      title: "Client-Focused Solutions",
      description:
        "We prioritize your specific needs for tailor-made database services.",
    },
    {
      icon: <FaClock />,
      title: "Timely Delivery",
      description:
        "We adhere to deadlines while maintaining the highest quality standards.",
    },
    {
      icon: <FaHandshake />,
      title: "Reliable Support",
      description:
        "Our support team is available to assist you with any database challenges.",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovative Solutions",
      description:
        "We leverage the latest tools and technologies to deliver exceptional results.",
    },
  ];

  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="database-content w-100 bg-white">
      <HeroSection
        icon={FaDatabase}
        imageWidth="600px"
        imageHeight="400px"
        imageAlt="Database Solutions"
        buttonText="Get Started"
        title="Database Development Services"
        onButtonClick={handleButtonClick}
        imageSrc={Images.DATABASE_IMG1}
        description="Unlock the power of efficient data management and analytics with our database solutions. From database design and optimization to secure cloud integration, we deliver tailored services that drive business success."
        details={
          "Our database services ensure your data is accessible, secure, and optimized for performance. Whether you're looking to implement a new database system, migrate to a cloud platform, or enhance existing setups, our team has the expertise to deliver. Explore the benefits of modern database technologies for improved decision-making and operational efficiency."
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

export default memo(DatabasesContent);