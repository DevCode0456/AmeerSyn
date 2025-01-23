import React, { useEffect, useState, memo } from "react";
import { AiOutlineComment } from "react-icons/ai";

const TestimonialCard = ({ testimonial }) => {
  const { text, name, role } = testimonial;

  return (
    <div className="bg-secondary p-8 rounded-lg shadow-lg">
      <AiOutlineComment className="w-6 h-6 text-primary mb-4" />
      <p className="leading-relaxed mb-6">{text}</p>
      <div className="flex items-center">
        <div className="flex-grow flex flex-col pl-4">
          <span className="title-font font-semibold text-primary">{name}</span>
          <span className="text-primary text-sm">{role}</span>
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
    return <div className="text-center text-gray-600">No testimonials yet!</div>;
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
          Testimonials
        </h1>
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
