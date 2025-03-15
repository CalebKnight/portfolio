import { Link } from "react-router-dom";

import { projects } from "../../data";
import { TechnologiesCarousel } from "../../components";

export default function Projects() {
  return (
    <div className="flex flex-col gap-y-3 sm:gap-y-12 max-w-7xl w-full mx-auto lg:pt-10">
      {projects.map((project) => (
        <Link
          to={`/projects/${project.id}`}
          className="group relative flex flex-col p-4 bg-neutral-900/70 lg:rounded-2xl shadow-lg border-2 border-neutral-500/50 backdrop-blur-sm transition-transform transform hover:scale-105"
        >
          <div className="absolute inset-0 rounded-2xl border-2 border-neutral-700 bg-neutral-800 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"></div>

          <div className="relative grid grid-cols-2 gap-x-5 gap-y-5 overflow-clip rounded-xl md:grid-cols-3 xl:grid-cols-4 ">
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
                    <span className="ml-1 text-sm text-neutral-500">
                      {project.type}
                    </span>
                  </h2>
                </div>
              </div>

              <p className="text-md mt-3 text-neutral-400">
                {project.description}
              </p>
            </div>
            {project.images.map((image) => (
              <div className="group relative max-h-40 w-full max-w-xs">
                <div className="absolute inset-0 h-full w-full rounded-lg bg-gradient-to-br from-neutral-50 to-neutral-100 opacity-5 transition-opacity group-hover:opacity-10"></div>
                <img
                  className="aspect-video h-full w-full overflow-clip rounded-lg object-cover shadow-lg ring-1 ring-slate-500 ring-opacity-20"
                  src={image.src}
                  alt={image.alt}
                />
              </div>
            ))}
          </div>
          <div className="relative mt-2.5 w-full overflow-clip flex flex-row gap-x-3 max-w-fit">
            <TechnologiesCarousel work={project} />
          </div>
        </Link>
      ))}
    </div>
  );
}
