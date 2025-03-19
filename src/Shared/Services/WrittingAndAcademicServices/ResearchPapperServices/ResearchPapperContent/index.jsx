import {
  FaClock,
  FaCloud,
  FaFileAlt,
  FaThumbsUp,
  FaPenFancy,
  FaUserCheck,
  FaHandshake,
  FaShieldAlt,
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

const ResearchPapperContent = () => {


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
      quote: "Their expertise in research papers helped me structure my work professionally.",
      author: "Isabella Morris",
      company: "PhD Candidate"
    },
    {
      quote: "AmeerSync provided extensive research support, helping me find credible sources.",
      author: "Sophia Kim",
      company: "Academic Scholar"
    },
    {
      quote: "Their literature review assistance saved me hours of effort and improved my paper's credibility.",
      author: "David Williams",
      company: "Graduate Researcher"
    },
    {
      quote: "They helped me analyze and interpret my research data effectively.",
      author: "Rachel Green",
      company: "Data Science Student"
    },
    {
      quote: "AmeerSync’s formatting and citation corrections ensured my paper met all guidelines.",
      author: "Michael Carter",
      company: "University Professor"
    },
    {
      quote: "They improved the clarity and impact of my research abstract, making it more compelling.",
      author: "Ethan Lewis",
      company: "Scientific Researcher"
    },
    {
      quote: "Their critical feedback helped strengthen my research arguments significantly.",
      author: "Olivia Brown",
      company: "Postgraduate Student"
    },
    {
      quote: "AmeerSync’s review process enhanced my paper’s readability and logical flow.",
      author: "Nathan Scott",
      company: "Medical Researcher"
    },
    {
      quote: "They helped me finalize my research for publication, making sure it met academic standards.",
      author: "James Carter",
      company: "Doctoral Candidate"
    }
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
    <div className="research-paper-content w-full bg-Bg ">
   
      <motion.div
        className=""
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
           <HeroSection
        icon={FaPenFancy}
   
        imageAlt="Research Paper Proofreading"
        buttonText="Get Started"
        title="Professional Research Paper Proofreading Services"
        onButtonClick={handleButtonClick}
        imageSrc={Images.RESEARCH_WORK_IMG}
        description="Get your research paper proofread and polished by experienced professionals who specialize in academic writing and research."
        details="Our research paper proofreading services include grammar checks, clarity improvements, citation formatting, and consistency checks."
      />
    <ServicesSection services={services} />
      <TechnologiesSection technologies={technologies} />
      <WhyChooseUsSection reasons={reasons} />
        <Accordin faqs={faqs} />
      <ContactUsSection />
      <TestimonialsSection testimonials={testimonialsData}  />
      </motion.div>
    </div>
  );
};

export default memo(ResearchPapperContent);
