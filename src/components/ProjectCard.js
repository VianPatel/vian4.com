export default function ProjectCard({ project } ) {
  //the selected location is the current location
  return (
    <a href={project.url} class={"flex items-center space-x-6 p-4 border shadow-lg rounded-3xl bg-slate-200 "}>
      <img class="h-64 w-64 object-cover rounded-full" src={project.image}></img>
      <div>
        <h3 class="font-bold">{project.name}</h3>
        <p>{project.description}</p>
      </div>
    </a>
  );
}