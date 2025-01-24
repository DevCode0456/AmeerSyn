import React, { memo } from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { IoIosRocket } from 'react-icons/io'
import Images from '../../Helper/ImagesConstant';


const ContactUsSection = () => {
  return (
    <motion.div
    className="my-10"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
  >
<div className="flex justify-center items-center">
<img src={Images.CONTACT_US_IMG} alt="terms&conditions" className={" max-h-64 mx-auto"} />

      </div>
      <h1 className="text-4xl font-bold text-center text-primary py-3">
Contact Us     </h1>    <div className="bg-primary text-text border-2 shadow-inset border-secondary p-8 rounded-3xl text-center">


<div className="flex justify-center items-center">
<img src={Images.GET_STARTED_IMG} alt="terms&conditions" className={" max-h-40 mx-auto"} />

      </div>
    <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
    <p className="text-lg mb-6">
      Contact us today to discuss your project, and let's bring your ideas
      to life with cutting-edge technology!
    </p>
   
    <Link to="/contact-us">
    <button className="bg-secondary text-primary border border-secondary px-6 py-3 rounded-3xl font-semibold  ">
      <span className="flex items-center justify-center gap-3 text-primary">
      <IoIosRocket className="text-primary" size={24}/>    Get In Touch  
      </span>
     
    </button>
        </Link>
  </div>
  </motion.div>  )
}

export default memo(ContactUsSection)