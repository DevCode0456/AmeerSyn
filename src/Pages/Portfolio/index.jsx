import {
  FiFlag,
  FiClock,
  FiUser,
  FiCheck,
  FiLifeBuoy,
  FiTrendingUp,
  FiCode,
  FiMonitor,
  FiDatabase,
  FiTerminal,
  FiBook,
  FiCloud,
  FiShield,
  FiSettings,
} from "react-icons/fi";
import {
  FaCode,
  FaLock,
  FaCloud,
  FaAward,
  FaTools,
  FaServer,
  FaRocket,
  FaUserTie,
  FaDatabase,
  FaChartLine,
  FaLightbulb,
  FaMobileAlt,
} from "react-icons/fa";
import "swiper/css";
import React from "react";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import ContactUsSection from "../../Shared/ContactUsSection";
import WhyChooseUsSection from "../../Shared/PagesSectionComponents/WhyChooseUsSection";
import TestimonialsSection from "../../Shared/PagesSectionComponents/TestimonialsSection";
import ServicesSection from "../../Shared/PagesSectionComponents/ServicesSection";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};



const features = [
  {
    title: "Cutting-Edge Technology",
    description:
      "We integrate the latest advancements to create impactful solutions.",
    icon: <FaRocket />,
  },
  {
    title: "Client-Centered Approach",
    description: "Understanding your needs to deliver exceptional results.",
    icon: <FaUserTie />,
  },
  {
    title: "Scalable Solutions",
    description: "We build products that grow with your business.",
    icon: <FaChartLine />,
  },
  {
    title: "Innovative Thinking",
    description: "Pushing boundaries with creative and intelligent solutions.",
    icon: <FaLightbulb />,
  },
];

const testimonialsData = [
  {
    quote:
      "AmeerSync’s AI expertise helped us develop a custom recommendation engine for our e-commerce store. The accuracy of predictions improved significantly, leading to a 30% increase in sales. Absolutely brilliant!",
    author: "Olivia Adams",
    company: "SmartShop",
  },
  {
    quote:
      "Their networking solutions are fantastic! We struggled with connectivity and security issues, but AmeerSync streamlined our entire infrastructure. Now, everything runs smoothly without interruptions.",
    author: "William Harris",
    company: "Enterprise Networks",
  },
  {
    quote:
      "For my Node.js project, AmeerSync provided exceptional backend development support. Their code was clean, scalable, and optimized for performance. Truly a lifesaver for developers like me!",
    author: "Ethan Walker",
    company: "DevStudio",
  },
  {
    quote:
      "Their cloud computing services helped us migrate our entire system to AWS seamlessly. The process was quick, and we now have better scalability and cost efficiency. Highly recommended!",
    author: "Charlotte Evans",
    company: "CloudServe",
  },
  {
    quote:
      "AmeerSync’s proof-reading and editing services polished my research paper to perfection. The detailed feedback and corrections improved the clarity and structure significantly. I received great feedback from my professors!",
    author: "Nathan Clark",
    company: "Academic Researcher",
  },
  {
    quote:
      "Managing email invoices was a nightmare until we found AmeerSync. Their automation service streamlined everything, reducing errors and saving us hours of manual work. Absolutely worth every penny!",
    author: "Emily White",
    company: "BizTrack",
  },
  {
    quote:
      "We needed a static website for our startup, and AmeerSync delivered a clean, modern, and ultra-fast site. Their attention to UI/UX and performance optimization was incredible. Highly satisfied!",
    author: "Lucas Turner",
    company: "Startup Solutions",
  },
  {
    quote:
      "My final year project needed expert guidance, and AmeerSync provided just that! From concept to execution, they ensured every detail was perfect. I couldn’t have achieved this success without them.",
    author: "Sophia Bennett",
    company: "University Graduate",
  },
  {
    quote:
      "Their project management expertise helped us complete our software development cycle ahead of schedule. The structured approach and real-time tracking made a huge difference. AmeerSync truly understands agile workflows!",
    author: "Benjamin Carter",
    company: "Tech Ventures",
  },
];






