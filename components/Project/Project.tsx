import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function Project() {
  return (
    <Link href={"/my-project/pemrograman-web"}>
      <motion.figure className="flex flex-col w-full p-6 space-y-4 transition duration-150 ease-in border rounded-lg cursor-pointer bg-primaryL hover:shadow-md">
        <h1 className="text-xl font-semibold cursor-pointer text-primaryD">
          Pemrograman Web
        </h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel est
          veritatis necessitatibus iusto dolores commodi ex expedita doloremque
          molestiae quis!
        </p>
      </motion.figure>
    </Link>
  );
}

export default Project;
