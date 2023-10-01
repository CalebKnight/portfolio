import { Routes, Route } from "react-router-dom";
import { Development, Home, Profile, Projects } from "./containers";
import { motion } from "framer-motion";
import { NavAnimated, NavStatic } from "./components";
import {
  CloudIcon,
  ComputerDesktopIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";

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

function App() {
  const [windowHeight, setWindowHeight] = useState(0);
  const [navClicked, setNavClicked] = useState(false);
  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, [window.innerHeight]);

  return (
    <div className="bg-black w-screen h-screen relative">
      <motion.div
        animate={{
          opacity: navClicked ? 1 : 0,
          transition: {
            duration: 1,
          },
        }}
      >
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/development" Component={Development}></Route>
          <Route path="/projects" Component={Projects}></Route>
          <Route path="/me" Component={Profile}></Route>
        </Routes>
      </motion.div>

      {!navClicked ? (
        <NavAnimated
          navClicked={navClicked}
          setNavClicked={setNavClicked}
          windowHeight={windowHeight}
          icons={icons}
        />
      ) : (
        <NavStatic icons={icons} />
      )}
    </div>
  );
}

export default App;
