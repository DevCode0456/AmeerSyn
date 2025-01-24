import React, { memo } from "react";
import { motion } from "framer-motion";
import Testimonials from "../../Testimonials";
import Images from "../../../Helper/ImagesConstant";

const TestimonialsSection = ({  }) => {
  return (
    <motion.div
      className="my-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
     <div className="flex justify-center items-center">
<img src={Images.TESTIMONIAL_IMG} alt="terms&conditions" className={" max-h-64 mx-auto"} />

      </div>
      <h1 className="text-4xl font-bold text-center text-primary py-3">
What Our Clients Say     </h1>
      <Testimonials  />
    </motion.div>
  );
};

export default memo(TestimonialsSection);