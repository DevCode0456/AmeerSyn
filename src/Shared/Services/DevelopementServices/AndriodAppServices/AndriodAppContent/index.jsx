import {
  FaTools,
  FaAndroid,
  FaMobileAlt,
  FaShieldAlt,
  FaLaptopCode,
  FaGooglePlay,
  FaCodeBranch,
  FaCheckCircle,
  FaUserCheck,
  FaClock,
  FaHandshake,
  FaLightbulb,
} from "react-icons/fa";
import React, { memo } from "react";
import HeroSection from "../../../../HeroSection";
import Images from "../../../../../Helper/ImagesConstant";
import ContactUsSection from "../../../../ContactUsSection";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ServicesSection from "../../../../PagesSectionComponents/ServicesSection";
import ProjectsSection from "../../../../PagesSectionComponents/ProjectsSection";
import TestimonialsSection from "../../../../PagesSectionComponents/TestimonialsSection";
import TechnologiesSection from "../../../../PagesSectionComponents/TechnologiesSection";
import Accordin from "../../../../Accordin";
import { motion } from "framer-motion";
import WhyChooseUsSection from "../../../../PagesSectionComponents/WhyChooseUs";


const AndroidAppContent = () => {
  const projects = [
    {
      title: "E-Commerce Mobile App",
      description:
        "A feature-rich e-commerce application with seamless navigation and secure payment options.",
      image: Images.MOBILE_APP_IMG,
    },
    {
      title: "Healthcare Mobile App",
      description:
        "A mobile platform for healthcare providers and patients to manage appointments and records.",
      image: Images.HEALTHCARE_APP_IMG,
    },
    {
      title: "Social Networking App",
      description:
        "An engaging social media application for connecting people globally.",
      image: Images.SOCIAL_MEDIA_APP_IMG,
    },
    {
      title: "Educational App",
      description:
        "A mobile app designed for online learning and interactive course material delivery.",
      image: Images.EDUCATION_APP_IMG,
    },
  ];

  const services = [
    {
      icon: <FaAndroid size={100} className="mt-6" />,
      title: "Custom Android App Development",
      description:
        "We build tailored Android apps to meet specific business requirements, driving engagement and efficiency.",
    },
    {
      icon: <FaMobileAlt size={100} className="mt-6" />,
      title: "UI/UX Design",
      description:
        "Design intuitive and visually appealing interfaces for enhanced user experience.",
    },
    {
      icon: <FaGooglePlay size={100} className="mt-6" />,
      title: "Play Store Deployment",
      description:
        "Seamless publishing of your apps to the Google Play Store with full compliance.",
    },
    {
      icon: <FaTools size={100} className="mt-6" />,
      title: "App Maintenance",
      description:
        "Continuous support and updates to ensure app performance and security.",
    },
    {
      icon: <FaShieldAlt size={100} className="mt-6" />,
      title: "App Security",
      description:
        "Implement secure code practices to safeguard user data and prevent breaches.",
    },
    {
      icon: <FaLaptopCode size={100} className="mt-6" />,
      title: "API Integration",
      description:
        "Integrate third-party APIs for payment gateways, social login, and more.",
    },
  ];

  const testimonialsData = [
    {
      text: "The app delivered is exactly what we envisioned. Fantastic work!",
      name: "Sarah Lee",
      role: "Startup Founder",
      image: "https://via.placeholder.com/150", // Replace with actual image URLs
    },
    {
      text: "Excellent service and a top-quality app. Highly recommended!",
      name: "Mark Wilson",
      role: "Business Owner",
      image: "https://via.placeholder.com/150", // Replace with actual image URLs
    },
    {
      text: "Our app launch was a huge success thanks to their expert development.",
      name: "Emily Davis",
      role: "Product Manager",
      image: "https://via.placeholder.com/150", // Replace with actual image URLs
    },
  ];

  const faqs = [
    {
      question: "What platforms do you support for app development?",
      answer:
        "We specialize in Android development, but can also work on cross-platform solutions.",
    },
    {
      question: "How long does it take to build an Android app?",
      answer:
        "The timeline depends on complexity, with most apps taking 3 to 6 months.",
    },
    {
      question: "Can you integrate payment gateways into apps?",
      answer: "Yes, we support integration of secure payment gateways.",
    },
    {
      question: "What technologies do you use for Android development?",
      answer: "We use Kotlin, Java, Android Studio, and Firebase.",
    },
    {
      question: "Do you provide app maintenance after development?",
      answer:
        "Yes, we offer comprehensive maintenance and support services.",
    },
  ];

  const technologies = [
    {
      icon: <FaAndroid size={100} />,
      title: "Kotlin",
      description:
        "A modern programming language for Android app development.",
    },
    {
      icon: <FaCodeBranch size={100} />,
      title: "Java",
      description:
        "A robust and reliable language for building Android apps.",
    },
    {
      icon: <FaLaptopCode size={100} />,
      title: "Android Studio",
      description:
        "The official IDE for Android development.",
    },
    {
      icon: <FaShieldAlt size={100} />,
      title: "Firebase",
      description:
        "A platform for real-time databases, authentication, and analytics.",
    },
    {
      icon: <FaGooglePlay size={100} />,
      title: "Play Store APIs",
      description:
        "APIs for app monetization, subscriptions, and more.",
    },
  ];

  const reasons = [
    {
      icon: <FaCheckCircle size={50} />,
      title: "Expert Android Developers",
      description:
        "A team with years of experience in delivering top-quality apps.",
    },
    {
      icon: <FaUserCheck size={50} />,
      title: "Client-Centric Approach",
      description:
        "We prioritize your goals to build apps that truly fit your needs.",
    },
    {
      icon: <FaClock size={50} />,
      title: "On-Time Delivery",
      description:
        "We ensure projects are completed within the agreed timeline.",
    },
    {
      icon: <FaHandshake size={50} />,
      title: "Transparent Workflow",
      description:
        "Regular updates and open communication during development.",
    },
    {
      icon: <FaLightbulb size={50} />,
      title: "Innovative Solutions",
      description:
        "Using the latest tools and frameworks for innovative app features.",
    },
  ];

  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="android-content w-100 bg-white">
      <HeroSection
        icon={FaAndroid}
        imageWidth="600px"
        imageHeight="400px"
        buttonText="Get Started"
        onButtonClick={handleButtonClick}
        imageSrc={Images.ANDRIOD_APP_IMG}
        imageAlt="Android App Development"
        title="Android App Development Services"
        description="We craft top-notch Android applications tailored to your business needs. From design to deployment, we ensure excellence in every step of the app development journey."
        details="Our Android app solutions are designed for scalability, reliability, and top-tier performance. Whether you're launching your first app or expanding your digital presence, our experts are here to help."
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

export default memo(AndroidAppContent);
