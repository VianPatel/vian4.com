import { useParams } from "react-router-dom";

import Error from "./Error";

import PageContainer from "../components/PageContainer";
import TextContainer from "../components/TextContainer";

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
        <p>Project Info</p>
      </TextContainer>
    </PageContainer>
  );
}