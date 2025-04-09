import React from "react";
import {
    FiInfo,
    FiUsers,
    FiShield,
    FiFileText,
    FiAlertCircle,
    FiCheckCircle,
} from "react-icons/fi";
import Images from "../../Helper/ImagesConstant";

const PrivacyPolicy = () => {
  const SectionHeading = ({ text }) => (
    <h3 className="text-2xl font-semibold text-primary mb-4">{text}</h3>
  );

  const SectionDescription = ({ text }) => (
    <p className="text-lg text-text mb-6">{text}</p>
  );

  const PolicyItem = ({ icon, title, description }) => (
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

  return (
    <div className="container mx-auto p-8">
        <div className="flex justify-center items-center">
<img src={Images.PRIVACY_POLICY_IMG} alt="img" className={" mx-auto max-h-80 max-w-80 rounded-full"} />

      </div>
      <h1 className="text-4xl font-bold text-center text-primary mb-8 my-4">
        Privacy Policy
      </h1>

      <SectionHeading text="Introduction" />
      <SectionDescription text="Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information." />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <PolicyItem
          icon={<FiCheckCircle size={32} />}
          title="Data Collection"
          description="We collect personal data such as name, email, and browsing behavior to enhance your experience."
        />
        <PolicyItem
          icon={<FiShield size={32} />}
          title="Security Measures"
          description="We implement robust security measures to protect your personal data from unauthorized access."
        />
        <PolicyItem
          icon={<FiFileText size={32} />}
          title="Data Usage"
          description="Your data is used to improve our services, provide support, and communicate updates."
        />
      </div>

      <SectionHeading text="User Rights" />
      <SectionDescription text="You have the right to access, update, or delete your personal information." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <PolicyItem
          icon={<FiInfo size={32} />}
          title="Access to Information"
          description="You can request a copy of the personal data we have collected about you."
        />
        <PolicyItem
          icon={<FiAlertCircle size={32} />}
          title="Data Deletion"
          description="You may request to have your data deleted from our system."
        />
        <PolicyItem
          icon={<FiShield size={32} />}
          title="Data Protection"
          description="We ensure compliance with data protection laws such as GDPR and HIPAA."
        />
      </div>

      <SectionHeading text="Third-Party Services" />
      <SectionDescription text="We may use third-party services for analytics, advertising, and customer support. These services have their own privacy policies." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <PolicyItem
          icon={<FiUsers size={32} />}
          title="Third-Party Sharing"
          description="We do not sell your data, but we may share it with trusted third-party services for better functionality."
        />
        <PolicyItem
          icon={<FiFileText size={32} />}
          title="Cookies and Tracking"
          description="We use cookies to enhance user experience, track analytics, and deliver personalized content."
        />
        <PolicyItem
          icon={<FiAlertCircle size={32} />}
          title="Opt-Out Options"
          description="You can manage cookie preferences and opt-out of certain data collection activities."
        />
      </div>

      <SectionHeading text="Policy Updates" />
      <SectionDescription text="We may update this Privacy Policy periodically. Please review it regularly for any changes." />

      <SectionHeading text="Contact Us" />
      <SectionDescription text="If you have any questions about our Privacy Policy, please contact us at [Your Email]." />
    </div>
  );
};

export default PrivacyPolicy;
