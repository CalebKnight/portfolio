import { Project } from "../../data/interfaces";

export default function WorkDescription({ work }: { work: Project | null }) {
  if (!work) return null;

  return (
    <div className="flex flex-col lg:flex-row text-white gap-5">
      <div className="lg:w-3/5 flex flex-col gap-5 border-neutral-500/50 bg-neutral-900/50 backdrop-blur-sm border-2 p-2.5 rounded-2xl ">
        <div className="">
          <h1 className="text-cyan-200 font-bold-space-mono mb-2 text-lg">
            The Project
          </h1>
          <p className="text-xs lg:text-sm font-sans font-extralight">
            {work.content.what}
          </p>
        </div>
        <div className="">
          <h1 className="text-cyan-200 font-bold-space-mono mb-2 text-lg">
            How'd I do it?
          </h1>
          <p className="text-xs lg:text-sm font-sans font-extralight">
            {work.content.how}
          </p>
        </div>
      </div>
      <div className="lg:w-1/4 m-auto flex object-cover object-top relative">
        <img
          src={work.icon}
          alt={work.name + " icon"}
          className="w-full h-full max-h-72  mx-auto object-center z-10"
        />
        <img
          src={work.icon}
          alt={work.name + " icon"}
          className="w-full h-full max-h-72 scale-150 aspect-auto absolute inset-0 blur-3xl z-0"
        />
      </div>
    </div>
  );
}
