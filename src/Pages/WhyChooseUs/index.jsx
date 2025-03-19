import {
  FiUser,
  FiFlag,
  FiClock,
  FiLifeBuoy,
  FiTrendingUp,
} from "react-icons/fi";
import { memo } from "react";
import { FaAward } from "react-icons/fa";
import ContactUsSection from "../../Shared/ContactUsSection";
import WhyChooseUsSection from "../../Shared/PagesSectionComponents/WhyChooseUsSection";
import TestimonialsSection from "../../Shared/PagesSectionComponents/TestimonialsSection";

const reasons = [
  {
    icon: <FaAward size={32} />,
    title: "Proven Expertise",
    description:
      "With years of experience, we bring excellence to every project.",
  },
  {
    icon: <FiUser size={32} />,
    title: "Client-Centric Approach",
    description:
      "We tailor our solutions to fit your needs, ensuring satisfaction.",
  },
  {
    icon: <FiTrendingUp size={32} />,
    title: "Future-Ready Solutions",
    description:
      "We utilize the latest technologies to give your business an edge.",
  },
  {
    icon: <FiFlag size={32} />,
    title: "Commitment to Quality",
    description:
      "Our quality standards guarantee top-notch results every time.",
  },
  {
    icon: <FiClock size={32} />,
    title: "Timely Delivery",
    description:
      "We value your time and ensure projects are completed on schedule.",
  },
  {
    icon: <FiLifeBuoy size={32} />,
    title: "Dedicated Support",
    description: "From start to finish, we’re here to support your journey.",
  },
];

const testimonialsData = [
  {
    quote:
      "AmeerSync’s AI expertise helped us develop a custom recommendation engine for our e-commerce store. The accuracy of predictions improved significantly, leading to a 30% increase in sales. Absolutely brilliant!",
    author: "Olivia Adams",
    company: "SmartShop",
  },
  {
    quote:
      "Their networking solutions are fantastic! We struggled with connectivity and security issues, but AmeerSync streamlined our entire infrastructure. Now, everything runs smoothly without interruptions.",
    author: "William Harris",
    company: "Enterprise Networks",
  },
  {
    quote:
      "For my Node.js project, AmeerSync provided exceptional backend development support. Their code was clean, scalable, and optimized for performance. Truly a lifesaver for developers like me!",
    author: "Ethan Walker",
    company: "DevStudio",
  },
  {
    quote:
      "Their cloud computing services helped us migrate our entire system to AWS seamlessly. The process was quick, and we now have better scalability and cost efficiency. Highly recommended!",
    author: "Charlotte Evans",
    company: "CloudServe",
  },
  {
    quote:
      "AmeerSync’s proof-reading and editing services polished my research paper to perfection. The detailed feedback and corrections improved the clarity and structure significantly. I received great feedback from my professors!",
    author: "Nathan Clark",
    company: "Academic Researcher",
  },
  {
    quote:
      "Managing email invoices was a nightmare until we found AmeerSync. Their automation service streamlined everything, reducing errors and saving us hours of manual work. Absolutely worth every penny!",
    author: "Emily White",
    company: "BizTrack",
  },
  {
    quote:
      "We needed a static website for our startup, and AmeerSync delivered a clean, modern, and ultra-fast site. Their attention to UI/UX and performance optimization was incredible. Highly satisfied!",
    author: "Lucas Turner",
    company: "Startup Solutions",
  },
  {
    quote:
      "My final year project needed expert guidance, and AmeerSync provided just that! From concept to execution, they ensured every detail was perfect. I couldn’t have achieved this success without them.",
    author: "Sophia Bennett",
    company: "University Graduate",
  },
  {
    quote:
      "Their project management expertise helped us complete our software development cycle ahead of schedule. The structured approach and real-time tracking made a huge difference. AmeerSync truly understands agile workflows!",
    author: "Benjamin Carter",
    company: "Tech Ventures",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="bg-Bg">
      <WhyChooseUsSection reasons={reasons} />
      <ContactUsSection />
      <TestimonialsSection testimonials={testimonialsData} />
    </div>
  );
};

export default memo(WhyChooseUs);
