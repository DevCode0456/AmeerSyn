import React from "react";
import Home from "../Pages/Home";
import About from "../Pages/AboutUs";
import Services from "../Pages/Services";
import ContactUs from "../Pages/ContactUs";
import { Route, Routes } from "react-router-dom";
import ArtificalIntelligenceServices from "../Pages/Services/AcademicAndTuteringServices/ArtificalIntelligenceServices"
import AndriodAppDevelopementServicesContent from "../Shared/Services/DevelopementServices/AndriodAppDevelopementServices/AndriodAppDevelopementServicesContent";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/services/ai" element={< ArtificalIntelligenceServices/>} />
      <Route path="/services/andrioid-App" element={< AndriodAppDevelopementServicesContent/>} />


      

    </Routes>
  );
};

export default AllRoutes;
