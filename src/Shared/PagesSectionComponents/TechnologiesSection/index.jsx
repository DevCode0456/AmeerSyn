import React, { memo } from "react";
import FlipCard from "../../FlipCard";
import { motion } from "framer-motion";
import Images from "../../../Helper/ImagesConstant";

const TechnologiesSection = ({ technologies }) => {
  return (
    <motion.div
      className="my-10 container mx-auto p-5  "
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
     <div className="flex justify-center items-center">
<img src={Images.TECH_IMG} alt="terms&conditions" className={" max-h-64 mx-auto"} />

      </div>
      <h1 className="text-4xl font-bold text-center text-primary py-3">
        Technologies We Use    </h1>
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