import React, { memo } from "react";
import { FaWordpress, FaShopify, FaAndroid } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="py-12 px-6 sm:px-12 lg:px-24">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">About Us</h1>
        <p className="text-lg text-gray-600">
          We are a team of passionate professionals with years of experience in
          WordPress, Shopify, Android apps, and IT academic services. Our goal
          is to provide top-notch solutions that meet your business and academic
          needs.
        </p>
      </div>

      {/* Company Introduction Section */}
      <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Empowering Your Digital Future
        </h2>
        <p className="text-gray-600">
          With expertise in cutting-edge technologies and a focus on customer
          satisfaction, we strive to transform ideas into innovative solutions.
          We work with businesses of all sizes to drive growth and success in
          the digital age.
        </p>
      </div>

      {/* Company Overview */}
      <div className="mb-12">
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

      {/* Call-to-Action Section */}
      <div className="bg-blue-500 text-white p-8 rounded-lg text-center">
        <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
        <p className="text-lg mb-6">
          Contact us today to discuss your project, and let's bring your ideas
          to life with cutting-edge technology!
        </p>
        <button className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
          Get In Touch
        </button>
      </div>
    </div>
  );
};

export default memo(AboutUs);
