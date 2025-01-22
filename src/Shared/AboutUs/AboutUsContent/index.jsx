import React, { memo } from "react";
import Accordin from "../../Accordin";
import { motion } from "framer-motion";
import ContactUsSection from "../../ContactUsSection";
import { FaWordpress, FaShopify, FaAndroid } from "react-icons/fa";
import Images from "../../../Helper/ImagesConstant";

const AboutUs = () => {
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
    <div className="py-12 px-6 sm:px-12 lg:px-24">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl  font-bold text-primary mb-4">About Us</h1>
        <p className="text-lg text-gray-600">
          We are a team of passionate professionals with years of experience in
          WordPress, Shopify, Android apps, and IT academic services. Our goal
          is to provide top-notch solutions that meet your business and academic
          needs.
        </p>
      </motion.div>

      <motion.div
        className="bg-gray-100 p-8 rounded-lg shadow-md text-center mb-12"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold text-primary mb-4">
          Empowering Your Digital Future
        </h2>
        <p className="text-gray-600">
          With expertise in cutting-edge technologies and a focus on customer
          satisfaction, we strive to transform ideas into innovative solutions.
          We work with businesses of all sizes to drive growth and success in
          the digital age.
        </p>
      </motion.div>

      <motion.div
        className="mb-12"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
          Our Company
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We specialize in providing top-tier web and mobile development
          services tailored to meet the unique needs of our clients. With a team
          of skilled developers, designers, and strategists, we aim to create
          value-driven solutions that optimize business processes and enhance
          user experiences.
        </p>
        <p className="text-gray-600 leading-relaxed">
          We are passionate about creating beautiful, user-friendly, and
          high-performance products that align with your business goals. Our
          team employs the latest technologies to deliver results that drive
          your success and provide measurable impact.
        </p>
      </motion.div>

      <div className="my-12">
        <motion.div
          className="container mx-auto rounded-2xl shadow-lg p-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              className="text-section space-y-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
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
            </motion.div>

            <motion.div
              className="image-section relative flex justify-center items-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img
                  alt="User Dummy"
                  src={Images.LOGO_IMG}
                  className="h-auto rounded-3xl bg-primary shadow"
                />
                <div className="absolute w-16 h-16 bg-yellow-400 rounded-full top-4 left-1 animate-bounce"></div>
                <div className="absolute w-10 h-10 bg-blue-300 rounded-full bottom-4 right-1 animate-bounce"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="relative overflow-hidden pb-[56.25%] h-0 rounded-3xl shadow-lg">
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-3xl"
          src="https://res.cloudinary.com/dvgpgzibx/video/upload/v1737486562/WhatsApp_Video_2025-01-22_at_12.02.41_AM_l8ckxy.mp4"
          title="YouTube Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Services Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center text-yellow-500 mb-6">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FaWordpress size={40} className="text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              WordPress Development
            </h3>
            <p className="text-gray-600 mb-4">
              We offer expert WordPress development services to create
              beautiful, functional websites tailored to your needs.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Learn More
            </button>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FaShopify size={40} className="text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Shopify Development</h3>
            <p className="text-gray-600 mb-4">
              Our team builds optimized and feature-rich Shopify stores, with an
              emphasis on user experience and conversion optimization.
            </p>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
              Learn More
            </button>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FaAndroid size={40} className="text-teal-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Android App Development
            </h3>
            <p className="text-gray-600 mb-4">
              Our Android app development services deliver scalable, secure, and
              high-performance apps that engage users.
            </p>
            <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
        <div>
          <h3 className="text-2xl font-bold text-red-500 mb-4 text-center">
            Our Mission
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to empower businesses and individuals by providing
            high-quality, custom web and mobile solutions designed to scale. We
            are committed to delivering exceptional customer service.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-blue-500 mb-4 text-center">
            Our Vision
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Our vision is to become a global leader in IT solutions and
            services, recognized for our expertise and innovation in WordPress,
            Shopify, Android app development, and IT academic services.
          </p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic text-gray-600 mb-4">
              "The WordPress website built by this team has transformed our
              online presence. They delivered on time and exceeded our
              expectations!"
            </p>
            <p className="font-bold">- Jane Doe, CEO</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic text-gray-600 mb-4">
              "The Shopify store they built has been a game-changer for my
              business. Easy to manage, professional, and mobile-optimized."
            </p>
            <p className="font-bold">- John Smith, Entrepreneur</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic text-gray-600 mb-4">
              "I approached them for an Android app, and they delivered an
              excellent product that meets all my business needs."
            </p>
            <p className="font-bold">- Sarah Lee, Business Owner</p>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden pb-[56.25%] h-0 rounded-3xl shadow-lg">
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-3xl"
          src="https://res.cloudinary.com/dvgpgzibx/video/upload/v1737486563/WhatsApp_Video_2025-01-22_at_12.02.42_AM_wgvlx5.mp4"
          width={"400%"}
          title="YouTube Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; loop"
          allowFullScreen
        ></iframe>
      </div>

      <ContactUsSection />

      <motion.div
        className="my-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Accordin faqs={faqs} />
      </motion.div>
    </div>
  );
};

export default memo(AboutUs);










// import React from "react";
// import { motion } from "framer-motion";
// import { FaTools, FaHandshake, FaUsers, FaLaptopCode, FaMobileAlt, FaRegLightbulb } from "react-icons/fa";

// const AboutUs = () => {
//   return (
//     <div>
//       {/* Header Section */}
 

//       {/* Services Section */}
//       <motion.section
//         className="services-section py-10 my-6 bg-gray-100 rounded-2xl"
//         initial={{ opacity: 0, scale: 0.8 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="container mx-auto grid md:grid-cols-3 gap-8">
//           {[
//             {
//               icon: <FaTools size={50} />,
//               title: "24/7 Support",
//               description: "Always here to assist you at any time of the day.",
//             },
//             {
//               icon: <FaHandshake size={50} />,
//               title: "Let's Work Together",
//               description:
//                 "Providing quality solutions for every IT challenge.",
//             },
//             {
//               icon: <FaUsers size={50} />,
//               title: "Team Work",
//               description: "Collaborating with you for the best outcomes.",
//             },
//             {
//               icon: <FaLaptopCode size={50} />,
//               title: "Web Development",
//               description: "Creating stunning, high-performance websites.",
//             },
//             {
//               icon: <FaMobileAlt size={50} />,
//               title: "Mobile Apps",
//               description:
//                 "Building feature-rich mobile applications tailored for you.",
//             },
//             {
//               icon: <FaRegLightbulb size={50} />,
//               title: "Innovation",
//               description: "Innovative solutions for your digital needs.",
//             },
//           ].map((service, index) => (
//             <motion.div
//               key={index}
//               className="text-center p-6 bg-white shadow-md rounded-lg"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//             >
//               <div className="text-primary mb-4">{service.icon}</div>
//               <h3 className="text-xl font-bold mb-2">{service.title}</h3>
//               <p className="text-gray-600">{service.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>
//     </div>
//   );
// };

// export default AboutUs;
