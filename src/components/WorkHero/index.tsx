import { Link } from "react-router-dom";
import { Project } from "../../data/interfaces";
import { TechnologiesCarousel } from "..";

export default function WorkHero({ work }: { work: Project | null }) {
  console.log(work);
  if (!work) return null;

  return (
    <div className="flex md:flex-row flex-col">
      {/* <div className="md:max-w-1/2 w-full ">
        <img className="bg-white rounded-full mx-auto" src={work.icon} />
      </div> */}
      <div className="md:max-w-1/2 w-full ">
        <h1 className="text-cyan-200 font-bold text-3xl">{work.name}</h1>
        <h2 className="text-white">{work.description}</h2>

        <Link to={work.link} className="text-sm text-cyan-200 font-semibold">
          {work.link}
        </Link>
        <div className="flex flex-row mt-1 gap-x-3 max-w-fit">
          <TechnologiesCarousel work={work} />
        </div>
      </div>
    </div>
  );
}
