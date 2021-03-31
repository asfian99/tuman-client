import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div className="text-gray-800 bg-gray-100 font-inter">
      {/* navbar */}
      <Navbar />
      <div className="flex flex-row justify-between h-[90vh]">
        {/* sidebar */}
        <Sidebar />
        {/* content */}
        <div className="w-[80vw] h-auto overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 p-8 mb-8 ml-[20vw] mr-8 bg-white justify-self-end rounded-xl scrollbar-thumb-rounded">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
