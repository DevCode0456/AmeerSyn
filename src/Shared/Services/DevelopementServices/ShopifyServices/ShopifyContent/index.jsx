import {
  FaCog,
  FaHdd,
  FaLock,
  FaTools,
  FaClock,
  FaCloud,
  FaShopify,
  FaPenFancy,
  FaUserCheck,
  FaHandshake,
  FaLightbulb,
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
import TechnologiesSection from "../../../../PagesSectionComponents/TechnologiesSection";
import TestimonialsSection from "../../../../PagesSectionComponents/TestimonialsSection";
import ServicesSection from "../../../../PagesSectionComponents/ServicesSection";
import WhyChooseUsSection from "../../../../PagesSectionComponents/WhyChooseUsSection";

const ShopifyContent = () => {


  const services = [
    {
      icon: <FaShopify size={100} className="mt-6" />,
      title: "Shopify Store Setup",
      description:
        "Complete Shopify store setup services to get your business online quickly.",
    },
    {
      icon: <FaTools size={100} className="mt-6" />,
      title: "Theme Development",
      description:
        "Creating custom themes to align with your brand identity.",
    },
    {
      icon: <FaCog size={100} className="mt-6" />,
      title: "Store Optimization",
      description:
        "Optimizing Shopify stores for better performance and speed.",
    },
    {
      icon: <FaCloud size={100} className="mt-6" />,
      title: "Cloud Integration",
      description:
        "Integrating cloud services to enhance Shopify store scalability.",
    },
    {
      icon: <FaLock size={100} className="mt-6" />,
      title: "Security Enhancements",
      description:
        "Implementing robust security measures for Shopify stores.",
    },
    {
      icon: <FaPenFancy size={100} className="mt-6" />,
      title: "Custom Features",
      description:
        "Developing unique features tailored to your business needs.",
    },
  ];

  const testimonialsData = [
    {
      quote: "We needed a fully customized Shopify store, and AmeerSync delivered beyond expectations! The store is fast, user-friendly, and optimized for conversions.",
      author: "Rachel Green",
      company: "EcomBoost"
    },
    {
      quote: "Their Shopify theme customization gave our store a unique and professional look.",
      author: "David Williams",
      company: "TrendWear"
    },
    {
      quote: "AmeerSync integrated advanced payment gateways and streamlined our checkout process.",
      author: "Sophia Mitchell",
      company: "ShopNow"
    },
    {
      quote: "Their expertise in Shopify SEO helped our store rank higher, bringing in more organic traffic.",
      author: "Ethan Lewis",
      company: "OrganicFashion"
    },
    {
      quote: "They set up automated inventory management, saving us hours of manual updates.",
      author: "Linda Thomas",
      company: "SmartGadgets"
    },
    {
      quote: "AmeerSync migrated our existing store to Shopify without any downtime.",
      author: "James Carter",
      company: "HomeDecor"
    },
    {
      quote: "Their custom Shopify app allowed us to add exclusive functionalities to our store.",
      author: "Emily Wilson",
      company: "PetCare"
    },
    {
      quote: "They provided excellent post-launch support and maintenance for our Shopify store.",
      author: "Nathan Scott",
      company: "FitnessPro"
    },
    {
      quote: "AmeerSync optimized our store’s loading speed, reducing bounce rates significantly.",
      author: "Lucas Harris",
      company: "FastTrends"
    }
  ];
  
  

  const faqs = [
    {
      question: "Can you create a custom Shopify theme?",
      answer: "Yes, we specialize in developing custom Shopify themes.",
    },
    {
      question: "Do you provide Shopify app development?",
      answer: "Yes, we develop and integrate Shopify apps tailored to your needs.",
    },
    {
      question: "What payment gateways do you support?",
      answer: "We support a wide range of payment gateways, including Stripe and PayPal.",
    },
    {
      question: "Can you optimize an existing Shopify store?",
      answer: "Yes, we offer store optimization services for better performance.",
    },
    {
      question: "Do you offer Shopify training?",
      answer: "Yes, we provide training to help you manage your Shopify store.",
    },
  ];

  const technologies = [
    {
      icon: <FaShopify size={100} />,
      title: "Shopify Plus",
      description: "An advanced platform for high-volume merchants.",
    },
    {
      icon: <FaCog size={100} />,
      title: "Shopify CLI",
      description: "A command-line tool to streamline Shopify development.",
    },
    {
      icon: <FaCloud size={100} />,
      title: "Shopify APIs",
      description: "Powerful APIs for integrating third-party services.",
    },
    {
      icon: <FaHdd size={100} />,
      title: "Liquid",
      description: "The templating language used for Shopify themes.",
    },
    {
      icon: <FaLightbulb size={100} />,
      title: "Shopify Apps",
      description: "Extend store functionality with powerful apps.",
    },
    {
      icon: <FaNetworkWired size={100} />,
      title: "GraphQL",
      description: "Efficient querying with Shopify's GraphQL API.",
    },
  ];

  const reasons = [
    {
      icon: <FaCheckCircle />,
      title: "Shopify Experts",
      description:
        "Our team has extensive experience in building and managing Shopify stores.",
    },
    {
      icon: <FaUserCheck />,
      title: "Customer-Centric Approach",
      description:
        "We prioritize your needs to deliver tailored Shopify solutions.",
    },
    {
      icon: <FaClock />,
      title: "Timely Deliveries",
      description:
        "We ensure projects are completed on time without compromising quality.",
    },
    {
      icon: <FaHandshake />,
      title: "Reliable Support",
      description:
        "Our team is available to assist you with any Shopify-related challenges.",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovative Solutions",
      description:
        "We implement cutting-edge tools and practices for Shopify development.",
    },
  ];

  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="shopify-content w-100 bg-Bg">
    
      <motion.div
        className=""
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
          <HeroSection
        icon={FaShopify}
      
        imageAlt="Shopify Solutions"
        buttonText="Get Started"
        title="Shopify Development Services"
        onButtonClick={handleButtonClick}
        imageSrc={Images.SHOPIFY_IMG}
        description="Boost your online presence with our expert Shopify services. From store setup and theme customization to app integration and optimization, we provide solutions tailored to your business needs."
        details={
          "Our Shopify services empower businesses to succeed in the e-commerce landscape. Whether you're launching a new store or enhancing an existing one, our expertise ensures seamless and scalable solutions."
        }
      />
      <ServicesSection services={services} />
      <TechnologiesSection technologies={technologies} />
      <WhyChooseUsSection reasons={reasons	}/>
        <Accordin faqs={faqs} />
      <ContactUsSection />
      <TestimonialsSection testimonials={testimonialsData} />
      </motion.div>
    </div>
  );
};

export default memo(ShopifyContent);
