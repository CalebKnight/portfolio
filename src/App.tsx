import { Routes, Route, useLocation } from "react-router-dom";
import { Development, Profile, Projects, Work } from "./containers";
import { Background, StaticRouterIcon } from "./components";
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
    href: "/",
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
  switch (true) {
    case href == "/me":
      return "left";
    case href == "/development":
      return "center";
    case href == "/projects":
      return "right";
    case href.includes("/projects/"):
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
      className=" overflow-clip w-full min-h-screen h-full relative z-0"
    >
      <div className="fixed inset-0 w-full h-full -z-10 bg-black">
        <Background />
      </div>

      <div className="font-space-mono">
        <Routes>
          <Route path="/" Component={Profile}></Route>
          <Route path="/development" Component={Development}></Route>
          <Route path="/projects" Component={Projects}></Route>
          <Route path="/projects/*" Component={Work}></Route>
        </Routes>
      </div>

      <div className="fixed bottom-0 w-full z-50">
        <div className="relative py-1.5 w-full max-w-sm mx-auto backdrop-blur-sm rounded-full my-4 z-30 drop-shadow ring-1 ring-neutral-700 bg-neutral-900/50  overflow-clip">
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
              <div className=" w-9 h-9 lg:h-11 lg:w-11 transition-transform drop-shadow-2xl  rounded-full -z-10 shadow-xl border-2 border-neutral-700 bg-neutral-900/50 "></div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
