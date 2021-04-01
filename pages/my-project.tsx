import React from "react";
import { motion } from "framer-motion";
import Project from "../components/Project/Project";

function MyProject() {
  return (
    <motion.article>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Project />
        <Project />
        <Project />
      </div>
    </motion.article>
  );
}

export default MyProject;
