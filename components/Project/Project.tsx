import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { DotsHorizontalIcon } from "@heroicons/react/outline";

function Project() {
  return (
    <motion.figure className="flex flex-col w-full p-6 space-y-4 transition duration-100 ease-in border rounded-lg bg-primary100 hover:shadow-md">
      <div className="flex justify-between">
        <Link href={"/my-project/pemrograman-web"}>
          <h1 className="text-xl font-semibold text-gray-700 transition duration-100 ease-in cursor-pointer hover:text-primary600">
            Pemrograman Web
          </h1>
        </Link>
        <DotsHorizontalIcon className="w-5 h-5 text-gray-700 cursor-pointer" />
      </div>
      <p className="text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel est
        veritatis necessitatibus iusto dolores commodi ex expedita doloremque
        molestiae quis!
      </p>
    </motion.figure>
  );
}

export default Project;
