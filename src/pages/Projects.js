export default function Projects() {
  let project = { name: "Thermal Camera Driver", image: "image", description: "Driver connecting mlx90640 thermal sensor to RPI Pico", url: "https://github.com/VianPatel/mlx90640-RPI-Pico" };
  //let project = { name: "Project Name", image: "image", description: "description description description description description description description description description description", url: "https://github.com/VianPatel/mlx90640-RPI-Pico" };
  return (
    <div>
      <h2 class="pb-4 text-3xl">Projects</h2>
      <div class="py-2">
        <ProjectCard project={project} />
      </div>
      <div class="py-2">
        <ProjectCard project={project} />
      </div>
      <div class="py-2">
        <ProjectCard project={project} />
      </div>
    </div>
  );
}

function ProjectCard({project}) {
  //the selected location is the current location
  return (
    <div class="flex items-center space-x-6 p-4 border rounded-3xl bg-slate-200">
      <img class="h-64 w-64 object-cover rounded-full" src={project.image}></img>
      <a href={project.url}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </a>
    </div>
  );
}