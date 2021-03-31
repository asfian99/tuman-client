import React from "react";
import { MoonIcon, BellIcon } from "@heroicons/react/outline";

function Navbar() {
  return (
    <div className="sticky top-0 h-[10vh] bg-gray-100 px-8">
      <div className="container flex flex-row items-center justify-between h-full mx-auto">
        {/* logo */}
        <div className="flex flex-row items-center">
          <h1 className="text-2xl font-bold text-primaryD">Tuman</h1>
        </div>

        {/* search */}
        <div className="flex flex-row items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="border-none rounded-lg"
          />
          <div className="w-6 h-6 text-gray-600 cursor-pointer">
            <MoonIcon />
          </div>
          <div className="w-6 h-6 text-gray-600 cursor-pointer">
            <BellIcon />
          </div>
        </div>

        {/* profile */}
        <div className="flex flex-row items-center space-x-4">
          <h3 className="text-lg font-medium">Khoirul Asfian</h3>
          <h3 className="text-lg font-medium">|</h3>
          <img src="/PIC.png" alt="picture" className="w-10 h-10 border" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
