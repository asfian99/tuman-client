import React from "react";
import Link from "next/link";
import { ChevronDoubleRightIcon } from "@heroicons/react/outline";

function Project() {
  return (
    <Link href={"/my-project/pemrograman-web"}>
      <div className="flex flex-col w-full p-6 space-y-4 rounded-lg cursor-pointer bg-primaryL">
        <h1 className="text-xl font-semibold cursor-pointer text-primaryD">
          Pemrograman Web
        </h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel est
          veritatis necessitatibus iusto dolores commodi ex expedita doloremque
          molestiae quis!
        </p>
      </div>
    </Link>
  );
}

export default Project;
