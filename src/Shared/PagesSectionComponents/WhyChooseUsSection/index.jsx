import React, { memo } from "react";
import { motion } from "framer-motion";
import WhyChooseUsComponent from "../WhyChooseUsComponent";

const WhyChooseUsSection = ({ reasons }) => {
  return (
    <motion.div
      className=" vw-[100]"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <WhyChooseUsComponent/>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14  py-12 container mx-auto p-5 ">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className={`relative bg-white shadow-sm p-6 rounded-3xl text-center border border-primary
              transition-all duration-300 group 
              hover:bg-gradient-to-tr hover:from-primary hover:to-varientColor hover:shadow-lg hover:border-0`}
          >
            <div
              className="absolute -top-10 left-1/2 transform -translate-x-1/2 
             bg-gradient-to-r from-varientColor to-primary text-white p-3 rounded-full flex justify-center items-center 
              w-20 h-20 transition-all duration-500 group-hover:bg-white group-hover:border-2 group-hover:border-white"
            >
              <span className="text-white text-3xl ">
                {reason.icon}
              </span>
            </div>

            <h3 className="mt-10 text-xl font-bold text-primary group-hover:text-white">
              {reason.title}
            </h3>
            <div className="w-10 h-1 bg-primary mx-auto my-2 rounded-full group-hover:bg-white"></div>
            <p className="text-black text-base group-hover:text-white">
              {reason.description}
            </p>

            {reason.learnMore && (
              <a
                href={reason.learnMore}
                className="text-primary font-semibold mt-3 inline-block group-hover:text-white hover:underline"
              >
                Learn More →
              </a>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default memo(WhyChooseUsSection);
