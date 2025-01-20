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

const ThesisContent = () => {
  const projects = [
    {
      title: "Thesis Editing",
      description: "Improving the quality of your thesis for submission or publication.",
      image: Images.THESIS_IMG1,
    },
    {
      title: "Technical Thesis Proofreading",
      description: "Enhancing technical accuracy and clarity in your thesis content.",
      image: Images.THESIS_IMG2,
    },
    {
      title: "Thesis Formatting and Structure",
      description: "Ensuring correct structure and formatting in line with academic guidelines.",
      image: Images.THESIS_IMG3,
    },
    {
      title: "Full Thesis Proofreading",
      description: "Complete proofreading service for thesis, including references and citations.",
      image: Images.THESIS_IMG4,
    },
  ];

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
      text: "The thesis proofreading service transformed my thesis into a polished academic document. Highly recommend!",
      name: "James Richardson",
      role: "PhD Candidate",
      image: "https://via.placeholder.com/150",
    },
    {
      text: "I had my master's thesis proofread and formatted perfectly for submission. The service was fast and reliable.",
      name: "Olivia Thompson",
      role: "Master's Student",
      image: "https://via.placeholder.com/150",
    },
    {
      text: "The proofreading and editing service helped me refine my thesis for a top-quality presentation.",
      name: "David Miller",
      role: "PhD Candidate",
      image: "https://via.placeholder.com/150",
    },
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
    <div className="thesis-content w-100 bg-white">
      <HeroSection
        icon={FaPenFancy}
        imageWidth="600px"
        imageHeight="400px"
        imageAlt="Thesis Proofreading"
        buttonText="Get Started"
        title="Professional Thesis Proofreading Services"
        onButtonClick={handleButtonClick}
        imageSrc={Images.THESIS_IMG1}
        description="Get your thesis proofread and polished by experts in academic writing and research."
        details="Our thesis proofreading services include grammar corrections, structure improvements, citation and reference checks, and consistent formatting."
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

      <motion.div
        className="my-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center text-3xl font-bold mb-6">Technologies We Use</h2>
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

export default memo(ThesisContent);
