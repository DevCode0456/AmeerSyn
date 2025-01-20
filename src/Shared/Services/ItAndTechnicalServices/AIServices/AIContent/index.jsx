import {
  FaCog,
  FaHdd,
  FaLock,
  FaRobot,
  FaTools,
  FaClock,
  FaCloud,
  FaBrain,
  FaPenFancy,
  FaDatabase,
  FaUserCheck,
  FaHandshake,
  FaLightbulb,
  FaShieldAlt,
  FaCodeBranch,
  FaLaptopCode,
  FaCheckCircle,
  FaNetworkWired,
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

const AIContent = () => {
  const projects = [
    {
      title: "AI-Powered Chatbot",
      description:
        "A conversational AI chatbot designed for real-time customer support and enhanced user engagement.Unlock the potential of Artificial Intelligence (AI) to transform your business operations, decision-making, and customer experiences. Our AI services empower organizations to harness cutting-edge technologies such as machine learning, natural language processing, computer vision, and predictive analytics. Whether you're looking to automate routine tasks, personalize customer interactions, or gain deeper insights from your data, our tailored solutions are designed to meet your unique needs.",
      image: Images.ARTIFICAL_INTELIGENCE_IMG,
    },
    {
      title: "Predictive Analytics Platform",
      description:
        "A robust platform that leverages AI to analyze trends and forecast future outcomes.",
      image: Images.WEB_DEVELOPMENT_IMG,
    },
    {
      title: "Recommendation Engine",
      description:
        "An AI-based recommendation system for personalized content and product suggestions.",
      image: Images.USER_DUMMY_IMG,
    },
    {
      title: "Natural Language Processing Tool",
      description:
        "An NLP-based solution for extracting insights from unstructured text data.",
      image: Images.USER_DUMMY_IMG2,
    },
  ];

  const services = [
    {
      icon: <FaBrain size={100} className="mt-6" />,
      title: "Custom AI Development",
      description:
        "We build tailored AI solutions to meet specific business requirements, driving innovation and efficiency.",
    },
    {
      icon: <FaRobot size={100} className="mt-6" />,
      title: "Machine Learning Models",
      description:
        "Design and deploy machine learning models for data analysis, predictions, and automations.",
    },
    {
      icon: <FaTools size={100} className="mt-6" />,
      title: "AI Integration",
      description:
        "Seamlessly integrate AI capabilities into existing systems for improved performance and automation.",
    },
    {
      icon: <FaCloud size={100} className="mt-6" />,
      title: "Cloud AI Solutions",
      description:
        "Harness the power of cloud-based AI services for scalability and seamless deployment.",
    },
    {
      icon: <FaLock size={100} className="mt-6" />,
      title: "AI Security",
      description:
        "Implement secure AI models and solutions to protect data integrity and prevent misuse.",
    },
    {
      icon: <FaPenFancy size={100} className="mt-6" />,
      title: "AI-Driven Insights",
      description:
        "Leverage AI for extracting actionable insights from structured and unstructured data.",
    },
  ];

  const testimonialsData = [
    {
      text: "This product has completely changed my life for the better. Highly recommend it to everyone!",
      name: "John Doe",
      role: "Software Engineer",
      image: "https://via.placeholder.com/150", // Replace with actual image URLs
    },
    {
      text: "Outstanding service and top-notch quality. I'm beyond satisfied with my experience.",
      name: "Jane Smith",
      role: "Marketing Specialist",
      image: "https://via.placeholder.com/150", // Replace with actual image URLs
    },
    {
      text: "I couldn't have asked for a better experience. Everything exceeded my expectations!",
      name: "Alex Johnson",
      role: "Freelancer",
      image: "https://via.placeholder.com/150", // Replace with actual image URLs
    },
  ];

  const faqs = [
    {
      question: "What industries can benefit from AI solutions?",
      answer:
        "AI is applicable across industries like healthcare, finance, retail, education, and manufacturing.",
    },
    {
      question: "Do you provide pre-trained AI models?",
      answer:
        "Yes, we offer pre-trained models as well as custom models tailored to specific needs.",
    },
    {
      question: "How long does it take to deploy an AI solution?",
      answer:
        "The timeline depends on complexity. Most projects range from 3 to 6 months.",
    },
    {
      question: "What AI technologies do you use?",
      answer:
        "We work with TensorFlow, PyTorch, OpenAI, AWS SageMaker, and more.",
    },
    {
      question: "Can you integrate AI into legacy systems?",
      answer:
        "Yes, we specialize in integrating AI solutions into existing infrastructures.",
    },
  ];

  const technologies = [
    {
      icon: <FaCog size={100} />,
      title: "TensorFlow",
      description:
        "An open-source platform for building and deploying machine learning models.",
    },
    {
      icon: <FaLaptopCode size={100} />,
      title: "PyTorch",
      description:
        "A deep learning framework for flexible model development and training.",
    },
    {
      icon: <FaDatabase size={100} />,
      title: "BigQuery",
      description:
        "A cloud data warehouse for storing and analyzing large datasets using AI.",
    },
    {
      icon: <FaNetworkWired size={100} />,
      title: "OpenAI",
      description:
        "Advanced AI models for NLP, vision, and other applications.",
    },
    {
      icon: <FaHdd size={100} />,
      title: "AWS SageMaker",
      description:
        "A comprehensive service for building, training, and deploying machine learning models.",
    },
    {
      icon: <FaCloud size={100} />,
      title: "Azure AI",
      description:
        "A suite of AI services and tools for building intelligent applications.",
    },
    {
      icon: <FaShieldAlt size={100} />,
      title: "AI Security Protocols",
      description: "Ensuring ethical and secure implementation of AI models.",
    },
    {
      icon: <FaCodeBranch size={100} />,
      title: "Git for ML",
      description:
        "Version control and collaboration tools tailored for machine learning workflows.",
    },
    {
      icon: <FaLightbulb size={100} />,
      title: "AutoML",
      description:
        "Automated machine learning for quicker and more efficient model development.",
    },
  ];

  const reasons = [
    {
      icon: <FaCheckCircle />,
      title: "Experienced AI Developers",
      description:
        "Our team has a proven track record of delivering high-quality AI solutions.",
    },
    {
      icon: <FaUserCheck />,
      title: "Customer-Centric Approach",
      description:
        "We tailor solutions to meet your unique business needs and goals.",
    },
    {
      icon: <FaClock />,
      title: "On-Time Delivery",
      description:
        "We ensure projects are delivered within the agreed timelines and budget.",
    },
    {
      icon: <FaHandshake />,
      title: "Transparent Communication",
      description:
        "We maintain open communication and provide regular updates throughout the development process.",
    },
    {
      icon: <FaLightbulb />,
      title: "Cutting-Edge Technologies",
      description:
        "We leverage the latest AI tools and frameworks for innovative solutions.",
    },
  ];

  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="ai-content w-100 bg-white">
      <HeroSection
        icon={FaBrain}
        imageWidth="600px"
        imageHeight="400px"
        imageAlt="AI Solutions"
        buttonText="Get Started"
        title="AI Development Services"
        onButtonClick={handleButtonClick}
        imageSrc={Images.ARTIFICAL_INTELIGENCE_IMG}
        description="We create cutting-edge AI solutions that transform businesses...Unlock the potential of Artificial Intelligence (AI) to transform your business operations, decision-making, and customer experiences. Our AI services empower organizations to harness cutting-edge technologies such as machine learning, natural language processing, computer vision, and predictive analytics. Whether you're looking to automate routine tasks, personalize customer interactions, or gain deeper insights from your data, our tailored solutions are designed to meet your unique needs."
        details={
          "With AI, you can improve efficiency, reduce costs, and stay ahead in an increasingly competitive digital landscape. From developing intelligent chatbots and virtual assistants to implementing advanced AI-powered analytics, our team of experts ensures seamless integration and impactful results. Explore how AI can help you innovate, adapt, and achieve unparalleled growth in today's data-driven world. Let us guide you on your journey to leveraging AI for a smarter, more efficient future."
        }
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

export default memo(AIContent);