const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon AWS",
    icon: <FaAward />,
  },
  {
    title: "Google Cloud Certified Professional",
    issuer: "Google Cloud",
    icon: <FaAward />,
  },
  {
    title: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    icon: <FaAward />,
  },
  { title: "Full-Stack Web Developer", issuer: "Udemy", icon: <FaAward /> },
  {
    title: "Python for AI & Machine Learning",
    issuer: "Coursera",
    icon: <FaAward />,
  },
];
const reasons = [
  {
    icon: <FiCheck size={32} />,
    title: "Expert Developer",
    description:
      "10+ years of experience in full-stack development, AI, and cloud computing.",
  },
  {
    icon: <FiUser size={50} />,
    title: "Client-Centered Approach",
    description:
      "I prioritize understanding your goals and crafting solutions that fit your needs.",
  },
  {
    icon: <FiTrendingUp size={50} />,
    title: "Innovative & Future-Ready",
    description:
      "I integrate the latest technologies to ensure long-term scalability and performance.",
  },
  {
    icon: <FiClock size={50} />,
    title: "Timely Delivery",
    description:
      "Meeting deadlines is a priority – delivering high-quality work on time, every time.",
  },
  {
    icon: <FiLifeBuoy size={50} />,
    title: "Continuous Support & Maintenance",
    description:
      "Providing long-term support, updates, and optimizations even after project completion.",
  },
  {
    icon: <FiFlag size={50} />,
    title: "Proven Track Record",
    description:
      "Successfully completed 50+ projects for startups and enterprises worldwide.",
  },
];

