import React, { memo, useState } from "react";
import Images from "../../../Helper/ImagesConstant";
import { Link } from "react-router-dom";
import { FaVolumeMute } from "react-icons/fa";
import { FaVolumeUp } from "react-icons/fa";



const WhyChooseUsComponent = () => {
  const [activeTab, setActiveTab] = useState("mission");
  const [isMuted, setIsMuted] = useState(true); // State to control mute

  const tabsContent = {
    mission: {
      title: "Fingent’s Four Pillars Of Influence",
      description:
        "We believe in four pillars of influence that drive our growth. This is ingrained in everything we do. We use technology to create a better and smarter environment.",
      video:
        "https://res.cloudinary.com/dvgpgzibx/video/upload/v1738346543/VID-20250131-WA0006_jwqfop.mp4",
    },
    softwares: {
      title: "Using Cutting-Edge Softwares",
      description:
        "Our solutions are powered by the latest technologies and tools. We harness software to create smarter, scalable, and efficient environments.",
      video:
        "https://res.cloudinary.com/dvgpgzibx/video/upload/v1746439246/Welcome_to_AmeerSync_free_1_ztf5gh.mp4",
    },
    awards: {
      title: "Award-Winning Excellence",
      description:
        "Our team has been recognized for innovation and excellence. We continue to push boundaries and deliver outstanding results for our clients.",
      video:
        "https://res.cloudinary.com/dvgpgzibx/video/upload/v1737486563/WhatsApp_Video_2025-01-22_at_12.02.42_AM_wgvlx5.mp4",
    },
  };

  // Toggle mute/unmute
  const toggleMute = () => {
    setIsMuted((prevMuted) => !prevMuted);
  };

  return (
    <div className=" bg-gradient-to-b from-secondary to-container">
      <div className="text-center mb-6">
        <div className="flex justify-center items-center p-3  rounded-3xl">
          <img
            src={Images.Why_CHOOSE_US_IMG}
            alt="terms&conditions"
            className={
              " rounded mx-auto max-h-64 animate-pulse md:animate-bounce lg:animate-scroll"
            }
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold text-primary">
          Why Choose Us{" "}
        </h1>
      </div>
      <h3 className="text-lg px-3 font-semibold  text-center text-text">
        Discover the reasons why clients trust us for their projects and rely on
        our expertise.
      </h3>
      <div className="max-w-6xl mx-auto px-5">
        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 border-b border-gray-300 pb-3">
          {Object.keys(tabsContent).map((tabKey) => (
            <button
              key={tabKey}
              className={`py-2 px-4 text-base sm:text-lg font-semibold transition ${
                activeTab === tabKey
                  ? "text-primary font-semibold border-b-2 border-primary"
                  : "text-text hover:text-primary hover:border-b-2 hover:border-indigo-300"
              }`}
              onClick={() => setActiveTab(tabKey)}
            >
              {tabKey === "mission"
                ? "Company Mission"
                : tabKey === "awards"
                ? "Awards Winner"
                : "Using Softwares"}
            </button>
          ))}
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-primary text-sm uppercase font-semibold tracking-wide">
              Touching Lives Through Technology
            </h2>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mt-4 leading-tight">
              {tabsContent[activeTab].title}
            </h1>
            <p className="text-text mt-4 leading-relaxed">
              {tabsContent[activeTab].description}
            </p>
            <Link to={"/about-us"}>
              <button className="mt-6 bg-button text-white py-2 px-6 rounded-3xl hover:bg-white hover:text-button transition shadow-md">
                About Us
              </button>
            </Link>
          </div>

          <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl flex justify-center">
            <div className="absolute w-[90%] h-[90%] md:w-96 md:h-96 bg-primary rounded-full -z-10"></div>

            <div className="relative w-full h-full aspect-video overflow-hidden rounded-lg shadow-lg my-3">
              <video
                src={tabsContent[activeTab].video}
                autoPlay
                loop
                muted={isMuted} // Bind mute state here
                controls
                className="w-full h-full object-fill"
                title="Company Video"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>

            {/* Mute/Unmute Button */}
            <button
              onClick={toggleMute}
              className="absolute bottom-5 right-5 bg-primary text-white p-2 rounded-full shadow-md"
            >
              {isMuted ? (
                <span  >
<FaVolumeMute size={24} className="text-white" aria-label="Unmute"/>                </span>
              ) : (
                <span  aria-label="Mute">
                  <FaVolumeUp size={24} className="text-white" aria-label="Mute"/>  
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(WhyChooseUsComponent);
