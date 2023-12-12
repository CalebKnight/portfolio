import { Link } from "react-router-dom";

const sampleScreenshots = [
  "https://tailwindui.com/img/templates/spotlight/detail-01.png",
  "https://tailwindui.com/img/templates/spotlight/detail-02.png",
  "https://tailwindui.com/img/templates/spotlight/detail-03.png",
];

const projects = [
  {
    id: "exclusive-rides",
    name: "Exclusive Rides",
    icon: "/images/project_logos/er.svg",
    type: "Website",
    description: "A website for a luxury car rental company.",
    categories: ["React", "TailwindCSS", "HTML", "CSS", "TypeScript"],
    Images: [
      {
        src: "/images/projects/er/er1.png",
        alt: "Exclusive Rides website screenshot",
      },
      {
        src: "/images/projects/er/er2.png",
        alt: "Exclusive Rides website screenshot",
      },
      {
        src: "/images/projects/er/er3.png",
        alt: "Exclusive Rides website screenshot",
      },
    ],
  },
  {
    id: "cloud-bnb",
    name: "Cloud BnB",
    icon: "/images/project_logos/cb.svg",
    type: "Website",
    description: "A website for a vacation rental company.",
    categories: ["React", "TailwindCSS", "Node.js", "PostgreSQL", "TypeScript"],
    Images: [
      {
        src: "/images/projects/cb/cb1.png",
        alt: "Cloud BnB website screenshot",
      },
      {
        src: "/images/projects/cb/cb2.png",
        alt: "Cloud BnB website screenshot",
      },
      {
        src: "/images/projects/cb/cb3.png",
        alt: "Cloud BnB website screenshot",
      },
    ],
  },
  {
    id: "complete-face-natural-aesthetics",
    name: "Complete Face Natural Aesthetics",
    icon: "/images/project_logos/cfna.png",
    type: "Website",
    description: "A website for a medical spa.",
    categories: ["React", "TailwindCSS", "Node.js", "PostgreSQL", "TypeScript"],
    Images: [
      {
        src: "/images/projects/cfna/cfna1.png",
        alt: "Complete Face Natural Aesthetics website screenshot",
      },
      {
        src: "/images/projects/cfna/cfna2.png",
        alt: "Complete Face Natural Aesthetics website screenshot",
      },
      {
        src: "/images/projects/cfna/cfna3.png",
        alt: "Complete Face Natural Aesthetics website screenshot",
      },
    ],
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col gap-y-12 max-w-7xl w-full mx-auto">
      {projects.map((project) => (
        <Link
          to={`/projects/${project.id}`}
          className="group relative flex flex-col p-4"
        >
          <div className="absolute inset-0 rounded-2xl border-2 border-zinc-700 bg-zinc-800 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"></div>

          <div className="relative grid grid-cols-2 gap-x-5 gap-y-5 overflow-clip rounded-xl md:grid-cols-3 xl:grid-cols-4">
            <div className="col-span-2 md:col-span-3 xl:col-span-1 xl:m-auto">
              <div className="flex flex-row items-center justify-start gap-x-5">
                <img
                  className="h-14 w-14 rounded-md"
                  src={project.icon}
                  alt={project.name}
                />
                <div>
                  <h1>
                    <span className="bg-clip-text text-2xl font-semibold text-white">
                      {project.name}
                    </span>
                  </h1>
                  <h2>
                    <span className="ml-1 text-sm text-zinc-500">
                      {project.type}
                    </span>
                  </h2>
                </div>
              </div>

              <p className="text-md mt-3 text-zinc-400">
                {project.description}
              </p>
            </div>
            {sampleScreenshots.map((image) => (
              <div className="group relative max-h-40 w-full max-w-xs">
                <div className="absolute inset-0 h-full w-full rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 opacity-5 transition-opacity group-hover:opacity-10"></div>
                <img
                  className="aspect-video h-full w-full overflow-clip rounded-lg object-cover shadow-lg ring-1 ring-slate-500 ring-opacity-20"
                  src={image}
                  alt={image}
                />
              </div>
            ))}
          </div>
          <div className="relative mt-2.5 w-full overflow-clip">
            {project.categories.map((category) => (
              <div className="my-1 mr-2 inline-block rounded-full border border-zinc-700 bg-zinc-800/80 px-3 py-0.5 text-xs text-zinc-400 sm:text-sm">
                {category}
              </div>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
}
