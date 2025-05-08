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
import HeroSection from "../../../../HeroSection";
import Images from "../../../../../Helper/ImagesConstant";
import ContactUsSection from "../../../../ContactUsSection";
import ServicesSection from "../../../../PagesSectionComponents/ServicesSection";
import WhyChooseUsSection from "../../../../PagesSectionComponents/WhyChooseUsSection";
import TechnologiesSection from "../../../../PagesSectionComponents/TechnologiesSection";
import TestimonialsSection from "../../../../PagesSectionComponents/TestimonialsSection";

const AIContent = () => {
  const services = [
    {
      icon: <FaBrain size={50} className="mt-6" />,
      title: "Custom AI Development",
      description:
        "We build tailored AI solutions to meet specific business requirements, driving innovation and efficiency.",
    },
    {
      icon: <FaRobot size={50} className="mt-6" />,
      title: "Machine Learning Models",
      description:
        "Design and deploy machine learning models for data analysis, predictions, and automations.",
    },
    {
      icon: <FaTools size={50} className="mt-6" />,
      title: "AI Integration",
      description:
        "Seamlessly integrate AI capabilities into existing systems for improved performance and automation.",
    },
    {
      icon: <FaCloud size={50} className="mt-6" />,
      title: "Cloud AI Solutions",
      description:
        "Harness the power of cloud-based AI services for scalability and seamless deployment.",
    },
    {
      icon: <FaLock size={50} className="mt-6" />,
      title: "AI Security",
      description:
        "Implement secure AI models and solutions to protect data integrity and prevent misuse.",
    },
    {
      icon: <FaPenFancy size={50} className="mt-6" />,
      title: "AI-Driven Insights",
      description:
        "Leverage AI for extracting actionable insights from structured and unstructured data.",
    },
  ];

  const testimonialsData = [
    {
      quote:
        "AmeerSync’s AI expertise helped us develop a custom recommendation engine for our e-commerce store. The accuracy of predictions improved significantly, leading to a 30% increase in sales. Absolutely brilliant!",
      author: "Olivia Adams",
      company: "SmartShop",
    },
    {
      quote:
        "Their AI-driven chatbot improved our customer support efficiency by 40%. Now, we handle more queries with fewer resources!",
      author: "David Williams",
      company: "SupportPro",
    },
    {
      quote:
        "AmeerSync automated our data analysis with AI, reducing manual effort and improving accuracy. Highly recommend their services!",
      author: "Sophia Kim",
      company: "DataVision",
    },
    {
      quote:
        "They built an AI-powered image recognition system for our security application. The accuracy is beyond impressive!",
      author: "James Carter",
      company: "SafeTech",
    },
    {
      quote:
        "AmeerSync implemented an AI-based demand forecasting model that helped optimize our inventory, reducing waste by 25%.",
      author: "Rachel Green",
      company: "RetailGenius",
    },
    {
      quote:
        "The NLP model they developed helped us automate document classification. It's a game changer for our workflow!",
      author: "Kevin Smith",
      company: "DocuScan",
    },
    {
      quote:
        "Their AI-powered fraud detection system significantly reduced fraudulent transactions on our platform.",
      author: "Linda Thomas",
      company: "FinSecure",
    },
    {
      quote:
        "We used their AI models for personalized marketing campaigns, and our engagement rates doubled!",
      author: "Emma Wilson",
      company: "AdSmart",
    },
    {
      quote:
        "AmeerSync's deep learning solutions helped us extract meaningful insights from complex datasets.",
      author: "Ethan Lewis",
      company: "DataSolutions",
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
      icon: <FaCog size={50} />,
      title: "TensorFlow",
      description:
        "An open-source platform for building and deploying machine learning models.",
    },
    {
      icon: <FaLaptopCode size={50} />,
      title: "PyTorch",
      description:
        "A deep learning framework for flexible model development and training.",
    },
    {
      icon: <FaDatabase size={50} />,
      title: "BigQuery",
      description:
        "A cloud data warehouse for storing and analyzing large datasets using AI.",
    },
    {
      icon: <FaNetworkWired size={50} />,
      title: "OpenAI",
      description:
        "Advanced AI models for NLP, vision, and other applications.",
    },
    {
      icon: <FaHdd size={50} />,
      title: "AWS SageMaker",
      description:
        "A comprehensive service for building, training, and deploying machine learning models.",
    },
    {
      icon: <FaCloud size={50} />,
      title: "Azure AI",
      description:
        "A suite of AI services and tools for building intelligent applications.",
    },
    {
      icon: <FaShieldAlt size={50} />,
      title: "AI Security Protocols",
      description: "Ensuring ethical and secure implementation of AI models.",
    },
    {
      icon: <FaCodeBranch size={50} />,
      title: "Git for ML",
      description:
        "Version control and collaboration tools tailored for machine learning workflows.",
    },
    {
      icon: <FaLightbulb size={50} />,
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
    <div className="ai-content w-100 bg-Bg">
      <motion.div
        className=""
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection
          icon={FaBrain}
          imageAlt="AI Solutions"
          buttonText="Get Started"
          title="AI Development Services"
          onButtonClick={handleButtonClick}
          imageSrc={Images.AI_IMG}
          description="We create cutting-edge AI solutions that transform businesses...Unlock the potential of Artificial Intelligence (AI) to transform your business operations, decision-making, and customer experiences. Our AI services empower organizations to harness cutting-edge technologies such as machine learning, natural language processing, computer vision, and predictive analytics. Whether you're looking to automate routine tasks, personalize customer interactions, or gain deeper insights from your data, our tailored solutions are designed to meet your unique needs."
          details={
            "With AI, you can improve efficiency, reduce costs, and stay ahead in an increasingly competitive digital landscape. From developing intelligent chatbots and virtual assistants to implementing advanced AI-powered analytics, our team of experts ensures seamless integration and impactful results. Explore how AI can help you innovate, adapt, and achieve unparalleled growth in today's data-driven world. Let us guide you on your journey to leveraging AI for a smarter, more efficient future."
          }
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

export default memo(AIContent);
