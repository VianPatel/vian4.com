export default function Projects() {
  
  return (
    <section>
      <h2 class="pb-4">Projects</h2>
      <ProjectCard project={project} />
      <ProjectCard project={project} />
      <ProjectCard project={project} />
    </section>
  );
}

function ProjectCard({project}) {
  //the selected location is the current location
  return (
    <div class="flex items-center space-x-6 p-4">
    <img class="h-16 w-16 object-cover rounded-full" src={project.image}></img>
    <a href={project.url}>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
    </a>
  </div>);
}