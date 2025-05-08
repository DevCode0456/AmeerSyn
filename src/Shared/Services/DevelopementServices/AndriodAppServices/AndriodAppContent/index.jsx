import {
  FaTools,
  FaClock,
  FaAndroid,
  FaMobileAlt,
  FaShieldAlt,
  FaUserCheck,
  FaHandshake,
  FaLightbulb,
  FaGooglePlay,
  FaLaptopCode,
  FaCodeBranch,
  FaCheckCircle,
} from "react-icons/fa";
import React, { memo } from "react";
import { motion } from "framer-motion";
import Accordin from "../../../../Accordin";
import HeroSection from "../../../../HeroSection";
import Images from "../../../../../Helper/ImagesConstant";
import ContactUsSection from "../../../../ContactUsSection";
import ServicesSection from "../../../../PagesSectionComponents/ServicesSection";
import WhyChooseUsSection from "../../../../PagesSectionComponents/WhyChooseUsSection";
import TestimonialsSection from "../../../../PagesSectionComponents/TestimonialsSection";
import TechnologiesSection from "../../../../PagesSectionComponents/TechnologiesSection";

const AndroidAppContent = () => {
  const services = [
    {
      icon: <FaAndroid size={50} className="mt-6" />,
      title: "Custom Android App Development",
      description:
        "We build tailored Android apps to meet specific business requirements, driving engagement and efficiency.",
    },
    {
      icon: <FaMobileAlt size={50} className="mt-6" />,
      title: "UI/UX Design",
      description:
        "Design intuitive and visually appealing interfaces for enhanced user experience.",
    },
    {
      icon: <FaGooglePlay size={50} className="mt-6" />,
      title: "Play Store Deployment",
      description:
        "Seamless publishing of your apps to the Google Play Store with full compliance.",
    },
    {
      icon: <FaTools size={50} className="mt-6" />,
      title: "App Maintenance",
      description:
        "Continuous support and updates to ensure app performance and security.",
    },
    {
      icon: <FaShieldAlt size={50} className="mt-6" />,
      title: "App Security",
      description:
        "Implement secure code practices to safeguard user data and prevent breaches.",
    },
    {
      icon: <FaLaptopCode size={50} className="mt-6" />,
      title: "API Integration",
      description:
        "Integrate third-party APIs for payment gateways, social login, and more.",
    },
  ];

  const testimonialsData = [
    {
      quote:
        "AmeerSync developed a sleek Android app for our business. The UI/UX is intuitive, and performance is outstanding.",
      author: "Emma Robinson",
      company: "App Innovations",
    },
    {
      quote:
        "They optimized our Android app for low-end devices, ensuring a smooth experience for all users.",
      author: "David Williams",
      company: "MobileFirst",
    },
    {
      quote:
        "AmeerSync integrated real-time push notifications, increasing our app engagement by 50%.",
      author: "Rachel Green",
      company: "EngageApp",
    },
    {
      quote:
        "Their expertise in Firebase helped us build a real-time chat feature seamlessly.",
      author: "Sophia Kim",
      company: "ChatNow",
    },
    {
      quote:
        "They helped us implement in-app purchases, boosting our revenue significantly.",
      author: "Ethan Lewis",
      company: "MobileCommerce",
    },
    {
      quote:
        "AmeerSync's Android app security enhancements protected us from data leaks and vulnerabilities.",
      author: "Michael Carter",
      company: "SecureApps",
    },
    {
      quote:
        "Their Android app optimization reduced battery usage and improved overall performance.",
      author: "Olivia Brown",
      company: "BatterySaver",
    },
    {
      quote:
        "They built a feature-rich Android app for our e-learning platform. The experience is seamless!",
      author: "Nathan Scott",
      company: "LearnPro",
    },
    {
      quote:
        "AmeerSync delivered a highly scalable Android application with cloud integration.",
      author: "James Carter",
      company: "CloudApps",
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
      answer: "Yes, we offer comprehensive maintenance and support services.",
    },
  ];

  const technologies = [
    {
      icon: <FaAndroid size={50} />,
      title: "Kotlin",
      description: "A modern programming language for Android app development.",
    },
    {
      icon: <FaCodeBranch size={50} />,
      title: "Java",
      description: "A robust and reliable language for building Android apps.",
    },
    {
      icon: <FaLaptopCode size={50} />,
      title: "Android Studio",
      description: "The official IDE for Android development.",
    },
    {
      icon: <FaShieldAlt size={50} />,
      title: "Firebase",
      description:
        "A platform for real-time databases, authentication, and analytics.",
    },
    {
      icon: <FaGooglePlay size={50} />,
      title: "Play Store APIs",
      description: "APIs for app monetization, subscriptions, and more.",
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
      description: "Regular updates and open communication during development.",
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
    <div className=" bg-Bg">
      
      <motion.div
        className=""
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection
        icon={FaAndroid}
        imageWidth="100%"
        imageHeight="500px"
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
      <WhyChooseUsSection reasons={reasons} />
        <Accordin faqs={faqs} />
        <ContactUsSection />
        <TestimonialsSection testimonials={testimonialsData} />
      </motion.div>
    </div>
  );
};

export default memo(AndroidAppContent);
