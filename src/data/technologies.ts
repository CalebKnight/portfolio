const technologies = [
  {
    name: "React",
    icon: "/images/logos/React-icon.svg",
  },
  {
    name: "TailwindCSS",
    icon: "/images/logos/tailwind.svg",
  },
  {
    name: "Node.js",
    icon: "/images/logos/Node.js_logo.svg",
  },
  {
    name: "PostgreSQL",
    icon: "/images/logos/Postgresql_elephant.svg",
  },
  {
    name: "TypeScript",
    icon: "/images/logos/Typescript_logo_2020.svg",
  },
  {
    name: "HTML",
    icon: "/images/logos/html.svg",
  },
  {
    name: "CSS",
    icon: "/images/logos/css.svg",
  },
  {
    name: "DevOps",
    icon: "/images/logos/frontend.svg",
  },
  {
    name: "JavaScript",
    icon: "/images/logos/js.svg",
  },
];

function getIcon(name: string) {
  const icon = technologies.find((tech) => tech.name === name);
  return icon?.icon;
}

export default getIcon;
