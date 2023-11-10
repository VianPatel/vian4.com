const projects = [
  { name: "Thermal Camera Driver", image: "image", description: "Driver connecting mlx90640 thermal sensor to RPI Pico", url: "https://github.com/VianPatel/mlx90640-RPI-Pico" },
  { name: "Thermal Camera Driver", image: "image", description: "Driver connecting mlx90640 thermal sensor to RPI Pico", url: "https://github.com/VianPatel/mlx90640-RPI-Pico" },
  { name: "Thermal Camera Driver", image: "image", description: "Driver connecting mlx90640 thermal sensor to RPI Pico", url: "https://github.com/VianPatel/mlx90640-RPI-Pico" },
]

export default function Projects() {
  let projectsHTML = projects.map(project => 
    <div class="py-2">
      <ProjectCard project={project} />
    </div> 
  );
  return (
    <div>
      <h2 class="pb-4 text-center text-3xl">Projects</h2>
      {projectsHTML}
      {/*<div class="py-2">
        <ProjectCard project={project} />
  </div>*/}
    </div>
  );
}

function ProjectCard({project}) {
  //the selected location is the current location
  return (
    <a href={project.url} class="flex items-center space-x-6 p-4 border shadow-lg rounded-3xl bg-slate-200">
      <img class="h-64 w-64 object-cover rounded-full" src={project.image}></img>
      <div>
        <h3 class="font-bold">{project.name}</h3>
        <p>{project.description}</p>
      </div>
    </a>
  );
}