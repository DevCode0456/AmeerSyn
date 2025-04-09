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
  FaCheckCircle,
} from "react-icons/fa";
import React, { memo } from "react";
import { motion } from "framer-motion";
import Accordin from "../../../../Accordin";
import HeroSection from "../../../../HeroSection";

import Images from "../../../../../Helper/ImagesConstant";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ContactUsSection from "../../../../ContactUsSection";
import WhyChooseUsSection from "../../../../PagesSectionComponents/WhyChooseUsSection";
import TestimonialsSection from "../../../../PagesSectionComponents/TestimonialsSection";
import TechnologiesSection from "../../../../PagesSectionComponents/TechnologiesSection";
import ServicesSection from "../../../../PagesSectionComponents/ServicesSection";

const CyberSecurityContent = () => {
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
      description: "Ensuring secure access and storage in cloud environments.",
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
      quote:
        "Cybersecurity threats were a major concern for us, but AmeerSync implemented strong security measures that protected our data.",
      author: "Nathan Lewis",
      company: "SecureNet",
    },
    {
      quote:
        "Their penetration testing services helped us identify vulnerabilities before hackers could.",
      author: "David Williams",
      company: "EthicalShield",
    },
    {
      quote:
        "AmeerSync set up a robust firewall system that blocked numerous cyber attacks.",
      author: "Rachel Green",
      company: "NetSecure",
    },
    {
      quote:
        "They trained our staff on best cybersecurity practices, reducing phishing attack risks.",
      author: "Michael Carter",
      company: "CyberAware",
    },
    {
      quote:
        "Their encryption solutions helped us secure sensitive customer data efficiently.",
      author: "Sophia Kim",
      company: "DataVault",
    },
    {
      quote:
        "AmeerSync’s DDoS protection measures ensured our website stayed online during heavy traffic surges.",
      author: "Ethan Lewis",
      company: "UptimePro",
    },
    {
      quote:
        "They helped us comply with security regulations, avoiding legal complications.",
      author: "Olivia Brown",
      company: "ComplySecure",
    },
    {
      quote:
        "Their team detected and removed malware from our systems, preventing data breaches.",
      author: "Nathan Scott",
      company: "MalwareFix",
    },
    {
      quote:
        "AmeerSync secured our cloud applications, protecting us from unauthorized access.",
      author: "James Carter",
      company: "CloudDefense",
    },
  ];

  const faqs = [
    {
      question: "What types of cyber threats do you address?",
      answer:
        "We handle malware, phishing, ransomware, and advanced persistent threats.",
    },
    {
      question: "Do you provide 24/7 monitoring?",
      answer:
        "Yes, we offer round-the-clock monitoring services for your systems.",
    },
    {
      question: "Can you help with regulatory compliance?",
      answer:
        "Absolutely, we assist in meeting GDPR, HIPAA, and other compliance requirements.",
    },
    {
      question: "What is penetration testing?",
      answer:
        "Penetration testing involves simulating cyberattacks to identify system vulnerabilities.",
    },
    {
      question: "Do you offer cybersecurity training?",
      answer:
        "Yes, we provide training for employees to enhance cybersecurity awareness.",
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
      description:
        "Cutting-edge tools for data encryption and secure communication.",
    },
    {
      icon: <FaCloud size={100} />,
      title: "Cloud Security",
      description: "Ensuring safety in cloud-based systems and services.",
    },
    {
      icon: <FaLaptopCode size={100} />,
      title: "Security Scanners",
      description:
        "Tools to identify vulnerabilities across systems and applications.",
    },
    {
      icon: <FaLightbulb size={100} />,
      title: "Threat Intelligence",
      description:
        "Proactively identifying and addressing emerging cyber threats.",
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
    <div className="cybersecurity-content w-100 bg-Bg">
      <motion.div
        className=""
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection
          icon={FaShieldAlt}
          imageAlt="Cybersecurity Solutions"
          buttonText="Get Started"
          title="Cybersecurity Services"
          onButtonClick={handleButtonClick}
          imageSrc={Images.CYBER_SECURITY_IMG}
          description="Protect your digital assets with our comprehensive cybersecurity solutions. From threat detection to incident response, we provide end-to-end security services."
          details={
            "Our cybersecurity services are designed to safeguard your business against evolving threats. We offer a range of services including vulnerability assessments, penetration testing, and incident response plans. Stay secure with our trusted expertise."
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

export default memo(CyberSecurityContent);