const techStack = [
  {
    name: "Frontend Development",
    icon: <FaCode />,
    skills: ["React.js", "Next.js", "Vue.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    name: "Backend Development",
    icon: <FaServer />,
    skills: ["Node.js", "Express.js", "Django", "Flask", "Spring Boot"],
  },
  {
    name: "Cloud Computing",
    icon: <FaCloud />,
    skills: ["AWS", "Google Cloud", "Azure", "Firebase", "Heroku"],
  },
  {
    name: "Cybersecurity",
    icon: <FaLock />,
    skills: ["Penetration Testing", "Ethical Hacking", "SSL Security", "OWASP"],
  },
  {
    name: "Database Management",
    icon: <FaDatabase />,
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Redis", "Firebase"],
  },
  {
    name: "Mobile App Development",
    icon: <FaMobileAlt />,
    skills: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    name: "DevOps & CI/CD",
    icon: <FaTools />,
    skills: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform"],
  },
];

const services = [
  {
    icon: <FiCode size={50} />,
    color: "green-500",
    textColor: "white",
    title: "Web Development",
    description: "Build modern and responsive web applications.",
  },
  {
    icon: <FiMonitor size={50} />,
    textColor: "white",
    color: "orange-500",
    title: "UI/UX Design",
    description: "Design visually appealing interfaces.",
  },
  {
    icon: <FiDatabase size={50} />,
    title: "Databases",
    textColor: "white",
    color: "indigo-500",
    description: "Manage and structure data efficiently.",
  },
  {
    icon: <FiTerminal size={50} />,
    textColor: "white",
    color: "purple-500",
    title: "Assembly Language",
    description: "Develop low-level programs.",
  },
  {
    icon: <FiBook size={50} />,
    color: "blue-500",
    textColor: "white",
    title: "Assignment & Thesis Writing",
    description: "Writing services for academic projects.",
  },
  {
    icon: <FiCloud size={50} />,
    color: "teal-500",
    textColor: "white",
    title: "Cloud Computing",
    description: "Implement scalable cloud solutions.",
  },
  {
    icon: <FiShield size={50} />,
    color: "pink-500",
    textColor: "white",
    title: "Cyber Security",
    description: "Protect systems from unauthorized access.",
  },
  {
    icon: <FiSettings size={50} />,
    textColor: "white",
    color: "yellow-500",
    title: "Linux & Virtualization",
    description: "Deploy and manage virtualized environments.",
  },
  {
    icon: <FiTerminal size={50} />,
    textColor: "white",
    color: "orange-400",
    title: "Android App Development",
    description: "Create seamless Android apps.",
  },
  {
    icon: <FiSettings size={50} />,
    color: "green-400",
    textColor: "white",
    title: "Network Design (Packet Tracer)",
    description: "Design and simulate network structures.",
  },
  {
    icon: <FiShield size={50} />,
    textColor: "white",
    color: "purple-400",
    title: "Penetration Testing",
    description: "Detect vulnerabilities with thorough testing.",
  },
  {
    icon: <FiBook size={50} />,
    color: "blue-400",
    textColor: "white",
    title: "Content Writing & Proofreading",
    description: "Improve content quality with professional writing.",
  },
];


const Portfolio = () => {
  return (
    <div className="bg-Bg">
      <motion.section
        className="relative h-screen flex flex-col items-center justify-center text-center bg-black"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover opacity-50"
        >
          <source
            src="https://res.cloudinary.com/dvgpgzibx/video/upload/v1738346543/VID-20250131-WA0006_jwqfop.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute bottom-0 z-10 p-10">
          <motion.h1 className="text-6xl font-semibold text-white">
            My{" "}
            <ReactTyped
              className="text-primary"
              strings={["Portfolio", "Projects", "Work"]}
              typeSpeed={100}
              backSpeed={200}
              loop
            />
          </motion.h1>
          <motion.p className="text-white mt-4">
            Showcasing innovation, creativity, and technology-driven solutions.
          </motion.p>
        </div>
      </motion.section>

      <section className="py-16 bg-gradient-to-b from-secondary to-container px-6 sm:px-12 lg:px-24">
        <h2 className="text-4xl font-bold text-center text-primary mb-10">
          Our Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              }}
              className="p-6 bg-white rounded-3xl  flex flex-col items-center text-center border border-transparent hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              <div className="text-5xl bg-gradient-to-r from-pink-500 to-primary text-white p-4 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-primary">
                {feature.title}
              </h3>
              <p className="text-text mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <div className=" ">
        <section className="py-20 bg-gray-950 px-6 sm:px-12 lg:px-24">
          <h1 className="text-5xl font-semibold text-primary mx-auto text-center py-3 my-3">Tech Stack</h1>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-12"
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
               className="p-8 bg-white/5 hover:bg-secondary rounded-xl shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-lg border border-white/20 text-white hover:text-primary"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <div className="text-5xl  mb-4">{tech.icon}</div>
                <h3 className="text-2xl  font-semibold">{tech.name}</h3>
                <p className=" mt-2">{tech.skills.join(", ")}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

    
<ServicesSection services={services} />
        

        <section className="py-20 bg-gray-950 px-6 sm:px-12 lg:px-24">
          <h1  className="text-4xl font-semibold text-primary mx-auto text-center py-3 my-3 ">Certifications</h1>
          <motion.div
            className="grid md:grid-cols-3 gap-12"
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className=" p-6 lg:p-12  hover:bg-secondary bg-white/5 rounded-full shadow-lg text-center transform hover:scale-105 transition-all backdrop-blur-lg border border-white/20 text-white hover:text-primary"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <div className="text-4xl lg:text-6xl text-primary text-center  ">{cert.icon}</div>
                <h3 className="text-xl font-semibold text-primary mt-4">
                  {cert.title}
                </h3>
                <p className=" mt-2">{cert.issuer}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>

      <WhyChooseUsSection reasons={reasons} />
      <ContactUsSection />
      <TestimonialsSection testimonials={testimonialsData} />
    </div>
  );
};

export default Portfolio;
