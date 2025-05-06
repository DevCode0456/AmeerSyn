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

const DatabasesContent = () => {


  const services = [
    {
      icon: <FaDatabase size={50} className="mt-6" />,
      title: "Database Design",
      description:
        "Custom database architecture tailored to meet your business needs.",
    },
    {
      icon: <FaTools size={50} className="mt-6" />,
      title: "Database Management",
      description:
        "Comprehensive management services ensuring database reliability and scalability.",
    },
    {
      icon: <FaLock size={50} className="mt-6" />,
      title: "Data Security",
      description:
        "Implementing robust security measures to protect sensitive information.",
    },
    {
      icon: <FaCloud size={50} className="mt-6" />,
      title: "Cloud Databases",
      description:
        "Leveraging cloud platforms for scalable and high-performance database solutions.",
    },
    {
      icon: <FaCog size={50} className="mt-6" />,
      title: "Database Automation",
      description:
        "Automating routine tasks for improved efficiency and reduced operational costs.",
    },
    {
      icon: <FaPenFancy size={50} className="mt-6" />,
      title: "Custom Queries",
      description:
        "Crafting advanced queries for specific data retrieval and analysis needs.",
    },
  ];

  const testimonialsData = [
    {
      quote: "Managing databases was a nightmare until AmeerSync optimized our queries and indexing. Our application runs much faster now!",
      author: "Michael Carter",
      company: "DataSphere"
    },
    {
      quote: "They helped us migrate our database from MySQL to PostgreSQL with zero downtime.",
      author: "Ethan Lewis",
      company: "CloudData"
    },
    {
      quote: "AmeerSync set up a high-availability database cluster, improving reliability and performance.",
      author: "Rachel Green",
      company: "ScaleDB"
    },
    {
      quote: "Their expertise in database normalization helped us reduce redundant data and improve query speed.",
      author: "David Williams",
      company: "DataOptimizer"
    },
    {
      quote: "They implemented advanced indexing strategies that made our reports load 3x faster.",
      author: "Sophia Kim",
      company: "BIAnalytics"
    },
    {
      quote: "AmeerSync optimized our database backup and recovery process, enhancing data security.",
      author: "Olivia Adams",
      company: "SecureData"
    },
    {
      quote: "Their NoSQL database implementation helped us scale our big data applications.",
      author: "Nathan Scott",
      company: "BigDataTech"
    },
    {
      quote: "AmeerSync helped us secure our database against SQL injection attacks and other vulnerabilities.",
      author: "Linda Thomas",
      company: "SafeNet"
    },
    {
      quote: "They integrated real-time data synchronization between our databases, ensuring seamless updates.",
      author: "James Carter",
      company: "LiveSync"
    }
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
      icon: <FaDatabase size={50} />,
      title: "MySQL",
      description:
        "A widely-used open-source relational database management system.",
    },
    {
      icon: <FaNetworkWired size={50} />,
      title: "PostgreSQL",
      description:
        "A powerful, open-source object-relational database system.",
    },
    {
      icon: <FaCloud size={50} />,
      title: "MongoDB",
      description:
        "A NoSQL database for modern, high-volume applications.",
    },
    {
      icon: <FaHdd size={50} />,
      title: "Oracle",
      description:
        "A comprehensive database solution for enterprise applications.",
    },
    {
      icon: <FaCog size={50} />,
      title: "SQL Server",
      description:
        "Microsoft's relational database for structured data storage and analysis.",
    },
    {
      icon: <FaLightbulb size={50} />,
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
    <div className="database-content w-100 bg-Bg">
     
      <motion.div
        className=""
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
         <HeroSection
        icon={FaDatabase}
     
        imageAlt="Database Solutions"
        buttonText="Get Started"
        title="Database Development Services"
        onButtonClick={handleButtonClick}
        imageSrc={Images.DATABASE_IMG}
        description="Unlock the power of efficient data management and analytics with our database solutions. From database design and optimization to secure cloud integration, we deliver tailored services that drive business success."
        details={
          "Our database services ensure your data is accessible, secure, and optimized for performance. Whether you're looking to implement a new database system, migrate to a cloud platform, or enhance existing setups, our team has the expertise to deliver. Explore the benefits of modern database technologies for improved decision-making and operational efficiency."
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

export default memo(DatabasesContent);