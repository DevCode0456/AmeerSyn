import React, { memo } from "react";
import ContactFormContent from "../ContactUsContent";

const ContactWrapper = () => {
  return (
    <div className=" bg-white  mx-auto p-5">
      <h1 className="text-4xl font-bold text-center mt-10 mb-4">Contact Us</h1>
      <p className="text-lg text-center mb-10">
        We'd love to hear from you! Drop us a message below.
      </p>

      <ContactFormContent />
    </div>
  );
};

export default memo(ContactWrapper);
