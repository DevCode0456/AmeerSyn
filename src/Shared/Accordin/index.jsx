import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQSection = ({ faqs }) => {
  const [open, setOpen] = useState(0); // Initialize with 0 to open the first FAQ item by default

  const toggle = (id) => {
    setOpen(open === id ? null : id);
  };

  return (
    <div className="faq-section px-8 py-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item border rounded-lg overflow-hidden shadow-sm transition-all duration-300 ${
              open === index ? "faq-open bg-blue-50" : "faq-closed bg-white"
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="faq-header w-full text-left px-4 py-3 bg-primary text-white font-semibold flex justify-between items-center transition duration-300"
            >
              <span>{faq.question}</span>
              <span className="ml-2 flex items-center">
                {open === index ? (
                  <FaChevronUp
                    size={18}
                    className="transition-transform duration-300"
                  />
                ) : (
                  <FaChevronDown
                    size={18}
                    className="transition-transform duration-300"
                  />
                )}
              </span>
            </button>
            {open === index && (
              <div className="faq-body px-4 py-3 bg-gray-100 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}    
      </div>
    </div>
  );
};

export default FAQSection;
