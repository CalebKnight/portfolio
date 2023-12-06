import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";

function checkHref(href: string, location: { pathname: string }) {
  return location.pathname === href;
}

export default function StaticRouterIcon({
  Icon,
  href,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: any;
  href: string;
}) {
  const location = useLocation();

  return (
    <Link
      key={href}
      to={href}
      className={classNames(
        `group relative flex h-full w-full flex-col hover:text-black transition-colors z-50`,
        checkHref(href, location) && "text-black"
      )}
    >
      <div className="relative m-auto flex flex-col">
        <Icon className="absolute inset-0 m-auto h-12 w-12 object-cover opacity-75 blur-3xl transition-transform group-hover:scale-110" />
        <Icon className="m-auto flex h-12 w-12 group-hover:scale-110 transition-transform" />
      </div>
    </Link>
  );
}
