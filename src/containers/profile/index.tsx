const skills = [
  {
    name: "Designer",
    icon: "design.svg",
  },
  {
    name: "Web Developer",
    icon: "code.svg",
  },
  {
    name: "Back End Developer",
    icon: "deploy.svg",
  },
  {
    name: "Front End Developer",
    icon: "frontend.svg",
  },
  {
    name: "Database Developer",
    icon: "database.svg",
  },
];

export default function Profile() {
  return (
    <div className="flex lg:flex-row flex-col max-w-7xl m-auto w-full h-full">
      <div className="mr-auto mt-10 relative w-full bg-white shadow-xl p-5 rounded-3xl overflow-clip">
        <BgPattern />
        <img
          src="public/images/PFPWide.jpg"
          alt="profile"
          className="w-fit h-120 object-cover object-center aspect-square rounded-full ring-black ring-2 relative"
        />
        <div className="absolute inset-0 w-1/2 ml-auto flex flex-col p-5 z-10">
          <div>
            <h1 className="font-bold text-5xl text-black text-left mt-5">
              Caleb Knight
            </h1>
            <h2 className="font-serif text-black text-md text-left mt-3">
              Full Stack Web Developer
            </h2>
            <div className="flex flex-row flex-wrap gap-2.5 my-2">
              {skills.map((skill) => (
                <div className="shadow rounded-full p-2.5 items-center justify-center flex flex-row">
                  <img
                    src={`public/images/logos/${skill.icon}`}
                    alt={skill.name}
                    className="w-5 aspect-square h-5"
                  />
                  <p className="font-serif text-black text-sm text-left ml-2">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-5">
              <h2 className="font-bold">Who am I?</h2>
              <p className="text-xs">
                As a passionate web developer, I specialize in full-stack
                development with a focus on Javascript, React and TailwindCSS. I
                have contributed to various projects including Exclusive Rides,
                where I created a visually stunning website that captured the
                brand's essence. I also built a complete online portal for
                Complete Face Natural Aesthetics, allowing patients to be easily
                added to a comprehensive database. These experiences have
                sharpened my skills as a developer and allowed me to continue
                exploring the intricacies of client based software development.
              </p>
            </div>
            <div className="mt-5">
              <h2 className="font-bold">Why Partner with Me?</h2>
              <p className="text-xs">
                As a driven freelance developer, I continuously strive for
                growth and excellence in the realm of web development. My
                commitment to collaboration ensures I seamlessly integrate with
                any team dynamics, and my dedication to ongoing learning ensures
                I bring contemporary and effective solutions to the table. Your
                projects deserve a developer with passion and adaptability – and
                that's precisely what I offer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function Profile() {
//   return (
//     <div className="flex lg:flex-row flex-col max-w-7xl m-auto w-full h-full">
//       <div className="mr-auto mt-10 relative w-full overflow-clip">
//         <div className="absolute inset-0 w-full h-full rounded-3xl overflow-clip">
//           <img
//             src="images/calebnoot_Sky-blue_gradient_3D_geometric_shapes_Abstract_floati_c4720292-35ac-481a-8a93-c1b9a8fc4b81.svg"
//             alt="profile"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         <div className="absolute inset-0 w-full h-full rounded-3xl overflow-clip bg-gradient-to-r from-sky-950 to-transparent"></div>

//         <div className="h-96 flex relative">
//           <h1 className="font-bold text-7xl text-black m-5">Caleb Knight</h1>
//         </div>
//       </div>
//     </div>
//   );
// }

function BgPattern() {
  return (
    <>
      <div className="absolute inset-0 w-full h-full z-0 opacity-5">
        <svg
          id="patternId"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="a"
              patternUnits="userSpaceOnUse"
              width="20"
              height="20"
              patternTransform="scale(2) rotate(0)"
            >
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="hsla(240,6.7%,17.6%,1)"
              />
              <path
                d="M 10,-2.55e-7 V 20 Z M -1.1677362e-8,10 H 20 Z"
                stroke-width="1"
                stroke="hsla(0, 0%, 100%, 1)"
                fill="none"
              />
            </pattern>
          </defs>
          <rect
            width="800%"
            height="800%"
            transform="translate(0,0)"
            fill="url(#a)"
          />
        </svg>
      </div>
      <div className="absolute inset-0 w-full h-full z-0 bg-gradient-to-r from-transparent via-white via-60% to-white"></div>
    </>
  );
}
