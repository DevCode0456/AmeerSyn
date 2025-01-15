import React, { memo } from "react";
import { motion } from "framer-motion";

const HeroSection = ({
  title,
  details,
  imageSrc,
  imageAlt,
  icon: Icon,
  buttonText,
  description,
  onButtonClick,
  imageWidth = "500px",
  imageHeight = "500px",
}) => {
  return (
    <motion.div
      className="hero-section flex flex-col md:flex-row bg-primary rounded-lg  items-center justify-between gap-8 py-12 px-6 my-3"
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
        <button
          className="cta-button text-white px-6 py-2 rounded-lg shadow-md transition-all duration-300"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>
      <div className="hero-image md:w-1/2">
        <img
          src={imageSrc}
          alt={imageAlt}
          style={{ width: imageWidth, height: imageHeight }}
          className="rounded-lg shadow-lg"
        />
      </div>
    </motion.div>
  );
};

export default memo(HeroSection);
