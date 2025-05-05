import React from "react";
import { motion } from "framer-motion";
import Accordin from "../../Shared/Accordin";
import Images from "../../Helper/ImagesConstant";
import ContactUsSection from "../../Shared/ContactUsSection";
import {  MdChat, MdEmail, MdPhoneAndroid } from "react-icons/md";

const NeedHelp = () => {
  const faqs = [
    {
      question: "What type of help can I get from your team?",
      answer:
        "We offer a variety of support, including web and mobile app troubleshooting, academic writing assistance, IT support, and project management advice. Check our Services page for more details.",
    },
    {
      question: "How do I get technical support for my project?",
      answer:
        "You can reach out to our support team through the Contact Us page or the Need Help section on our website. We’ll assist with coding issues, bug fixes, and technical challenges.",
    },
    {
      question: "Can you help me with my final-year project?",
      answer:
        "Yes! We provide guidance, programming help, and project management support specifically for academic projects, including final-year projects and research assignments.",
    },
    {
      question: "How can I get help with IT-related issues?",
      answer:
        "We offer IT support in areas like cloud computing, networking, AI, and cybersecurity. Contact us via the Need Help section, and we'll assist you in resolving technical challenges.",
    },
    {
      question: "What should I do if I have a privacy concern?",
      answer:
        "If you have concerns about privacy or sensitive data, please contact our team. We adhere to strict privacy standards and will assist in ensuring your information is secure.",
    },
    {
      question: "Do you provide maintenance and post-development support?",
      answer:
        "Yes, we offer post-development services such as bug fixes, updates, and performance monitoring to keep your website or app running smoothly.",
    },
    {
      question: "Can you help me with research or academic writing?",
      answer:
        "Yes, we provide academic support including help with thesis writing, assignments, research papers, and proofreading. We ensure quality and originality in all our services.",
    },
    {
      question: "I need a custom website or app—can you help?",
      answer:
        "Absolutely! Whether you need a custom static website or a dynamic web application, we can create a solution tailored to your needs. Get in touch via the Need Help section for more info.",
    },
    {
      question: "How can you ensure the security of my system?",
      answer:
        "We offer cybersecurity services like network security, data protection, and vulnerability assessments. Reach out to us, and we’ll work to secure your systems.",
    },
    {
      question: "Can you help me with large-scale data processing?",
      answer:
        "Yes, we design scalable apps that can handle large-scale data processing, ensuring efficient performance and smooth operations. Let us know your specific needs.",
    },
    {
      question: "How long does it take to get help with a project?",
      answer:
        "Response time depends on the nature of the issue. For most inquiries, we aim to provide assistance within 24–48 hours, but complex issues may take longer.",
    },
    {
      question: "How can I contact your support team?",
      answer:
        "You can contact us directly via the Contact Us page, or use the Need Help section on our website for more specific support options.",
    },
  ];

  return (
    <div className="bg-Bg ">
      <div className="   rounded-lg container mx-auto md:px-4">
        <div className="flex justify-center items-center p-6   rounded-3xl">
          <img
            src={Images.NEED_HELP_IMG}
            alt="terms&conditions"
            className={" max-h-80 rounded-full mx-auto"}
          />
        </div>
        <h1 className="text-4xl font-bold text-center text-primary py-5">
          Need Help?{" "}
        </h1>{" "}
        <p className="text-text mb-4 max-w-2xl mx-auto text-center">
          We're here to assist you. Whether it's a question about our services,
          feedback on your experience, or help with a specific problem, feel
          free to reach out to us!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-container  rounded-3xl hover:bg-container hover:shadow-xl hover:border hover:border-primary p-6  ">
            <h3 className="text-lg font-semibold  mb-2 text-primary">
              <MdEmail className="inline-block items-center mr-2" size={44} />{" "}
              Email Support
            </h3>
            <p className="text-text">
              Reach out to us at{" "}
              <a
                href="mailto:ameersync.com@gmail.com"
                className="flex items-center gap-2 md:border-r-2 border-gray-300 text-primary md:pr-4 group"
              >
                {" "}
                <span className="font-semibold  md:inline">
                  ameersync.com@gmail.com
                </span>
              </a>
            </p>
          </div>
          <div className="bg-container  rounded-3xl hover:bg-container hover:shadow-xl hover:border hover:border-primary p-6 ">
            <h3 className="text-lg font-semibold text-primary mb-2">
              <MdPhoneAndroid
                className="inline-block items-center mr-2"
                size={44}
              />{" "}
              Phone Support
            </h3>
            <p className="text-text">
              Call us at{" "}
              <span className="font-semibold text-primary">
                +1 (123) 456-7890
              </span>{" "}
              (9 AM to 6 PM UTC).
            </p>
          </div>
          <div className="bg-container  rounded-3xl hover:bg-container hover:shadow-xl hover:border hover:border-primary p-6 ">
            <h3 className="text-lg font-semibold text-primary mb-2">
              <MdChat className="inline-block items-center mr-2" size={44} />{" "}
              Live Chat
            </h3>
            <p className="text-text">
              Update it soon Chat with our support team in real-time. Available
              during business hours.
            </p>
          </div>
        </div>
        {/* Contact Form */}
        <motion.div
          className="my-10 "
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Accordin faqs={faqs} />
        </motion.div>
        <h2 className="text-4xl text-center font-semibold text-Heading py-4 md:py-8 ">
          Helpful Links
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-gradient-to-t from-container to-primary rounded-3xl p-3 my-5 md:p-10 ">
          <a
            href="/about-us"
            className="block bg-secondary text-text p-4 rounded-lg hover:bg-primary transition-all hover:text-white"
          >
            About Us
          </a>
          <a
            href="/services"
            className="block bg-secondary text-text  p-4 rounded-lg hover:bg-primary transition-all hover:text-white"
          >
            Our Services
          </a>
          <a
            href="/portfolio"
            className="block bg-secondary text-text  p-4 rounded-lg hover:bg-primary transition-all hover:text-white"
          >
            Portfolio
          </a>
          <a
            href="/contact-us"
            className="block bg-secondary text-text  p-4 rounded-lg hover:bg-primary transition-all hover:text-white"
          >
            Contact Us
          </a>
          <a
            href="/projects"
            className="block bg-secondary text-text  p-4 rounded-lg hover:bg-primary transition-all hover:text-white"
          >
            Our Projects
          </a>
          <a
            href="/terms&conditions"
            className="block bg-secondary text-text  p-4 rounded-lg hover:bg-primary transition-all hover:text-white "
          >
            Terms & Conditions
          </a>
        </div>
      </div>
      <ContactUsSection />
    </div>
  );
};

export default NeedHelp;
