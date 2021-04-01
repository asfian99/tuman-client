import React from "react";
import { MoonIcon, BellIcon, MenuAlt1Icon } from "@heroicons/react/solid";

function Navbar({ showNav, setShowNav }) {
  return (
    <header className="sticky top-0 h-[10vh] bg-gray-100 px-8">
      <div className="container flex flex-col items-start justify-center w-full h-full mx-auto my-auto md:items-center md:justify-between md:flex-row">
        {/* logo */}
        <div className="flex flex-row items-center justify-between mx-2 space-x-6">
          <MenuAlt1Icon
            className="w-8 h-8 md:hidden"
            onClick={() => setShowNav(!showNav)}
          />
          <h1 className="text-2xl font-bold text-primaryD">Tuman</h1>
        </div>

        {/* search */}
        <div className="flex-row items-center hidden space-x-4 md:flex">
          <div className="p-2 text-gray-700 bg-gray-300 rounded-lg cursor-pointer">
            <MoonIcon className="w-6 h-6" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="border-none rounded-lg focus:border-transparent focus:ring-2 focus:ring-primary"
          />
          <div className="p-2 text-gray-700 bg-gray-300 rounded-lg cursor-pointer">
            <BellIcon className="w-6 h-6" />
          </div>
        </div>

        {/* profile */}
        <div className="flex-row items-center hidden space-x-4 md:flex">
          <h3 className="text-lg font-medium">Khoirul Asfian</h3>
          <h3 className="text-lg font-medium">|</h3>
          <img src="/PIC.png" alt="picture" className="w-10 h-10 border" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
