import { AnimatePresence, motion, useAnimate } from "framer-motion";

import { useState } from "react";
import classNames from "classnames";
import { easeInOut } from "framer-motion";
import { RouterIcon } from "..";

export default function NavAnimated({
  navClicked,
  setNavClicked,
  windowHeight,
  icons,
}: {
  navClicked: boolean;
  setNavClicked: (navClicked: boolean) => void;
  windowHeight: number;
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
  const [routerIconsScope, routerAnimate] = useAnimate();
  const [borderScope, borderAnimate] = useAnimate();
  const [textVisible, setTextVisible] = useState(true);
  function handleRouteClickedFirst() {
    if (navClicked) {
      return;
    }
    setTextVisible(false);
    routerAnimate(
      routerIconsScope.current,
      {
        scale: 0.33,
        y: windowHeight * 0.5 - routerIconsScope.current.offsetHeight / 2,
      },
      {
        ease: easeInOut,
        duration: 0.5,
      }
    );
    borderAnimate(
      borderScope.current,
      {
        opacity: 1,
      },
      {
        ease: easeInOut,
        duration: 1.5,
      }
    ).then(() => {
      setNavClicked(true);
    });
  }
  return (
    <div className="fixed flex w-screen min-h-screen h-full pointer-events-none top-0 left-0 bg-black">
      <AnimatePresence>
        <motion.div
          ref={routerIconsScope}
          className={classNames(
            "flex max-w-5xl w-full m-auto h-52 pointer-events-auto text-white p-5"
          )}
          onClick={handleRouteClickedFirst}
        >
          {icons.map(({ name, icon, href }) => (
            <RouterIcon
              key={name}
              name={name}
              Icon={icon}
              href={href}
              textVisible={textVisible}
            />
          ))}

          <motion.div
            initial={{
              opacity: 0,
            }}
            ref={borderScope}
            className="border-2 border-sky-50 absolute pointer-events-none inset-0 w-full h-full rounded-full"
          ></motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
