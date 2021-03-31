import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div className="text-gray-800 bg-gray-100 font-inter">
      <Navbar />
      <div className="flex flex-row justify-between h-[90vh]">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}

export default Layout;
