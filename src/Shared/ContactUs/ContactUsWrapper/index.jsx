import React, { memo } from "react";
import ContactFormContent from "../ContactUsContent";
import Images from "../../../Helper/ImagesConstant";

const ContactWrapper = () => {
  return (
    <div className=" bg-Bg  mx-auto p-5">

<div className="flex justify-center items-center p-6  rounded-3xl">
<img src={Images.CONTACT_US_IMG} alt="terms&conditions" className={" rounded-full mx-auto max-h-80 max-w-80 "} />

      </div>
      <h1 className="text-4xl text-Heading font-bold text-center mt-10 mb-4">Contact Us</h1>
      <p className="text-lg text-text text-center mb-10">
        We'd love to hear from you! Drop us a message below.
      </p>

      <ContactFormContent />
    </div>
  );
};

export default memo(ContactWrapper);
