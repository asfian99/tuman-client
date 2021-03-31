import React from "react";

function Navbar() {
  return (
    <div className="sticky top-0 border h-[10vh]">
      <div className="container flex flex-row items-center justify-between h-full mx-auto">
        <div>
          <h1>Tuman</h1>
        </div>

        <div>
          <input type="text" placeholder="search" />
        </div>

        <div>
          <h3>Khoirul Asfian</h3>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
