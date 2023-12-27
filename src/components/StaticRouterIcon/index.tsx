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
    <div
      className={classNames(
        `flex h-full w-full flex-col text-white transition-colors z-50`
        // checkHref(href, location) && "text-white"
      )}
    >
      <Link
        key={href}
        to={href}
        className="relative m-auto flex flex-col group w-6 h-6 lg:h-8 lg:w-8"
      >
        {!checkHref(href, location) && (
          <div className="hidden group-hover:flex group-hover:scale-[140%] absolute inset-0 m-auto w-full h-full bg-neutral-100/10 drop-shadow-2xl -z-10 rounded-full transition-all"></div>
        )}
        <Icon className="m-auto flex w-full h-full group-hover:scale-110 transition-transform  " />
      </Link>
    </div>
  );
}
