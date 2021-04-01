import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="text-gray-800 bg-gray-100 font-inter">
      {/* navbar */}
      <Navbar showNav={showNav} setShowNav={setShowNav} />
      <div className="flex flex-row justify-between h-[90vh]">
        {/* sidebar */}
        <Sidebar showNav={showNav} setShowNav={setShowNav} />
        {/* content */}
        <main className="w-full md:w-[80vw] h-auto overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 p-8 md:mb-8 mx-auto md:ml-4 md:mr-8 bg-white justify-self-end rounded-t-xl md:rounded-xl scrollbar-thumb-rounded">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
