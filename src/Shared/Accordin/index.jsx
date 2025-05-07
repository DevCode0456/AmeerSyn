import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import Images from "../../Helper/ImagesConstant";

const Accordin = ({ faqs }) => {
  const [open, setOpen] = useState(0); 

  const toggle = (id) => {
    setOpen(open === id ? null : id);
  };

  return (
    <div className=" mx-auto container my-10 rounded-lg p-5 ">

<div className="flex justify-center items-center">
<img src={Images.FAQS_IMG} alt="terms&conditions" className={" max-h-64 rounded-full mx-auto animate-pulse md:animate-bounce lg:animate-scroll "} />

      </div>
      <h1 className="text-4xl font-bold text-center text-Heading py-6">
Frequently Asked Questions      </h1>

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
              <span className="text-white">{faq.question}</span>
              <span className="ml-2 flex items-center">
                {open === index ? (
                  <FiMinus
                    size={22}
                    className="transition-transform duration-300 text-white"
                  />
                ) : (
                  <FiPlus
                    size={22}
                    className="transition-transform duration-300 text-white"
                  />
                )}
              </span>
            </button>
            <div
              className="px-4 py-3 text-black text-base overflow-hidden transition-all duration-700"
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
