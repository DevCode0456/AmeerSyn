import React, { memo } from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Images from "../../../Helper/ImagesConstant";

const ProjectsSection = ({ projects }) => {
  return (
    <motion.div
      className="my-10"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
<div className="flex justify-center items-center">
<img src={Images.PROJECT_IMG} alt="terms&conditions" className={" max-h-64 mx-auto"} />

      </div>
      <h1 className="text-4xl font-bold text-center text-primary py-3">
Our Projects    </h1>      <Carousel showThumbs={false}>
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
  );
};
export default memo(ProjectsSection);
