import React, { memo } from "react";
import { motion } from "framer-motion";
import ServicesCard from "../../ServicesCard";
import Images from "../../../Helper/ImagesConstant";

const ServicesSection = ({ services }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="container mx-auto px-4 md:px-6 lg:px-8 py-16"
    >
      {/* Animated Header Image */}
      <div className="flex justify-center items-center mb-10">
        <motion.img
          src={Images.SERVICES_IMG}
          alt="services"
          className="max-h-64 w-auto bg-primary rounded-full p-4 cursor-pointer transition-all duration-700 ease-in-out
            animate-floatY lg:animate-floatX
            hover:scale-110 hover:brightness-110 hover:contrast-125 hover:shadow-xl hover:ring-4 hover:ring-primary hover:ring-offset-2
            active:scale-95"
          whileHover={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-heading mb-4">
        Our Services
      </h2>

      {/* Animated Cards Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <ServicesCard
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default memo(ServicesSection);
