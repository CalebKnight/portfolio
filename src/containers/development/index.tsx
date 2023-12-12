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
    description: "A JavaScript library for building user interfaces",
    projects: [ER, CB, CFNA],
  },
  {
    name: "TailwindCSS",
    icon: "/images/logos/tailwind.svg",
    description: "A utility-first CSS framework",
    projects: [ER, CB, CFNA],
  },
  {
    name: "Node.js",
    icon: "/images/logos/Node.js_logo.svg",
    description: "Back-end JavaScript runtime environment",
    projects: [CB, CFNA],
  },
  {
    name: "PostgreSQL",
    icon: "/images/logos/Postgresql_elephant.svg",
    description: "A free and open-source relational database management system",
    projects: [CFNA],
  },
  {
    name: "TypeScript",
    icon: "/images/logos/Typescript_logo_2020.svg",
    description: "A strict syntactical superset of JavaScript",
    projects: [ER, CB, CFNA],
  },
  {
    name: "HTML",
    icon: "/images/logos/html.svg",
    description:
      "Standard markup language for documents designed to be displayed in a web browser",
    projects: [ER, CB],
  },
  {
    name: "CSS",
    icon: "/images/logos/css.svg",
    description:
      "Style sheet language used for describing the presentation of a document written in HTML",
    projects: [ER, CB],
  },
  {
    name: "DevOps",
    icon: "/images/logos/frontend.svg",
    description:
      "A set of practices that combines software development and IT operations",
    projects: [CB, CFNA],
  },
  {
    name: "JavaScript",
    icon: "/images/logos/js.svg",
    description:
      "A programming language that conforms to the ECMAScript specification",
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
          <div className="flex flex-col gap-2.5 p-5 border-2 border-neutral-500/50 rounded-xl overflow-clip">
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
              <p className="text-gray-200 text-xs md:text-sm font-medium">
                {technology.description}
              </p>
            </div>
            <div className="flex flex-row flex-wrap gap-x-3">
              {technology.projects.map(
                (project) =>
                  project && (
                    <Link
                      to={`/projects/${project.name}`}
                      className="w-6 h-6 lg:w-8 lg:h-8 text-white my-auto aspect-square"
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
