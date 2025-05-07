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
      className=" mx-auto  my-3 py-12 p-5  md:px-12 w-full  flex flex-col md:flex-row text-text    items-center justify-between gap-8  "
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hero-text text-center md:text-left md:w-1/2">
        <h1 className="text-4xl font-semibold mb-4 flex items-center justify-center md:justify-start gap-2 text-primary">
          {Icon && <Icon className=" text-8xl" />} {title}
        </h1>
        <p className="text-lg mb-6 ">{description}</p>
        <p className="text-lg mb-6 ">
          {details}
        </p>
        <Link to="/contact-us">
        <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="bg-primary text-white border  px-6 py-3 rounded-3xl font-semibold transition-all duration-300 ease-in-out hover:bg-secondary hover:text-primary shadow-md hover:shadow-lg border-primary"
>
  <span className="flex items-center justify-center gap-3">
    <IoIosRocket size={24} /> Get In Touch
  </span>
</motion.button>
              </Link>
      </div>
      <div className="hero-image bg-container  overflow-hidden md:w-1/2">
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
