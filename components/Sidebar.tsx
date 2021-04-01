import React from "react";
import clsx from "clsx";
import SideLink from "./Sidebar/SideLink";

const NavMenu = [
  {
    title: "Dashboard",
    slug: "/",
  },
  {
    title: "My Project",
    slug: "/my-project",
  },
  {
    title: "Settings",
    slug: "/settings",
  },
];

function Sidebar({ showNav, setShowNav }) {
  return (
    <nav
      className={clsx(
        "absolute w-[80vw] md:w-[20vw] h-full py-8 pl-8 pr-4 transform bg-gray-100 md:relative md:translate-x-0 transition duration-200 ease-in-out",
        showNav ? "translate-x-0" : "-translate-x-full"
      )}
    >
      {/* menu */}
      <div className="flex flex-col items-start space-y-2">
        {NavMenu.map((menu) => (
          <SideLink
            setShowNav={setShowNav}
            title={menu.title}
            slug={menu.slug}
            key={menu.slug}
          />
        ))}
      </div>
    </nav>
  );
}

export default Sidebar;
