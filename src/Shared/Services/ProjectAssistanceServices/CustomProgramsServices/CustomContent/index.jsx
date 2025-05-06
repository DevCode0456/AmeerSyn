import {
  FaCogs,
  FaCode,
  FaUsers,
  FaListAlt,
  FaShieldAlt,
  FaLightbulb,
} from "react-icons/fa";
import React, { memo } from "react";
import { motion } from "framer-motion";
import Accordin from "../../../../Accordin";
import HeroSection from "../../../../HeroSection";
import Images from "../../../../../Helper/ImagesConstant";
import ContactUsSection from "../../../../ContactUsSection";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ServicesSection from "../../../../PagesSectionComponents/ServicesSection";
import WhyChooseUsSection from "../../../../PagesSectionComponents/WhyChooseUsSection";
import TechnologiesSection from "../../../../PagesSectionComponents/TechnologiesSection";
import TestimonialsSection from "../../../../PagesSectionComponents/TestimonialsSection";

const CustomContent = () => {
  const services = [
    {
      icon: <FaCode size={50} className="mt-6" />,
      title: "Custom Software Development",
      description:
        "Tailored solutions for businesses to optimize workflows and improve productivity.",
    },
    {
      icon: <FaCogs size={50} className="mt-6" />,
      title: "System Integration",
      description:
        "Integrating complex systems and technologies to create seamless workflows.",
    },
    {
      icon: <FaUsers size={50} className="mt-6" />,
      title: "Team Collaboration Tools",
      description:
        "Building tools that improve team collaboration, project management, and communication.",
    },
    {
      icon: <FaShieldAlt size={50} className="mt-6" />,
      title: "Security Solutions",
      description:
        "Ensuring your applications are safe with the latest security protocols and practices.",
    },
    {
      icon: <FaLightbulb size={50} className="mt-6" />,
      title: "Innovative Software Solutions",
      description:
        "Providing innovative software development techniques to give you an edge over competitors.",
    },
    {
      icon: <FaListAlt size={50} className="mt-6" />,
      title: "Web & Mobile Development",
      description:
        "Building fully responsive web and mobile applications to meet your business needs.",
    },
  ];

  const reasons = [
    {
      icon: <FaUsers />,
      title: "Customer-Centric Approach",
      description:
        "We prioritize your needs and build custom solutions that fit your specific requirements.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Security First",
      description:
        "Our development process integrates top-notch security practices to protect your data.",
    },
    {
      icon: <FaCode />,
      title: "Experienced Developers",
      description:
        "We have a team of skilled developers proficient in the latest technologies.",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovative Solutions",
      description:
        "We combine creativity with technical expertise to deliver innovative solutions.",
    },
  ];

  const technologies = [
    {
      icon: <FaCode size={50} />,
      title: "Full Stack Development",
      description:
        "Building applications using both front-end and back-end technologies.",
    },
    {
      icon: <FaUsers size={50} />,
      title: "Cloud Technologies",
      description:
        "Leveraging cloud platforms like AWS, Azure, and Google Cloud for scalable solutions.",
    },
    {
      icon: <FaCogs size={50} />,
      title: "API Development",
      description:
        "Creating custom APIs for seamless interaction between software components.",
    },
    {
      icon: <FaShieldAlt size={50} />,
      title: "DevOps",
      description:
        "Automating development and deployment processes for faster time-to-market.",
    },
  ];

  

  const testimonialsData = [
    {
      quote: "Muhammad helped me develop a custom software solution tailored to my business needs, improving efficiency and automation.",
      author: "John Davis",
      company: "E-commerce Business"
    },
    {
      quote: "He built a unique application for my company that integrated seamlessly with our existing systems and workflows.",
      author: "Sarah Taylor",
      company: "Tech Start-up"
    },
    {
      quote: "Muhammad’s expertise in custom programming enabled me to solve specific challenges within my business, providing a competitive edge.",
      author: "David Williams",
      company: "Consulting Firm"
    },
    {
      quote: "He delivered a high-quality custom software solution that perfectly met my business requirements and exceeded expectations.",
      author: "Rachel Green",
      company: "Retail Business"
    },
    {
      quote: "Muhammad worked closely with me to understand my needs, delivering a customized solution that was intuitive and user-friendly.",
      author: "Michael Carter",
      company: "Financial Services"
    },
    {
      quote: "Thanks to Muhammad’s custom programming expertise, I now have a scalable solution that supports my growing business.",
      author: "Sophia Kim",
      company: "Marketing Agency"
    },
    {
      quote: "Muhammad built a custom CRM system for my company that simplified client management and streamlined operations.",
      author: "Olivia Brown",
      company: "Customer Relations"
    },
    {
      quote: "He created a robust custom application that handled complex processes and reduced the time needed to complete tasks.",
      author: "Nathan Scott",
      company: "Logistics Firm"
    },
    {
      quote: "Muhammad's custom programming service helped me develop a personalized solution that gave my business a unique advantage.",
      author: "James Carter",
      company: "Business Solutions"
    }
  ];
  

  const faqs = [
    {
      question: "How long does it take to develop a custom solution?",
      answer:
        "The time frame depends on the complexity of the project, but we aim for efficient, timely delivery while maintaining high-quality standards.",
    },
    {
      question: "What programming languages do you use?",
      answer:
        "We use a range of languages and technologies including JavaScript, Python, Java, React, Node.js, and more, based on your needs.",
    },
    {
      question: "Do you offer post-development support?",
      answer:
        "Yes, we offer ongoing support and maintenance to ensure the smooth running of your system after deployment.",
    },
    {
      question: "Can I integrate your solutions with my existing systems?",
      answer:
        "Yes, we specialize in integrating custom solutions with your current systems and technologies to ensure seamless operation.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We provide custom programming services for a variety of industries, including e-commerce, healthcare, finance, and more.",
    },
  ];

  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="custom-programming-services-content w-full bg-Bg">
      
      <motion.div
        className=""
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection
        icon={FaCode}
      
        buttonText="Get Started"
        onButtonClick={handleButtonClick}
        imageSrc={Images.PROGRAMING_IMG}
        title="Custom Programming Solutions"
        imageAlt="Custom Programming Solutions"
        description="We offer custom programming services designed to meet your unique business requirements. From software development to system integration, we deliver reliable solutions."
        details="Our team of expert developers works closely with you to create personalized applications that meet your goals, whether it’s a mobile app, web app, or an enterprise solution."
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

export default memo(CustomContent);
