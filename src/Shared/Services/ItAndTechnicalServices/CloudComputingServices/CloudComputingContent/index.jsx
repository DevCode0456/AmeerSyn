import {
  FaCloud,
  FaServer,
  FaDatabase,
  FaTools,
  FaShieldAlt,
  FaCogs,
  FaLaptopCode,
  FaCheckCircle,
  FaClock,
  FaHandshake,
  FaLightbulb,
  FaUserCheck,
} from "react-icons/fa";
import React, { memo } from "react";
import { motion } from "framer-motion";
import Accordin from "../../../../Accordin";
import HeroSection from "../../../../HeroSection";

import Images from "../../../../../Helper/ImagesConstant";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ContactUsSection from "../../../../ContactUsSection";
import ServicesSection from "../../../../PagesSectionComponents/ServicesSection";
import TechnologiesSection from "../../../../PagesSectionComponents/TechnologiesSection";
import TestimonialsSection from "../../../../PagesSectionComponents/TestimonialsSection";
import WhyChooseUsSection from "../../../../PagesSectionComponents/WhyChooseUsSection";

const CloudComputingContent = () => {
  const services = [
    {
      icon: <FaCloud size={100} className="mt-6" />,
      title: "Cloud Strategy Development",
      description:
        "Crafting custom cloud strategies tailored to your business goals.",
    },
    {
      icon: <FaServer size={100} className="mt-6" />,
      title: "Cloud Infrastructure Setup",
      description:
        "Building scalable, secure, and efficient cloud environments.",
    },
    {
      icon: <FaDatabase size={100} className="mt-6" />,
      title: "Cloud Database Management",
      description:
        "Efficiently managing cloud-based databases with high availability.",
    },
    {
      icon: <FaTools size={100} className="mt-6" />,
      title: "Cloud Maintenance",
      description:
        "Ongoing maintenance and optimization of your cloud systems.",
    },
    {
      icon: <FaShieldAlt size={100} className="mt-6" />,
      title: "Cloud Security Solutions",
      description:
        "Ensuring robust security measures to protect your cloud assets.",
    },
    {
      icon: <FaCogs size={100} className="mt-6" />,
      title: "DevOps Services",
      description:
        "Streamlining deployment pipelines and improving collaboration through DevOps.",
    },
  ];

  const testimonialsData = [
    {
      quote:
        "Muhammad helped me migrate my business operations to the cloud smoothly, improving efficiency and scalability.",
      author: "John Davis",
      company: "E-commerce Company",
    },
    {
      quote:
        "He provided excellent guidance in setting up cloud infrastructure, ensuring high availability and cost-efficiency.",
      author: "Sarah Taylor",
      company: "Tech Start-up",
    },
    {
      quote:
        "Muhammad's cloud solutions were exactly what my business needed to scale operations quickly while maintaining security.",
      author: "David Williams",
      company: "SaaS Provider",
    },
    {
      quote:
        "His expertise in cloud computing helped me streamline my workflow and integrate cloud storage seamlessly.",
      author: "Rachel Green",
      company: "Marketing Agency",
    },
    {
      quote:
        "Muhammad ensured that my cloud deployment was optimized for performance and minimized downtime.",
      author: "Michael Carter",
      company: "Software Solutions",
    },
    {
      quote:
        "He guided me through the complexities of cloud security and ensured my data was always protected.",
      author: "Sophia Kim",
      company: "Cybersecurity Firm",
    },
    {
      quote:
        "Muhammad helped me implement disaster recovery solutions in the cloud, providing peace of mind for my business.",
      author: "Olivia Brown",
      company: "Finance Corporation",
    },
    {
      quote:
        "Thanks to Muhammad’s expertise, I was able to leverage cloud computing to enhance my app's performance and scalability.",
      author: "Nathan Scott",
      company: "App Development Firm",
    },
    {
      quote:
        "Muhammad’s cloud computing solutions helped my organization reduce infrastructure costs and improve operational efficiency.",
      author: "James Carter",
      company: "Enterprise Solutions",
    },
  ];

  const faqs = [
    {
      question: "What cloud platforms do you support?",
      answer:
        "We work with AWS, Microsoft Azure, Google Cloud Platform, and others.",
    },
    {
      question: "Can you help migrate our existing systems to the cloud?",
      answer:
        "Yes, we specialize in seamless cloud migrations with minimal disruption.",
    },
    {
      question: "Do you offer hybrid cloud solutions?",
      answer: "Yes, we design and implement hybrid cloud environments.",
    },
    {
      question: "How do you ensure the security of cloud systems?",
      answer:
        "We implement advanced security measures, including encryption and regular audits.",
    },
    {
      question: "What is your pricing model for cloud services?",
      answer:
        "Our pricing is flexible and depends on your project requirements. Contact us for a quote.",
    },
  ];

  const technologies = [
    {
      icon: <FaCloud size={100} />,
      title: "AWS",
      description: "Comprehensive cloud solutions by Amazon Web Services.",
    },
    {
      icon: <FaCloud size={100} />,
      title: "Microsoft Azure",
      description: "Scalable and secure cloud offerings by Microsoft.",
    },
    {
      icon: <FaDatabase size={100} />,
      title: "Google Cloud",
      description: "High-performance cloud computing by Google.",
    },
    {
      icon: <FaShieldAlt size={100} />,
      title: "Cloud Security Tools",
      description:
        "Cutting-edge tools for ensuring cloud infrastructure security.",
    },
    {
      icon: <FaLaptopCode size={100} />,
      title: "Kubernetes",
      description: "Efficient container orchestration for scalable cloud apps.",
    },
  ];

  const reasons = [
    {
      icon: <FaCheckCircle />,
      title: "Certified Cloud Experts",
      description: "Our team holds certifications from top cloud providers.",
    },
    {
      icon: <FaUserCheck />,
      title: "Tailored Cloud Solutions",
      description:
        "We customize our services to align with your business goals.",
    },
    {
      icon: <FaClock />,
      title: "Timely Project Delivery",
      description:
        "Projects are completed within agreed timelines without compromise on quality.",
    },
    {
      icon: <FaHandshake />,
      title: "Collaborative Approach",
      description: "We work closely with you to ensure your satisfaction.",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovative Practices",
      description:
        "We adopt the latest technologies for competitive cloud solutions.",
    },
  ];

  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="cloud-content w-100">
      <motion.div
        className="mt-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection
          icon={FaCloud}
          imageAlt="Cloud Computing Services"
          buttonText="Get Started"
          title="Cloud Computing Services"
          onButtonClick={handleButtonClick}
          imageSrc={Images.CLOUD_COMPUTING_IMG}
          description="Empowering businesses with scalable, secure, and reliable cloud solutions."
          details="Our cloud computing services cover strategy, implementation, and maintenance, ensuring your business stays ahead in the digital era."
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

export default memo(CloudComputingContent);
