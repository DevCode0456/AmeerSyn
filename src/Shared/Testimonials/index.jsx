import React, { useEffect, useState, memo } from "react";
import { AiOutlineComment } from "react-icons/ai";

const TestimonialCard = ({ testimonial }) => {
  const { text, name, role } = testimonial;

  return (
    <div className="bg-container p-8 rounded-3xl shadow-md">
      <AiOutlineComment className="w-6 h-6 text-primary mb-4" />
      <p className="leading-relaxed text-text mb-6">{text}</p>
      <div className="flex items-center">
        <div className="flex-grow flex flex-col pl-4">
          <span className="title-font font-semibold text-primary">{name}</span>
          <span className="text-text text-sm">{role}</span>
        </div>
      </div>
    </div>
  );
};

const FeedbackSection = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const storedFeedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    const formattedTestimonials = storedFeedbacks.map((feedback) => ({
      text: feedback.message,
      name: feedback.name,
      role: feedback.subject,
    }));
    setTestimonials(formattedTestimonials);
  }, []);

  if (testimonials.length === 0) {
    return <div className="text-center text-red-500 font-semibold ">No testimonials yet!</div>;
  }

  return (
    <section className="text-text body-font">
      <div className="container px-5 py-24 mx-auto">
     
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(FeedbackSection);
