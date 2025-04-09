import { motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import Images from "../../Helper/ImagesConstant";
import React, { useState, useEffect, memo } from "react";
import ContactUsSection from "../../Shared/ContactUsSection";
import ServicesSection from "../../Shared/PagesSectionComponents/ServicesSection";
import TestimonialsSection from "../../Shared/PagesSectionComponents/TestimonialsSection";

const ProjectPage = () => {
  const projects = [
    {
      title: "Computing Industry",
      image: Images.PROJECT_DUMMY_IMG,
      docUrl:
        "https://res.cloudinary.com/dvgpgzibx/raw/upload/v1739692645/computing_industry_yjttfo.docx",
    },
    {
      title: "Project 2",
      image: Images.PROJECT_DUMMY_IMG,
      docUrl:
        "https://res.cloudinary.com/dvgpgzibx/raw/upload/v1739692645/international_trade_policies_gt2zem.docx",
    },
    {
      title: "Project 3",
      image: Images.PROJECT_DUMMY_IMG,
      docUrl:
        "https://res.cloudinary.com/dvgpgzibx/raw/upload/v1739692645/5G_networks_communication_crimpc.docx",
    },
    {
      title: "Project 4",
      image: Images.PROJECT_DUMMY_IMG,
      docUrl:
        "https://res.cloudinary.com/dvgpgzibx/raw/upload/v1739692646/assignement_tasks_k0v16h.docx",
    },
    {
      title: "Project 5",
      image: Images.PROJECT_DUMMY_IMG,
      docUrl:
        "https://res.cloudinary.com/dvgpgzibx/raw/upload/v1739692645/cw1_Task_mtj9cd.docx",
    },
    {
      title: "Project 6",
      image: Images.PROJECT_DUMMY_IMG,
      docUrl:
        "https://res.cloudinary.com/dvgpgzibx/raw/upload/v1739692645/ch2_fg0sno.docx",
    },
  ];

  const [selectedDocUrl, setSelectedDocUrl] = useState(null);

  useEffect(() => {
    const disableActions = (e) => {
      if (
        e.type === "contextmenu" ||
        (e.ctrlKey && ["s", "u", "p"].includes(e.key.toLowerCase())) ||
        e.key === "F12"
      ) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    document.addEventListener("contextmenu", disableActions);
    document.addEventListener("keydown", disableActions);

    return () => {
      document.removeEventListener("contextmenu", disableActions);
      document.removeEventListener("keydown", disableActions);
    };
  }, []);

  const testimonialsData = []; 
  const services = []; 

  return (
    <div className="pt-12 min-h-screen bg-Bg">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-semibold text-primary">
          Welcome to AmeerSync
        </h1>
        <p className="text-text mt-2">
          Explore my latest projects and documents.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-12 my-4 p-6 bg-white md:mx-14 rounded-3xl text-center px-4"
      >
        <h2 className="text-3xl font-bold text-primary">
          🔥 Featured Projects
        </h2>
        <p className="text-text mt-2">Some of my best work.</p>
      </motion.div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 container mx-auto px-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white border-primary border-2 hover:border-0 hover:shadow-xl shadow-md rounded-3xl overflow-hidden cursor-pointer"
          >
            <img
              className="w-full h-52 object-fill rounded-3xl"
              src={project.image}
              alt={project.title}
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-primary mb-3">
                {project.title}
              </h3>
              <button
                onClick={() => setSelectedDocUrl(project.docUrl)}
                className="w-full py-3 bg-button text-white rounded-md shadow-md transition-all"
              >
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <ServicesSection services={services} />
      <ContactUsSection />
      <TestimonialsSection testimonials={testimonialsData} />

      {selectedDocUrl && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="relative w-[95%] md:w-[90%] xl:w-[80%] h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200"
    >
      <button
        className="absolute top-4 left-4 z-50 bg-white p-2 rounded-full shadow-md hover:bg-red-100 transition-all"
        onClick={() => setSelectedDocUrl(null)}
      >
        <RxCross2 size={24} className="text-red-600" />
      </button>
      <iframe
  src={`https://docs.google.com/gview?url=${encodeURIComponent(
    selectedDocUrl
  )}&embedded=true&dummy=${Date.now()}`}
  title="Document Viewer"
  className="w-full h-full border-none"
  sandbox="allow-same-origin allow-scripts"
/>

    </motion.div>
  </motion.div>
)}
    </div>
  );
};

export default memo(ProjectPage);
