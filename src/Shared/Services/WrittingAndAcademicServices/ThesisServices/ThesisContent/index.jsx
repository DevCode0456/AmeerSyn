import {
  FaClock,
  FaCloud,
  FaFileAlt,
  FaThumbsUp,
  FaPenFancy,
  FaShieldAlt,
  FaHandshake,
  FaUserCheck,
  FaCheckCircle,
  FaClipboardList,
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

const ThesisContent = () => {


  const services = [
    {
      icon: <FaPenFancy size={100} className="mt-6" />,
      title: "Grammar and Syntax Correction",
      description: "We correct grammar and syntax errors to make your thesis professional.",
    },
    {
      icon: <FaFileAlt size={100} className="mt-6" />,
      title: "Clarity and Structure Enhancement",
      description: "We improve clarity and enhance the structure of your thesis.",
    },
    {
      icon: <FaCheckCircle size={100} className="mt-6" />,
      title: "Citation and Reference Checking",
      description: "We ensure proper citation and reference format according to your required style.",
    },
    {
      icon: <FaClipboardList size={100} className="mt-6" />,
      title: "Consistency and Formatting",
      description: "We ensure consistency in language and proper formatting across your thesis.",
    },
  ];

  const testimonialsData = [
    {
      quote: "AmeerSync guided me through my thesis with structured recommendations. Their expertise helped me refine my research significantly.",
      author: "Sophia Mitchell",
      company: "Graduate Research"
    },
    {
      quote: "Their insights helped me strengthen my arguments and improve my thesis presentation.",
      author: "Ethan Carter",
      company: "Master's Student"
    },
    {
      quote: "They provided valuable feedback that made my thesis more concise and impactful.",
      author: "Olivia Brown",
      company: "PhD Candidate"
    },
    {
      quote: "AmeerSync's detailed proofreading caught errors I had overlooked. Highly recommended!",
      author: "Ryan Foster",
      company: "University Student"
    },
    {
      quote: "They helped structure my thesis in a way that was easy to follow and well-organized.",
      author: "Emily White",
      company: "Academic Scholar"
    },
    {
      quote: "The research assistance they provided was instrumental in improving my paper's credibility.",
      author: "Nathan Clark",
      company: "Doctoral Researcher"
    },
    {
      quote: "Their literature review support helped me find the most relevant sources for my study.",
      author: "Lucas Harris",
      company: "Postgraduate Student"
    },
    {
      quote: "They formatted my thesis according to my university's strict guidelines perfectly.",
      author: "Sophia Bennett",
      company: "University Graduate"
    },
    {
      quote: "AmeerSync's feedback helped me defend my thesis confidently in front of my professors.",
      author: "Benjamin Carter",
      company: "Research Associate"
    }
  ];
  

  const faqs = [
    {
      question: "Can you proofread my entire thesis?",
      answer: "Yes, we offer full thesis proofreading services including grammar, structure, citations, and formatting.",
    },
    {
      question: "Do you proofread technical theses?",
      answer: "Yes, we specialize in proofreading technical theses, ensuring clarity and technical accuracy.",
    },
    {
      question: "What citation styles do you work with?",
      answer: "We work with all major citation styles including APA, MLA, Chicago, Harvard, and more.",
    },
    {
      question: "How long does it take to proofread my thesis?",
      answer: "The time required depends on the length and complexity of your thesis, but we offer fast turnaround times.",
    },
  ];

  const reasons = [
    {
      icon: <FaThumbsUp />,
      title: "Expert Thesis Editors",
      description: "Our team consists of professional editors with expertise in academic writing and thesis editing.",
    },
    {
      icon: <FaUserCheck />,
      title: "Specialized in Academic Writing",
      description: "We specialize in academic writing, ensuring your thesis meets high academic standards.",
    },
    {
      icon: <FaClock />,
      title: "Fast and Reliable Service",
      description: "We deliver high-quality proofreading and editing with quick turnaround times.",
    },
    {
      icon: <FaHandshake />,
      title: "Customer Satisfaction Guarantee",
      description: "We offer unlimited revisions until you are completely satisfied with your thesis.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Confidentiality and Security",
      description: "Your thesis is handled with the highest level of confidentiality and security.",
    },
  ];

  const technologies = [
    {
      icon: <FaFileAlt size={100} />,
      title: "Microsoft Word",
      description: "We use Microsoft Word’s advanced editing features for proofreading your thesis.",
    },
    {
      icon: <FaPenFancy size={100} />,
      title: "Google Docs",
      description: "We also proofread theses shared via Google Docs for collaborative editing.",
    },
    {
      icon: <FaCloud size={100} />,
      title: "Cloud Services",
      description: "We access your thesis through secure cloud services for remote proofreading.",
    },
  ];

  const handleButtonClick = () => {
    alert("Get Started button clicked!");
  };

  return (
    <div className="thesis-content w-full">
  
      <motion.div
        className="mt-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
            <HeroSection
        icon={FaPenFancy}
       
        imageAlt="Thesis Proofreading"
        buttonText="Get Started"
        title="Professional Thesis Proofreading Services"
        onButtonClick={handleButtonClick}
        imageSrc={Images.THESIS_WRITING_IMG}
        description="Get your thesis proofread and polished by experts in academic writing and research."
        details="Our thesis proofreading services include grammar corrections, structure improvements, citation and reference checks, and consistent formatting."
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

export default memo(ThesisContent);
