import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = ({ testimonials }) => {
  return (
    <div className="bg-gradient-to-b from-secondary to-container text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl text-primary font-bold">What Our Clients Say</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white text-gray-900 p-6 rounded-3xl shadow-lg"
            >
              <div className="flex items-center">
                <FaQuoteLeft className="text-primary text-2xl mr-3" />
                <p className="text-lg">{testimonial.quote}</p>
              </div>
              <p className="mt-4 text-blue-600 font-semibold">{testimonial.author}</p>
              <p className="text-sm">{testimonial.company}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
