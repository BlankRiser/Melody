import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
// import Sidebar from "components/Navbar/Sidebar";

import React from "react";
const LayoutWrapper = ({ children }) => {
  return (
    <>
      {/* <Sidebar>{children}</Sidebar> */}
      <div className="h-screen">
        <Navbar />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default LayoutWrapper;
