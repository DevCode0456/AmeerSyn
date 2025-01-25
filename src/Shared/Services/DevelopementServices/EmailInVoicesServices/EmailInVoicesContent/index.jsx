import {
  FaCog,
  FaTools,
  FaClock,
  FaDesktop,
  FaEnvelope,
  FaPencilAlt,
  FaUserCheck,
  FaLightbulb,
  FaFileInvoice,
  FaCheckCircle,
  FaShippingFast,
} from "react-icons/fa";
import React, { memo } from "react";
import { motion } from "framer-motion";
import Accordin from "../../../../Accordin";
import HeroSection from "../../../../HeroSection";
import Images from "../../../../../Helper/ImagesConstant";
import ContactUsSection from "../../../../ContactUsSection";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import WhyChooseUsSection from "../../../../PagesSectionComponents/WhyChooseUsSection";
import ProjectsSection from "../../../../PagesSectionComponents/ProjectsSection";
import ServicesSection from "../../../../PagesSectionComponents/ServicesSection";
import TestimonialsSection from "../../../../PagesSectionComponents/TestimonialsSection";
import TechnologiesSection from "../../../../PagesSectionComponents/TechnologiesSection";

const EmailInVoicesContent = () => {
  const projects = [
    {
      title: "Custom Invoice Templates",
      description: "Designed custom, brand-focused invoice templates for businesses.",
      image: Images.EMAIL_INVOICE_IMG1,
    },
    {
      title: "Automated Email Invoices",
      description: "Built automated email systems for sending invoices with ease.",
      image: Images.EMAIL_INVOICE_IMG2,
    },
    {
      title: "Responsive Designs",
      description: "Developed mobile-optimized invoices that look great on all devices.",
      image: Images.EMAIL_INVOICE_IMG3,
    },
    {
      title: "Interactive Invoices",
      description: "Created interactive invoices with payment options and order details.",
      image: Images.EMAIL_INVOICE_IMG4,
    },
  ];

  const services = [
    {
      icon: <FaEnvelope size={100} className="mt-6" />,
      title: "Email Invoice Design",
      description: "We create visually appealing email invoices that reflect your brand's identity.",
    },
    {
      icon: <FaPencilAlt size={100} className="mt-6" />,
      title: "Custom Templates",
      description: "Designing personalized invoice templates that match your business style.",
    },
    {
      icon: <FaDesktop size={100} className="mt-6" />,
      title: "Responsive Design",
      description: "Ensuring your email invoices are mobile-friendly and well-structured.",
    },
    {
      icon: <FaFileInvoice size={100} className="mt-6" />,
      title: "Invoice Management",
      description: "Streamlining your invoice management with easy-to-use email templates.",
    },
    {
      icon: <FaShippingFast size={100} className="mt-6" />,
      title: "Automated Delivery",
      description: "Automating the delivery of invoices through email to your clients.",
    },
    {
      icon: <FaTools size={100} className="mt-6" />,
      title: "Payment Integration",
      description: "Integrating secure payment options directly into your invoices.",
    },
  ];

  const testimonialsData = [
    {
      text: "Our invoices are now beautifully designed and easy for clients to understand!",
      name: "Sarah Lee",
      role: "Business Owner",
      image: "https://via.placeholder.com/150",
    },
    {
      text: "The custom templates and automated emails have saved us so much time.",
      name: "James Hunt",
      role: "Finance Manager",
      image: "https://via.placeholder.com/150",
    },
    {
      text: "Clients love the clean, professional look of our email invoices!",
      name: "Laura Smith",
      role: "Accountant",
      image: "https://via.placeholder.com/150",
    },
  ];

  const faqs = [
    {
      question: "Can you customize the design of my email invoices?",
      answer: "Yes, we create custom designs that align with your brand’s style and message.",
    },
    {
      question: "Are your email invoices mobile-friendly?",
      answer: "Absolutely! Our email invoices are designed to look great on any device.",
    },
    {
      question: "Can I automate the sending of invoices?",
      answer: "Yes, we offer automated solutions that send invoices to your clients without manual effort.",
    },
    {
      question: "Do you provide payment gateway integrations?",
      answer: "We can integrate secure payment options directly into your email invoices for easy payments.",
    },
    {
      question: "How can I track invoice statuses?",
      answer: "We can add tracking features to your invoices, allowing you to monitor their delivery and payment statuses.",
    },
  ];

  const technologies = [
    {
      icon: <FaEnvelope size={100} />,
      title: "Email Development",
      description: "Expert knowledge in email development for effective invoice delivery.",
    },
    {
      icon: <FaPencilAlt size={100} />,
      title: "Custom Designs",
      description: "Crafting custom designs that match your brand’s look and feel.",
    },
    {
      icon: <FaCog size={100} />,
      title: "Email Automation",
      description: "Automating the email process to ensure timely and accurate invoice delivery.",
    },
    {
      icon: <FaTools size={100} />,
      title: "Payment Integration",
      description: "Integrating payment options directly into your invoices for convenience.",
    },
  ];

  const reasons = [
    {
      icon: <FaCheckCircle />,
      title: "Professional Designs",
      description: "We deliver professional, clean, and visually appealing email invoices.",
    },
    {
      icon: <FaUserCheck />,
      title: "Client Satisfaction",
      description: "Our focus is on creating email invoices that your clients will appreciate and easily understand.",
    },
    {
      icon: <FaClock />,
      title: "Time-Saving Solutions",
      description: "Automating the process saves you time while ensuring accuracy and consistency.",
    },
    {
      icon: <FaLightbulb />,
      title: "Creative Solutions",
      description: "We bring creative ideas to life with email invoice designs that stand out.",
    },
  ];

  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="email-invoice-design-content w-100 bg-white">
      <HeroSection
        icon={FaEnvelope}
        imageWidth="600px"
        imageHeight="400px"
        imageAlt="Email Invoice Design Services"
        buttonText="Get Started"
        title="Email Invoice Design Services"
        onButtonClick={handleButtonClick}
        imageSrc={Images.EMAIL_INVOICES_IMG}
        description="Revolutionize your invoicing process with custom email invoices. Our designs are clean, professional, and optimized for mobile to ensure your clients receive easy-to-understand invoices every time."
        details={
          "We specialize in designing email invoices that are responsive, easy to use, and aligned with your brand’s identity. Our invoices are optimized for both desktop and mobile devices, ensuring a seamless experience for your clients."
        }
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

export default memo(EmailInVoicesContent);
