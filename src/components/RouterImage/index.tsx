import { Link } from "react-router-dom";

export default function RouterImage({
  name,
  src,
  href,
}: {
  name: string;
  src: string;
  href: string;
}) {
  return (
    <Link to={href} className="group relative flex h-full w-full flex-col">
      <div className="relative m-auto flex flex-col text-white">
        <img
          src={src}
          className="absolute inset-0 m-auto h-20 w-20 object-cover opacity-75 blur-3xl transition-transform group-hover:scale-125 md:h-24 md:w-24 xl:h-40 xl:w-40"
        />
        <img
          src={src}
          className="m-auto flex h-20 w-20 md:h-24 md:w-24 xl:h-40 xl:w-40"
        />
        <h1 className="text-2xl font-bold text-center mt-10">{name}</h1>
      </div>
    </Link>
  );
}
