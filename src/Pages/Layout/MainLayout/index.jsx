import React from "react";
import Topbar from "../Topbar";
 import Navbar from "../Navbar";
import Footer from "../Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="m-0 p-0 vw-[100]">
      <Topbar/>
      <Navbar />
      <main  className="m-0 vw-[100]">  
        {children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
