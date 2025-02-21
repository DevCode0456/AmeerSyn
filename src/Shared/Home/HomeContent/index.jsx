import {
  FiUser,
  FiFlag,
  FiCode,
  FiBook,
  FiCheck,
  FiClock,
  FiHeart,
  FiCloud,
  FiShield,
  FiMonitor,
  FiLifeBuoy,
  FiDatabase,
  FiTerminal,
  FiThumbsUp,
  FiSettings,
  FiTrendingUp,
} from "react-icons/fi";
import React, { memo } from "react";
import { motion } from "framer-motion";
import Images from "../../../Helper/ImagesConstant";
import { Carousel } from "react-responsive-carousel";
import ContactUsSection from "../../ContactUsSection";
import ServicesCard from "../../../Shared/ServicesCard";
import FeedbackSection from "../../../Shared/Testimonials";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { SiProbot } from "react-icons/si";
import { BsHexagon } from "react-icons/bs";
import { FaCube, FaFeatherAlt } from "react-icons/fa";
import { AiOutlineBank } from "react-icons/ai";
import { RiLightbulbFlashLine } from "react-icons/ri";
const companies = [
  { name: "Itshift", icon: <SiProbot size={40} /> },
  { name: "Spherule", icon: <BsHexagon size={40} /> },
  { name: "FeatherDev", icon: <FaFeatherAlt size={40} /> },
  { name: "GlobalBank", icon: <AiOutlineBank size={40} /> },
  { name: "Lightbox", icon: <FaCube size={40} rotate={180} /> },
  { name: "Nietzsche", icon: <RiLightbulbFlashLine size={40} /> },
];
const HomeContent = () => {
  const PageHeading = ({ headingText }) => {
    return <h2 className="text-3xl font-bold text-gray-800">{headingText}</h2>;
  };

  const SubHeading = ({ headingText }) => {
    return <p className="text-lg text-gray-600">{headingText}</p>;
  };

  const WhyChooseUs = () => {
    const reasons = [
      {
        icon: <FiCheck size={32} />,
        title: "Expertise & Experience",
        description:
          "With years of industry experience, our team delivers exceptional quality in every project.",
      },
      {
        icon: <FiUser size={50} />,
        title: "Client-Centered Approach",
        description:
          "We prioritize client satisfaction by focusing on transparent communication and understanding your goals.",
      },
      {
        icon: <FiTrendingUp size={50} />,
        title: "Innovative Solutions",
        description:
          "Our solutions are designed to bring innovation and cutting-edge technology to your business.",
      },
      {
        icon: <FiFlag size={50} />,
        title: "High-Quality Standards",
        description:
          "We ensure meticulous attention to detail, delivering quality that meets and exceeds expectations.",
      },
      {
        icon: <FiClock size={50} />,
        title: "Timely Delivery",
        description:
          "Our commitment to timelines means your projects are completed efficiently and on schedule.",
      },
      {
        icon: <FiLifeBuoy size={50} />,
        title: "Continuous Support",
        description:
          "From start to finish, we offer dedicated support to ensure your success every step of the way.",
      },
    ];

    return (
      <section className="py-10 bg-container p-2  rounded-4">
        <div className=" mx-auto py-10">
          <div className="text-center mb-4">
            <PageHeading headingText="Why Choose Us" />
            <SubHeading headingText="Discover the reasons why clients trust us for their projects and rely on our expertise." />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
            {reasons.map((reason, index) => (
              <div
                className="p-4 shadow-2xl hover:shadow-3xl rounded-3xl border-2 border-primary bg-secondary  text-center"
                key={index}
              >
                <div className="mb-4 text-center flex  justify-center items-center text-primary">
                  {reason.icon}
                </div>
                <h3 className="font-semibold text-xl mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  

  const AboutUs = () => {
    const features = [
      {
        icon: <FiTrendingUp size={24} />,
        title: "Our Vision",
        text: "To lead the digital transformation journey for businesses worldwide, ensuring seamless integration of technology to drive growth.",
      },
      {
        icon: <FiUser size={24} />,
        title: "Our Expertise",
        text: "From web development to AI-driven solutions, our team has the expertise to handle a range of digital projects with precision.",
      },
      {
        icon: <FiHeart size={24} />,
        title: "Our Values",
        text: "Integrity, innovation, and a client-centered approach are at the heart of everything we do.",
      },
      {
        icon: <FiThumbsUp size={24} />,
        title: "Why Choose Us",
        text: "Our dedication to quality and customer satisfaction makes us a reliable partner in your digital journey.",
      },
    ];
    return (
      <section className="my-20 p-6 md:p-16 bg-container text-text rounded-2xl">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold">About Us</h2>
        <p className="text-lg">
          We are a team of dedicated professionals passionate about delivering
          high-quality digital solutions. Our mission is to empower businesses
          with innovative and sustainable technology solutions that drive growth
          and success.
        </p>
      </div>
    
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-stretch mt-5">
        {/* Mobile Frame Video Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="bg-black p-2 rounded-[2rem] shadow-xl w-full max-w-[300px] aspect-[9/16] flex items-center justify-center">
            <iframe
              className="w-full h-full rounded-[1.8rem]"
              src="https://res.cloudinary.com/dvgpgzibx/video/upload/v1737486559/WhatsApp_Video_2025-01-22_at_12.02.36_AM_l1bl9v.mp4"
              title="Company Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
    
        {/* Features Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="md:flex items-center md:items-start text-center md:text-left"
            >
              <div className="flex items-center justify-center bg-primary text-secondary rounded-full w-12 h-12 shrink-0 mr-4">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold">{feature.title}</h3>
                <p className="text-text">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
    );
  };

  const ServicePage = () => {
    const services = [
      {
        icon: <FiCode size={32} />,
        color: "green-500",
        textColor: "white",
        title: "Web Development",
        description: "Build modern and responsive web applications.",
      },
      {
        icon: <FiMonitor size={32} />,
        textColor: "white",
        color: "orange-500",
        title: "UI/UX Design",
        description: "Design visually appealing interfaces.",
      },
      {
        icon: <FiDatabase size={32} />,
        title: "Databases",
        textColor: "white",
        color: "indigo-500",
        description: "Manage and structure data efficiently.",
      },
      {
        icon: <FiTerminal size={32} />,
        textColor: "white",
        color: "purple-500",
        title: "Assembly Language",
        description: "Develop low-level programs.",
      },
      {
        icon: <FiBook size={32} />,
        color: "blue-500",
        textColor: "white",
        title: "Assignment & Thesis Writing",
        description: "Writing services for academic projects.",
      },
      {
        icon: <FiCloud size={32} />,
        color: "teal-500",
        textColor: "white",
        title: "Cloud Computing",
        description: "Implement scalable cloud solutions.",
      },
      {
        icon: <FiShield size={32} />,
        color: "pink-500",
        textColor: "white",
        title: "Cyber Security",
        description: "Protect systems from unauthorized access.",
      },
      {
        icon: <FiSettings size={32} />,
        textColor: "white",
        color: "yellow-500",
        title: "Linux & Virtualization",
        description: "Deploy and manage virtualized environments.",
      },
      {
        icon: <FiTerminal size={32} />,
        textColor: "white",
        color: "orange-400",
        title: "Android App Development",
        description: "Create seamless Android apps.",
      },
      {
        icon: <FiSettings size={32} />,
        color: "green-400",
        textColor: "white",
        title: "Network Design (Packet Tracer)",
        description: "Design and simulate network structures.",
      },
      {
        icon: <FiShield size={32} />,
        textColor: "white",
        color: "purple-400",
        title: "Penetration Testing",
        description: "Detect vulnerabilities with thorough testing.",
      },
      {
        icon: <FiBook size={32} />,
        color: "blue-400",
        textColor: "white",
        title: "Content Writing & Proofreading",
        description: "Improve content quality with professional writing.",
      },
    ];

    return (
      <section className="my-5 p-6 ">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center">
            <img
              src={Images.SERVICES_IMG}
              alt="terms&conditions"
              className={" max-h-64 mx-auto"}
            />
          </div>
          <h2 className="text-3xl font-semibold">Our Services</h2>
          <p className="text-lg text-gray-600">
            At AmeerSync, we deliver exceptional solutions tailored to your
            needs. Here’s an overview of the services we offer:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          {services.map((service, index) => (
            <div key={index} className="mb-4">
              <ServicesCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                color={service.color}
              />
            </div>
          ))}
        </div>
      </section>
    );
  };

  return (
    <div className="w-full bg-gray-50 text-gray-900">
    <div className="w-full mx-auto mt-10 shadow-2xl overflow-hidden transform transition duration-500 hover:scale-y-105">
      <Carousel
        autoPlay
        infiniteLoop
        interval={4000}
        showStatus={false}
        showThumbs={false}
        className="w-full overflow-hidden p-0 m-0 "
      >
        {[Images.SERVICES_IMG, Images.USER_DUMMY_IMG2, Images.USER_DUMMY_IMG].map((image, index) => (
          <div key={index} className="relative">
            <motion.img
              src={image}
              alt={`Slide ${index + 1}`}
              className="object-cover w-full h-[500px] md:h-[600px] lg:h-[700px] brightness-90 transition duration-500 hover:brightness-100 shadow-2xl rounded-lg"
              whileHover={{ scale: 1.05 }}
            />
            <div className="absolute inset-0 flex items-end justify-center p-6  bg-gradient-to-t from-black/50 h-full to-transparent rounded-lg">
              <div className="bg-white shadow-2xl rounded-lg mb-4 p-6 w-3/4 md:w-2/3 lg:w-1/2 text-center transform transition duration-500 hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-900">Slide {index + 1} Title</h3>
                <p className="text-sm text-gray-600">This is a brief description of Slide {index + 1}.</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>

    {/* Trusted Companies Section with 3D Hover Effects */}
    <div className="w-full p-10 bg-container text-primary  shadow-2xl transform transition duration-500 hover:scale-y-105">
      <p className="text-lg md:text-xl text-center font-semibold mb-3">
        Trusted by top global companies
      </p>
      <div className="overflow-hidden ">
        <div className="flex animate-scroll gap-6 md:gap-10 items-center justify-center flex-wrap">
          {companies.map((company, index) => (
            <motion.div 
              key={index} 
              className="flex items-center gap-3 hover:text-gray-300 transition transform  duration-500 hover:scale-110"
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-4xl sm:text-5xl">{company.icon}</div>
              <p className="text-lg font-bold">{company.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

    {/* Sections */}
    <div className="container mx-auto p-6 space-y-10">
      <AboutUs />
      <ServicePage />
      <WhyChooseUs />
      <ContactUsSection />
    </div>

    {/* Client Feedback with 3D Card Effect */}
    <motion.div
      className="my-10 px-4 md:px-8 text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-6 text-gray-900">
        What Our Clients Say
      </h2>
      <motion.div 
        className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl p-6 border border-gray-200 transform transition duration-500 hover:scale-105"
        whileHover={{ scale: 1.05 }}
      >
        <FeedbackSection />
      </motion.div>
    </motion.div>
  </div>
  );
};

export default memo(HomeContent);
