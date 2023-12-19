import { Project } from "../../data/interfaces";

export default function WorkGallery({ work }: { work: Project | null }) {
  if (!work) return null;
  return (
    <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
      <h1 className="text-white text-xl lg:text-3xl lg:col-span-2">
        Screenshots
      </h1>
      {work.Images.map((image, i) => (
        <div>
          <img
            key={i}
            className="rounded-lg shadow-lg"
            src={image.src}
            alt="screenshot"
          />
          <h2 className="text-white text-xs font-medium mt-1 ml-1">
            {image.alt}
          </h2>
        </div>
      ))}
    </div>
  );
}
