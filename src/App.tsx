import { Routes, Route, useLocation } from "react-router-dom";
import { Development, Profile, Projects } from "./containers";
import { StaticRouterIcon } from "./components";
import {
  CloudIcon,
  ComputerDesktopIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const icons = [
  {
    name: "Caleb Knight",
    icon: UserCircleIcon,
    href: "/me",
  },
  {
    name: "My Skillset",
    icon: ComputerDesktopIcon,
    href: "/development",
  },
  {
    name: "My Projects",
    icon: CloudIcon,
    href: "/projects",
  },
];

function getPosition(href: string) {
  switch (href) {
    case "/me":
      return "left";
    case "/development":
      return "center";
    case "/projects":
      return "right";
    default:
      return "left";
  }
}

const xVariants = {
  left: {
    x: 0,
  } as const,

  center: (navWidth: number) => ({
    x: navWidth / 3,
  }),

  right: (navWidth: number) => ({
    x: navWidth * 0.666666666666666,
  }),
};

function App() {
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  const [navWidth, setNavWidth] = useState(0);
  const [navPadding, setNavPadding] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        setNavWidth(rect.width);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    const updatePadding = () => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        if (window.innerWidth < 640) setNavPadding(rect.height + 20);
        else setNavPadding(rect.height + 40);
      }
    };
    updatePadding();
    window.addEventListener("resize", updatePadding);

    return () => window.removeEventListener("resize", updatePadding);
  }, []);

  return (
    <div
      style={
        {
          paddingBottom: `${navPadding + 30}px`,
        } as React.CSSProperties
      }
      className="bg-black overflow-clip w-full min-h-screen"
    >
      <div>
        <Routes>
          <Route path="/" Component={Profile}></Route>
          <Route path="/development" Component={Development}></Route>
          <Route path="/projects" Component={Projects}></Route>
          <Route path="/me" Component={Profile}></Route>
        </Routes>
      </div>

      <div className="fixed bottom-0 w-full z-50">
        <div className="relative py-1.5 w-full max-w-sm mx-auto backdrop-blur-sm rounded-full my-4 z-30 drop-shadow ring-1 ring-white bg-gray-950 overflow-clip">
          <div
            ref={navRef}
            className="flex flex-row relative w-full pointer-events-auto py-2 "
          >
            {icons.map(({ name, icon, href }) => (
              <StaticRouterIcon key={name} Icon={icon} href={href} />
            ))}
            <motion.div
              initial={false}
              custom={navWidth}
              variants={xVariants}
              animate={getPosition(location.pathname)}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute inset-0 w-1/3 flex justify-center items-center pointer-events-none"
            >
              <div className=" w-9 h-9 lg:h-11 lg:w-11 transition-transform drop-shadow-2xl  rounded-full -z-10 shadow-xl border-2 border-white bg-gray-800"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
