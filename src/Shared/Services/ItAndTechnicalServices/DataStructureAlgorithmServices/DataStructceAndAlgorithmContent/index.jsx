import {
  FaCode,
  FaBrain,
  FaClock,
  FaSearch,
  FaFileAlt,
  FaChartBar,
  FaUserCheck,
  FaLightbulb,
  FaLaptopCode,
  FaCheckCircle,
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

const DataStructceAndAlgorithmContent = () => {


  const services = [
    {
      icon: <FaCode size={100} className="mt-6" />,
      title: "Algorithm Design & Analysis",
      description:
        "We design and analyze algorithms to solve complex problems efficiently.",
    },
    {
      icon: <FaLightbulb size={100} className="mt-6" />,
      title: "Data Structure Optimization",
      description:
        "Optimize existing data structures for enhanced performance.",
    },
    {
      icon: <FaSearch size={100} className="mt-6" />,
      title: "Problem Solving",
      description:
        "Solving data structure and algorithm-based problems with the most efficient approach.",
    },
    {
      icon: <FaChartBar size={100} className="mt-6" />,
      title: "Performance Analysis",
      description:
        "Conducting performance analysis for algorithms and data structures.",
    },
    {
      icon: <FaBrain size={100} className="mt-6" />,
      title: "Algorithm Optimization",
      description:
        "Optimizing algorithms to run efficiently on large-scale data sets.",
    },
    {
      icon: <FaFileAlt size={100} className="mt-6" />,
      title: "Algorithm Tutorials",
      description:
        "Providing tutorials and resources to learn algorithms step by step.",
    },
  ];

  const testimonialsData = [
    {
      quote: "Muhammad’s insights into data structures and algorithms helped me ace my programming assignments and improve my coding skills.",
      author: "Sophia Bennett",
      company: "Computer Science Major"
    },
    {
      quote: "His step-by-step guidance on algorithm optimization was invaluable for my final year project.",
      author: "David Williams",
      company: "Software Engineering Student"
    },
    {
      quote: "Muhammad helped me understand complex data structures, making my coding projects much more efficient and organized.",
      author: "Rachel Green",
      company: "Tech Intern"
    },
    {
      quote: "His deep knowledge of algorithms and problem-solving techniques made me confident in tackling competitive programming challenges.",
      author: "Michael Carter",
      company: "Engineering Student"
    },
    {
      quote: "Muhammad’s tutoring helped me refine my understanding of algorithms, which was crucial for my thesis project.",
      author: "Sophia Kim",
      company: "Research Student"
    },
    {
      quote: "He explained the intricacies of various data structures and their applications, which greatly enhanced my coding skills.",
      author: "Ethan Lewis",
      company: "Software Developer"
    },
    {
      quote: "Muhammad’s approach to teaching algorithms is clear, concise, and full of real-world applications, making complex concepts easy to understand.",
      author: "Olivia Brown",
      company: "Tech Consultant"
    },
    {
      quote: "His insights into time and space complexity analysis helped me optimize my solutions for faster execution.",
      author: "Nathan Scott",
      company: "Computer Science Graduate"
    },
    {
      quote: "Muhammad’s expertise in data structures and algorithms played a key role in my success during technical interviews.",
      author: "James Carter",
      company: "Software Engineering Graduate"
    }
  ];
  

  const faqs = [
    {
      question: "What are data structures?",
      answer:
        "Data structures are ways of organizing and storing data efficiently for easy access and modification.",
    },
    {
      question: "What is the importance of algorithms?",
      answer:
        "Algorithms are crucial as they provide step-by-step instructions for solving problems, ensuring efficiency and scalability.",
    },
    {
      question: "Can I learn algorithms with no programming experience?",
      answer:
        "Yes, we offer beginner-friendly resources to help you learn the fundamentals of algorithms and data structures.",
    },
    {
      question: "What programming languages do you use?",
      answer:
        "We use languages like Python, Java, C++, and JavaScript to demonstrate algorithms and solve problems.",
    },
    {
      question: "How can I improve my problem-solving skills?",
      answer:
        "Practice is key. We provide plenty of problems and challenges to enhance your algorithmic thinking.",
    },
  ];

  const technologies = [
    {
      icon: <FaLaptopCode size={100} />,
      title: "Algorithm Analysis",
      description:
        "Using advanced techniques to analyze and optimize algorithms.",
    },
    {
      icon: <FaCode size={100} />,
      title: "Complex Data Structures",
      description:
        "Working with complex data structures like trees, graphs, and hash tables.",
    },
    {
      icon: <FaSearch size={100} />,
      title: "Efficiency Focused",
      description:
        "Optimizing algorithms and data structures for time and space complexity.",
    },
    {
      icon: <FaBrain size={100} />,
      title: "Advanced Algorithms",
      description:
        "Teaching and implementing advanced algorithms like dynamic programming and greedy algorithms.",
    },
  ];

  const reasons = [
    {
      icon: <FaCheckCircle />,
      title: "Expert Guidance",
      description:
        "Learn from experienced instructors with deep expertise in data structures and algorithms.",
    },
    {
      icon: <FaUserCheck />,
      title: "Practical Learning",
      description:
        "Engage with real-world problems and examples for a hands-on learning experience.",
    },
    {
      icon: <FaClock />,
      title: "Time-Efficient Learning",
      description:
        "Our step-by-step approach ensures fast learning and mastering of algorithms.",
    },
    {
      icon: <FaLightbulb />,
      title: "Creative Solutions",
      description:
        "We provide innovative solutions to algorithmic challenges, enhancing your problem-solving skills.",
    },
  ];

  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="data-structures-algorithms-content w-100 bg-white">
     
      <motion.div
        className="mt-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
         <HeroSection
        icon={FaCode}
      
        imageAlt="Data Structures and Algorithms"
        buttonText="Get Started"
        title="Master Data Structures and Algorithms"
        onButtonClick={handleButtonClick}
        imageSrc={Images.DATA_STRUCTURE_IMG}
        description="Master the core concepts of data structures and algorithms. We offer tutorials, challenges, and optimization strategies to help you solve complex problems efficiently."
        details="Learn essential data structures like arrays, linked lists, trees, and graphs, and understand the algorithms used to manipulate them. Our tutorials focus on both theory and practical implementations in various programming languages."
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

export default memo(DataStructceAndAlgorithmContent);
