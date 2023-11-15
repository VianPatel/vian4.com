import ProjectCard from "../components/ProjectCard";

import { projects } from "../Config"

export default function Projects() {
  let projectsHTML = projects.map(project => 
    <div class="py-2">
      <ProjectCard project={project} />
    </div> 
  );
  return (
    <div>
      <h2 class="pb-4 text-center text-3xl">Projects</h2>
      {projectsHTML}
      {/*<div class="py-2">
        <ProjectCard project={project} />
  </div>*/}
    </div>
  );
}