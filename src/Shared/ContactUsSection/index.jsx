import React, { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IoIosRocket } from "react-icons/io";
import Images from "../../Helper/ImagesConstant"; 
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const ContactUsSection = () => {
  return (
    <div className="bg-gradient-to-tr from-primary to-varientColor">
      <div className="justify-center w-full flex  py-5 ">
      <motion.img
            alt="Rocket Launch"
            src={Images.CONTACT_US_IMG} 
            className=" max-w-64 max-h-64 text-center rounded-full mb-6  animate-pulse md:animate-bounce lg:animate-scroll   transition duration-1000 ease-in"
            
          />
      </div>
      <motion.div
        transition={{ duration: 0.8 }}
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center    p-8 md:p-12"
      >
      
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            Let's Work Together!
          </h1>
          <p className="text-lg text-gray-300">
            Have a project in mind? Contact us and let's bring your ideas to
            life with cutting-edge technology.
          </p>

          <div className="space-y-4">
          <div className="flex items-center justify-center md:justify-start gap-4">
              <MdPhone className="text-white text-3xl" />
              <p className="text-white">            (+44) 7440 095528
              </p>
            </div>
           
            <div className="flex items-center justify-center md:justify-start gap-4">
              <MdLocationOn className="text-white text-3xl" />
              <p className="text-white"> Morden, London UK</p>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <MdEmail className="text-white text-3xl" />
              <p className="text-white">
                <a
  href="mailto:ameersync.com@gmail.com"
  className="flex items-center gap-2 md:border-r-2 border-gray-300 text-primary md:pr-4 group"
>
 
  <span className="font-semibold  inline text-white">
    ameersync.com@gmail.com
  </span>
</a>
</p>
            </div>
            
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end text-center ">
          <motion.img
            src={Images.GET_STARTED_IMG} 
            alt="Rocket Launch"
            className="w-48 md:w-64 h-auto rounded-lg mb-6  "
            animate={{
              y: [-10, 10, -10], 
              rotate: [-2, 2, -2], 
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
          />

          <Link to="/contact-us">
            <motion.button
              className="bg-white text-primary px-6 py-3 rounded-full font-semibold flex items-center gap-3 text-lg shadow-md hover:shadow-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.1 }}
            >
              <motion.span
                animate={{
                  y: [-5, 5, -5], 
                }}
                transition={{
                  repeat: Infinity,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
              >
                <IoIosRocket className="text-primary" size={24} />
              </motion.span>
              Get In Touch
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default memo(ContactUsSection);
