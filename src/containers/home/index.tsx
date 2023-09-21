import { RouterIcon } from "../../components";
import {
  CloudIcon,
  ComputerDesktopIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";

const icons = [
  {
    name: "Caleb Knight",
    icon: UserCircleIcon,
    href: "/design",
  },
  {
    name: "My Skillset",
    icon: ComputerDesktopIcon,
    href: "/development",
  },
  {
    name: "My Projects",
    icon: CloudIcon,
    href: "/development",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row w-full max-w-7xl h-full m-auto justify-evenly items-center">
      <div className="text-sky-200 flex flex-col lg:flex-row w-full h-full">
        {icons.map(({ name, icon, href }) => (
          <RouterIcon name={name} Icon={icon} href={href} />
        ))}
      </div>
    </div>
  );
}
