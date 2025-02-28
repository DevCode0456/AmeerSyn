import "swiper/css";
import "swiper/css/pagination";
import React from "react";
import { motion } from "framer-motion";
import Typed, { ReactTyped } from "react-typed";
import { Swiper, SwiperSlide } from "swiper/react";
import ContactUsSection from "../../Shared/ContactUsSection";

import { FaCode, FaServer, FaCloud, FaLock, FaUserTie, FaLaptopCode, FaAward, FaProjectDiagram, FaRocket, FaLightbulb, FaChartLine, FaDatabase, FaMobileAlt, FaTools } from "react-icons/fa";
import WhyChooseUsSection from "../../Shared/PagesSectionComponents/WhyChooseUsSection";
import { FiCheck, FiClock, FiFlag, FiLifeBuoy, FiTrendingUp, FiUser } from "react-icons/fi";

// Motion Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

// 📌 Our Features
const features = [
  { title: "Cutting-Edge Technology", description: "We integrate the latest advancements to create impactful solutions.", icon: <FaRocket /> },
  { title: "Client-Centered Approach", description: "Understanding your needs to deliver exceptional results.", icon: <FaUserTie /> },
  { title: "Scalable Solutions", description: "We build products that grow with your business.", icon: <FaChartLine /> },
  { title: "Innovative Thinking", description: "Pushing boundaries with creative and intelligent solutions.", icon: <FaLightbulb /> },
];

// 📌 Our Mission
const mission = {
  title: "Our Mission",
  description: "Empowering businesses with high-quality, innovative, and scalable digital solutions to drive success in a rapidly evolving world.",
  image: "https://via.placeholder.com/600",
};

// 📌 Featured Projects
const projects = [
  { title: "E-Commerce Website", description: "Built with React & Shopify.", image: "https://via.placeholder.com/400" },
  { title: "AI Chatbot", description: "Smart chatbot powered by NLP.", image: "https://via.placeholder.com/400" },
  { title: "Cybersecurity Dashboard", description: "Enterprise security analytics.", image: "https://via.placeholder.com/400" },
];

// 📌 Tech Stack
const skills = [
  { name: "Web Development", icon: <FaCode />, category: "Development" },
  { name: "Cloud Computing", icon: <FaCloud />, category: "Cloud" },
  { name: "Cybersecurity", icon: <FaLock />, category: "Security" },
  { name: "Linux Administration", icon: <FaServer />, category: "Networking" },
  { name: "AI & Automation", icon: <FaLaptopCode />, category: "AI" },
];

const certifications = [
  { title: "AWS Certified Solutions Architect", issuer: "Amazon AWS", icon: <FaAward /> },
  { title: "Google Cloud Certified Professional", issuer: "Google Cloud", icon: <FaAward /> },
  { title: "Certified Ethical Hacker (CEH)", issuer: "EC-Council", icon: <FaAward /> },
  { title: "Full-Stack Web Developer", issuer: "Udemy", icon: <FaAward /> },
  { title: "Python for AI & Machine Learning", issuer: "Coursera", icon: <FaAward /> },
];
const reasons = [
  {
    icon: <FiCheck size={32} />,
    title: "Expert Developer",
    description: "10+ years of experience in full-stack development, AI, and cloud computing.",
  },
  {
    icon: <FiUser size={50} />,
    title: "Client-Centered Approach",
    description: "I prioritize understanding your goals and crafting solutions that fit your needs.",
  },
  {
    icon: <FiTrendingUp size={50} />,
    title: "Innovative & Future-Ready",
    description: "I integrate the latest technologies to ensure long-term scalability and performance.",
  },
  {
    icon: <FiClock size={50} />,
    title: "Timely Delivery",
    description: "Meeting deadlines is a priority – delivering high-quality work on time, every time.",
  },
  {
    icon: <FiLifeBuoy size={50} />,
    title: "Continuous Support & Maintenance",
    description: "Providing long-term support, updates, and optimizations even after project completion.",
  },
  {
    icon: <FiFlag size={50} />,
    title: "Proven Track Record",
    description: "Successfully completed 50+ projects for startups and enterprises worldwide.",
  },
];

const testimonials = [
  "Great service! Highly recommended.",
  "Amazing work, exceeded expectations!",
  "Professional and efficient – will hire again!",
];


