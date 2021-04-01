import React from "react";
import SideLink from "./Sidebar/SideLink";

function Sidebar() {
  return (
    <nav className="fixed w-[20vw] h-full py-8 pl-8 pr-4">
      {/* menu */}
      <div className="flex flex-col items-start space-y-2">
        <SideLink title="Dashboard" slug="/" />
        <SideLink title="My Project" slug="/my-project" />
        <SideLink title="Settings" slug="/settings" />
      </div>
    </nav>
  );
}

export default Sidebar;
