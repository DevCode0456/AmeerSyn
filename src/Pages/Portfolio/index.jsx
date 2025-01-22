import React, { memo } from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaUsers, FaBriefcase, FaPhoneAlt } from "react-icons/fa";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import Testimonials from "../../Shared/Testimonials";
import Images from "../../Helper/ImagesConstant";
import ContactUsSection from "../../Shared/ContactUsSection";

const PortfolioPage = () => {
  const PageHeading = ({ headingText }) => {
    return <h2 className="text-4xl font-extrabold text-gray-800">{headingText}</h2>;
  };

  const SubHeading = ({ headingText }) => {
    return <p className="text-lg text-gray-600">{headingText}</p>;
  };

  const skills = [
    { name: "React", level: "Expert", icon: <FaLaptopCode size={32} /> },
    { name: "Tailwind CSS", level: "Advanced", icon: <FaLaptopCode size={32} /> },
    { name: "WordPress", level: "Expert", icon: <FaLaptopCode size={32} /> },
    { name: "Shopify", level: "Intermediate", icon: <FaLaptopCode size={32} /> },
    { name: "Android Development", level: "Expert", icon: <FaCode size={32} /> },
  ];

  const projects = [
    {
      title: "Project One",
      description: "A fully responsive eCommerce site built with React and Tailwind CSS.",
      imageUrl: "https://via.placeholder.com/400",
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Project Two",
      description: "A blog website with custom WordPress theme and admin panel.",
      imageUrl: "https://via.placeholder.com/400",
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Project Three",
      description: "A mobile app built using Android Studio for a restaurant management system.",
      imageUrl: "https://via.placeholder.com/400",
      demoLink: "#",
      codeLink: "#",
    },
  ];

  const testimonialsData = [
    {
      text: "Ameer Hamza delivered exactly what we needed, a sleek and functional web app. Highly recommended!",
      name: "John Doe",
      role: "CEO, TechCorp",
      image: "https://via.placeholder.com/150",
    },
    {
      text: "Working with Ameer was a great experience. His expertise in both web development and design is remarkable.",
      name: "Jane Smith",
      role: "Product Manager, InnovateX",
      image: "https://via.placeholder.com/150",
    },
    {
      text: "The Android app we launched with Ameer’s help has been a huge success. He’s incredibly talented and dependable.",
      name: "Michael Brown",
      role: "Founder, FoodieApp",
      image: "https://via.placeholder.com/150",
    },
  ];

  const socialLinks = [
    { icon: <FiGithub size={24} />, link: "https://github.com" },
    { icon: <FiLinkedin size={24} />, link: "https://linkedin.com" },
    { icon: <FiTwitter size={24} />, link: "https://twitter.com" },
    { icon: <FiMail size={24} />, link: "mailto:ameerhamzabscs02@gmail.com" },
  ];

  const AboutMe = () => {
    return (
      <section className="py-20 bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
        <div className="container mx-auto text-center">
          <PageHeading headingText="About Me" />
          <SubHeading headingText="I am Ameer Hamza, a passionate developer specializing in WordPress, Shopify, and Android applications." />
        </div>
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center mt-10">
          <div>
            <img
              alt="Ameer Hamza"
              src={Images.USER_DUMMY_IMG}
              className="rounded-full shadow-lg w-60 mx-auto border-4 border-white"
            />
          </div>
          <div className="space-y-4">
            <p className="text-lg">
              I have extensive experience building web and mobile applications that meet the needs of clients in diverse industries.
            </p>
            <p className="text-lg">
              My skills span across full-stack development, mobile app development, and e-commerce platforms.
            </p>
            <p className="text-lg">
              When I'm not coding, I enjoy contributing to open-source projects and learning new technologies.
            </p>
          </div>
        </div>
      </section>
    );
  };

  const SkillsSection = () => {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <PageHeading headingText="Skills" />
          <SubHeading headingText="The tools and technologies I specialize in to bring your projects to life." />
        </div>
        <div className="container mx-auto grid md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
          {skills.map((skill, index) => (
            <div className="p-6 shadow-lg rounded-xl border border-gray-200 text-center transition-transform transform hover:scale-105" key={index}>
              <div className="mb-4 text-primary">{skill.icon}</div>
              <h3 className="font-semibold text-xl mb-2">{skill.name}</h3>
              <p className="text-gray-600">{skill.level}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };

  const ProjectsSection = () => {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto text-center">
          <PageHeading headingText="My Projects" />
          <SubHeading headingText="A collection of some of the projects I've worked on." />
        </div>
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {projects.map((project, index) => (
            <div key={index} className="p-6 shadow-lg rounded-xl border border-gray-200 hover:shadow-2xl transition-all duration-300">
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover rounded-lg transition-transform transform hover:scale-105" />
              <div className="mt-4">
                <h3 className="font-semibold text-xl">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <div className="mt-4">
                  <a href={project.demoLink} className="text-primary hover:text-blue-700">Live Demo</a>
                  <span className="mx-2">|</span>
                  <a href={project.codeLink} className="text-primary hover:text-blue-700">Source Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  const TestimonialsSection = () => {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <PageHeading headingText="Client Testimonials" />
          <SubHeading headingText="Here’s what some of my clients have said about my work." />
        </div>
        <div className="mt-10">
          <Testimonials testimonials={testimonialsData} />
        </div>
      </section>
    );
  };

  const ContactSection = () => {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto text-center">
          <PageHeading headingText="Contact Me" />
          <SubHeading headingText="Let’s talk about how I can help you with your next project." />
        </div>
        <div className="flex justify-center mt-10">
          <div className="bg-white p-8 shadow-lg rounded-lg w-full md:w-2/3 lg:w-1/2">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-600">Full Name</label>
                <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600">Email Address</label>
                <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-600">Message</label>
                <textarea id="message" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" rows="6"></textarea>
              </div>
              <div className="mb-4 text-center">
                <button type="submit" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="portfolio-page"
    >
      <AboutMe />
      <SkillsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactUsSection />
    </motion.div>
  );
};

export default memo(PortfolioPage);
