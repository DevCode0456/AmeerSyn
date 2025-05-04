import React, { memo } from "react";
import { motion } from "framer-motion";
import ServicesCard from "../../ServicesCard";
import Images from "../../../Helper/ImagesConstant";

const ServicesSection = ({ services }) => {
  return (
    <motion.div
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    initial={{ opacity: 0, y: 50 }}
    className=" container  mx-auto px-5 "
    >
<div className="flex justify-center items-center ">
<img
  src={Images.SERVICES_IMG}
  alt="services"
  className="
    max-h-64 max-w-64 mx-auto 
    rounded-full p-4 
    cursor-pointer
    filter grayscale brightness-95
    transition-all duration-700 ease-in-out 
    
    animate-floatY lg:animate-floatX

    hover:scale-110 hover:grayscale-0 hover:brightness-110 hover:contrast-125 hover:sepia-0
    hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:ring-4 hover:ring-primary hover:ring-offset-2
    hover:animate-pulse-glow

    active:scale-95 active:shadow-[0_0_25px_4px_var(--color-primary)]
  "
/>





      </div>
      <h1 className="text-4xl font-bold text-center text-Heading py-3">
Our Sercvices    </h1>      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-10">
        {services.map((service, index) => (
          <ServicesCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default memo(ServicesSection);