import {
  FiUser,
  FiFlag,
  FiCheck,
  FiClock,
  FiHeart,
  FiLifeBuoy,
  FiThumbsUp,
  FiTrendingUp,
} from "react-icons/fi";
import React, { memo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Images from "../../../Helper/ImagesConstant";
import ContactUsSection from "../../ContactUsSection";
import ServicesCard from "../../../Shared/ServicesCard";
import {
  FaArrowRight,
  FaRocket,
  FaUsers,
  FaEnvelope,
  FaVolumeUp,
  FaVolumeMute,
} from "react-icons/fa";
import { FaCloud, FaCode, FaLock, FaServer, FaUserTie } from "react-icons/fa";
import WhyChooseUsSection from "../../PagesSectionComponents/WhyChooseUsSection";
import TestimonialsSection from "../../PagesSectionComponents/TestimonialsSection";
import { ReactTyped } from "react-typed";
import { AiOutlineRobot } from "react-icons/ai";

import {
  FaLinux,
  FaReact,
  FaNodeJs,
  FaShopify,
  FaWordpress,
  FaDatabase,
  FaNetworkWired,
  FaAndroid,
  FaTasks,
  FaPenFancy,
  FaBookOpen,
  FaLaptopCode,
  FaEnvelopeOpenText,
  FaShieldAlt,
  FaGlobe,
  FaProjectDiagram,
  FaChartLine,
  FaCubes,
} from "react-icons/fa";

const VideoKeyWords = [
  "Stunning Designs",
  "Timeless Aesthetics",
  "Cutting-Edge Technology",
  "Innovative Solutions",
  "Next-Level Functionality",
  "Tailored Interfaces",
  "Intuitive User Journeys",
  "Bold Visuals",
  "Flawless Performance",
  "Unforgettable Interactions",
  "Premium Craftsmanship",
  "Dynamic Features",
  "Sleek UI/UX",
  "Elegant Simplicity",
  "Responsive Brilliance",
  "Purpose-Driven Designs",
  "Pixel-Perfect Precision",
  "Seamless Integration",
  "Interactive Components",
  "Modern Elegance",
];
const mission = [
  {
    category: "Development",
    items: [
      {
        icon: <FaCode />,
        name: "Web Development",
        desc: "Modern, scalable web solutions.",
      },
      {
        icon: <FaCode />,
        name: "Shopify & WordPress",
        desc: "E-commerce & CMS expertise.",
      },
      {
        icon: <FaCode />,
        name: "Custom Programs",
        desc: "Automate your workflows.",
      },
    ],
  },
  {
    category: "Networking & Security",
    items: [
      {
        icon: <FaServer />,
        name: "Linux Administration",
        desc: "Efficient server management.",
      },
      {
        icon: <FaLock />,
        name: "Cybersecurity",
        desc: "Protect your digital assets.",
      },
      {
        icon: <FaCloud />,
        name: "Cloud Computing",
        desc: "AWS, Google Cloud, Azure.",
      },
    ],
  },
  {
    category: "IT Consultancy",
    items: [
      {
        icon: <FaUserTie />,
        name: "Project Management",
        desc: "Guiding your IT success.",
      },
      {
        icon: <FaCode />,
        name: "AI & Automation",
        desc: "Integrating smart technology.",
      },
      {
        icon: <FaCode />,
        name: "Data & Research",
        desc: "Advanced analytics & insights.",
      },
    ],
  },
];
const HomeContent = () => {
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
  const reasons = [
    {
      icon: <FiCheck size={50} />,
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
      <section className="my-5 p-6 md:p-12  rounded-3xl">
        {" "}
        <div className=" w-full text-center ">
          <h2 className="text-3xl font-semibold text-primary hover:animate-bounce">
            About Us
          </h2>
          <div className="flex justify-center w-full">
            <p className="text-lg text-text max-w-3xl text-center py-3 fadeInText hover:animate-pulse">
              We are a team of dedicated professionals passionate about
              delivering high-quality digital solutions. Our mission is to
              empower businesses with innovative and sustainable technology
              solutions that drive growth and success.
            </p>
          </div>
        </div>
        <div className="w-full  flex flex-col md:flex-row gap-8 items-stretch mt-5">
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="bg-black p-2 rounded-[2rem] shadow-xl w-full max-w-[300px] aspect-[9/16] flex items-center justify-center">
              <iframe
                className="w-full h-full rounded-[1.8rem]"
                src="https://res.cloudinary.com/dvgpgzibx/video/upload/v1737486559/WhatsApp_Video_2025-01-22_at_12.02.36_AM_l1bl9v.mp4"
                title="Company Video"
                allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="md:flex items-center md:items-start text-center md:text-left"
              >
                <div className="flex items-center justify-center  bg-gradient-to-r from-varientColor to-primary text-white rounded-full w-12 h-12 shrink-0 mr-4 hover:animate-spin">
                  {feature.icon}
                </div>
                <div>
                  <h2 className="text-lg  xl:text-2xl text-primary font-bold">
                    {feature.title}
                  </h2>
                  <p className="text-text hover:animate-pulse text-lg font-medium">
                    {feature.text}
                  </p>
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
        name: "AI",
        path: "/services/ai",
        icon: <AiOutlineRobot size={50} />,
        description: "Custom AI solutions for business automation.",
      },
      {
        name: "Linux",
        path: "/services/linux",
        icon: <FaLinux size={50} />,
        description: "Linux server setup and administration.",
      },
      {
        name: "Thesis",
        path: "/services/thesis",
        icon: <FaBookOpen size={50} />,
        description: "Thesis writing help and formatting.",
      },
      {
        name: "Node.js",
        path: "/services/node.js",
        icon: <FaNodeJs size={50} />,
        description: "Scalable backend systems using Node.js.",
      },
      {
        name: "Shopify",
        path: "/services/shopify",
        icon: <FaShopify size={50} />,
        description: "Custom Shopify stores and apps.",
      },
      {
        name: "React.js",
        path: "/services/react.js",
        icon: <FaReact size={50} />,
        description: "Modern web apps with React.js.",
      },
      {
        name: "WordPress",
        path: "/services/wordpress",
        icon: <FaWordpress size={50} />,
        description: "Custom WordPress themes and plugins.",
      },
      {
        name: "Databases",
        path: "/services/databases",
        icon: <FaDatabase size={50} />,
        description: "Database design and optimization.",
      },
      {
        name: "Networking",
        path: "/services/networking",
        icon: <FaNetworkWired size={50} />,
        description: "Network setup and security services.",
      },
      {
        name: "Android App",
        path: "/services/andriod-app",
        icon: <FaAndroid size={50} />,
        description: "Android app development and publishing.",
      },
      {
        name: "Assignments",
        path: "/services/assignments",
        icon: <FaTasks size={50} />,
        description: "Academic assignments across IT subjects.",
      },
      {
        name: "Proof Reading",
        path: "/services/proof-reading",
        icon: <FaPenFancy size={50} />,
        description: "Professional proofreading and editing.",
      },
      {
        name: "Research Paper",
        path: "/services/research-paper",
        icon: <FaBookOpen size={50} />,
        description: "Research paper writing and review.",
      },
      {
        name: "Static Website",
        path: "/services/static-website",
        icon: <FaLaptopCode size={50} />,
        description: "Fast static websites for your brand.",
      },
      {
        name: "Email Invoices",
        path: "/services/email-invoices",
        icon: <FaEnvelopeOpenText size={50} />,
        description: "Automated invoice emailing systems.",
      },
      {
        name: "Cyber Security",
        path: "/services/cyber-security",
        icon: <FaShieldAlt size={50} />,
        description: "Penetration testing and cyber audits.",
      },
      {
        name: "Cloud Computing",
        path: "/services/cloud-computing",
        icon: <FaCloud size={50} />,
        description: "AWS, Azure, GCP solutions.",
      },
      {
        name: "Custom Programs",
        path: "/services/custom-programs",
        icon: <FaCode size={50} />,
        description: "Tailored software for your needs.",
      },
      {
        name: "Web Development",
        path: "/services/web-development",
        icon: <FaGlobe size={50} />,
        description: "Full-stack web development.",
      },
      {
        name: "Final Year Project",
        path: "/services/final-year-project",
        icon: <FaProjectDiagram size={50} />,
        description: "Help with final year IT projects.",
      },
      {
        name: "Project Management",
        path: "/services/project-management",
        icon: <FaChartLine size={50} />,
        description: "Managing IT and academic projects.",
      },
      {
        name: "Data Structure & Algorithm",
        path: "/services/data-structure-algorithm",
        icon: <FaCubes size={50} />,
        description: "DSA help, code implementation, and concepts.",
      },
    ];

    return (
      <section className="my-5 p-6">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center">
            <img
              src={Images.SERVICES_IMG}
              alt="services"
              className="max-h-68 max-w-68 mx-auto rounded-full  p-4 animate-pulse lg:animate-scroll"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-4 p-4">
            Our Services
          </h2>
          <p className="text-base text-text ">
            At AmeerSync, we deliver exceptional solutions tailored to your
            needs. Here’s an overview of the services we offer:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8 container mx-auto overflow-hidden">
          {services.map((service, index) => (
            <div key={index} className="mb-4">
              <Link to={service.path}>
                <ServicesCard
                  title={service.name}
                  icon={service.icon}
                  description={service.description}
                />
              </Link>
            </div>
          ))}
        </div>
      </section>
    );
  };
  const [isMuted, setIsMuted] = useState(true); // Initially muted
  const videoRef = useRef(null); // Reference to the video element

  // Toggle mute/unmute functionality
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };
  return (
    <div className="w-full bg-Bg ">
      <div className="relative w-full h-[30vh] md:h-screen overflow-hidden flex items-center justify-center">
        {/* Video Background */}
        <video
          ref={videoRef} // Set the video reference
          loop
          muted={isMuted} // Control the mute state based on the state variable
          autoPlay
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://res.cloudinary.com/dvgpgzibx/video/upload/v1738346543/VID-20250131-WA0006_jwqfop.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for readability on larger screens */}
        <div className="hidden md:block absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/80 via-black/50 to-black/80 z-10"></div>

        {/* Mute/Unmute Button */}
        <button
          onClick={toggleMute}
          className="absolute top-5 right-5 z-20 p-3 rounded-full bg-primary text-white hover:bg-black/70 transition"
        >
          {isMuted ? <FaVolumeMute size={24} /> : <FaVolumeUp size={24} />}
        </button>

        {/* Content Section */}
        <div className="relative z-20 w-full h-auto px-4 py-10 md:absolute md:bottom-0 md:left-0 md:flex md:max-w-3xl md:h-full text-text">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full hidden md:block"
          >
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center md:text-left text-text md:text-white leading-snug">
              Elevate Your Experience with{" "}
              <ReactTyped
                className="text-Heading font-semibold"
                strings={VideoKeyWords}
                typeSpeed={100}
                backSpeed={50}
                loop
              />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-4 text-base sm:text-lg text-center md:text-left text-text md:text-white"
            >
              Explore our innovative solutions crafted to enhance your journey.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4"
            >
              <Link to="/contact-us">
                <button className="px-4 py-2 bg-button hover:bg-HoverBtn hover:shadow-md hover:shadow-primary text-white text-base sm:text-lg font-semibold rounded-3xl flex items-center gap-2 transition duration-300">
                  Get Started <FaRocket />
                </button>
              </Link>

              <Link to="/need-help">
                <button className="px-4 py-2 border border-white text-white text-base sm:text-lg font-semibold rounded-full flex items-center gap-2 hover:bg-white hover:text-black transition duration-300">
                  Learn More <FaArrowRight />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="py-12 bg-gray-100 w-full">
        <div className="flex flex-col sm:flex-row gap-6 px-6 justify-start sm:justify-center items-center">
          {[
            {
              icon: <FaRocket />,
              title: "Innovative Solutions",
              text: "We create cutting-edge solutions to enhance your business.",
              bg: "from-purple-600 to-indigo-700",
            },
            {
              icon: <FaUsers />,
              title: "Expert Team",
              text: "Our professional team is here to support your needs.",
              bg: "from-pink-600 to-red-500",
            },
            {
              icon: <FaEnvelope />,
              title: "24/7 Support",
              text: "We are available anytime to assist you with your queries.",
              bg: "from-green-500 to-emerald-600",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col  gap-4 sm:gap-6 bg-gradient-to-br p-6 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 w-full sm:w-[350px] max-w-xs"
            >
              {/* Animated Icon */}
              <motion.div
                animate={{ rotate: [15, 15, 15, 0], scale: [1, 1.2, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`text-white text-5xl p-6 rounded-full shadow-lg bg-gradient-to-br ${item.bg} transform transition duration-300`}
              >
                {item.icon}
              </motion.div>

              {/* Text */}
              <div className=" mt-4 sm:mt-0">
                <h3 className="text-lg font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 mt-2">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="w-full ">
        <div className="container mx-auto">
          <AboutUs />
        </div>
        <section className="py-16  px-6 sm:px-12 lg:px-24">
          <div className="flex justify-center items-center   rounded-3xl">
            <img
              src={Images.OUR_MISSION_IMG}
              alt="terms&conditions"
              className="rounded mx-auto max-h-64 transition duration-300 ease-in-out hover:scale-105 hover:rotate-1 hover:brightness-110 hover:saturate-150 animate__animated animate__pulse"
            />
          </div>
          <h2 className="text-4xl font-bold text-center text-Heading">
            Our Mission
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {mission?.map((service, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gradient-to-br from-secondary to-container border border-primary rounded-3xl shadow-lg text-center transform hover:scale-105 transition hover:shadow-xl"
                whileHover={{ scale: 1.1 }}
              >
                <h2 className="sm:text-2xl   font-semibold text-text mb-3">
                  {service.category}
                </h2>
                <div className="space-y-4">
                  {service.items?.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center jusitify-around gap-4"
                    >
                      <div className="text-primary text-3xl">{item.icon}</div>
                      <div>
                        <h3 className="text-xl text-text ">{item.name}</h3>
                        <p className="text-text text-md">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <ServicePage />
        <WhyChooseUsSection reasons={reasons} />
        <ContactUsSection />
      </div>

      <TestimonialsSection testimonials={testimonialsData} />
    </div>
  );
};

export default memo(HomeContent);
