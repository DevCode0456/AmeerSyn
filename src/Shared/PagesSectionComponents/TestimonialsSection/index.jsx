import "swiper/css";
import { memo } from "react";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import Images from "../../../Helper/ImagesConstant";
import { Pagination, Autoplay } from "swiper/modules";

const TestimonialsSection = ({ testimonials }) => {
  const safeTestimonials = Array.isArray(testimonials) ? testimonials : [];

  if (safeTestimonials.length === 0) {
    return (
      <div className="text-center text-red-500 py-16">
        <p className="text-xl">
          🚀 No testimonials available yet. Check back soon!
        </p>
      </div>
    );
  }

  return (
    <div className=" text-white py-16 px-6 overflow-visible">
      <div className="max-w-5xl mx-auto text-center relative">
        <motion.h2
          className="text-4xl text-Heading font-semibold tracking-wide"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center items-center p-6  rounded-3xl">
            <img
              src={Images.TESTIMONIAL_IMG}
              alt="terms&conditions"
              className={" rounded-full mx-auto max-h-64 max-w-64 animate-pulse md:animate-bounce lg:animate-scroll   "}
            />
          </div>
          What Our Clients Say
        </motion.h2>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="my-20 p-6 overflow-visible"
        >
          {safeTestimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="overflow-hidden rounded-3xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="bg-container text-text p-6 py-12 rounded-3xl shadow-lg h-full flex flex-col justify-between border border-transparent transition-all will-change-transform relative overflow-hidden"
              >
                <div className="flex items-start">
                  <FaQuoteLeft className="text-Heading text-3xl mr-3 opacity-80 animate-pulse" />
                  <p className="text-sm leading-relaxed">{testimonial.quote}</p>
                </div>
                <div className="mt-4">
                  <p className="text-Heading font-semibold text-lg">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-text">{testimonial.company}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default memo(TestimonialsSection);
