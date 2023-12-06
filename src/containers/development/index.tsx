const technologies = [
  {
    name: "React",
    icon: "/images/logos/React-icon.svg",
    description: "A JavaScript library for building user interfaces",
  },
  {
    name: "Node.js",
    icon: "/images/logos/Node.js_logo.svg",
    description: "Back-end JavaScript runtime environment",
  },
  {
    name: "TypeScript",
    icon: "/images/logos/Typescript_logo_2020.svg",
    description: "A strict syntactical superset of JavaScript",
  },
  {
    name: "PostgreSQL",
    icon: "/images/logos/Postgresql_elephant.svg",
    description: "A free and open-source relational database management system",
  },
  {
    name: "Cloud Computing",
    icon: "/images/logos/digitalocean-icon.svg",
    description: "On-demand availability of computer system resources",
  },
  {
    name: "DevOps",
    icon: "/images/logos/frontend.svg",
    description:
      "A set of practices that combines software development and IT operations",
  },
  {
    name: "Hobbyist C Developer",
    icon: "/images/logos/c.svg",
    description: "A general-purpose, procedural computer programming language",
  },
  {
    name: "Python Developer",
    icon: "/images/logos/python-logo-only.svg",
    description:
      "An interpreted high-level general-purpose programming language",
  },
  {
    name: "TailwindCSS",
    icon: "/images/logos/tailwind.svg",
    description: "A utility-first CSS framework",
  },
];

export default function Development() {
  return (
    <div className="flex flex-col max-w-7xl w-full mx-auto h-full">
      <h1 className="font-bold text-white text-3xl md:text-5xl lg:text-7xl text-center w-full mt-10">
        My Technologies
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 m-auto">
        {technologies.map((technology) => (
          <div className="flex flex-col h-32 md:h-40 lg:h-52 gap-2.5 p-5">
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
          </div>
        ))}
      </div>
    </div>
  );
}
