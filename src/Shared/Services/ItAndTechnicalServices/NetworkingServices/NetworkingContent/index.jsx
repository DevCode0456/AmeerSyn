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
  FaCheckCircle,
  FaNetworkWired,
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

const NetworkingContent = () => {
  const projects = [
    {
      title: "Network Design",
      description: "Developed scalable and secure network designs for businesses.",
      image: Images.NETWORKING_IMG1,
    },
    {
      title: "Wireless Solutions",
      description: "Implemented advanced wireless networking solutions for enterprises.",
      image: Images.NETWORKING_IMG2,
    },
    {
      title: "Network Security",
      description: "Enhanced network security with firewalls and intrusion detection systems.",
      image: Images.NETWORKING_IMG3,
    },
    {
      title: "Cloud Networking",
      description: "Integrated cloud networking solutions for seamless operations.",
      image: Images.NETWORKING_IMG4,
    },
  ];

  const services = [
    {
      icon: <FaNetworkWired size={100} className="mt-6" />,
      title: "Network Setup",
      description: "Setting up robust and reliable networks tailored to your needs.",
    },
    {
      icon: <FaTools size={100} className="mt-6" />,
      title: "Network Optimization",
      description: "Optimizing networks for peak performance and reliability.",
    },
    {
      icon: <FaLock size={100} className="mt-6" />,
      title: "Security Solutions",
      description: "Implementing robust security protocols for networks.",
    },
    {
      icon: <FaCloud size={100} className="mt-6" />,
      title: "Cloud Integration",
      description: "Seamless integration of networks with cloud platforms.",
    },
    {
      icon: <FaCog size={100} className="mt-6" />,
      title: "Network Automation",
      description: "Automating network management using advanced tools.",
    },
    {
      icon: <FaPenFancy size={100} className="mt-6" />,
      title: "Custom Solutions",
      description: "Crafting tailored networking solutions for unique business needs.",
    },
  ];

  const testimonialsData = [
    {
      text: "The network design improved our connectivity and efficiency.",
      name: "Alice Brown",
      role: "IT Manager",
      image: "https://via.placeholder.com/150",
    },
    {
      text: "Their wireless solutions transformed our office operations.",
      name: "Michael Green",
      role: "Network Engineer",
      image: "https://via.placeholder.com/150",
    },
    {
      text: "Outstanding support for our network security needs!",
      name: "Sarah Lee",
      role: "Security Analyst",
      image: "https://via.placeholder.com/150",
    },
  ];

  const faqs = [
    {
      question: "What types of networks do you support?",
      answer: "We support LAN, WAN, WLAN, and cloud-based networks.",
    },
    {
      question: "Can you help secure our network?",
      answer: "Yes, we provide comprehensive network security solutions.",
    },
    {
      question: "Do you offer 24/7 network monitoring?",
      answer: "Yes, we offer round-the-clock monitoring services.",
    },
    {
      question: "Can you integrate cloud solutions with our network?",
      answer: "Yes, we specialize in cloud network integration.",
    },
    {
      question: "Do you provide training on network management?",
      answer: "Yes, we offer training programs for individuals and teams.",
    },
  ];

  const technologies = [
    {
      icon: <FaNetworkWired size={100} />,
      title: "Cisco",
      description: "Leading solutions for enterprise networking.",
    },
    {
      icon: <FaCloud size={100} />,
      title: "AWS Networking",
      description: "Advanced cloud networking solutions.",
    },
    {
      icon: <FaLock size={100} />,
      title: "Fortinet",
      description: "Robust security for networks and systems.",
    },
    {
      icon: <FaCog size={100} />,
      title: "Juniper",
      description: "High-performance network solutions.",
    },
    {
      icon: <FaHdd size={100} />,
      title: "Aruba",
      description: "Innovative wireless networking technologies.",
    },
    {
      icon: <FaLightbulb size={100} />,
      title: "Palo Alto Networks",
      description: "Cutting-edge network security and automation.",
    },
  ];

  const reasons = [
    {
      icon: <FaCheckCircle />,
      title: "Experienced Network Professionals",
      description:
        "Our team has extensive experience in designing and managing networks.",
    },
    {
      icon: <FaUserCheck />,
      title: "Client-Focused Approach",
      description:
        "We deliver networking solutions that prioritize your business needs.",
    },
    {
      icon: <FaClock />,
      title: "Timely Project Delivery",
      description:
        "We ensure network projects are completed on time without compromising quality.",
    },
    {
      icon: <FaHandshake />,
      title: "Reliable Support",
      description:
        "Our team is available to assist you with any networking challenges.",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovative Networking Solutions",
      description:
        "We implement advanced tools and technologies for modern networks.",
    },
  ];

  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="networking-content w-100 bg-white">
      <HeroSection
        icon={FaNetworkWired}
        imageWidth="600px"
        imageHeight="400px"
        imageAlt="Networking Solutions"
        buttonText="Get Started"
        title="Networking Services"
        onButtonClick={handleButtonClick}
        imageSrc={Images.NETWORKING_IMG1}
        description="Empower your business with our cutting-edge networking solutions. From setup and optimization to security and automation, we deliver services tailored to your needs."
        details={
          "Our networking services ensure reliable, secure, and efficient operations. Whether it's designing a new network, integrating cloud solutions, or enhancing security, we have the expertise to support you. Explore the advantages of modern networking technologies for scalable and robust solutions."
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

export default memo(NetworkingContent);
