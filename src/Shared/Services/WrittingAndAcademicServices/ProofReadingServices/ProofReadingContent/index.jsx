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

const ProofReadingContent = () => {
  const projects = [
    {
      title: "Essay Proofreading",
      description: "Polishing essays to improve clarity, grammar, and structure.",
      image: Images.PROOFREADING_IMG1,
    },
    {
      title: "Research Paper Proofreading",
      description: "Correcting technical writing and ensuring academic standards.",
      image: Images.PROOFREADING_IMG2,
    },
    {
      title: "Book Proofreading",
      description: "Editing and refining books for publication.",
      image: Images.PROOFREADING_IMG3,
    },
    {
      title: "Article Proofreading",
      description: "Improving readability and flow of written articles.",
      image: Images.PROOFREADING_IMG4,
    },
  ];

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
      text: "They helped me polish my research paper to perfection. Highly recommend!",
      name: "Emily Davis",
      role: "Graduate Student",
      image: "https://via.placeholder.com/150",
    },
    {
      text: "The proofreading service was excellent. My essay was so much clearer!",
      name: "Mark Johnson",
      role: "Freelancer",
      image: "https://via.placeholder.com/150",
    },
    {
      text: "I was impressed with their attention to detail in my book manuscript.",
      name: "Sarah Miller",
      role: "Author",
      image: "https://via.placeholder.com/150",
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
      answer: "It depends on the document length, but we offer fast turnaround times.",
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
      description: "We ensure every document is polished to the highest standards.",
    },
    {
      icon: <FaUserCheck />,
      title: "Experienced Proofreaders",
      description: "Our team consists of skilled proofreaders with years of experience.",
    },
    {
      icon: <FaClock />,
      title: "Quick Turnaround",
      description: "We provide quick proofreading services without compromising quality.",
    },
    {
      icon: <FaHandshake />,
      title: "Customer Satisfaction",
      description: "We prioritize customer satisfaction and offer revisions if needed.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Confidentiality Guaranteed",
      description: "Your work is handled with the utmost confidentiality and care.",
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
      description: "We also offer proofreading for documents shared via Google Docs.",
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
    <div className="proofreading-content w-100 bg-white">
      <HeroSection
        icon={FaPenFancy}
        imageWidth="600px"
        imageHeight="400px"
        imageAlt="Proofreading Services"
        buttonText="Get Started"
        title="Professional Proofreading Services"
        onButtonClick={handleButtonClick}
        imageSrc={Images.PROOFREADING_IMG1}
        description="Get your documents proofread and polished by experienced professionals. We specialize in academic papers, essays, books, and more."
        details="Our proofreading services ensure your work is grammatically perfect, clear, and professional. Whether you're a student or a professional, we guarantee high-quality results."
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

export default memo(ProofReadingContent);
