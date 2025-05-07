import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CustomCard = ({icon,title,description}) => {
  return (
    <div className="relative w-full max-w-xs mx-auto mb-6 ">
      {/* Layered Backgrounds */}
      <div className="absolute top-4 left-4 w-full h-full bg-blue-200 rounded-3xl z-0 transform rotate-6 shadow-lg" />
      <div className="absolute top-2 left-2 w-full h-full bg-orange-200 rounded-3xl z-0 transform rotate-3 shadow-md" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 bg-white rounded-3xl p-6 shadow-2xl overflow-hidden"
      >
        <div className=" max-w-[60px] h-[60px] bg-gradient-to-br from-primary to-Heading rounded-full mx-auto flex items-center justify-center shadow-md text-white ">
{icon}        </div>

        <h3 className="text-center text-2xl font-bold text-primary mt-4">
        {title}        </h3>
        <p className="text-center text-gray-500 text-sm mt-2">
        {description}        </p>

     

        <Link to="/contact-us" className="flex items-center justify-between mt-4 bg-gradient-to-r from-orange-400 to-pink-500 p-2 rounded-full shadow-inner">
          <span className="bg-white w-6 h-6 rounded-full text-sm flex items-center justify-center font-bold shadow-md">
            1
          </span>
          <button className="text-white text-sm font-medium">Contact Us</button>
          <span className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">
            👁️
          </span>
        </Link>
      </motion.div>
    </div>
  );
};

export default CustomCard;
