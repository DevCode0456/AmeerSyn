import { motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import React, { useState, memo } from "react";
import Images from "../../Helper/ImagesConstant";
import ContactUsSection from "../../Shared/ContactUsSection";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import TestimonialsSection from "../../Shared/PagesSectionComponents/TestimonialsSection";
import ServicesSection from "../../Shared/PagesSectionComponents/ServicesSection";
import { FiBook, FiCloud, FiCode, FiDatabase, FiMonitor, FiSettings, FiShield, FiTerminal } from "react-icons/fi";

const ProjectPage = () => {
  const projects = [
    {
      title: "Project 1",
      image: Images.USER_DUMMY_IMG,
      docUrl:
        "https://res.cloudinary.com/dvgpgzibx/raw/upload/v1739692646/assignement_tasks_k0v16h.docx",
    },
    {
      title: "Project 2",
      image: Images.WEB_DEVELOPMENT_IMG,
      docUrl:
        "https://res.cloudinary.com/dvgpgzibx/raw/upload/v1739692646/assignement_tasks_k0v16h.docx",
    },
  ];


  const testimonialsData = [
    {
      quote: "AmeerSync’s AI expertise helped us develop a custom recommendation engine for our e-commerce store. The accuracy of predictions improved significantly, leading to a 30% increase in sales. Absolutely brilliant!",
      author: "Olivia Adams",
      company: "SmartShop"
    },
    {
      quote: "Their networking solutions are fantastic! We struggled with connectivity and security issues, but AmeerSync streamlined our entire infrastructure. Now, everything runs smoothly without interruptions.",
      author: "William Harris",
      company: "Enterprise Networks"
    },
    {
      quote: "For my Node.js project, AmeerSync provided exceptional backend development support. Their code was clean, scalable, and optimized for performance. Truly a lifesaver for developers like me!",
      author: "Ethan Walker",
      company: "DevStudio"
    },
    {
      quote: "Their cloud computing services helped us migrate our entire system to AWS seamlessly. The process was quick, and we now have better scalability and cost efficiency. Highly recommended!",
      author: "Charlotte Evans",
      company: "CloudServe"
    },
    {
      quote: "AmeerSync’s proof-reading and editing services polished my research paper to perfection. The detailed feedback and corrections improved the clarity and structure significantly. I received great feedback from my professors!",
      author: "Nathan Clark",
      company: "Academic Researcher"
    },
    {
      quote: "Managing email invoices was a nightmare until we found AmeerSync. Their automation service streamlined everything, reducing errors and saving us hours of manual work. Absolutely worth every penny!",
      author: "Emily White",
      company: "BizTrack"
    },
    {
      quote: "We needed a static website for our startup, and AmeerSync delivered a clean, modern, and ultra-fast site. Their attention to UI/UX and performance optimization was incredible. Highly satisfied!",
      author: "Lucas Turner",
      company: "Startup Solutions"
    },
    {
      quote: "My final year project needed expert guidance, and AmeerSync provided just that! From concept to execution, they ensured every detail was perfect. I couldn’t have achieved this success without them.",
      author: "Sophia Bennett",
      company: "University Graduate"
    },
    {
      quote: "Their project management expertise helped us complete our software development cycle ahead of schedule. The structured approach and real-time tracking made a huge difference. AmeerSync truly understands agile workflows!",
      author: "Benjamin Carter",
      company: "Tech Ventures"
    }
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

  const [selectedDoc, setSelectedDoc] = useState(null);

  return (
    <div className="pt-12 min-h-screen  ">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-semibold text-primary"> Welcome to AmeerSync</h1>
        <p className="text-text mt-2">Explore my latest projects and documents.</p>
      </motion.div>

      {/* Featured Projects Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-12 my-4 p-6 bg-container  text-center  px-4"
      >
        <h2 className="text-3xl font-bold text-primary">🔥 Featured Projects</h2>
        <p className="text-text mt-2">Some of my best work.</p>
      </motion.div>

      {/* Document Cards */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 container mx-auto px-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className=" bg-gradient-to-b from-secondary to-container border-primary border-2 shadow-md rounded-3xl overflow-hidden cursor-pointer"
          >
            <img
              className="w-full h-52 object-cover p-2 rounded-3xl"
              src={project.image}
              alt={project.title}
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-primary mb-3">
                {project.title}
              </h3>
              <button
                onClick={() => setSelectedDoc([{ uri: project.docUrl }])}
                className="w-full  py-3 bg-button text-white rounded-md shadow-md  transition-all"
              >
               View  Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>

    <ServicesSection services={services} />

      {/* Contact Section */}
      <ContactUsSection />
<TestimonialsSection testimonials={testimonialsData} />

      {/* Document Viewer Modal */}
      {selectedDoc && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50">
          <div className="relative bg-white p-5 rounded-lg shadow-xl w-full max-w-5xl h-[90vh]">
            <button
              className="absolute z-40 top-4 right-4 px-4 py-2 "
              onClick={() => setSelectedDoc(null)}
            >
              <RxCross2 size={30} className="text-red-700" />
            </button>
            <div className="w-full h-full overflow-hidden rounded-md shadow-inner">
              <DocViewer
                documents={selectedDoc}
                className="w-full h-full"
                pluginRenderers={DocViewerRenderers}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(ProjectPage);