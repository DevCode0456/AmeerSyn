import React from "react";
import Home from "../Pages/Home";
import About from "../Pages/AboutUs";
import Services from "../Pages/Services";
import ContactUs from "../Pages/ContactUs";

import { Route, Routes } from "react-router-dom";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<ContactUs />} />

    </Routes>
  );
};

export default AllRoutes;
