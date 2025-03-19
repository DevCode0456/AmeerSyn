import React, { memo } from "react";
import { motion } from "framer-motion";
import ServicesCard from "../../ServicesCard";
import Images from "../../../Helper/ImagesConstant";

const ServicesSection = ({ services }) => {
  return (
    <motion.div
      className=" container  mx-auto px-5 "
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
<div className="flex justify-center items-center ">
<img src={Images.SERVICES_IMG} alt="services" className={" max-h-64 max-w-64 mx-auto  rounded-full bg-Heading hover:bg-primary p-4 animate-pulse md:animate-bounce lg:animate-scroll   transition duration-1000 ease-in"} />

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