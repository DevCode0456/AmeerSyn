import React from "react";
import Topbar from "../Topbar";
 import Navbar from "../Navbar";
import Footer from "../Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col   bg-white">
      <Topbar/>
      <Navbar />
      <main className=" mx-auto px-5 w-full m-0 p-0">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
