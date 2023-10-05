import classNames from "classnames";
import { StaticRouterIcon } from "..";

export default function NavStatic({
  icons,
}: {
  icons: {
    name: string;
    icon: React.ForwardRefExoticComponent<
      Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
        title?: string | undefined;
        titleId?: string | undefined;
      } & React.RefAttributes<SVGSVGElement>
    >;
    href: string;
  }[];
}) {
  return (
    <div className="fixed flex w-screen h-screen pointer-events-none top-0 left-0">
      <div
        className={classNames(
          "flex sm:flex-row flex-col max-w-5xl w-full mx-auto mt-auto h-52 pointer-events-auto text-white p-5 scale-[33%]"
        )}
      >
        {icons.map(({ name, icon, href }) => (
          <StaticRouterIcon key={name} Icon={icon} href={href} />
        ))}

        <div className="border-2 border-sky-50 absolute pointer-events-none inset-0 w-full h-full rounded-full"></div>
      </div>
    </div>
  );
}
