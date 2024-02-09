import { HomeSkillsCarousel, TextScroll } from "../../components";

export default function Profile() {
  return (
    <div className="flex flex-col lg:max-w-7xl m-auto w-full h-full">
      <div className="mr-auto sm:mt-10 relative w-full shadow-xl sm:rounded-3xl overflow-clip gap-x-5">
        <img
          src="/images/MountainPFP.jpg"
          alt="profile"
          className="w-full h-120 lg:h-150 object-cover object-center shadow-xl relative"
        />
      </div>
      <div className="w-full flex flex-col p-3.5 lg:p-5 z-10 text-white">
        <div>
          <TextScroll duration={5}>
            <h1 className="font-bold text-5xl text-white text-left mt-5 whitespace-nowrap">
              Caleb Knight
            </h1>
          </TextScroll>
          <TextScroll duration={5} delay={0.75}>
            <h2 className="text-cyan-200 text-md text-left mt-3 pl-1">
              Full Stack Web Developer
            </h2>
          </TextScroll>

          <HomeSkillsCarousel />
          <div className="flex lg:flex-row flex-col gap-x-10 mt-5 font-sans font-extralight text-neutral-200">
            <div className="mt-5 lg:max-w-1/2 w-full border-neutral-500/50 bg-neutral-900/50 backdrop-blur-sm border-2 py-3.5 rounded-2xl px-2.5">
              <h2 className="font-bold text-md text-cyan-200">Who am I?</h2>
              <p className="text-md leading-5 mt-auto">
                I am deeply immersed in the world of full-stack development,
                focusing primarily on Javascript, React, and TailwindCSS. My
                journey includes designing a captivating site for Exclusive
                Rides that truly embodies the brand, and engineering a
                comprehensive online system for Complete Face Natural
                Aesthetics, streamlining patient integration into their
                database. These projects have honed my expertise, fueling my
                pursuit of advanced client-focused software development.
              </p>
            </div>
            <div className="mt-5 lg:max-w-1/2 w-full border-neutral-500/50 bg-neutral-900/50 backdrop-blur-sm border-2 py-3.5 rounded-2xl px-2.5">
              <h2 className="font-bold text-md text-cyan-200">
                Why Partner with Me?
              </h2>
              <p className="text-md leading-5 mt-auto">
                In my role as a committed freelance web developer, I am
                dedicated to evolving and excelling in web development. My
                collaborative approach ensures a smooth integration into diverse
                team environments, while my passion for continuous learning
                brings innovative and relevant solutions to your projects. I
                provide the unique combination of enthusiasm and flexibility
                that your projects need from a developer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
