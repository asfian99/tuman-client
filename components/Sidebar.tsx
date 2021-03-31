import React from "react";
import Link from "next/link";
import SideLink from "./Sidebar/SideLink";

function Sidebar() {
  return (
    <div className="w-1/5 h-full py-8 pl-8 pr-4">
      {/* menu */}
      <div className="flex flex-col items-start space-y-2">
        <SideLink title="Dashboard" slug="/" />
        <SideLink title="My Project" slug="/my-project" />
        <SideLink title="Settings" slug="/settings" />
      </div>
    </div>
  );
}

export default Sidebar;
