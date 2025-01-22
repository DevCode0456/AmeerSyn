import {
  FaCog,
  FaHdd,
  FaLock,
  FaTools,
  FaClock,
  FaCloud,
  FaPenFancy,
  FaUserCheck,
  FaHandshake,
  FaLightbulb,
  FaShieldAlt,
  FaCodeBranch, 
  FaCheckCircle,
  FaNetworkWired,
  FaLinux
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

const LinuxContent = () => {
  const projects = [
    {
      title: "Linux Server Setup",
      description:
        "Configured and optimized Linux servers for high availability and performance.",
      image: Images.LINUX_IMG1,
    },
    {
      title: "Shell Scripting",
      description:
        "Developed custom shell scripts for automation and process efficiency.",
      image: Images.LINUX_IMG2,
    },
    {
      title: "Network Management",
      description:
        "Implemented robust networking solutions using Linux-based systems.",
      image: Images.LINUX_IMG3,
    },
    {
      title: "System Security",
      description:
        "Enhanced system security with advanced Linux-based tools and techniques.",
      image: Images.LINUX_IMG4,
    },
  ];

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
      text: "The Linux server setup was flawless and improved our operations.",
      name: "John Doe",
      role: "System Administrator",
      image: "https://via.placeholder.com/150",
    },
    {
      text: "Exceptional shell scripting services that saved us time and resources!",
      name: "Jane Smith",
      role: "DevOps Engineer",
      image: "https://via.placeholder.com/150",
    },
    {
      text: "Highly recommend their expertise in Linux-based security solutions.",
      name: "Robert Johnson",
      role: "IT Specialist",
      image: "https://via.placeholder.com/150",
    },
  ];

  const faqs = [
    {
      question: "What Linux distributions do you support?",
      answer: "We support Ubuntu, CentOS, Debian, Fedora, and more.",
    },
    {
      question: "Can you help with Linux server security?",
      answer: "Yes, we offer comprehensive security solutions for Linux servers.",
    },
    {
      question: "Do you provide Linux system monitoring?",
      answer: "Yes, we provide 24/7 monitoring services for Linux systems.",
    },
    {
      question: "Can you automate tasks on Linux?",
      answer: "Yes, we specialize in creating shell scripts and automation tools.",
    },
    {
      question: "Do you offer Linux training?",
      answer: "Yes, we provide training for individuals and teams on Linux systems.",
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
      description: "An innovative Linux distribution for developers and tech enthusiasts.",
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
      <HeroSection
        icon={FaLinux}
        imageWidth="600px"
        imageHeight="400px"
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

export default memo(LinuxContent);
