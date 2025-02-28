import {
  FaCog,
  FaHdd,
  FaLock,
  FaTools,
  FaClock,
  FaLinux,
  FaCloud,
  FaPenFancy,
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
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ServicesSection from "../../../../PagesSectionComponents/ServicesSection";
import WhyChooseUsSection from "../../../../PagesSectionComponents/WhyChooseUsSection";
import TestimonialsSection from "../../../../PagesSectionComponents/TestimonialsSection";
import TechnologiesSection from "../../../../PagesSectionComponents/TechnologiesSection";

const LinuxContent = () => {
  const services = [
    {
      icon: <FaLinux size={100} className="mt-6" />,
      title: "Linux Installation",
      description:
        "Comprehensive Linux installation services tailored to your needs.",
    },
    {
      icon: <FaTools size={100} className="mt-6" />,
      title: "System Optimization",
      description:
        "Optimizing Linux systems for maximum performance and reliability.",
    },
    {
      icon: <FaLock size={100} className="mt-6" />,
      title: "Security Solutions",
      description:
        "Implementing robust security protocols for Linux environments.",
    },
    {
      icon: <FaCloud size={100} className="mt-6" />,
      title: "Cloud Integration",
      description:
        "Seamless integration of Linux systems with cloud platforms.",
    },
    {
      icon: <FaCog size={100} className="mt-6" />,
      title: "System Automation",
      description:
        "Automating routine tasks using advanced Linux tools and scripting.",
    },
    {
      icon: <FaPenFancy size={100} className="mt-6" />,
      title: "Custom Solutions",
      description:
        "Crafting tailored Linux solutions to meet unique business requirements.",
    },
  ];

  const testimonialsData = [
    {
      quote:
        "Their Linux support team helped us configure and optimize our servers for maximum efficiency.",
      author: "Daniel Reed",
      company: "TechOps",
    },
    {
      quote:
        "They set up a secure and scalable Linux server for our SaaS platform, ensuring high uptime.",
      author: "Alex Turner",
      company: "CloudFlex",
    },
    {
      quote:
        "AmeerSync automated our Linux server deployments, saving us hours of manual setup.",
      author: "Sophia Mitchell",
      company: "DevOpsWorks",
    },
    {
      quote:
        "Their security hardening for our Linux servers helped prevent cyberattacks.",
      author: "William Scott",
      company: "SecureNet",
    },
    {
      quote:
        "AmeerSync’s Linux expertise resolved our performance issues with kernel tuning.",
      author: "Ethan Walker",
      company: "DataFlow",
    },
    {
      quote:
        "They set up a high-availability cluster on Linux that improved our system reliability.",
      author: "Olivia Adams",
      company: "WebScale",
    },
    {
      quote:
        "Their troubleshooting skills helped us recover from a critical Linux system failure quickly.",
      author: "Michael Roberts",
      company: "TechRescue",
    },
    {
      quote:
        "AmeerSync migrated our entire infrastructure to a Linux-based environment seamlessly.",
      author: "Charlotte Evans",
      company: "CloudSwitch",
    },
    {
      quote:
        "Their expertise in Linux containerization with Docker improved our deployment efficiency.",
      author: "Lucas Bennett",
      company: "DevContainer",
    },
  ];

  const faqs = [
    {
      question: "What Linux distributions do you support?",
      answer: "We support Ubuntu, CentOS, Debian, Fedora, and more.",
    },
    {
      question: "Can you help with Linux server security?",
      answer:
        "Yes, we offer comprehensive security solutions for Linux servers.",
    },
    {
      question: "Do you provide Linux system monitoring?",
      answer: "Yes, we provide 24/7 monitoring services for Linux systems.",
    },
    {
      question: "Can you automate tasks on Linux?",
      answer:
        "Yes, we specialize in creating shell scripts and automation tools.",
    },
    {
      question: "Do you offer Linux training?",
      answer:
        "Yes, we provide training for individuals and teams on Linux systems.",
    },
  ];

  const technologies = [
    {
      icon: <FaLinux size={100} />,
      title: "Ubuntu",
      description: "A user-friendly and versatile Linux distribution.",
    },
    {
      icon: <FaNetworkWired size={100} />,
      title: "CentOS",
      description: "A robust Linux distribution for enterprise applications.",
    },
    {
      icon: <FaCloud size={100} />,
      title: "Red Hat",
      description: "A leading Linux platform for enterprise solutions.",
    },
    {
      icon: <FaHdd size={100} />,
      title: "Debian",
      description: "A stable and secure Linux distribution.",
    },
    {
      icon: <FaCog size={100} />,
      title: "Fedora",
      description:
        "An innovative Linux distribution for developers and tech enthusiasts.",
    },
    {
      icon: <FaLightbulb size={100} />,
      title: "Kali Linux",
      description: "A Linux distribution designed for security professionals.",
    },
  ];

  const reasons = [
    {
      icon: <FaCheckCircle />,
      title: "Experienced Linux Experts",
      description:
        "Our team has extensive experience in managing Linux-based systems.",
    },
    {
      icon: <FaUserCheck />,
      title: "Client-Centric Approach",
      description:
        "We prioritize your needs to deliver customized Linux solutions.",
    },
    {
      icon: <FaClock />,
      title: "Timely Project Completion",
      description:
        "We ensure projects are completed on time without compromising quality.",
    },
    {
      icon: <FaHandshake />,
      title: "Reliable Support",
      description:
        "Our team is available to assist you with any Linux-related challenges.",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovative Solutions",
      description:
        "We implement cutting-edge tools and practices for Linux systems.",
    },
  ];

  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="linux-content w-100 bg-white">
      <motion.div
        className="mt-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection
          icon={FaLinux}
          imageAlt="Linux Solutions"
          buttonText="Get Started"
          title="Linux Development Services"
          onButtonClick={handleButtonClick}
          imageSrc={Images.LINUX_IMG}
          description="Unlock the power of Linux with our tailored solutions. From server setup and optimization to system security and automation, we deliver services that meet your business goals."
          details={
            "Our Linux services ensure reliable, secure, and efficient operations. Whether it's setting up a new system, integrating cloud solutions, or automating processes, we have the expertise to help. Explore the benefits of Linux for cost-effective and scalable solutions."
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

export default memo(LinuxContent);
