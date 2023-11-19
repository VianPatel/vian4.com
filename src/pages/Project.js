import { useParams } from "react-router-dom";

import Error from "./Error";

import PageContainer from "../components/PageContainer";
import TextContainer from "../components/TextContainer";

import MarkdownBlock from "../components/MarkdownBlock";

import { projects } from "../Config";

function getProjectByResourceName(resourceName) {
  console.log(resourceName);
  for (let project of projects) {
    if (project.resourceName == resourceName) {
      return project;
    }
  }
  return null;
}

export default function Project() {
  console.log(useParams());
  let project = getProjectByResourceName(useParams().project_name);

  if (project == null) {
    return <Error/>
  }

  return (
    <PageContainer>
      <h2 class="pb-4 text-center text-3xl">{project.name}</h2>
      <TextContainer>
        <MarkdownBlock markdown={project.page}></MarkdownBlock>
      </TextContainer>
    </PageContainer>
  );
}


{/*

        <div class="flex flex-row items-start w-full">
          <a href="/projects" class="absolute flex flex-row">
            <span class="material-symbols-outlined">arrow_back</span>
            <p>All Projects</p>
          </a>
          <p class="text-center w-full">Project Info</p>
          

        </div>

*/}