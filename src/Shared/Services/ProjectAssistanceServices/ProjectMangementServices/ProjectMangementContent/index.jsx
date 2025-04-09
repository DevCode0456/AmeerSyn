import {
  FaLock,
  FaWifi,
  FaTasks,
  FaRobot,
  FaUsers,
  FaGlobe,
  FaThumbsUp,
  FaMobileAlt,
  FaRegChartBar,
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

// Services array for services section
const services = [
  {
    icon: <FaTasks size={100} className="mt-6" />,
    title: "Project Planning & Scheduling",
    description:
      "We help you create detailed project plans, timelines, and schedules to ensure successful project execution.",
  },
  {
    icon: <FaUsers size={100} className="mt-6" />,
    title: "Team Collaboration & Management",
    description:
      "Our services focus on enhancing team collaboration and efficient management of human resources during project phases.",
  },
  {
    icon: <FaRegChartBar size={100} className="mt-6" />,
    title: "Project Monitoring & Reporting",
    description:
      "We assist in tracking project progress, ensuring everything stays on schedule, and providing detailed reports.",
  },
  {
    icon: <FaThumbsUp size={100} className="mt-6" />,
    title: "Risk Management & Problem Solving",
    description:
      "We identify and mitigate risks early on, ensuring smooth project execution without unexpected setbacks.",
  },
];

// Reasons array for why-choose-us section
const reasons = [
  {
    icon: <FaTasks />,
    title: "Efficient Project Planning",
    description:
      "We provide comprehensive planning that ensures all tasks and resources are accounted for, leading to smoother project execution.",
  },
  {
    icon: <FaUsers />,
    title: "Effective Team Coordination",
    description:
      "With proven strategies, we help you manage and collaborate with your team to meet project objectives.",
  },
  {
    icon: <FaRegChartBar />,
    title: "Transparent Monitoring & Reporting",
    description:
      "Our tools and methods provide clear insights into the progress of your project, helping you stay ahead.",
  },
  {
    icon: <FaThumbsUp />,
    title: "Proactive Risk Management",
    description:
      "We identify risks early in the project lifecycle and work to address them before they impact the timeline.",
  },
];

const testimonialsData = [
  {
    quote:
      "Muhammad provided exceptional project management services, ensuring timely delivery and smooth execution of my business projects.",
    author: "John Davis",
    company: "Tech Start-up",
  },
  {
    quote:
      "He helped me plan, organize, and execute my projects efficiently, allowing me to meet all deadlines and expectations.",
    author: "Sarah Taylor",
    company: "Marketing Agency",
  },
  {
    quote:
      "Muhammad’s project management skills were instrumental in keeping my team on track and ensuring the successful completion of our projects.",
    author: "David Williams",
    company: "Software Company",
  },
  {
    quote:
      "He managed the entire project lifecycle for my business, from planning to execution, ensuring all tasks were completed on time.",
    author: "Rachel Green",
    company: "Consulting Firm",
  },
  {
    quote:
      "Muhammad’s ability to prioritize tasks and manage resources efficiently helped us successfully launch our product on schedule.",
    author: "Michael Carter",
    company: "Product Development",
  },
  {
    quote:
      "His meticulous project planning and attention to detail helped me avoid potential risks and ensured smooth project execution.",
    author: "Sophia Kim",
    company: "E-commerce",
  },
  {
    quote:
      "Muhammad provided valuable guidance in handling project scope, timelines, and budget, ensuring the project stayed on track and within budget.",
    author: "Olivia Brown",
    company: "Corporate Business",
  },
  {
    quote:
      "With Muhammad’s project management expertise, we were able to navigate complex tasks and deliver high-quality results.",
    author: "Nathan Scott",
    company: "Technology Solutions",
  },
  {
    quote:
      "Muhammad’s excellent project management skills helped us coordinate multiple teams and deliver the project ahead of schedule.",
    author: "James Carter",
    company: "Engineering Firm",
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
    answer:
      "We use industry-standard tools to create detailed project schedules, ensuring all tasks and milestones are clearly defined.",
  },
  {
    question: "Do you provide project management tools?",
    answer:
      "Yes, we offer a range of tools for task management, team collaboration, and progress tracking to ensure your project stays on track.",
  },
  {
    question: "How do you manage risks during a project?",
    answer:
      "We proactively identify potential risks and provide mitigation strategies to ensure smooth project execution without surprises.",
  },
  {
    question: "Can you handle large teams and complex projects?",
    answer:
      "Yes, we have experience managing large teams and complex projects, ensuring smooth coordination and efficient resource allocation.",
  },
  {
    question: "How do you ensure timely project delivery?",
    answer:
      "Through constant monitoring, reporting, and risk management, we ensure that your project stays on track and meets deadlines.",
  },
];

const ProjectMangementContent = () => {
  const handleButtonClick = () => {
    alert("Get Started with Your Project Management Needs!");
  };

  return (
    <div className="project-management-content w-full bg-Bg">
      <motion.div
        className=""
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection
          icon={FaTasks}
          imageAlt="Project Management"
          buttonText="Get Started"
          title="Expert Project Management Solutions"
          onButtonClick={handleButtonClick}
          imageSrc={Images.PROJECT_MANAGEMENT_IMG}
          description="We provide comprehensive solutions for managing your projects, from planning to execution and monitoring."
          details="Get expert guidance in planning, scheduling, monitoring, and reporting for successful project completion across industries."
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

export default memo(ProjectMangementContent);
