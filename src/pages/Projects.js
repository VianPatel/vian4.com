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
      <div class="flex justify-center">
        <div class="flex flex-col w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12">
          {projectsHTML}
        </div>
      </div>
    </div>
  );
}