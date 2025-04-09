import {
  FaCog,
  FaHdd,
  FaLock,
  FaTools,
  FaClock,
  FaCloud,
  FaPenFancy,
  FaLightbulb,
  FaUserCheck,
  FaHandshake,
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
import TechnologiesSection from "../../../../PagesSectionComponents/TechnologiesSection";
import TestimonialsSection from "../../../../PagesSectionComponents/TestimonialsSection";

const NetworkingContent = () => {
 

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
      quote: "Their networking solutions are fantastic! We struggled with connectivity and security issues, but AmeerSync streamlined our entire infrastructure.",
      author: "William Harris",
      company: "Enterprise Networks"
    },
    {
      quote: "They optimized our office network, eliminating lag and increasing speed significantly.",
      author: "Sophia Mitchell",
      company: "SpeedNet"
    },
    {
      quote: "AmeerSync implemented a secure VPN for our remote teams, improving productivity and security.",
      author: "David Williams",
      company: "RemoteWorks"
    },
    {
      quote: "Their firewall and cybersecurity setup protected us from constant cyber threats.",
      author: "Rachel Green",
      company: "CyberSafe"
    },
    {
      quote: "They designed a scalable cloud networking solution for our distributed applications.",
      author: "Ethan Lewis",
      company: "CloudConnect"
    },
    {
      quote: "AmeerSync resolved our network congestion issues with advanced traffic management strategies.",
      author: "Linda Thomas",
      company: "NetFlow"
    },
    {
      quote: "Their wireless networking solutions improved our office Wi-Fi coverage and performance.",
      author: "Nathan Scott",
      company: "SmartOffice"
    },
    {
      quote: "They configured our data center networking, ensuring seamless communication between servers.",
      author: "Lucas Bennett",
      company: "DataHub"
    },
    {
      quote: "AmeerSync provided an effective network monitoring solution that helps us detect issues before they become critical.",
      author: "Emily White",
      company: "ITGuard"
    }
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
    <div className="networking-content w-100 bg-Bg">
      
      <motion.div
        className=""
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection
        icon={FaNetworkWired}
       
        imageAlt="Networking Solutions"
        buttonText="Get Started"
        title="Networking Services"
        onButtonClick={handleButtonClick}
        imageSrc={Images.NETWORKING_IMG}
        description="Empower your business with our cutting-edge networking solutions. From setup and optimization to security and automation, we deliver services tailored to your needs."
        details={
          "Our networking services ensure reliable, secure, and efficient operations. Whether it's designing a new network, integrating cloud solutions, or enhancing security, we have the expertise to support you. Explore the advantages of modern networking technologies for scalable and robust solutions."
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

export default memo(NetworkingContent);
