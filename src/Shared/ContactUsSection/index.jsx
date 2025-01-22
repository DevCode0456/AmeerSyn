import React, { memo } from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { IoIosRocket } from 'react-icons/io'


const ContactUsSection = () => {
  return (
    <motion.div
    className="my-10"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-center text-3xl font-bold mb-6">Contact Us</h2>
    <div className="bg-primary text-secondary border-2 shadow-inset border-secondary p-8 rounded-lg text-center">
    <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
    <p className="text-lg mb-6">
      Contact us today to discuss your project, and let's bring your ideas
      to life with cutting-edge technology!
    </p>
   
    <Link to="/contact-us">
    <button className="bg-secondary text-primary border border-secondary px-6 py-3 rounded-lg font-semibold  ">
      <span className="flex items-center justify-center gap-3 text-primary">
      <IoIosRocket className="text-primary" size={24}/>    Get In Touch  
      </span>
     
    </button>
        </Link>
  </div>
  </motion.div>  )
}

export default memo(ContactUsSection)