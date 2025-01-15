import React, { memo } from "react";
import { FaGraduationCap, FaProjectDiagram, FaLaptopCode, FaThumbsUp } from "react-icons/fa";
import { motion } from "framer-motion";
import HeroSection from "../../../../HeroSection";
import ServicesCard from "../../../../ServicesCard";
import Testimonials from "../../../../Testimonials";
import Accordin from "../../../../Accordin";
import { Carousel } from "react-responsive-carousel";
import Images from "../../../../../Helper/ImagesConstant";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const FinalYearProjects = () => {
  const services = [
    {
      icon: <FaGraduationCap size={100} className="mt-6" />,
      title: "Custom Final Year Project Ideas",
      description:
        "We provide innovative and customized final year project ideas across various fields.",
    },
    {
      icon: <FaLaptopCode size={100} className="mt-6" />,
      title: "Project Development & Guidance",
      description:
        "Offering complete project development services, including coding, testing, and deployment.",
    },
    {
      icon: <FaProjectDiagram size={100} className="mt-6" />,
      title: "Research & Documentation Support",
      description:
        "We assist you in writing the research papers, thesis, and documentation required for your project.",
    },
    {
      icon: <FaThumbsUp size={100} className="mt-6" />,
      title: "Final Year Project Presentation Preparation",
      description:
        "Helping you prepare a perfect presentation to showcase your final year project confidently.",
    },
  ];

  const reasons = [
    {
      icon: <FaLaptopCode />,
      title: "Expert Guidance",
      description:
        "We have experienced mentors who provide comprehensive guidance throughout your final year project journey.",
    },
    {
      icon: <FaProjectDiagram />,
      title: "End-to-End Solutions",
      description:
        "We offer a full range of services from project idea selection to final project implementation and presentation.",
    },
    {
      icon: <FaGraduationCap />,
      title: "Proven Track Record",
      description:
        "Our students have successfully completed and presented projects that meet academic standards.",
    },
    {
      icon: <FaThumbsUp />,
      title: "Affordable Pricing",
      description:
        "We offer cost-effective services for final year projects without compromising on quality.",
    },
  ];

  const successfulProjects = [
    {
      title: "AI-Based Chatbot for Customer Service",
      description:
        "Developed an AI-based chatbot using NLP to provide real-time support to customers, enhancing user experience.",
      image: Images.FINAL_YEAR_IMG1,
    },
    {
      title: "Mobile App for Healthcare Management",
      description:
        "Created a mobile app for managing patient data, appointments, and prescriptions for healthcare providers.",
      image: Images.FINAL_YEAR_IMG2,
    },
    {
      title: "Blockchain-Based Voting System",
      description:
        "Built a secure blockchain-based voting system to ensure transparency and security in elections.",
      image: Images.FINAL_YEAR_IMG3,
    },
    {
      title: "Smart Traffic Management System",
      description:
        "Developed a smart traffic management system using IoT sensors to optimize traffic flow and reduce congestion.",
      image: Images.FINAL_YEAR_IMG4,
    },
  ];

  const testimonialsData = [
    {
      text: "The team helped me choose a unique project idea and provided full support throughout the development phase. Highly recommended!",
      name: "James White",
      role: "Final Year Student at XYZ University",
      image: "https://via.placeholder.com/150",
    },
    {
      text: "I received excellent guidance for my final year project, from research to documentation. The project helped me get high grades.",
      name: "Emma Green",
      role: "Computer Science Student at ABC University",
      image: "https://via.placeholder.com/150",
    },
    {
      text: "They helped me with coding, testing, and even preparing for the final presentation. My project received an A+ grade.",
      name: "Olivia Brown",
      role: "Software Engineering Student at DEF University",
      image: "https://via.placeholder.com/150",
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
        description="We provide comprehensive solutions for your final year projects, from idea selection to implementation and presentation."
        details="Get expert guidance for your final year projects across various disciplines. Our services include custom project ideas, coding, documentation support, and presentation preparation."
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
        <h2 className="text-center text-3xl font-bold mb-6">Successful Projects</h2>
        <Carousel showThumbs={false}>
          {successfulProjects.map((project, index) => (
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
        initial={{ opacity: 0, y: -50 }}
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
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Accordin faqs={faqs} />
      </motion.div>
    </div>
  );
};

export default memo(FinalYearProjects);
