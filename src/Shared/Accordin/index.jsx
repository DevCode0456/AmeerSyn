import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const Accordin = ({ faqs }) => {
  const [open, setOpen] = useState(0); 

  const toggle = (id) => {
    setOpen(open === id ? null : id);
  };

  return (
    <div className="container mx-auto md:p-32 p-4 py-6 rounded-lg">
      <div className="space-y-4 bg-white">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b-2 overflow-hidden transition-all duration-700"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-4 py-3 bg-primary font-semibold flex justify-between items-center transition duration-300"
            >
              <span className="text-secondary">{faq.question}</span>
              <span className="ml-2 flex items-center">
                {open === index ? (
                  <FiMinus
                    size={22}
                    className="transition-transform duration-300 text-secondary"
                  />
                ) : (
                  <FiPlus
                    size={22}
                    className="transition-transform duration-300 text-secondary"
                  />
                )}
              </span>
            </button>
            <div
              className="px-4 py-3 text-gray-700 overflow-hidden transition-all duration-700"
              style={{
                maxHeight: open === index ? "1000px" : "0",
              }}
            >
              {open === index ? faq.answer : ""}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordin ;
