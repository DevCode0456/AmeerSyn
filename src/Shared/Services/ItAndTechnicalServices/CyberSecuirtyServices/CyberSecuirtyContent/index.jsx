import {
  FaShieldAlt,
  FaUserShield,
  FaLock,
  FaBug,
  FaCodeBranch,
  FaCloud,
  FaLaptopCode,
  FaKey,
  FaLightbulb,
  FaTools,
  FaCheckCircle
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

const CyberSecurityContent = () => {
  const projects = [
    {
      title: "Threat Detection System",
      description:
        "Developed an advanced system to detect and mitigate cyber threats in real-time.",
      image: Images.CYBERSECURITY_IMG1,
    },
    {
      title: "Data Encryption",
      description:
        "Implemented robust encryption techniques to secure sensitive data.",
      image: Images.CYBERSECURITY_IMG2,
    },
    {
      title: "Vulnerability Assessment",
      description:
        "Conducted comprehensive vulnerability assessments for various networks.",
      image: Images.CYBERSECURITY_IMG3,
    },
    {
      title: "Incident Response",
      description:
        "Designed effective incident response plans for cybersecurity breaches.",
      image: Images.CYBERSECURITY_IMG4,
    },
  ];

  const services = [
    {
      icon: <FaShieldAlt size={100} className="mt-6" />,
      title: "Cyber Threat Analysis",
      description:
        "Identifying potential cyber threats and implementing mitigation strategies.",
    },
    {
      icon: <FaUserShield size={100} className="mt-6" />,
      title: "Identity Protection",
      description:
        "Securing digital identities with advanced authentication techniques.",
    },
    {
      icon: <FaLock size={100} className="mt-6" />,
      title: "Data Security",
      description:
        "Protecting sensitive data from unauthorized access and breaches.",
    },
    {
      icon: <FaBug size={100} className="mt-6" />,
      title: "Bug Bounty Programs",
      description:
        "Managing and conducting bug bounty programs to identify vulnerabilities.",
    },
    {
      icon: <FaCloud size={100} className="mt-6" />,
      title: "Cloud Security",
      description:
        "Ensuring secure access and storage in cloud environments.",
    },
    {
      icon: <FaLaptopCode size={100} className="mt-6" />,
      title: "Penetration Testing",
      description:
        "Simulating cyberattacks to identify and resolve system weaknesses.",
    },
  ];

  const testimonialsData = [
    {
      text: "Their penetration testing services are top-notch and revealed critical issues we overlooked.",
      name: "Sarah Wilson",
      role: "Security Analyst",
      image: "https://via.placeholder.com/150",
    },
    {
      text: "Impressive expertise in securing cloud platforms. Highly recommend their services!",
      name: "James Carter",
      role: "Cloud Engineer",
      image: "https://via.placeholder.com/150",
    },
    {
      text: "The incident response plan they designed saved our company from a major breach.",
      name: "Emily Davis",
      role: "IT Manager",
      image: "https://via.placeholder.com/150",
    },
  ];

  const faqs = [
    {
      question: "What types of cyber threats do you address?",
      answer: "We handle malware, phishing, ransomware, and advanced persistent threats.",
    },
    {
      question: "Do you provide 24/7 monitoring?",
      answer: "Yes, we offer round-the-clock monitoring services for your systems.",
    },
    {
      question: "Can you help with regulatory compliance?",
      answer: "Absolutely, we assist in meeting GDPR, HIPAA, and other compliance requirements.",
    },
    {
      question: "What is penetration testing?",
      answer: "Penetration testing involves simulating cyberattacks to identify system vulnerabilities.",
    },
    {
      question: "Do you offer cybersecurity training?",
      answer: "Yes, we provide training for employees to enhance cybersecurity awareness.",
    },
  ];

  const technologies = [
    {
      icon: <FaCodeBranch size={100} />,
      title: "Firewall Solutions",
      description: "Advanced firewalls to safeguard your network.",
    },
    {
      icon: <FaKey size={100} />,
      title: "Encryption Tools",
      description: "Cutting-edge tools for data encryption and secure communication.",
    },
    {
      icon: <FaCloud size={100} />,
      title: "Cloud Security",
      description: "Ensuring safety in cloud-based systems and services.",
    },
    {
      icon: <FaLaptopCode size={100} />,
      title: "Security Scanners",
      description: "Tools to identify vulnerabilities across systems and applications.",
    },
    {
      icon: <FaLightbulb size={100} />,
      title: "Threat Intelligence",
      description: "Proactively identifying and addressing emerging cyber threats.",
    },
    {
      icon: <FaTools size={100} />,
      title: "Security Automation",
      description: "Automated tools to streamline security operations.",
    },
  ];

  const reasons = [
    {
      icon: <FaCheckCircle />,
      title: "Proven Expertise",
      description:
        "Our team has a proven track record of addressing complex cybersecurity challenges.",
    },
    {
      icon: <FaUserShield />,
      title: "Client-Focused Solutions",
      description:
        "We tailor our cybersecurity services to meet each client's unique needs.",
    },
    {
      icon: <FaLock />,
      title: "Robust Security Measures",
      description:
        "We implement industry-leading practices to ensure comprehensive protection.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Innovative Techniques",
      description:
        "Utilizing the latest tools and methodologies to combat cyber threats.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Continuous Support",
      description:
        "Our team is always available to assist with your cybersecurity concerns.",
    },
  ];

  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="cybersecurity-content w-100 bg-white">
      <HeroSection
        icon={FaShieldAlt}
        imageWidth="600px"
        imageHeight="400px"
        imageAlt="Cybersecurity Solutions"
        buttonText="Get Started"
        title="Cybersecurity Services"
        onButtonClick={handleButtonClick}
        imageSrc={Images.CYBERSECURITY_IMG1}
        description="Protect your digital assets with our comprehensive cybersecurity solutions. From threat detection to incident response, we provide end-to-end security services."
        details={
          "Our cybersecurity services are designed to safeguard your business against evolving threats. We offer a range of services including vulnerability assessments, penetration testing, and incident response plans. Stay secure with our trusted expertise."
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

export default memo(CyberSecurityContent);
