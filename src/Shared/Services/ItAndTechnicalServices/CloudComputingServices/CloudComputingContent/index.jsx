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
import FlipCard from "../../../../FlipCard";
import HeroSection from "../../../../HeroSection";
import Testimonials from "../../../../Testimonials";
import ServicesCard from "../../../../ServicesCard";
import { Carousel } from "react-responsive-carousel";
import Images from "../../../../../Helper/ImagesConstant";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ContactUsSection from "../../../../ContactUsSection";

const CloudComputingContent = () => {
  const projects = [
    {
      title: "Cloud Migration",
      description:
        "Seamless migration of legacy systems to the cloud with zero downtime.",
      image: Images.CLOUD_MIGRATION_IMG,
    },
    {
      title: "Scalable Infrastructure",
      description:
        "Designed and implemented a scalable cloud infrastructure for an e-commerce platform.",
      image: Images.SCALABLE_INFRA_IMG,
    },
    {
      title: "Data Backup Solutions",
      description:
        "Developed automated data backup and recovery solutions for businesses.",
      image: Images.DATA_BACKUP_IMG,
    },
    {
      title: "Hybrid Cloud Implementation",
      description:
        "Implemented a secure hybrid cloud environment for a financial organization.",
      image: Images.HYBRID_CLOUD_IMG,
    },
  ];

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
      text: "Their cloud solutions transformed our business operations. Highly recommended!",
      name: "James Carter",
      role: "CTO, Tech Corp",
      image: "https://via.placeholder.com/150", // Replace with actual image URLs
    },
    {
      text: "Expert team with exceptional service. Our cloud migration was a success!",
      name: "Linda Brown",
      role: "CEO, Startup Inc.",
      image: "https://via.placeholder.com/150", // Replace with actual image URLs
    },
    {
      text: "Their cloud maintenance services have been top-notch. Excellent work!",
      name: "Robert Wilson",
      role: "IT Manager, Global Solutions",
      image: "https://via.placeholder.com/150", // Replace with actual image URLs
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
      description:
        "Efficient container orchestration for scalable cloud apps.",
    },
  ];

  const reasons = [
    {
      icon: <FaCheckCircle />,
      title: "Certified Cloud Experts",
      description:
        "Our team holds certifications from top cloud providers.",
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
      description:
        "We work closely with you to ensure your satisfaction.",
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
    <div className="cloud-content w-100 bg-white">
      <HeroSection
        icon={FaCloud}
        imageWidth="600px"
        imageHeight="400px"
        imageAlt="Cloud Computing Services"
        buttonText="Get Started"
        title="Cloud Computing Services"
        onButtonClick={handleButtonClick}
        imageSrc={Images.CLOUD_SERVICES_IMG}
        description="Empowering businesses with scalable, secure, and reliable cloud solutions."
        details="Our cloud computing services cover strategy, implementation, and maintenance, ensuring your business stays ahead in the digital era."
      />
      <motion.div
        className="my-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center text-3xl font-bold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-8">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-8">
          {reasons.map((reason, index) => (
            <div
              className="bg-white shadow-2xl p-6 rounded-3xl  text-center"
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
        <h2 className="text-center text-3xl font-bold mb-6">
          Technologies We Use
        </h2>
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

export default memo(CloudComputingContent);