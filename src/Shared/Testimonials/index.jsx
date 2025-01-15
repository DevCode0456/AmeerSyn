import React, { memo } from "react";
import { AiOutlineComment } from "react-icons/ai";

const TestimonialCard = ({ testimonial }) => {
  const { text, name, role, image } = testimonial;

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
      <AiOutlineComment className="w-6 h-6 text-gray-400 mb-4" />
      <p className="leading-relaxed mb-6">{text}</p>
      <div className="flex items-center">
        <img
          alt={`${name}'s profile picture`}
          src={image}
          className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
        />
        <div className="flex-grow flex flex-col pl-4">
          <span className="title-font font-medium text-gray-900">{name}</span>
          <span className="text-gray-500 text-sm">{role}</span>
        </div>
      </div>
    </div>
  );
};

const Testimonials = ({ testimonials, title = "Testimonials" }) => {
  if (!testimonials || testimonials.length === 0) {
    return (
      <div className="text-center text-gray-600">
        No testimonials available at the moment.
      </div>
    );
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
          {title}
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

export default memo(Testimonials);
