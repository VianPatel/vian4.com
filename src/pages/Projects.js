import ProjectCard from "../components/ProjectCard";

import PageContainer from "../components/PageContainer";

import { projects } from "../Config"

export default function Projects() {
  let projectsHTML = projects.map(project => 
    <div class="pb-4 w-full">
      <ProjectCard project={project} />
    </div> 
  );
  return (
    <PageContainer>
      <h2 class="pb-4 text-center text-3xl">Projects</h2>
      {projectsHTML}
    </PageContainer>
  );
}