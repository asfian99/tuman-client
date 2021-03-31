import React from "react";
import Project from "../components/Project/Project";

function MyProject() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}

export default MyProject;
