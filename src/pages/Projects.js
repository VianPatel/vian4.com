import ProjectCard from "../components/ProjectCard";

import PageContainer from "../components/PageContainer";
import TextContainer from "../components/TextContainer";

import { projects } from "../generated/Config"

export default function Projects() {
  let projectsHTML = projects.map(project => 
    <div class="pt-4 w-full">
      <ProjectCard project={project} />
    </div> 
  );
  return (
    <PageContainer>
      <h2 class="pb-4 text-center text-3xl">Projects</h2>
      <TextContainer>
        <p>Click a project for more info</p>
      </TextContainer>
      {projectsHTML}
    </PageContainer>
  );
}