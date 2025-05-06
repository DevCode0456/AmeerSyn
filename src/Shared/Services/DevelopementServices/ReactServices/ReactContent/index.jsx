import {
  FaReact,
  FaClock,
  FaCloud,
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
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ContactUsSection from "../../../../ContactUsSection";
import ServicesSection from "../../../../PagesSectionComponents/ServicesSection";
import TechnologiesSection from "../../../../PagesSectionComponents/TechnologiesSection";
import TestimonialsSection from "../../../../PagesSectionComponents/TestimonialsSection";
import WhyChooseUsSection from "../../../../PagesSectionComponents/WhyChooseUsSection";

const ReactContent = () => {


  const services = [
    {
      icon: <FaReact size={50} className="mt-6" />,
      title: "Custom React Development",
      description:
        "Building tailored React solutions to meet your unique needs.",
    },
    {
      icon: <FaCodeBranch size={50} className="mt-6" />,
      title: "State Management",
      description:
        "Implementing Redux, Context API, and other state management tools.",
    },
    {
      icon: <FaLaptopCode size={50} className="mt-6" />,
      title: "React Native Apps",
      description:
        "Developing mobile apps with React Native for iOS and Android.",
    },
    {
      icon: <FaNetworkWired size={50} className="mt-6" />,
      title: "API Integration",
      description: "Seamlessly integrating APIs for enhanced functionality.",
    },
    {
      icon: <FaShieldAlt size={50} className="mt-6" />,
      title: "Performance Optimization",
      description: "Ensuring fast and efficient React applications.",
    },
    {
      icon: <FaCloud size={50} className="mt-6" />,
      title: "Cloud Deployment",
      description: "Deploying React apps to cloud platforms for scalability.",
    },
  ];

  const testimonialsData = [
    {
      quote: "Our React.js web app needed performance improvements, and AmeerSync optimized it perfectly.",
      author: "Liam Johnson",
      company: "Web Solutions"
    },
    {
      quote: "They helped us migrate our legacy frontend to React.js, improving performance and maintainability.",
      author: "Sophia Kim",
      company: "TechFlex"
    },
    {
      quote: "AmeerSync implemented server-side rendering (SSR), boosting our app’s SEO and loading speed.",
      author: "Ethan Walker",
      company: "SEOBoost"
    },
    {
      quote: "Their expertise in React Hooks made our application more efficient and maintainable.",
      author: "David Williams",
      company: "ModernApps"
    },
    {
      quote: "They built an interactive React dashboard for our analytics platform. The UI is flawless!",
      author: "Rachel Green",
      company: "DataInsights"
    },
    {
      quote: "Their state management solutions with Redux improved our app’s stability and performance.",
      author: "Olivia Brown",
      company: "StateSync"
    },
    {
      quote: "AmeerSync created a beautiful, responsive UI that enhances our customer experience.",
      author: "Michael Carter",
      company: "UXPro"
    },
    {
      quote: "They optimized our React app for mobile devices, improving usability significantly.",
      author: "Charlotte Evans",
      company: "MobileFirst"
    },
    {
      quote: "Their React Native integration helped us build a cross-platform app effortlessly.",
      author: "Lucas Bennett",
      company: "CrossTech"
    }
  ];
  
  

  const faqs = [
    {
      question: "Do you specialize in React development?",
      answer:
        "Yes, React is our core expertise, and we deliver exceptional solutions.",
    },
    {
      question: "Can you create mobile apps with React Native?",
      answer:
        "Absolutely, we excel at building cross-platform apps with React Native.",
    },
    {
      question: "Do you handle API integrations?",
      answer:
        "Yes, we integrate RESTful and GraphQL APIs into React applications.",
    },
    {
      question: "What kind of React projects have you completed?",
      answer:
        "From SPAs to complex dashboards and mobile apps, we've done it all.",
    },
    {
      question: "Do you offer React maintenance services?",
      answer:
        "Yes, we provide ongoing support and optimization for React projects.",
    },
  ];

  const technologies = [
    {
      icon: <FaReact size={50} />,
      title: "React",
      description: "A powerful library for building dynamic user interfaces.",
    },
    {
      icon: <FaCodeBranch size={50} />,
      title: "Redux",
      description: "Efficient state management for complex applications.",
    },
    {
      icon: <FaCloud size={50} />,
      title: "GraphQL",
      description: "A query language for API communication in React apps.",
    },
    {
      icon: <FaLaptopCode size={50} />,
      title: "React Native",
      description: "Cross-platform mobile app development framework.",
    },
    {
      icon: <FaDatabase size={50} />,
      title: "Firebase",
      description: "Backend services and hosting for React applications.",
    },
    {
      icon: <FaNetworkWired size={50} />,
      title: "Webpack",
      description: "Module bundler for optimizing React projects.",
    },
  ];

  const reasons = [
    {
      icon: <FaCheckCircle size={40} />,
      title: "Expert Developers",
      description: "Highly skilled in crafting React solutions.",
    },
    {
      icon: <FaUserCheck />,
      title: "Client Satisfaction",
      description: "We prioritize our clients' success in every project.",
    },
    {
      icon: <FaClock />,
      title: "Timely Delivery",
      description:
        "Delivering projects on schedule without compromising quality.",
    },
    {
      icon: <FaHandshake />,
      title: "Collaborative Approach",
      description: "We work closely with clients to bring their ideas to life.",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovative Solutions",
      description: "Leveraging the latest in React to build cutting-edge apps.",
    },
  ];

  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="react-development-content w-100 bg-Bg">
 
      <motion.div
        className=""
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}>
               <HeroSection
        icon={FaReact}
        imageWidth="100%"
        imageHeight="500px"
        imageAlt="React Development Services"
        buttonText="Get Started"
        title="React Development Services"
        onButtonClick={handleButtonClick}
        imageSrc={Images.REACT_IMG}
        description="Elevate your digital solutions with our expert React development services. From dynamic SPAs to powerful React Native apps, we build experiences that engage and deliver."
        details={
          "Our React development services are tailored to meet the diverse needs of businesses. Whether it's a responsive web application, interactive dashboard, or mobile app, we deliver solutions that exceed expectations."
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

export default memo(ReactContent);
