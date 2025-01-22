import React from "react";
import { motion } from "framer-motion";
import Accordin from "../../Shared/Accordin";

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
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Need Help?</h1>
        <p className="text-gray-600 mb-4">
          We're here to assist you. Whether it's a question about our services, feedback on your experience, or help with a specific problem, feel free to reach out to us!
        </p>

        {/* Help Options Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-100 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">
              📧 Email Support
            </h3>
            <p className="text-gray-700">
              Reach out to us at <a href="mailto:support@example.com" className="text-blue-500 hover:underline">support@example.com</a>.
            </p>
          </div>
          <div className="bg-green-100 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-700 mb-2">
              ☎️ Phone Support
            </h3>
            <p className="text-gray-700">
              Call us at <span className="font-medium">+1 (123) 456-7890</span> (9 AM to 6 PM UTC).
            </p>
          </div>
          <div className="bg-yellow-100 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-700 mb-2">
              💬 Live Chat
            </h3>
            <p className="text-gray-700">
              Chat with our support team in real-time. Available during business hours.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="sm:col-span-2 flex flex-col">
            <label className="text-gray-700 font-medium mb-2">Subject</label>
            <input
              type="text"
              placeholder="Subject of your query"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="sm:col-span-2 flex flex-col">
            <label className="text-gray-700 font-medium mb-2">Your Message</label>
            <textarea
              placeholder="Describe your issue or query"
              rows="5"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 transition-all"
            >
              Submit Query
            </button>
          </div>
        </form>

        <motion.div
        className="my-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Accordin faqs={faqs} />
      </motion.div>

        {/* Helpful Links Section */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Helpful Links</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a
            href="/about-us"
            className="block bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-all"
          >
            About Us
          </a>
          <a
            href="/services"
            className="block bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-all"
          >
            Our Services
          </a>
          <a
            href="/portfolio"
            className="block bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-all"
          >
            Portfolio
          </a>
          <a
            href="/contact-us"
            className="block bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-all"
          >
            Contact Us
          </a>
          <a
            href="/projects"
            className="block bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-all"
          >
            Our Projects
          </a>
          <a
            href="/terms&conditions"
            className="block bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-all"
          >
            Terms & Conditions
          </a>
        </div>
      </div>
    </div>
  );
};

export default NeedHelp;
