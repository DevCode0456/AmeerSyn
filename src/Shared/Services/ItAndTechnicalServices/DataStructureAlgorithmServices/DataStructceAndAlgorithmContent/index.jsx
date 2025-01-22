import {
  FaCode,
  FaLightbulb,
  FaSearch,
  FaChartBar,
  FaBrain,
  FaFileAlt,
  FaLaptopCode,
  FaCheckCircle,
  FaUserCheck,
  FaClock,
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
import ContactUsSection from "../../../../ContactUsSection";

const DataStructceAndAlgorithmContent = () => {
  const projects = [
    {
      title: "Sorting Algorithms Visualization",
      description: "Interactive sorting algorithm visualizations to better understand sorting techniques.",
      image: Images.DATA_STRUCTURE_IMG1,
    },
    {
      title: "Graph Traversal Algorithms",
      description: "Implemented and visualized graph traversal algorithms like DFS and BFS.",
      image: Images.DATA_STRUCTURE_IMG2,
    },
    {
      title: "Dynamic Programming Challenges",
      description: "Solving real-world problems using dynamic programming.",
      image: Images.DATA_STRUCTURE_IMG3,
    },
    {
      title: "Data Structure Optimization",
      description: "Optimizing data structures for performance and scalability.",
      image: Images.DATA_STRUCTURE_IMG4,
    },
  ];

  const services = [
    {
      icon: <FaCode size={100} className="mt-6" />,
      title: "Algorithm Design & Analysis",
      description: "We design and analyze algorithms to solve complex problems efficiently.",
    },
    {
      icon: <FaLightbulb size={100} className="mt-6" />,
      title: "Data Structure Optimization",
      description: "Optimize existing data structures for enhanced performance.",
    },
    {
      icon: <FaSearch size={100} className="mt-6" />,
      title: "Problem Solving",
      description: "Solving data structure and algorithm-based problems with the most efficient approach.",
    },
    {
      icon: <FaChartBar size={100} className="mt-6" />,
      title: "Performance Analysis",
      description: "Conducting performance analysis for algorithms and data structures.",
    },
    {
      icon: <FaBrain size={100} className="mt-6" />,
      title: "Algorithm Optimization",
      description: "Optimizing algorithms to run efficiently on large-scale data sets.",
    },
    {
      icon: <FaFileAlt size={100} className="mt-6" />,
      title: "Algorithm Tutorials",
      description: "Providing tutorials and resources to learn algorithms step by step.",
    },
  ];

  const testimonialsData = [
    {
      text: "Thanks to the tutorials, I was able to understand dynamic programming and graph algorithms!",
      name: "John Doe",
      role: "Software Engineer",
      image: "https://via.placeholder.com/150",
    },
    {
      text: "The problem-solving approach made me better at tackling complex algorithm challenges.",
      name: "Emily Stone",
      role: "Tech Lead",
      image: "https://via.placeholder.com/150",
    },
    {
      text: "Great guidance on optimizing data structures for real-world applications.",
      name: "Michael Brown",
      role: "Data Scientist",
      image: "https://via.placeholder.com/150",
    },
  ];

  const faqs = [
    {
      question: "What are data structures?",
      answer: "Data structures are ways of organizing and storing data efficiently for easy access and modification.",
    },
    {
      question: "What is the importance of algorithms?",
      answer: "Algorithms are crucial as they provide step-by-step instructions for solving problems, ensuring efficiency and scalability.",
    },
    {
      question: "Can I learn algorithms with no programming experience?",
      answer: "Yes, we offer beginner-friendly resources to help you learn the fundamentals of algorithms and data structures.",
    },
    {
      question: "What programming languages do you use?",
      answer: "We use languages like Python, Java, C++, and JavaScript to demonstrate algorithms and solve problems.",
    },
    {
      question: "How can I improve my problem-solving skills?",
      answer: "Practice is key. We provide plenty of problems and challenges to enhance your algorithmic thinking.",
    },
  ];

  const technologies = [
    {
      icon: <FaLaptopCode size={100} />,
      title: "Algorithm Analysis",
      description: "Using advanced techniques to analyze and optimize algorithms.",
    },
    {
      icon: <FaCode size={100} />,
      title: "Complex Data Structures",
      description: "Working with complex data structures like trees, graphs, and hash tables.",
    },
    {
      icon: <FaSearch size={100} />,
      title: "Efficiency Focused",
      description: "Optimizing algorithms and data structures for time and space complexity.",
    },
    {
      icon: <FaBrain size={100} />,
      title: "Advanced Algorithms",
      description: "Teaching and implementing advanced algorithms like dynamic programming and greedy algorithms.",
    },
  ];

  const reasons = [
    {
      icon: <FaCheckCircle />,
      title: "Expert Guidance",
      description: "Learn from experienced instructors with deep expertise in data structures and algorithms.",
    },
    {
      icon: <FaUserCheck />,
      title: "Practical Learning",
      description: "Engage with real-world problems and examples for a hands-on learning experience.",
    },
    {
      icon: <FaClock />,
      title: "Time-Efficient Learning",
      description: "Our step-by-step approach ensures fast learning and mastering of algorithms.",
    },
    {
      icon: <FaLightbulb />,
      title: "Creative Solutions",
      description: "We provide innovative solutions to algorithmic challenges, enhancing your problem-solving skills.",
    },
  ];

  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="data-structures-algorithms-content w-100 bg-white">
      <HeroSection
        icon={FaCode}
        imageWidth="600px"
        imageHeight="400px"
        imageAlt="Data Structures and Algorithms"
        buttonText="Get Started"
        title="Master Data Structures and Algorithms"
        onButtonClick={handleButtonClick}
        imageSrc={Images.DATA_STRUCTURE_IMG1}
        description="Master the core concepts of data structures and algorithms. We offer tutorials, challenges, and optimization strategies to help you solve complex problems efficiently."
        details="Learn essential data structures like arrays, linked lists, trees, and graphs, and understand the algorithms used to manipulate them. Our tutorials focus on both theory and practical implementations in various programming languages."
      />
      <motion.div
        className="my-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center text-3xl font-bold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              className="bg-white shadow-2xl p-6 rounded-3xl text-center"
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
      <ContactUsSection />

      <motion.div
        className="my-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center text-3xl font-bold mb-6">Technologies We Use</h2>
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

export default memo(DataStructceAndAlgorithmContent);
