export default function ProjectCard({ project } ) {
  //the selected location is the current location
  return (
    <a href={project.url} class={"flex items-center p-4 space-x-6 border shadow-lg rounded-2xl bg-slate-200 "}>
      <div class="w-32 h-32 flex-shrink-0">

        <img class="w-full h-full object-cover rounded-lg" src={project.image}></img>
      </div>

      {/*object-cover */}
      <div>
        <h3 class="font-bold">{project.name}</h3>
        <p>{project.description}</p>
      </div>
    </a>
  );
}