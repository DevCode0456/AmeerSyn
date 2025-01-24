// WhyChooseUsSection.jsx
import React, { memo } from "react";
import { motion } from "framer-motion";
import Images from "../../../Helper/ImagesConstant";

const WhyChooseUsSection = ({ reasons }) => {
  return (
    <motion.div
      className="my-10"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
<div className="flex justify-center items-center">
<img src={Images.Why_CHOOSE_US_IMG} alt="terms&conditions" className={" max-h-64 mx-auto"} />

      </div>
      <h1 className="text-4xl font-bold text-center text-primary py-3">
Why Choose US     </h1>      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {reasons.map((reason, index) => (
          <div
            className="bg-container border border-primary shadow-2xl p-6 rounded-3xl text-center"
            key={index}
          >
            <div className="mb-4 flex justify-center items-center text-primary">{reason.icon}</div>
            <h3 className="font-semibold text-primary text-xl mb-2">{reason.title}</h3>
            <p className="text-text-600">{reason.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default memo(WhyChooseUsSection);
