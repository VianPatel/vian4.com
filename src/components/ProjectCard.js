import { Link } from "react-router-dom";

import MarkdownBlock from "../components/MarkdownBlock";

export default function ProjectCard({ project } ) {
  //the selected location is the current location
  return (
    <Link to={"/projects/" + project.resourceName} class={"flex items-center p-4 space-x-6 border shadow-lg rounded-2xl bg-slate-200 "}>
      <img class="w-32 h-32 flex-shrink-0 object-cover rounded-2xl" src={project.image}></img>
      
      <div>
        <h3 class="font-bold">{project.name}</h3>
        <MarkdownBlock markdown={project.description}/>
      </div>
    </Link>
  );
}