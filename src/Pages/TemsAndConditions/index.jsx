import {
  FiInfo,
  FiUsers,
  FiShield,
  FiFileText,
  FiAlertCircle,
  FiCheckCircle,
} from "react-icons/fi";
import React, { useState } from "react";
import Images from "../../Helper/ImagesConstant";

const TermsAndConditions = () => {
  

  const SectionHeading = ({ text }) => (
    <h3 className="text-2xl font-semibold text-primary mb-4">{text}</h3>
  );

  const SectionDescription = ({ text }) => (
    <p className="text-lg text-text mb-6">{text}</p>
  );

  const TnCItem = ({ icon, title, description }) => (
    <div className="p-6 bg-container rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-secondary">
      <div className="flex items-center text-primary mb-4">
        <div className="p-2 rounded-full bg-primary text-white mr-4">
          {icon}
        </div>
        <h4 className="text-xl font-semibold">{title}</h4>
      </div>
      <p className="text-text">{description}</p>
    </div>
  );
  const faqs = [
    {
      question: "What services do you provide?",
      answer:
        "We offer a wide range of services, including web and mobile app development, IT and technical support, academic writing assistance, project management, and more. Explore our Services page for details.",
    },
    {
      question: "Do you specialize in any specific technologies?",
      answer:
        "Yes, we have expertise in Node.js, React.js, Shopify, WordPress, Kotlin, Java, and more. For Android apps, we use cutting-edge tools like Android Studio and Firebase.",
    },
    {
      question: "Can you assist with academic projects or final-year projects?",
      answer:
        "Absolutely! We provide custom program development, final-year project assistance, and project management support tailored to your academic needs.",
    },
    {
      question: "Do you offer IT and technical support services?",
      answer:
        "Yes, we cover areas like artificial intelligence (AI), Linux, cloud computing, databases, networking, cybersecurity, and more.",
    },
    {
      question: "How do you handle sensitive data and privacy?",
      answer:
        "We follow strict data privacy protocols, employing encryption, secure authentication, and compliance with global standards like GDPR and HIPAA when applicable.",
    },
    {
      question: "Do you provide post-development support?",
      answer:
        "Yes, we offer maintenance and support services to ensure your website or app performs optimally over time.",
    },
    {
      question: "Can you help with academic writing or research?",
      answer:
        "Yes, we assist with thesis writing, assignments, proofreading, and research papers, ensuring quality and originality.",
    },
    {
      question: "Can you build custom websites and apps?",
      answer:
        "Yes, we specialize in creating custom static websites, dynamic web applications, and Android apps tailored to your specific needs.",
    },
    {
      question: "Do you provide cybersecurity services?",
      answer:
        "Yes, we offer cybersecurity solutions, including network security, data protection, and vulnerability assessments, to keep your systems secure.",
    },
    {
      question: "Can your apps handle large-scale data processing?",
      answer:
        "Yes, we design apps to efficiently manage and process large amounts of data, ensuring scalability and performance.",
    },
    {
      question: "How long does it take to develop a project?",
      answer:
        "The timeline depends on the complexity of the project. Most development tasks are completed within 3 to 6 months.",
    },
    {
      question: "How can I contact you for inquiries?",
      answer:
        "You can reach us via the Contact Us page or explore the Need Help section on our website for more options.",
    },
  ];



  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-center items-center">
<img src={Images.TERMS_CONDITION_IMG} alt="terms&conditions" className={" mx-auto max-h-80 max-w-80 rounded-full"} />

      </div>
      <h1 className="text-4xl font-bold text-center text-primary mb-8 my-4">
        Terms and Conditions
      </h1>

      <SectionHeading text="Introduction" />
      <SectionDescription text="These Terms and Conditions outline the rules and regulations for the use of our website and services." />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <TnCItem
          icon={<FiCheckCircle size={32} />}
          title="Acceptance of Terms"
          description="By accessing our website, you agree to comply with these Terms and Conditions."
        />
        <TnCItem
          icon={<FiShield size={32} />}
          title="Security"
          description="We take reasonable measures to ensure the security and privacy of your data."
        />
        <TnCItem
          icon={<FiFileText size={32} />}
          title="Content Ownership"
          description="All content on this website, including text, graphics, and logos, is our property."
        />
      </div>

      <SectionHeading text="User Responsibilities" />
      <SectionDescription text="As a user of our services, you agree to the following responsibilities:" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <TnCItem
          icon={<FiAlertCircle size={32} />}
          title="Respect for Others"
          description="You agree not to engage in any activity that harms or disrupts the use of our website."
        />
        <TnCItem
          icon={<FiInfo size={32} />}
          title="Accurate Information"
          description="You must provide accurate and truthful information when using our services."
        />
        <TnCItem
          icon={<FiShield size={32} />}
          title="Prohibited Activities"
          description="Certain activities are prohibited, such as hacking or exploiting vulnerabilities."
        />
      </div>

      <SectionHeading text="Payment Terms" />
      <SectionDescription text="For our paid services, we require a 30% advance payment to begin the project." />
      <div className="bg-green-100 p-6 rounded-xl shadow-lg my-3">
        <div className="flex items-center text-green-500 mb-4">
          <div className="p-2 rounded-full bg-green-500 text-white mr-4">
            <FiCheckCircle size={32} />
          </div>
          <h4 className="text-xl font-semibold">30% Advance Payment</h4>
        </div>
        <p className="text-gray-700">
          We require a 30% upfront payment for project initiation. The remaining
          balance is due upon completion.
        </p>
      </div>

      <SectionHeading text="Limitation of Liability" />
      <SectionDescription text="We are not liable for any indirect or consequential damages arising from the use of our services." />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <TnCItem
          icon={<FiShield size={32} />}
          title="Liability Limitation"
          description="We limit our liability for any loss or damage caused by our services."
        />
        <TnCItem
          icon={<FiAlertCircle size={32} />}
          title="No Indirect Damages"
          description="We do not accept responsibility for any indirect or consequential loss."
        />
        <TnCItem
          icon={<FiFileText size={32} />}
          title="Service Interruptions"
          description="We are not responsible for service disruptions outside our control."
        />
      </div>

      <SectionHeading text="Privacy Policy" />
      <SectionDescription text="Your privacy is important to us. Please refer to our Privacy Policy for detailed information." />

      <SectionHeading text="Conclusion" />
      <SectionDescription text="Thank you for taking the time to read and understand our Terms and Conditions. If you have any questions, feel free to contact us." />

     

    </div>
  );
};

export default TermsAndConditions;
