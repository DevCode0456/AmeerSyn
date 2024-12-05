import React from "react";
import Navbar from "../../../Shared/Navbar";

const MainLayout = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
  </>
);

export default MainLayout;
