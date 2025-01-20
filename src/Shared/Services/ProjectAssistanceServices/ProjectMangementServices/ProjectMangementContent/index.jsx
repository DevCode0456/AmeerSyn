import React, { memo } from "react";
import { FaTasks, FaUsers, FaRegChartBar, FaThumbsUp } from "react-icons/fa";
import { motion } from "framer-motion";
import HeroSection from "../../../../HeroSection";
import ServicesCard from "../../../../ServicesCard";
import Testimonials from "../../../../Testimonials";
import Accordin from "../../../../Accordin";
import { Carousel } from "react-responsive-carousel";
import Images from "../../../../../Helper/ImagesConstant";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProjectMangementContent = () => {
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

  const successfulProjects = [
    {
      title: "E-Commerce Website Development",
      description:
        "Successfully managed the development of an e-commerce platform with integrated payment solutions and product management.",
      image: Images.PROJECT_IMG1,
    },
    {
      title: "Mobile App for Task Management",
      description:
        "Led the development of a task management mobile app that streamlined team collaboration and enhanced productivity.",
      image: Images.PROJECT_IMG2,
    },
    {
      title: "CRM System Implementation",
      description:
        "Managed the implementation of a customer relationship management (CRM) system, improving customer engagement and sales.",
      image: Images.PROJECT_IMG3,
    },
    {
      title: "Website Redesign for SaaS Company",
      description:
        "Successfully managed a complete website redesign for a SaaS company, improving user experience and increasing conversions.",
      image: Images.PROJECT_IMG4,
    },
  ];

  const testimonialsData = [
    {
      text: "The team helped us streamline our project management processes, resulting in better collaboration and on-time delivery.",
      name: "John Doe",
      role: "Project Manager at XYZ Corporation",
      image: "https://via.placeholder.com/150",
    },
    {
      text: "Their project planning and reporting system made it easy to track progress and meet deadlines.",
      name: "Sarah Smith",
      role: "Lead Developer at ABC Tech",
      image: "https://via.placeholder.com/150",
    },
    {
      text: "Thanks to their proactive approach to risk management, our project ran smoothly without any major disruptions.",
      name: "Emily Clark",
      role: "Operations Manager at DEF Solutions",
      image: "https://via.placeholder.com/150",
    },
  ];

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

export default memo(ProjectMangementContent);
