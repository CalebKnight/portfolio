import { Routes, Route } from "react-router-dom";
import { Home } from "./containers";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import { RouterIcon } from "./components";
import {
  CloudIcon,
  ComputerDesktopIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { easeInOut } from "framer-motion";
const icons = [
  {
    name: "Caleb Knight",
    icon: UserCircleIcon,
    href: "/design",
  },
  {
    name: "My Skillset",
    icon: ComputerDesktopIcon,
    href: "/development",
  },
  {
    name: "My Projects",
    icon: CloudIcon,
    href: "/development",
  },
];

function App() {
  const [windowHeight, setWindowHeight] = useState(0);
  const [navClicked, setNavClicked] = useState(false);
  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, [window.innerHeight]);

  const [routerIconsScope, routerAnimate] = useAnimate();
  const [borderScope, borderAnimate] = useAnimate();

  function handleRouteClickedFirst() {
    if (navClicked) {
      return;
    }
    routerAnimate(
      routerIconsScope.current,
      {
        scale: 0.5,
        y: windowHeight / 2 - 100,
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
    );

    setNavClicked(true);
  }

  return (
    <div className="bg-black w-screen h-screen relative">
      <Routes>
        <Route path="/" Component={Home}></Route>
      </Routes>
      <div className="fixed flex w-screen h-screen pointer-events-none top-0 left-0">
        <AnimatePresence>
          <motion.div
            ref={routerIconsScope}
            className={classNames(
              "flex max-w-5xl w-full m-auto h-min pointer-events-auto  text-sky-500 p-5"
            )}
            onClick={handleRouteClickedFirst}
          >
            {icons.map(({ name, icon, href }) => (
              <RouterIcon name={name} Icon={icon} href={href} />
            ))}

            <motion.div
              initial={{
                opacity: 0,
              }}
              ref={borderScope}
              className="border-2 border-sky-500 absolute inset-0 w-full h-full rounded-full"
            ></motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
