import React, { memo } from "react";
import FlipCard from "../../FlipCard";
import { motion } from "framer-motion";
import Images from "../../../Helper/ImagesConstant";
import { ReactTyped } from "react-typed";

const TechnologiesSection = ({ technologies }) => {
  return (
    <motion.div
      className="my-10 container mx-auto p-5 bg-black rounded-3xl  "
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
     <div className="flex justify-center items-center ">
<img src={Images.TECH_IMG} alt="terms&conditions" className={" max-h-80 max-w-80 mx-auto rounded-full px-20 animate-pulse md:animate-bounce lg:animate-scroll   transition duration-1000 ease-in"} />

      </div>
      <h1 className="text-4xl font-bold text-center text-white py-3">
  Technologies We Use{" "}
  <ReactTyped
  className="text-Heading"
  strings={technologies.map((tech) => tech.title)}  
  typeSpeed={100}
  backSpeed={200}
  loop
/>
</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {technologies.map((tech, index) => (
          <FlipCard
            key={index}
            icon={tech.icon}
            title={tech.title}
            description={tech.description}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default memo(TechnologiesSection);