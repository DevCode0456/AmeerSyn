import {
  FaWifi,
  FaLock,
  FaRobot,
  FaGlobe,
  FaThumbsUp,
  FaMobileAlt,
  FaLaptopCode,
  FaGraduationCap,
  FaProjectDiagram,
} from "react-icons/fa";
import React, { memo } from "react";
import { motion } from "framer-motion";
import Accordin from "../../../../Accordin";
import HeroSection from "../../../../HeroSection";
import Images from "../../../../../Helper/ImagesConstant";
import ContactUsSection from "../../../../ContactUsSection";
import ServicesSection from "../../../../PagesSectionComponents/ServicesSection";
import WhyChooseUsSection from "../../../../PagesSectionComponents/WhyChooseUsSection";
import TechnologiesSection from "../../../../PagesSectionComponents/TechnologiesSection";
import TestimonialsSection from "../../../../PagesSectionComponents/TestimonialsSection";

const FinalYearProjectContent = () => {
  const testimonialsData = [
    {
      quote:
        "My final year project needed expert guidance, and AmeerSync provided just that! Their mentorship was invaluable.",
      author: "Sophia Bennett",
      company: "University Graduate",
    },
    {
      quote:
        "They helped me with complex coding tasks in my final year project, ensuring clean and optimized code.",
      author: "David Williams",
      company: "CS Major",
    },
    {
      quote:
        "AmeerSync assisted me in designing and testing my IoT-based project, making it industry-ready.",
      author: "Rachel Green",
      company: "Tech Innovators",
    },
    {
      quote:
        "Their structured project planning helped me manage my time effectively and meet deadlines.",
      author: "Michael Carter",
      company: "Engineering Student",
    },
    {
      quote:
        "They provided valuable research insights that made my final year dissertation more impactful.",
      author: "Sophia Kim",
      company: "Academia Research",
    },
    {
      quote:
        "AmeerSync’s debugging skills helped me resolve critical issues in my project at the last moment.",
      author: "Ethan Lewis",
      company: "Software Engineering",
    },
    {
      quote:
        "They helped with the documentation of my project, ensuring clear explanations and professional formatting.",
      author: "Olivia Brown",
      company: "Technical Writer",
    },
    {
      quote:
        "Their real-world project implementation tips made my work stand out during the final presentation.",
      author: "Nathan Scott",
      company: "Project Excellence",
    },
    {
      quote:
        "AmeerSync’s project review and feedback significantly improved my work, leading to top grades.",
      author: "James Carter",
      company: "University Student",
    },
  ];

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
    <div className="final-year-projects-content w-full bg-Bg">
      <motion.div
        className=""
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection
          icon={FaGraduationCap}
          buttonText="Get Started"
          imageAlt="Final Year Projects"
          onButtonClick={handleButtonClick}
          imageSrc={Images.FINAL_YEAR_IMG}
          title="Expert Final Year Project Solutions"
          description="We specialize in providing end-to-end solutions for your final year projects. From innovative project ideas to complete implementation and presentation guidance, we've got you covered."
          details="Our expert team ensures you achieve academic success with tailored solutions that meet your project's unique requirements. Whether you need assistance with coding, documentation, or final presentation, we deliver unmatched support across multiple disciplines."
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

export default memo(FinalYearProjectContent);
