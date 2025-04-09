import {
  FaClock,
  FaCloud,
  FaFileAlt,
  FaPenFancy,
  FaThumbsUp,
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
import ServicesSection from "../../../../PagesSectionComponents/ServicesSection";
import WhyChooseUsSection from "../../../../PagesSectionComponents/WhyChooseUsSection";
import TechnologiesSection from "../../../../PagesSectionComponents/TechnologiesSection";
import TestimonialsSection from "../../../../PagesSectionComponents/TestimonialsSection";

const ProofReadingContent = () => {
  const services = [
    {
      icon: <FaPenFancy size={100} className="mt-6" />,
      title: "Grammar and Punctuation Check",
      description: "Correcting grammatical errors and punctuation mistakes.",
    },
    {
      icon: <FaFileAlt size={100} className="mt-6" />,
      title: "Structure and Clarity Improvement",
      description: "Improving the flow and coherence of your document.",
    },
    {
      icon: <FaCheckCircle size={100} className="mt-6" />,
      title: "Plagiarism Check",
      description: "Ensuring originality by checking for plagiarism.",
    },
    {
      icon: <FaClipboardList size={100} className="mt-6" />,
      title: "Formatting and Consistency",
      description: "Ensuring proper formatting and consistency in style.",
    },
  ];

  const testimonialsData = [
    {
      quote:
        "AmeerSync’s proofreading services polished my research paper to perfection, making my arguments clearer.",
      author: "Nathan Clark",
      company: "Academic Researcher",
    },
    {
      quote:
        "Their grammatical and structural improvements made my thesis more professional and well-organized.",
      author: "Sophia Bennett",
      company: "Graduate Student",
    },
    {
      quote:
        "They corrected inconsistencies in my legal document, ensuring clarity and precision.",
      author: "David Williams",
      company: "Legal Consultant",
    },
    {
      quote:
        "AmeerSync’s editing enhanced the readability and impact of my blog articles.",
      author: "Rachel Green",
      company: "Content Writer",
    },
    {
      quote:
        "Their detailed feedback helped refine my business proposal, making it more persuasive.",
      author: "Michael Carter",
      company: "Startup Founder",
    },
    {
      quote:
        "They fixed formatting errors and ensured my dissertation met academic standards.",
      author: "Ethan Lewis",
      company: "PhD Candidate",
    },
    {
      quote:
        "AmeerSync proofread my novel, refining the language and improving its overall flow.",
      author: "Olivia Brown",
      company: "Author",
    },
    {
      quote:
        "Their editing services helped me prepare a flawless research journal for publication.",
      author: "Nathan Scott",
      company: "University Professor",
    },
    {
      quote:
        "They improved my resume’s clarity and impact, helping me land more interviews.",
      author: "James Carter",
      company: "Job Seeker",
    },
  ];

  const faqs = [
    {
      question: "Can you proofread my entire book?",
      answer: "Yes, we offer full book proofreading services.",
    },
    {
      question: "Do you provide feedback on writing style?",
      answer: "Yes, we can help improve the clarity and flow of your writing.",
    },
    {
      question: "How long does proofreading take?",
      answer:
        "It depends on the document length, but we offer fast turnaround times.",
    },
    {
      question: "Do you offer any revisions after proofreading?",
      answer: "Yes, we offer revisions to ensure your satisfaction.",
    },
  ];

  const reasons = [
    {
      icon: <FaThumbsUp />,
      title: "Quality Assurance",
      description:
        "We ensure every document is polished to the highest standards.",
    },
    {
      icon: <FaUserCheck />,
      title: "Experienced Proofreaders",
      description:
        "Our team consists of skilled proofreaders with years of experience.",
    },
    {
      icon: <FaClock />,
      title: "Quick Turnaround",
      description:
        "We provide quick proofreading services without compromising quality.",
    },
    {
      icon: <FaHandshake />,
      title: "Customer Satisfaction",
      description:
        "We prioritize customer satisfaction and offer revisions if needed.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Confidentiality Guaranteed",
      description:
        "Your work is handled with the utmost confidentiality and care.",
    },
  ];

  const technologies = [
    {
      icon: <FaFileAlt size={100} />,
      title: "Microsoft Word",
      description: "We proofread documents using industry-standard software.",
    },
    {
      icon: <FaPenFancy size={100} />,
      title: "Google Docs",
      description:
        "We also offer proofreading for documents shared via Google Docs.",
    },
    {
      icon: <FaCloud size={100} />,
      title: "Cloud Services",
      description: "We can access and proofread documents stored in the cloud.",
    },
  ];

  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="proofreading-content w-full bg-Bg">
      <motion.div
        className=""
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection
          icon={FaPenFancy}
          buttonText="Get Started"
          imageAlt="Proofreading Services"
          onButtonClick={handleButtonClick}
          imageSrc={Images.PROOF_READING_IMG}
          title="Professional Proofreading Services"
          description="Get your documents proofread and polished by experienced professionals. We specialize in academic papers, essays, books, and more."
          details="Our proofreading services ensure your work is grammatically perfect, clear, and professional. Whether you're a student or a professional, we guarantee high-quality results."
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

export default memo(ProofReadingContent);
