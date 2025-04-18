import {
  FiCode,
  FiBook,
  FiUser,
  FiFlag,
  FiCheck,
  FiClock,
  FiCloud,
  FiShield,
  FiMonitor,
  FiDatabase,
  FiSettings,
  FiTerminal,
  FiLifeBuoy,
  FiTrendingUp,
} from "react-icons/fi";
import "swiper/css";
import React from "react";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import ContactUsSection from "../../ContactUsSection";
import ServicesSection from "../../PagesSectionComponents/ServicesSection";
import { FaServer, FaCode, FaCloud, FaLock, FaUserTie } from "react-icons/fa";
import WhyChooseUsSection from "../../PagesSectionComponents/WhyChooseUsSection";
import TestimonialsSection from "../../PagesSectionComponents/TestimonialsSection";
import Images from "../../../Helper/ImagesConstant";

const reasons = [
  {
    icon: <FiCheck size={32} />,
    title: "Expertise & Experience",
    description:
      "With years of industry experience, our team delivers exceptional quality in every project.",
  },
  {
    icon: <FiUser size={50} />,
    title: "Client-Centered Approach",
    description:
      "We prioritize client satisfaction by focusing on transparent communication and understanding your goals.",
  },
  {
    icon: <FiTrendingUp size={50} />,
    title: "Innovative Solutions",
    description:
      "Our solutions are designed to bring innovation and cutting-edge technology to your business.",
  },
  {
    icon: <FiFlag size={50} />,
    title: "High-Quality Standards",
    description:
      "We ensure meticulous attention to detail, delivering quality that meets and exceeds expectations.",
  },
  {
    icon: <FiClock size={50} />,
    title: "Timely Delivery",
    description:
      "Our commitment to timelines means your projects are completed efficiently and on schedule.",
  },
  {
    icon: <FiLifeBuoy size={50} />,
    title: "Continuous Support",
    description:
      "From start to finish, we offer dedicated support to ensure your success every step of the way.",
  },
];
const mission = [
  {
    category: "Development",
    items: [
      {
        name: "Web Development",
        icon: <FaCode />,
        desc: "Modern, scalable web solutions.",
      },
      {
        name: "Shopify & WordPress",
        icon: <FaCode />,
        desc: "E-commerce & CMS expertise.",
      },
      {
        name: "Custom Programs",
        icon: <FaCode />,
        desc: "Automate your workflows.",
      },
    ],
  },
  {
    category: "Networking & Security",
    items: [
      {
        name: "Linux Administration",
        icon: <FaServer />,
        desc: "Efficient server management.",
      },
      {
        name: "Cybersecurity",
        icon: <FaLock />,
        desc: "Protect your digital assets.",
      },
      {
        name: "Cloud Computing",
        icon: <FaCloud />,
        desc: "AWS, Google Cloud, Azure.",
      },
    ],
  },
  {
    category: "IT Consultancy",
    items: [
      {
        name: "Project Management",
        icon: <FaUserTie />,
        desc: "Guiding your IT success.",
      },
      {
        name: "AI & Automation",
        icon: <FaCode />,
        desc: "Integrating smart technology.",
      },
      {
        name: "Data & Research",
        icon: <FaCode />,
        desc: "Advanced analytics & insights.",
      },
    ],
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

const AboutUs = () => {
  return (
    <div className=" bg-Bg">
      <motion.section
        className="relative h-screen flex flex-col items-center justify-center text-center bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
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
          <motion.h1 className="text-6xl font-semibold text-primary">
            Elevate Your{" "}
            <ReactTyped
              className="text-secondary"
              strings={["Business", "Brand", "Success"]}
              typeSpeed={100}
              backSpeed={200}
              loop
            />
          </motion.h1>
          <motion.p className="text-secondary mt-4">
            We bring innovation and technology together to create impact.
          </motion.p>
        </div>
      </motion.section>

      <section className="py-16  px-6 sm:px-12 lg:px-24">
          <div className="flex justify-center items-center   rounded-3xl">
          <img
  src={Images.OUR_MISSION_IMG}
  alt="terms&conditions"
  className="rounded mx-auto max-h-64 transition duration-300 ease-in-out hover:scale-105 hover:rotate-1 hover:brightness-110 hover:saturate-150 animate__animated animate__pulse"
/>

          </div>
          <h2 className="text-4xl font-bold text-center text-Heading">
            Our Mission
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {mission?.map((service, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gradient-to-r from-secondary to-container border border-primary rounded-3xl shadow-lg text-center transform hover:scale-105 transition hover:from-secondary hover:to-primary hover:border-0"

                whileHover={{ scale: 1.1 }}
              >
                <h3 className="text-2xl font-bold text-primary mb-3">
                  {service.category}
                </h3>
                <div className="space-y-4">
                  {service.items?.map(
                    (
                      item,
                      idx 
                    ) => (
                      <div key={idx} className="flex items-center gap-4">
                        <div className="text-primary text-3xl">{item.icon}</div>
                        <div>
                          <h4 className="text-xl text-text font-semibold">
                            {item.name}
                          </h4>
                          <p className="text-text">{item.desc}</p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      <ServicesSection services={services} />
      <WhyChooseUsSection reasons={reasons} />
      <div className="">
        <ContactUsSection />
        <TestimonialsSection testimonials={testimonialsData} />
      </div>
    </div>
  );
};

export default AboutUs;
