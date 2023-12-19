import { Project } from "../../data/interfaces";
import getIcon from "../../data/technologies";

export default function TechnologiesCarousel({
  work,
}: {
  work: Project | null;
}) {
  if (!work) return null;

  return work.technologies.map((tech: string) => (
    <div className="m-auto inline-block rounded-full text-xs text-neutral-400 sm:text-sm">
      <img className="h-6 w-6" src={getIcon(tech)} />
      <span className="ml-1 sr-only">{tech}</span>
    </div>
  ));
}
