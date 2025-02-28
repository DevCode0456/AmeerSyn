import React, { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IoIosRocket } from "react-icons/io";

const HeroSection = ({
  title,
  details,
  imageSrc,
  imageAlt,
  icon: Icon,
  description,
  imageWidth = "100%",
  imageHeight = "500px",
}) => {
  return (
    <motion.div
      className=" mx-auto  my-3 py-12 p-5  md:px-12 w-full  flex flex-col md:flex-row bg-primary   items-center justify-between gap-8  "
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hero-text text-center md:text-left md:w-1/2">
        <h1 className="text-4xl font-semibold mb-4 text-secondary flex items-center justify-center md:justify-start gap-2">
          {Icon && <Icon className=" text-5xl" />} {title}
        </h1>
        <p className="text-lg mb-6 text-secondary">{description}</p>
        <p className="text-lg mb-6 text-secondary">
          {details}
        </p>
        <Link to="/contact-us">
          <button className="bg-secondary text-primary border border-secondary px-6 py-3 rounded-3xl font-semibold  ">
            <span className="flex items-center justify-center gap-3 text-primary">
            <IoIosRocket className="text-primary" size={24}/>    Get In Touch  
            </span>
           
          </button>
              </Link>
      </div>
      <div className="hero-image bg-container rounded-3xl overflow-hidden md:w-1/2">
        <img
          src={imageSrc}
          alt={imageAlt}
          style={{ width: imageWidth, height: imageHeight }}
          className="rounded-3xl"
        />
      </div>
    </motion.div>
  );
};

export default memo(HeroSection);
