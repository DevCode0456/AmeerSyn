import {
  FaCogs,
  FaCode,
  FaUsers,
  FaListAlt,
  FaShieldAlt,
  FaLightbulb,
} from "react-icons/fa";
import React, { memo } from "react";
import { motion } from "framer-motion";
import Accordin from "../../../../Accordin";
import HeroSection from "../../../../HeroSection";
import Images from "../../../../../Helper/ImagesConstant";
import ContactUsSection from "../../../../ContactUsSection";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ServicesSection from "../../../../PagesSectionComponents/ServicesSection";
import ProjectsSection from "../../../../PagesSectionComponents/ProjectsSection";
import WhyChooseUsSection from "../../../../PagesSectionComponents/WhyChooseUsSection";
import TechnologiesSection from "../../../../PagesSectionComponents/TechnologiesSection";
import TestimonialsSection from "../../../../PagesSectionComponents/TestimonialsSection";

const CustomContent = () => {
  const services = [
    {
      icon: <FaCode size={100} className="mt-6" />,
      title: "Custom Software Development",
      description:
        "Tailored solutions for businesses to optimize workflows and improve productivity.",
    },
    {
      icon: <FaCogs size={100} className="mt-6" />,
      title: "System Integration",
      description:
        "Integrating complex systems and technologies to create seamless workflows.",
    },
    {
      icon: <FaUsers size={100} className="mt-6" />,
      title: "Team Collaboration Tools",
      description:
        "Building tools that improve team collaboration, project management, and communication.",
    },
    {
      icon: <FaShieldAlt size={100} className="mt-6" />,
      title: "Security Solutions",
      description:
        "Ensuring your applications are safe with the latest security protocols and practices.",
    },
    {
      icon: <FaLightbulb size={100} className="mt-6" />,
      title: "Innovative Software Solutions",
      description:
        "Providing innovative software development techniques to give you an edge over competitors.",
    },
    {
      icon: <FaListAlt size={100} className="mt-6" />,
      title: "Web & Mobile Development",
      description:
        "Building fully responsive web and mobile applications to meet your business needs.",
    },
  ];

  const reasons = [
    {
      icon: <FaUsers />,
      title: "Customer-Centric Approach",
      description:
        "We prioritize your needs and build custom solutions that fit your specific requirements.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Security First",
      description:
        "Our development process integrates top-notch security practices to protect your data.",
    },
    {
      icon: <FaCode />,
      title: "Experienced Developers",
      description:
        "We have a team of skilled developers proficient in the latest technologies.",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovative Solutions",
      description:
        "We combine creativity with technical expertise to deliver innovative solutions.",
    },
  ];

  const technologies = [
    {
      icon: <FaCode size={100} />,
      title: "Full Stack Development",
      description:
        "Building applications using both front-end and back-end technologies.",
    },
    {
      icon: <FaUsers size={100} />,
      title: "Cloud Technologies",
      description:
        "Leveraging cloud platforms like AWS, Azure, and Google Cloud for scalable solutions.",
    },
    {
      icon: <FaCogs size={100} />,
      title: "API Development",
      description:
        "Creating custom APIs for seamless interaction between software components.",
    },
    {
      icon: <FaShieldAlt size={100} />,
      title: "DevOps",
      description:
        "Automating development and deployment processes for faster time-to-market.",
    },
  ];

  const projects = [
    {
      title: "Custom E-commerce Platform",
      description:
        "Developed a full-featured e-commerce platform tailored to the client's specific needs.",
      image: Images.CUSTOM_PROG_IMG1,
    },
    {
      title: "Inventory Management System",
      description:
        "Built a robust inventory management system to streamline supply chain operations.",
      image: Images.CUSTOM_PROG_IMG2,
    },
    {
      title: "Customer Relationship Management (CRM)",
      description:
        "Created a CRM solution that helped businesses manage and analyze customer interactions.",
      image: Images.CUSTOM_PROG_IMG3,
    },
    {
      title: "Project Management Tool",
      description:
        "Developed a comprehensive project management tool to assist teams in collaboration.",
      image: Images.CUSTOM_PROG_IMG4,
    },
  ];

  const testimonialsData = [
    {
      text: "The custom software we received is tailored perfectly to our business. A seamless experience from start to finish.",
      name: "Alice Brown",
      role: "CEO at Tech Solutions",
      image: "https://via.placeholder.com/150",
    },
    {
      text: "They delivered our CRM system on time and exceeded expectations. We’ve seen tremendous improvements in workflow.",
      name: "John Smith",
      role: "Product Manager at Creative Studio",
      image: "https://via.placeholder.com/150",
    },
    {
      text: "Amazing service and truly professional development. The team understood our needs and delivered top-quality software.",
      name: "Sarah Johnson",
      role: "Operations Lead at Marketing Hub",
      image: "https://via.placeholder.com/150",
    },
  ];

  const faqs = [
    {
      question: "How long does it take to develop a custom solution?",
      answer:
        "The time frame depends on the complexity of the project, but we aim for efficient, timely delivery while maintaining high-quality standards.",
    },
    {
      question: "What programming languages do you use?",
      answer:
        "We use a range of languages and technologies including JavaScript, Python, Java, React, Node.js, and more, based on your needs.",
    },
    {
      question: "Do you offer post-development support?",
      answer:
        "Yes, we offer ongoing support and maintenance to ensure the smooth running of your system after deployment.",
    },
    {
      question: "Can I integrate your solutions with my existing systems?",
      answer:
        "Yes, we specialize in integrating custom solutions with your current systems and technologies to ensure seamless operation.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We provide custom programming services for a variety of industries, including e-commerce, healthcare, finance, and more.",
    },
  ];

  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="custom-programming-services-content w-full bg-gray-100">
      <HeroSection
        icon={FaCode}
        imageWidth="600px"
        imageHeight="400px"
        imageAlt="Custom Programming Solutions"
        buttonText="Get Started"
        title="Custom Programming Solutions"
        onButtonClick={handleButtonClick}
        imageSrc={Images.CUSTOM_PROG_IMG1}
        description="We offer custom programming services designed to meet your unique business requirements. From software development to system integration, we deliver reliable solutions."
        details="Our team of expert developers works closely with you to create personalized applications that meet your goals, whether it’s a mobile app, web app, or an enterprise solution."
      />
        <ServicesSection services={services} />
      <TechnologiesSection technologies={technologies} />
      <TestimonialsSection testimonials={testimonialsData} />
      <ProjectsSection projects={projects} />
      <ContactUsSection />
      <WhyChooseUsSection reasons={reasons	}/>
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

export default memo(CustomContent);
