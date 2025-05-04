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
import { Link } from "react-router-dom";
import Images from "../../../Helper/ImagesConstant";
import ContactUsSection from "../../ContactUsSection";
import ServicesCard from "../../../Shared/ServicesCard";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaArrowRight, FaRocket, FaUsers, FaEnvelope } from "react-icons/fa";
import { FaCloud, FaCode, FaLock, FaServer, FaUserTie } from "react-icons/fa";
import WhyChooseUsSection from "../../PagesSectionComponents/WhyChooseUsSection";
import TestimonialsSection from "../../PagesSectionComponents/TestimonialsSection";
import { ReactTyped } from "react-typed";



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
  "Modern Elegance"
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
<section
  style={{ backgroundImage: `url(${Images.BG_GRADIENT})` }} 
  className="my-5 p-6 md:p-12  rounded-3xl"
>        <div className=" w-full text-center ">
          <h2 className="text-3xl font-semibold text-primary hover:animate-bounce">About Us</h2>
        <div className="flex justify-center w-full">
        <p className="text-lg text-gary-900 max-w-3xl text-center py-3 fadeInText hover:animate-pulse">
            We are a team of dedicated professionals passionate about delivering
            high-quality digital solutions. Our mission is to empower businesses
            with innovative and sustainable technology solutions that drive
            growth and success.
            
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
                  <h2 className="text-lg  xl:text-2xl text-primary font-bold">{feature.title}</h2>
                  <p className="text-black hover:animate-pulse text-lg font-medium">{feature.text}</p>
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
        icon: <FiCode size={50} />,
        color: "green-500",
        textColor: "white",
        title: "Web Development",
        description: "Build modern and responsive web applications.",
      },
      {
        icon: <FiMonitor size={50} />,
        textColor: "white",
        color: "orange-500",
        title: "UI/UX Design",
        description: "Design visually appealing interfaces.",
      },
      {
        icon: <FiDatabase size={50} />,
        title: "Databases",
        textColor: "white",
        color: "indigo-500",
        description: "Manage and structure data efficiently.",
      },
      {
        icon: <FiTerminal size={50} />,
        textColor: "white",
        color: "purple-500",
        title: "Assembly Language",
        description: "Develop low-level programs.",
      },
      {
        icon: <FiBook size={50} />,
        color: "blue-500",
        textColor: "white",
        title: "Assignment & Thesis Writing",
        description: "Writing services for academic projects.",
      },
      {
        icon: <FiCloud size={50} />,
        color: "teal-500",
        textColor: "white",
        title: "Cloud Computing",
        description: "Implement scalable cloud solutions.",
      },
      {
        icon: <FiShield size={50} />,
        color: "pink-500",
        textColor: "white",
        title: "Cyber Security",
        description: "Protect systems from unauthorized access.",
      },
      {
        icon: <FiSettings size={50} />,
        textColor: "white",
        color: "yellow-500",
        title: "Linux & Virtualization",
        description: "Deploy and manage virtualized environments.",
      },
      {
        icon: <FiTerminal size={50} />,
        textColor: "white",
        color: "orange-400",
        title: "Android App Development",
        description: "Create seamless Android apps.",
      },
      {
        icon: <FiSettings size={50} />,
        color: "green-400",
        textColor: "white",
        title: "Network Design (Packet Tracer)",
        description: "Design and simulate network structures.",
      },
      {
        icon: <FiShield size={50} />,
        textColor: "white",
        color: "purple-400",
        title: "Penetration Testing",
        description: "Detect vulnerabilities with thorough testing.",
      },
      {
        icon: <FiBook size={50} />,
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
          <img src={Images.SERVICES_IMG} alt="services" className={" max-h-64 max-w-64 mx-auto  rounded-full bg-Heading hover:bg-primary p-4 animate-pulse  lg:animate-scroll"} />
          </div>
          <h2 className="text-3xl text-Heading font-semibold">Our Services</h2>
          <p className="text-lg text-text">
            At AmeerSync, we deliver exceptional solutions tailored to your
            needs. Here’s an overview of the services we offer:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8 container mx-auto">
          {services.map((service, index) => (
            <div key={index} className="mb-4">
              <ServicesCard
                icon={service.icon}
                color={service.color}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </section>
    );
  };

  return (
    <div className="w-full bg-Bg ">
      <div className="relative w-full  h-screen overflow-hidden flex items-center justify-center">
        <video
          loop
          muted
          autoPlay
          className="absolute top-44 md:top-0 left-0 w-full h-full sm:object-contain md:object-cover z-0"
        >
          <source
            src="https://res.cloudinary.com/dvgpgzibx/video/upload/v1738346543/VID-20250131-WA0006_jwqfop.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="hidden md:block absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>

        <div
          className="w-full  px-6 py-2 
            md:absolute md:bottom-0 md:left-0 md:flex   md:max-w-3xl md:h-full text-text"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className=" text-text md:text-white  text-3xl sm:text-sm md:text-5xl md:max-w-1/2 font-bold">
              Elevate Your Experience with{" "}
              <ReactTyped
        className="text-primary"
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
              className="sm:text-lg text-text md:text-white"
            >
              Explore our innovative solutions crafted to enhance your journey.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-6 flex flex-col sm:flex-row items-center sm:items-start gap-4"
            >
              <Link to="/contact-us">
                <button className="px-4 py-2 bg-button hover:bg-HoverBtn hover:shadow-md hover:shadow-primary  text-white text-lg font-semibold rounded-3xl flex items-center gap-2 transition duration-300">
                  Get Started <FaRocket />
                </button>
              </Link>

              <Link to={"/need-help"}>
                <button className="px-4 py-2 bg-transparent border border-white text-white text-lg font-semibold rounded-full flex items-center gap-2 hover:bg-white hover:text-black transition duration-300">
                  Learn More <FaArrowRight />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="py-4 bottom-10 w-full flex justify-center">
        <div className="flex flex-wrap justify-center gap-6">
          {[
            {
              icon: <FaRocket />,
              title: "Innovative Solutions",
              text: "We create cutting-edge solutions to enhance your business.",
            },
            {
              icon: <FaUsers />,
              title: "Expert Team",
              text: "Our professional team is here to support your needs.",
            },
            {
              icon: <FaEnvelope />,
              title: "24/7 Support",
              text: "We are available anytime to assist you with your queries.",
            },
          ].map((item, index) => (
            <motion.div
            key={index}
            whileHover={{ scale: 1.05 }} 
            className="bg-white hover:bg-gradient-to-t hover:from-white hover:to-primary border border-primary p-6  hover:border-0 rounded-3xl hover:shadow-lg w-64 text-center duration-200"
          >
           <div className="text-5xl text-primary hover:text-secondary p-4 rounded-full mb-4">
                {item.icon}
              </div>
            <h3 className="text-xl text-primary font-semibold">
              {item.title}
            </h3>
            <p className="text-text mt-2">
              {item.text}
            </p>
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
                className="p-6 bg-gradient-to-r from-secondary to-container border border-primary rounded-3xl shadow-lg text-center transform hover:scale-105 transition hover:from-secondary hover:to-primary hover:border-0"

                whileHover={{ scale: 1.1 }}
              >
                <h3 className="text-2xl font-bold text-primary mb-3">
                  {service.category}
                </h3>
                <div className="space-y-4">
                  {service.items?.map(
                    (
                      item,
                      idx 
                    ) => (
                      <div key={idx} className="flex items-center gap-4">
                        <div className="text-primary text-3xl">{item.icon}</div>
                        <div>
                          <h4 className="text-xl text-text font-semibold">
                            {item.name}
                          </h4>
                          <p className="text-text">{item.desc}</p>
                        </div>
                      </div>
                    )
                  )}
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
