import { Link } from "react-router-dom";
import { projects } from "../../data";

const ER = projects.find((project) => project.id === "exclusive-rides");
const CB = projects.find((project) => project.id === "cloud-bnb");
const CFNA = projects.find(
  (project) => project.id === "complete-face-natural-aesthetics"
);

const technologies = [
  {
    name: "React",
    icon: "/images/logos/React-icon.svg",
    description: "Library for building dynamic web interfaces",
    projects: [ER, CB, CFNA],
  },
  {
    name: "TailwindCSS",
    icon: "/images/logos/tailwind.svg",
    description: "CSS framework for rapid UI development",
    projects: [ER, CB, CFNA],
  },
  {
    name: "Node.js",
    icon: "/images/logos/Node.js_logo.svg",
    description: "Server-side JavaScript environment",
    projects: [CB, CFNA],
  },
  {
    name: "PostgreSQL",
    icon: "/images/logos/Postgresql_elephant.svg",
    description: "Advanced open-source relational database",
    projects: [CFNA],
  },
  {
    name: "TypeScript",
    icon: "/images/logos/Typescript_logo_2020.svg",
    description: "JavaScript extension for large-scale applications",
    projects: [ER, CB, CFNA],
  },
  {
    name: "HTML",
    icon: "/images/logos/html.svg",
    description: "Foundation of web content structure",
    projects: [ER, CB],
  },
  {
    name: "CSS",
    icon: "/images/logos/css.svg",
    description: "Design language for web aesthetics",
    projects: [ER, CB],
  },
  {
    name: "DevOps",
    icon: "/images/logos/frontend.svg",
    description: "Practices for software development and operations",
    projects: [CB, CFNA],
  },
  {
    name: "JavaScript",
    icon: "/images/logos/js.svg",
    description: "Scripting language for interactive web pages",
    projects: [ER, CB, CFNA],
  },
];

export default function Development() {
  return (
    <div className="flex flex-col max-w-7xl w-full mx-auto h-full px-5 lg:px-0">
      <h1 className="font-space-mono text-white text-2xl md:text-3xl lg:text-4xl text-center w-full my-5 lg:my-10">
        My Technologies
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 m-auto ">
        {technologies.map((technology) => (
          <div className="flex flex-col gap-2.5 p-5 border-2 border-neutral-500/50 rounded-xl overflow-clip bg-neutral-900">
            <div className="w-full flex flex-row gap-x-5">
              <img
                src={technology.icon}
                alt={`${technology.icon} icon`}
                className="w-12 h-12  my-auto aspect-square"
              />

              <h1 className="font-bold text-white my-auto text-lg">
                {technology.name}
              </h1>
            </div>
            <div className="flex flex-grow">
              <p className="text-neutral-100 text-xs md:text-sm font-medium">
                {technology.description}
              </p>
            </div>
            <div className="flex flex-row flex-wrap gap-x-3">
              {technology.projects.map(
                (project) =>
                  project && (
                    <Link
                      to={`/projects/${project.id}`}
                      className="w-6 h-6 lg:w-8 lg:h-8  my-auto aspect-square"
                    >
                      <img
                        className="w-full h-full object-center object-scale-down"
                        src={project.icon}
                        alt={`${project.name} icon`}
                      />
                    </Link>
                  )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
