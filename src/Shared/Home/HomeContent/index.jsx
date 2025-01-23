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
import FlipCard from "../../../Shared/FlipCard";
import Images from "../../../Helper/ImagesConstant";
import FeedbackSection from "../../../Shared/Testimonials";
import ServicesCard from "../../../Shared/ServicesCard";
import { FaTools, FaHandshake, FaUsers } from "react-icons/fa";
import ContactUsSection from "../../ContactUsSection";
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
      <section className="py-10 bg-container  rounded-4">
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

  // const testimonialsData = [
  //   {
  //     text: "The app delivered is exactly what we envisioned. Fantastic work!",
  //     name: "Sarah Lee",
  //     role: "Startup Founder",
  //     image: "https://via.placeholder.com/150",
  //   },
  //   {
  //     text: "Excellent service and a top-quality app. Highly recommended!",
  //     name: "Mark Wilson",
  //     role: "Business Owner",
  //     image: "https://via.placeholder.com/150",
  //   },
  //   {
  //     text: "Our app launch was a huge success thanks to their expert development.",
  //     name: "Emily Davis",
  //     role: "Product Manager",
  //     image: "https://via.placeholder.com/150",
  //   },
  // ];

  const AboutOwner = () => {
    return (
      <div className="my-12">
        <div className="container mx-auto  rounded-2xl shadow-lg p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-section space-y-4">
              <h3 className="text-2xl font-bold text-gray-800">
                Hi! I am Ameer Hamza, a professional WordPress, Shopify, and
                Android app developer.
              </h3>
              <p className="text-lg text-gray-600">
                I am an IT academic expert offering a range of services:
              </p>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-gray-800">
                  Contact me for:
                </h4>
                <p>Final Year Projects, Thesis, Research Work, Assignments</p>
                <p className="text-primary">
                  WhatsApp: <strong>+923047914358</strong>
                </p>
                <p className="text-primary">
                  Email: <strong>ameerhamzabscs02@gmail.com</strong>
                </p>
                <span className="text-gray-500">
                  For any questions or concerns
                </span>
                <div>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600">
                    Get Started Now
                  </button>
                </div>
              </div>
            </div>
            <div className="image-section relative flex justify-center items-center">
              <div className="relative">
                <img
                  alt="User Dummy"
                  src={Images.USER_DUMMY_IMG}
                  className="w-100 rounded-full border-4 shadow animate-fadeIn"
                />
                <div className="absolute w-24 h-24 bg-yellow-400 rounded-full top-4 left-4 animate-bounce"></div>
                <div className="absolute w-24 h-24 bg-blue-300 rounded-full bottom-4 right-4 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>

        <section className="services-section py-10 my-6  rounded-2xl">
          <div className="container mx-auto grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaTools size={100} />,
                title: "24/7 Support",
                description:
                  "Always here to assist you at any time of the day.",
              },
              {
                icon: <FaHandshake size={100} />,
                title: "Let's Work Together",
                description:
                  "Providing quality solutions for every IT challenge.",
              },
              {
                icon: <FaUsers size={100} />,
                title: "Team Work",
                description: "Collaborating with you for the best outcomes.",
              },
            ].map((service, index) => (
              <div className="" key={index}>
                <FlipCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  color="yellow-500"
                  textColor="white"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  };

  const AboutUs = () => {
    return (
      <section className="my-20 p-6 md:p-20  bg-primary text-secondary rounded-2xl">
        <div className=" mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">About Us</h2>
          <p className="text-lg">
            We are a team of dedicated professionals passionate about delivering
            high-quality digital solutions. Our mission is to empower businesses
            with innovative and sustainable technology solutions that drive
            growth and success.
          </p>
        </div>
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-stretch mt-8">
          <div>
            <img
              alt="About Us"
              src={Images.USER_DUMMY_IMG2}
              className="rounded-2xl w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            {[
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
            ].map((feature, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="flex items-center justify-center  bg-blue-500 text-white rounded-full w-12 h-12 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold">{feature.title}</h3>
                <p className="text-blue-200">{feature.text}</p>
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
          <h2 className="text-3xl font-semibold">Our Services</h2>
          <p className="text-lg text-gray-600">
            At AmeerSync, we deliver exceptional solutions tailored to your
            needs. Here’s an overview of the services we offer:
          </p>
        </div>
        <div className="relative overflow-hidden pb-[56.25%] h-0 rounded-3xl shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-3xl"
            src="https://res.cloudinary.com/dvgpgzibx/video/upload/v1737486559/WhatsApp_Video_2025-01-22_at_12.02.36_AM_l1bl9v.mp4"
            title="YouTube Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
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
    <div className="p-5 ">
      <AboutOwner />
      <AboutUs />
      <ServicePage />
      <WhyChooseUs />
      <ContactUsSection />
      <motion.div
        className="my-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center text-3xl font-bold mb-6">
          What Our Clients Say
        </h2>
        <div className="">
        <FeedbackSection /> {/* Display the testimonials here */}
        </div>
      </motion.div>
      ;
    </div>
  );
};

export default memo(HomeContent);
