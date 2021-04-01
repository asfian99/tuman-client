import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { useRouter } from "next/router";

function SideLink({ title, slug }) {
  const { pathname } = useRouter();

  return (
    <>
      <Link href={slug}>
        <h1
          className={clsx(
            "w-full px-4 py-4 font-semibold cursor-pointer rounded-xl ",
            slug === pathname
              ? "bg-primary text-white hover:text-gray-100"
              : "text-gray-500 hover:text-gray-700"
          )}
        >
          {title}
        </h1>
      </Link>
    </>
  );
}

export default SideLink;
