import React, { memo } from "react";
import { 
  FaTasks, 
  FaUsers, 
  FaRegChartBar, 
  FaThumbsUp, 
  FaRobot, 
  FaLock, 
  FaWifi, 
  FaMobileAlt, 
  FaGlobe 
} from "react-icons/fa";
import { motion } from "framer-motion";
import HeroSection from "../../../../HeroSection";
import ServicesSection from "../../../../PagesSectionComponents/ServicesSection";
import ProjectsSection from "../../../../PagesSectionComponents/ProjectsSection";
import WhyChooseUsSection from "../../../../PagesSectionComponents/WhyChooseUsSection";
import TechnologiesSection from "../../../../PagesSectionComponents/TechnologiesSection";
import TestimonialsSection from "../../../../PagesSectionComponents/TestimonialsSection";
import ContactUsSection from "../../../../ContactUsSection";
import Accordin from "../../../../Accordin";
import Images from "../../../../../Helper/ImagesConstant";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Services array for services section
const services = [
  {
    icon: <FaTasks size={100} className="mt-6" />,
    title: "Project Planning & Scheduling",
    description: "We help you create detailed project plans, timelines, and schedules to ensure successful project execution.",
  },
  {
    icon: <FaUsers size={100} className="mt-6" />,
    title: "Team Collaboration & Management",
    description: "Our services focus on enhancing team collaboration and efficient management of human resources during project phases.",
  },
  {
    icon: <FaRegChartBar size={100} className="mt-6" />,
    title: "Project Monitoring & Reporting",
    description: "We assist in tracking project progress, ensuring everything stays on schedule, and providing detailed reports.",
  },
  {
    icon: <FaThumbsUp size={100} className="mt-6" />,
    title: "Risk Management & Problem Solving",
    description: "We identify and mitigate risks early on, ensuring smooth project execution without unexpected setbacks.",
  },
];

// Reasons array for why-choose-us section
const reasons = [
  {
    icon: <FaTasks />,
    title: "Efficient Project Planning",
    description: "We provide comprehensive planning that ensures all tasks and resources are accounted for, leading to smoother project execution.",
  },
  {
    icon: <FaUsers />,
    title: "Effective Team Coordination",
    description: "With proven strategies, we help you manage and collaborate with your team to meet project objectives.",
  },
  {
    icon: <FaRegChartBar />,
    title: "Transparent Monitoring & Reporting",
    description: "Our tools and methods provide clear insights into the progress of your project, helping you stay ahead.",
  },
  {
    icon: <FaThumbsUp />,
    title: "Proactive Risk Management",
    description: "We identify risks early in the project lifecycle and work to address them before they impact the timeline.",
  },
];

// Technologies array for technologies section
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

// FAQs array for accordion section
const faqs = [
  {
    question: "How do you plan and schedule a project?",
    answer: "We use industry-standard tools to create detailed project schedules, ensuring all tasks and milestones are clearly defined.",
  },
  {
    question: "Do you provide project management tools?",
    answer: "Yes, we offer a range of tools for task management, team collaboration, and progress tracking to ensure your project stays on track.",
  },
  {
    question: "How do you manage risks during a project?",
    answer: "We proactively identify potential risks and provide mitigation strategies to ensure smooth project execution without surprises.",
  },
  {
    question: "Can you handle large teams and complex projects?",
    answer: "Yes, we have experience managing large teams and complex projects, ensuring smooth coordination and efficient resource allocation.",
  },
  {
    question: "How do you ensure timely project delivery?",
    answer: "Through constant monitoring, reporting, and risk management, we ensure that your project stays on track and meets deadlines.",
  },
];

const ProjectMangementContent = () => {
  const handleButtonClick = () => {
    alert("Get Started with Your Project Management Needs!");
  };

  return (
    <div className="project-management-content w-full bg-gray-100">
      <HeroSection
        icon={FaTasks}
        imageWidth="600px"
        imageHeight="400px"
        imageAlt="Project Management"
        buttonText="Get Started"
        title="Expert Project Management Solutions"
        onButtonClick={handleButtonClick}
        imageSrc={Images.PROJECT_IMG1}
        description="We provide comprehensive solutions for managing your projects, from planning to execution and monitoring."
        details="Get expert guidance in planning, scheduling, monitoring, and reporting for successful project completion across industries."
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

export default memo(ProjectMangementContent);
