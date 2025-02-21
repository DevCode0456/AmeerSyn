import {
  FaFileAlt,
  FaPenFancy,
  FaCheckCircle,
  FaUserCheck,
  FaClock,
  FaShieldAlt,
  FaThumbsUp,
  FaHandshake,
  FaCloud,
  FaClipboardList,
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
import ServicesSection from "../../../../PagesSectionComponents/ServicesSection";
import ProjectsSection from "../../../../PagesSectionComponents/ProjectsSection";
import TechnologiesSection from "../../../../PagesSectionComponents/TechnologiesSection";
import TestimonialsSection from "../../../../PagesSectionComponents/TestimonialsSection";
import WhyChooseUsSection from "../../../../PagesSectionComponents/WhyChooseUsSection";

const ResearchPapperContent = () => {
  const projects = [
    {
      title: "Research Paper Editing",
      description: "Improving the quality of academic research papers for submission.",
      image: Images.RESEARCH_PAPER_IMG1,
    },
    {
      title: "Technical Research Paper Proofreading",
      description: "Enhancing the technical aspects and ensuring clarity of technical research.",
      image: Images.RESEARCH_PAPER_IMG2,
    },
    {
      title: "Journal Paper Proofreading",
      description: "Proofreading papers for academic journals and conferences.",
      image: Images.RESEARCH_PAPER_IMG3,
    },
    {
      title: "Thesis and Dissertation Proofreading",
      description: "Polishing your thesis and dissertation for a professional presentation.",
      image: Images.RESEARCH_PAPER_IMG4,
    },
  ];

  const services = [
    {
      icon: <FaPenFancy size={100} className="mt-6" />,
      title: "Grammar and Syntax Correction",
      description: "We correct grammar and syntax errors to make your paper professional.",
    },
    {
      icon: <FaFileAlt size={100} className="mt-6" />,
      title: "Clarity and Structure Improvement",
      description: "We enhance the clarity and flow of your research paper.",
    },
    {
      icon: <FaCheckCircle size={100} className="mt-6" />,
      title: "Citation and Reference Check",
      description: "We ensure your citations and references follow the required academic style.",
    },
    {
      icon: <FaClipboardList size={100} className="mt-6" />,
      title: "Consistency and Formatting",
      description: "We ensure consistency and proper formatting throughout your paper.",
    },
  ];

  const testimonialsData = [
    {
      text: "The editing and proofreading service transformed my paper into a professional masterpiece. Highly recommend!",
      name: "James Richardson",
      role: "PhD Candidate",
      image: "https://via.placeholder.com/150",
    },
    {
      text: "I had my journal paper proofread, and the improvements were outstanding. Will definitely use this service again!",
      name: "Olivia Thompson",
      role: "Researcher",
      image: "https://via.placeholder.com/150",
    },
    {
      text: "The proofreading service was quick, thorough, and professional. It really helped me improve my thesis.",
      name: "David Miller",
      role: "Master's Student",
      image: "https://via.placeholder.com/150",
    },
  ];

  const faqs = [
    {
      question: "Can you proofread my entire thesis?",
      answer: "Yes, we offer full thesis proofreading services including formatting, citations, and structure improvements.",
    },
    {
      question: "Do you proofread technical research papers?",
      answer: "Yes, we have expertise in proofreading technical research papers and enhancing their clarity.",
    },
    {
      question: "What citation styles do you work with?",
      answer: "We work with all major citation styles including APA, MLA, Chicago, and more.",
    },
    {
      question: "How long does it take to proofread a research paper?",
      answer: "The time depends on the length and complexity, but we provide a fast turnaround without compromising quality.",
    },
  ];

  const reasons = [
    {
      icon: <FaThumbsUp />,
      title: "Expert Research Paper Editors",
      description: "Our team consists of academic professionals with expertise in research paper editing.",
    },
    {
      icon: <FaUserCheck />,
      title: "Experienced in Academic Writing",
      description: "We specialize in academic writing and understand the standards required for research papers.",
    },
    {
      icon: <FaClock />,
      title: "Quick and Reliable Service",
      description: "We deliver high-quality proofreading services with fast turnaround times.",
    },
    {
      icon: <FaHandshake />,
      title: "Customer Satisfaction Guarantee",
      description: "We offer revisions until you are completely satisfied with the results.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Confidentiality and Security",
      description: "Your research is handled with the highest confidentiality and security.",
    },
  ];

  const technologies = [
    {
      icon: <FaFileAlt size={100} />,
      title: "Microsoft Word",
      description: "We use Microsoft Word for its advanced editing and commenting features.",
    },
    {
      icon: <FaPenFancy size={100} />,
      title: "Google Docs",
      description: "We also provide proofreading for papers shared through Google Docs.",
    },
    {
      icon: <FaCloud size={100} />,
      title: "Cloud Services",
      description: "We access your paper from secure cloud services for proofreading.",
    },
  ];

  const handleButtonClick = () => {
    alert("Get Started button clicked!");
  };

  return (
    <div className="research-paper-content w-100 bg-white">
      <HeroSection
        icon={FaPenFancy}
        imageWidth="600px"
        imageHeight="400px"
        imageAlt="Research Paper Proofreading"
        buttonText="Get Started"
        title="Professional Research Paper Proofreading Services"
        onButtonClick={handleButtonClick}
        imageSrc={Images.RESEARCH_PAPER_IMG1}
        description="Get your research paper proofread and polished by experienced professionals who specialize in academic writing and research."
        details="Our research paper proofreading services include grammar checks, clarity improvements, citation formatting, and consistency checks."
      />
    <ServicesSection services={services} />
      <ProjectsSection projects={reasons} />
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

export default memo(ResearchPapperContent);
