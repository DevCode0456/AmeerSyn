import React from "react";
import Navbar from "../share/Navbar";

const MainLayout = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
  </>
);

export default MainLayout;
