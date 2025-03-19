import React, { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MdContactPhone } from "react-icons/md";

const CustomCard = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-gradient-to-b from-secondary to-primary rounded-3xl shadow-xl p-5 text-center transform transition-all duration-300 h-full flex flex-col justify-between hover:from-primary hover:to-container hover:text-secondary"

    >
      <div className="relative z-10 p-6 flex-grow">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-secondary p-4 rounded-full shadow-sm flex items-center justify-center mx-auto"
        >
          <div className="text-primary">{icon}</div>
        </motion.div>
        <motion.h5
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white font-bold text-2xl mt-4"
        >
          {title}
        </motion.h5>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-text text-sm mt-2 py-3"
        >
          {description}
        </motion.p>
      </div>
      <Link to="/contact-us" className="flex justify-end">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.4 }}
          className="w-14 h-14 bg-gradient-to-b from-secondary to-container text-primary shadow-md rounded-full p-3  flex justify-center items-center cursor-pointer"
        >
          <MdContactPhone className="w-6 h-6" />
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default memo(CustomCard);
