import {
  FaThumbsUp,
  FaLaptopCode,
  FaGraduationCap,
  FaProjectDiagram,
  FaRobot,
  FaLock,
  FaWifi,
  FaMobileAlt,
  FaGlobe,
} from "react-icons/fa";
import React, { memo } from "react";
import { motion } from "framer-motion";
import Accordin from "../../../../Accordin";
import HeroSection from "../../../../HeroSection";
import Images from "../../../../../Helper/ImagesConstant";
import ContactUsSection from "../../../../ContactUsSection";
import ProjectsSection from "../../../../PagesSectionComponents/ProjectsSection";
import ServicesSection from "../../../../PagesSectionComponents/ServicesSection";
import WhyChooseUsSection from "../../../../PagesSectionComponents/WhyChooseUsSection";
import TechnologiesSection from "../../../../PagesSectionComponents/TechnologiesSection";
import TestimonialsSection from "../../../../PagesSectionComponents/TestimonialsSection";

const FinalYearProjectContent = () => {
  const services = [
    {
      icon: <FaGraduationCap size={100} className="mt-6" />,
      title: "Custom Final Year Project Ideas",
      description:
        "Innovative and customized project ideas across various domains to suit your academic needs.",
    },
    {
      icon: <FaLaptopCode size={100} className="mt-6" />,
      title: "Project Development & Guidance",
      description:
        "Comprehensive services including coding, debugging, and deployment to bring your ideas to life.",
    },
    {
      icon: <FaProjectDiagram size={100} className="mt-6" />,
      title: "Research & Documentation Support",
      description:
        "Professional assistance in preparing research papers, project reports, and thesis documentation.",
    },
    {
      icon: <FaThumbsUp size={100} className="mt-6" />,
      title: "Presentation Preparation",
      description:
        "Prepare impactful presentations with visual aids and speech coaching for confident delivery.",
    },
  ];

  const projects = [
    {
      title: "AI-Based Chatbot for Customer Support",
      description:
        "Developed using Natural Language Processing (NLP) to enhance user engagement and response accuracy.",
      image: Images.FINAL_YEAR_IMG1,
    },
    {
      title: "Mobile App for Healthcare Management",
      description:
        "A comprehensive mobile solution for managing patient data, appointments, and prescriptions.",
      image: Images.FINAL_YEAR_IMG2,
    },
    {
      title: "Blockchain-Based Voting System",
      description:
        "Secure and transparent blockchain technology to revolutionize the voting process.",
      image: Images.FINAL_YEAR_IMG3,
    },
    {
      title: "IoT-Based Smart Traffic Management",
      description:
        "Real-time optimization of traffic flow and congestion reduction using IoT sensors and algorithms.",
      image: Images.FINAL_YEAR_IMG4,
    },
  ];

  const technologies = [
    {
      icon: <FaRobot size={100} className="text-blue-500" />,
      title: "Artificial Intelligence",
      description: "Leverage AI for innovative and intelligent solutions.",
    },
    {
      icon: <FaLock size={100} className="text-green-500" />,
      title: "Blockchain",
      description: "Implement secure and decentralized systems.",
    },
    {
      icon: <FaWifi size={100} className="text-red-500" />,
      title: "Internet of Things (IoT)",
      description: "Connect devices for smart and automated environments.",
    },
    {
      icon: <FaMobileAlt size={100} className="text-purple-500" />,
      title: "Mobile Development",
      description: "Create user-friendly and efficient mobile applications.",
    },
    {
      icon: <FaGlobe size={100} className="text-yellow-500" />,
      title: "Web Development",
      description: "Build responsive and modern web applications.",
    },
  ];
  

  const reasons = [
    {
      icon: <FaLaptopCode />,
      title: "Expert Guidance",
      description:
        "Experienced mentors providing step-by-step guidance throughout your project journey.",
    },
    {
      icon: <FaProjectDiagram />,
      title: "End-to-End Solutions",
      description:
        "Comprehensive services from ideation to project presentation.",
    },
    {
      icon: <FaGraduationCap />,
      title: "Proven Track Record",
      description:
        "Students who worked with us achieved high grades and successful project outcomes.",
    },
    {
      icon: <FaThumbsUp />,
      title: "Affordable Pricing",
      description: "Top-quality services at cost-effective rates for students.",
    },
  ];

  const faqs = [
    {
      question: "How can I select the best final year project idea?",
      answer:
        "We help you choose from a range of innovative project ideas based on your field of study, interests, and industry trends.",
    },
    {
      question: "Do you provide project development services?",
      answer:
        "Yes, we offer complete development services, including coding, debugging, and deployment of your final year project.",
    },
    {
      question: "What documentation services do you offer?",
      answer:
        "We assist with writing research papers, project reports, and thesis documentation, ensuring that it aligns with academic requirements.",
    },
    {
      question: "Can you help me prepare for the final presentation?",
      answer:
        "Yes, we guide you on how to prepare and deliver an impactful project presentation, including visual aids and speech coaching.",
    },
    {
      question: "What technologies do you use for project development?",
      answer:
        "We use the latest technologies like AI, Blockchain, IoT, Mobile Development, and more, depending on your project requirements.",
    },
  ];

  const handleButtonClick = () => {
    alert("Get Started with Your Final Year Project!");
  };

  return (
    <div className="final-year-projects-content w-full bg-gray-100">
      <HeroSection
        icon={FaGraduationCap}
        imageWidth="600px"
        imageHeight="400px"
        imageAlt="Final Year Projects"
        buttonText="Get Started"
        title="Expert Final Year Project Solutions"
        onButtonClick={handleButtonClick}
        imageSrc={Images.FINAL_YEAR_IMG1}
        description="We specialize in providing end-to-end solutions for your final year projects. From innovative project ideas to complete implementation and presentation guidance, we've got you covered."
        details="Our expert team ensures you achieve academic success with tailored solutions that meet your project's unique requirements. Whether you need assistance with coding, documentation, or final presentation, we deliver unmatched support across multiple disciplines."
      />
      <ServicesSection services={services} />
      <ProjectsSection projects={projects} />
      <TechnologiesSection technologies={technologies} />
      <TestimonialsSection />
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

export default memo(FinalYearProjectContent);
