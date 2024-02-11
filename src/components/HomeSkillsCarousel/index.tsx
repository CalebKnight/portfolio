import { motion } from "framer-motion";

const skills = [
  {
    name: "Designer",
    icon: "design.svg",
  },
  {
    name: "Website Development",
    icon: "code.svg",
  },
  {
    name: "Back End Systems",
    icon: "deploy.svg",
  },
  {
    name: "Front End Design",
    icon: "frontend.svg",
  },
  {
    name: "Databases",
    icon: "database.svg",
  },
];

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: (idx: number) => {
    return {
      opacity: 1,
      transition: {
        delay: idx * 0.2 + 2,
        duration: 0.2,
      },
    };
  },
};

export default function HomeSkillsCarousel() {
  return (
    <motion.div className="flex flex-row flex-wrap gap-2.5 my-2 lg:my-5 text-white">
      {skills.map((skill, idx) => (
        <motion.div
          key={idx}
          custom={idx}
          variants={variants}
          initial="hidden"
          animate="visible"
          className="shadow rounded-full bg-neutral-900/50 backdrop-blur-sm border-neutral-500/50 border-2 p-2.5 items-center justify-center flex flex-row"
        >
          <img
            src={`images/logos/${skill.icon}`}
            alt={skill.name}
            className="w-4 lg:w-5 aspect-square h-4 lg:h-5"
          />
          <p className=" text-xs lg:text-sm text-left ml-1 lg:ml-2">
            {skill.name}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