// 📌 Tech Stack
const techStack = [
  { name: "Frontend Development", icon: <FaCode />, skills: ["React.js", "Next.js", "Vue.js", "Tailwind CSS", "Bootstrap"] },
  { name: "Backend Development", icon: <FaServer />, skills: ["Node.js", "Express.js", "Django", "Flask", "Spring Boot"] },
  { name: "Cloud Computing", icon: <FaCloud />, skills: ["AWS", "Google Cloud", "Azure", "Firebase", "Heroku"] },
  { name: "Cybersecurity", icon: <FaLock />, skills: ["Penetration Testing", "Ethical Hacking", "SSL Security", "OWASP"] },
  { name: "Database Management", icon: <FaDatabase />, skills: ["MySQL", "MongoDB", "PostgreSQL", "Redis", "Firebase"] },
  { name: "Mobile App Development", icon: <FaMobileAlt />, skills: ["React Native", "Flutter", "Swift", "Kotlin"] },
  { name: "DevOps & CI/CD", icon: <FaTools />, skills: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform"] },
];

const services = [
  {
    title: "Custom Web Development",
    description: "Building responsive, scalable, and high-performance web applications tailored to your business needs.",
    icon: <FaCode />,
  },
  {
    title: "E-Commerce Solutions",
    description: "Developing powerful e-commerce platforms with Shopify, WooCommerce, and custom solutions.",
    icon: <FaProjectDiagram />,
  },
  {
    title: "Cloud & DevOps Consulting",
    description: "Helping businesses scale with cloud deployment, automation, and CI/CD best practices.",
    icon: <FaCloud />,
  },
  {
    title: "Cybersecurity & Pen Testing",
    description: "Ensuring secure applications through penetration testing, vulnerability assessments, and security audits.",
    icon: <FaLock />,
  },
  {
    title: "AI & Automation",
    description: "Integrating AI-powered chatbots, automation scripts, and machine learning solutions for businesses.",
    icon: <FaUserTie />,
  },
];


const Portfolio = () => {
  return (
    <div className="">

      {/* 🌟 Hero Section */}
      <motion.section
        className="relative h-screen flex flex-col items-center justify-center text-center bg-black"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <video autoPlay loop muted className="absolute w-full h-full object-cover opacity-50">
          <source src="https://res.cloudinary.com/dvgpgzibx/video/upload/v1738346543/VID-20250131-WA0006_jwqfop.mp4" type="video/mp4" />
        </video>
        <div className="absolute bottom-0 z-10 p-10">
          <motion.h1 className="text-6xl font-semibold text-primary">
            My {" "}
            <ReactTyped className="text-secondary" strings={["Portfolio", "Projects", "Work"]} typeSpeed={100} backSpeed={200} loop />
          </motion.h1>
          <motion.p className="text-secondary mt-4">
            Showcasing innovation, creativity, and technology-driven solutions.
          </motion.p>
        </div>
      </motion.section>

      {/* 🚀 Our Features */}
      <section className="py-16 bg-gradient-to-b from-secondary to-container px-6 sm:px-12 lg:px-24">
  <h2 className="text-4xl font-bold text-center text-primary mb-10">Our Features</h2>
  
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
    {features.map((feature, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.08, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
        className="p-6 bg-white rounded-xl shadow-xl flex flex-col items-center text-center border border-transparent hover:border-blue-400 transition-all duration-300"
      >
        <div className="text-5xl bg-gradient-to-r from-pink-500 to-primary text-white p-4 rounded-full mb-4">
          {feature.icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
        <p className="text-gray-600 mt-2">{feature.description}</p>
      </motion.div>
    ))}
  </div>
</section>

      <section className="py-16 px-6 sm:px-12 lg:px-24">
  <h2 className="text-4xl font-bold text-center text-primary">Tech Stack</h2>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
    {techStack.map((tech, index) => (
      <motion.div key={index} className="p-6 bg-gray-100 rounded-lg shadow-lg text-center hover:scale-105 transition">
        <div className="text-4xl text-primary mb-3">{tech.icon}</div>
        <h3 className="text-2xl font-bold">{tech.name}</h3>
        <p className="text-gray-600 mt-2">{tech.skills.join(", ")}</p>
      </motion.div>
    ))}
  </div>
</section>

<section className="py-16 bg-white px-6 sm:px-12 lg:px-24">
  <h2 className="text-4xl font-bold text-center text-primary">Services</h2>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
    {services.map((service, index) => (
      <motion.div key={index} className="p-6 bg-container rounded-3xl shadow-lg text-center hover:scale-105 transition">
        <div className="text-5xl text-primary mb-3">{service.icon}</div>
        <h3 className="text-2xl font-bold text-primary">{service.title}</h3>
        <p className="text-gray-600 mt-2">{service.description}</p>
      </motion.div>
    ))}
  </div>
</section>


      {/* 🚀 Featured Projects */}
      <section className="py-16 px-6 sm:px-12 lg:px-24">
      <h2 className="text-4xl font-bold text-center text-primary mb-10">My Projects</h2>
      
      <motion.div 
        className="grid md:grid-cols-3 gap-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", staggerChildren: 0.2 }}
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="p-6 rounded-3xl shadow-lg text-center backdrop-blur-lg bg-white/10 border border-white/20 transition-transform transform hover:scale-105 hover:shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
          >
            <motion.img 
              src={project.image} 
              alt={project.title} 
              className="rounded-lg mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            />
            <h3 className="text-2xl font-bold text-primary mb-3">{project.title}</h3>
            <p className="text-text">{project.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>

      {/* 🌟 Certifications */}
      <section className="py-16 px-6 sm:px-12 lg:px-24">
        <h2 className="text-4xl font-bold text-center text-primary">Certifications</h2>
        <div className="grid md:grid-cols-3 gap-10 mt-10">
          {certifications.map((cert, index) => (
            <motion.div key={index} className="p-6 bg-container rounded-3xl shadow-lg text-center transform hover:scale-105 transition">
              <div className="text-5xl text-primary">{cert.icon}</div>
              <h3 className="text-2xl font-bold text-primary mt-3">{cert.title}</h3>
              <p className="text-text">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <WhyChooseUsSection reasons={reasons} />

      {/* 🌟 Testimonials Section */}
      <section className="py-16 px-6 sm:px-12 lg:px-24">
        <h2 className="text-4xl font-bold text-primary text-center">Client Testimonials</h2>
        <Swiper spaceBetween={50} slidesPerView={1} autoplay={{ delay: 3000 }}>
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="p-6 text-center">
              <p className="italic text-lg">"{testimonial}"</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* 🌟 Contact Section */}
      <ContactUsSection />

    </div>
  );
};

export default Portfolio;
