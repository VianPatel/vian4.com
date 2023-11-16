import { useParams } from "react-router-dom";

import Error from "./Error";

import PageTextContainer from "../components/PageTextContainer";

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
    <div>
      <h2 class="pb-4 text-center text-3xl">{project.name}</h2>
      <PageTextContainer>
        <p>Project Info</p>
      </PageTextContainer>
    </div>
  );
}