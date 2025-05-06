import {
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
  FaHtml5,
} from "react-icons/fa";
import React, { memo } from "react";
import { motion } from "framer-motion";
import Accordin from "../../../../Accordin";
import HeroSection from "../../../../HeroSection";
import Images from "../../../../../Helper/ImagesConstant";
import ContactUsSection from "../../../../ContactUsSection";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ServicesSection from "../../../../PagesSectionComponents/ServicesSection";
import TechnologiesSection from "../../../../PagesSectionComponents/TechnologiesSection";
import TestimonialsSection from "../../../../PagesSectionComponents/TestimonialsSection";
import WhyChooseUsSection from "../../../../PagesSectionComponents/WhyChooseUsSection";

const WebDevelopementContent = () => {
  const services = [
    {
      icon: <FaHtml5 size={50} className="mt-6" />,
      title: "Front-end Development",
      description: "Crafting visually appealing and user-friendly interfaces.",
    },
    {
      icon: <FaCodeBranch size={50} className="mt-6" />,
      title: "Back-end Development",
      description: "Building robust and scalable server-side solutions.",
    },
    {
      icon: <FaLaptopCode size={50} className="mt-6" />,
      title: "Full-stack Development",
      description: "Providing end-to-end web development services.",
    },
    {
      icon: <FaNetworkWired size={50} className="mt-6" />,
      title: "Website Optimization",
      description: "Enhancing performance and load times of websites.",
    },
    {
      icon: <FaShieldAlt size={50} className="mt-6" />,
      title: "Web Security",
      description: "Implementing measures to safeguard websites from threats.",
    },
    {
      icon: <FaCloud size={50} className="mt-6" />,
      title: "Cloud Integration",
      description: "Integrating cloud services for improved functionality.",
    },
  ];

  const testimonialsData = [
    {
      quote:
        "Muhammad's expertise in web development helped me create a highly responsive and user-friendly website for my business.",
      author: "Jessica Miller",
      company: "E-commerce Startup",
    },
    {
      quote:
        "He built a stunning website for my portfolio, incorporating the latest design trends and technologies.",
      author: "Daniel Moore",
      company: "Freelance Designer",
    },
    {
      quote:
        "Muhammad ensured my website was not only visually appealing but also optimized for SEO and fast loading times.",
      author: "Rachel Johnson",
      company: "Digital Marketing Agency",
    },
    {
      quote:
        "His attention to detail and ability to integrate custom features into my website helped elevate my brand's online presence.",
      author: "Michael Carter",
      company: "Tech Innovations",
    },
    {
      quote:
        "Muhammad helped me transform my ideas into a fully functional website that’s both engaging and intuitive.",
      author: "Sophia Lee",
      company: "Fashion Retailer",
    },
    {
      quote:
        "He provided expert advice on making my website mobile-friendly and compatible across different devices.",
      author: "Ethan Lewis",
      company: "Software Development",
    },
    {
      quote:
        "Muhammad ensured the smooth implementation of my website’s CMS, making it easy for me to manage content on my own.",
      author: "Olivia Brown",
      company: "Non-Profit Organization",
    },
    {
      quote:
        "His guidance on UI/UX design helped me create an easy-to-navigate website that users love to visit.",
      author: "Nathan Scott",
      company: "Consulting Firm",
    },
    {
      quote:
        "Muhammad’s dedication to delivering high-quality web solutions resulted in an impressive website that exceeded my expectations.",
      author: "James Carter",
      company: "Corporate Business",
    },
  ];

  const faqs = [
    {
      question: "Do you offer responsive web design?",
      answer:
        "Yes, we specialize in creating websites that look great on all devices.",
    },
    {
      question: "Can you develop custom web applications?",
      answer:
        "Absolutely, we tailor web applications to meet your business needs.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We use modern frameworks like React, Angular, Node.js, and more.",
    },
    {
      question: "Do you offer maintenance services?",
      answer:
        "Yes, we provide ongoing support and maintenance for your website.",
    },
    {
      question: "How secure are your web solutions?",
      answer:
        "We implement best practices to ensure your website is secure from threats.",
    },
  ];

  const technologies = [
    {
      icon: <FaHtml5 size={50} />,
      title: "HTML5",
      description: "The standard markup language for creating web pages.",
    },
    {
      icon: <FaLaptopCode size={50} />,
      title: "CSS3",
      description:
        "Styling language for creating visually engaging web designs.",
    },
    {
      icon: <FaCodeBranch size={50} />,
      title: "JavaScript",
      description: "Programming language for dynamic and interactive content.",
    },
    {
      icon: <FaNetworkWired size={50} />,
      title: "React",
      description: "A popular library for building user interfaces.",
    },
    {
      icon: <FaCloud size={50} />,
      title: "Node.js",
      description: "Server-side JavaScript for scalable applications.",
    },
    {
      icon: <FaDatabase size={50} />,
      title: "Databases",
      description: "Efficient data management with SQL and NoSQL solutions.",
    },
  ];

  const reasons = [
    {
      icon: <FaCheckCircle />,
      title: "Proven Expertise",
      description:
        "Years of experience in delivering high-quality web solutions.",
    },
    {
      icon: <FaUserCheck />,
      title: "Client-Centric Approach",
      description: "We tailor our services to meet your specific requirements.",
    },
    {
      icon: <FaClock />,
      title: "On-Time Delivery",
      description:
        "We ensure timely completion of projects without compromising quality.",
    },
    {
      icon: <FaHandshake />,
      title: "Reliable Partnership",
      description: "Building long-term relationships with our clients.",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovative Solutions",
      description:
        "We embrace the latest trends and technologies in web development.",
    },
  ];

  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="web-development-content w-100 bg-Bg">
      <motion.div
        className=""
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection
          icon={FaLaptopCode}
          imageAlt="Web Development Services"
          buttonText="Get Started"
          title="Web Development Services"
          onButtonClick={handleButtonClick}
          imageSrc={Images.WEB_DEVELOPMENT_IMG}
          description="Take your online presence to the next level with our comprehensive web development services. From responsive designs to robust back-end solutions, we deliver results that drive success."
          details={
            "Our web development services cater to businesses aiming for digital transformation. Whether it's a corporate website, e-commerce platform, or custom application, we ensure top-notch quality and performance."
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

export default memo(WebDevelopementContent);
