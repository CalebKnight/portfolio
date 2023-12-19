import { useLocation } from "react-router-dom";
import { WorkHero, WorkGallery, WorkDescription } from "../../components";
import { projects } from "../../data";
import { useEffect, useState } from "react";
import { Project } from "../../data/interfaces";

export default function Work() {
  const location = useLocation();
  const [work, setWork] = useState(null as Project | null);

  useEffect(() => {
    if (location && location.pathname) {
      const project = projects.find(
        (project) => project.id === location.pathname.split("/")[2]
      );
      if (!project) return;
      setWork(project);
    }
  }, [location]);

  return (
    <div className="max-w-7xl w-full mx-auto px-5 pt-5 lg:pt-20 flex-col flex gap-5 lg:gap-y-10">
      <WorkHero work={work} />
      <WorkDescription work={work} />
      <WorkGallery work={work} />
    </div>
  );
}
