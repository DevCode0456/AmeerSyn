import React from "react";
import Topbar from "../../../Shared/Topbar";
// import Navbar from "../../../Shared/Navbar";
import Footer from "../../../Shared/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col  text-dark bg-black">
      <Topbar/>
      {/* <Navbar /> */}
      <main className="flex-1 ">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
