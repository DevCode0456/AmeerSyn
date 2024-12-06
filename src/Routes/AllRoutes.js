import React from "react";
import Home from "../Pages/Home";
import About from "../Pages/AboutUs";
import Services from "../Pages/Services";
import { Route, Routes } from "react-router-dom";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
};

export default AllRoutes;
