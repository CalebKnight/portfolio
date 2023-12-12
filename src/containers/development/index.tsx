import { Link } from "react-router-dom";

const ER = { name: "Exclusive Rides", icon: "/images/projects/ER-icon.svg" };
const CB = { name: "Cloud BnB", icon: "/images/projects/CB-icon.svg" };
const CFNA = {
  name: "Complete Face Natural Aesthetics",
  icon: "/images/projects/CFNA-icon.svg",
};

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
    projects: [CFNA],
  },
  {
    name: "Node.js",
    icon: "/images/logos/Node.js_logo.svg",
    description: "Back-end JavaScript runtime environment",
    projects: [CFNA],
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
    projects: [CB],
  },
  {
    name: "HTML",
    icon: "/path/to/HTMLLogo.svg",
    description:
      "Standard markup language for documents designed to be displayed in a web browser",
    projects: [ER, CB],
  },
  {
    name: "CSS",
    icon: "/path/to/CSSLogo.svg",
    description:
      "Style sheet language used for describing the presentation of a document written in HTML",
    projects: [ER, CB],
  },
  {
    name: "DevOps",
    icon: "/images/logos/frontend.svg",
    description:
      "A set of practices that combines software development and IT operations",
    projects: [CB],
  },
  {
    name: "JavaScript",
    icon: "/path/to/JavaScriptLogo.svg",
    description:
      "A programming language that conforms to the ECMAScript specification",
    projects: [CB],
  },
];

export default function Development() {
  return (
    <div className="flex flex-col max-w-7xl w-full mx-auto h-full px-5 lg:px-0">
      <h1 className="font-bold text-white text-3xl md:text-5xl lg:text-6xl text-center w-full my-5 lg:my-20">
        My Technologies
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-auto ">
        {technologies.map((technology) => (
          <div className="flex flex-col gap-2.5 p-5 border-2 border-zinc-50/20 rounded-3xl overflow-clip">
            <div className="w-full flex flex-row gap-x-5">
              <img
                src={technology.icon}
                alt={`${technology.icon} icon`}
                className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 my-auto aspect-square"
              />

              <h1 className="font-bold text-white my-auto text-lg md:text-xl lg:text-3xl">
                {technology.name}
              </h1>
            </div>
            <div className="flex flex-grow mt-5">
              <p className="text-white text-xs md:text-sm font-medium">
                {technology.description}
              </p>
            </div>
            <div className="flex flex-row flex-wrap">
              {technology.projects.map((project) => (
                <Link
                  to={`/projects/${project.name}`}
                  className="w-6 h-6 text-white my-auto aspect-square"
                >
                  <img src={project.icon} alt={`${project.name} icon`} />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
