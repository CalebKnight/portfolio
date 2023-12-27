import { Project } from "../../data/interfaces";

export default function WorkDescription({ work }: { work: Project | null }) {
  if (!work) return null;

  return (
    <div className="flex flex-col lg:flex-row text-white gap-5">
      <div className="lg:w-3/5 flex flex-col gap-5">
        <div className="">
          <h1 className="text-cyan-200 font-bold mb-2 text-lg">The Project</h1>
          <p className="text-xs lg:text-sm font-normal">
            This Project was for a client who wanted a website for their
            business. The website was built using React and TailwindCSS. The
            website is hosted on Netlify and the domain was purchased through
            Google Domains. The website is a single page application with a
            contact form that sends an email to the client. The website is also
            responsive and works on mobile devices.
          </p>
        </div>
        <div className="">
          <h1 className="text-cyan-200 font-bold mb-2 text-lg">
            How'd I do it?
          </h1>
          <p className="text-xs lg:text-sm font-normal">
            I built this website using React and TailwindCSS. I used React to
            create a single page application that is responsive and works on
            mobile devices. I used TailwindCSS to style the website. I used
            Netlify to host the website and Google Domains to purchase the
            domain. I used Netlify's built in form handling to create a contact
            form that sends an email to the client.
          </p>
        </div>
      </div>
      <div className="lg:w-1/4 m-auto flex object-cover object-top relative">
        <img
          src={work.icon}
          alt={work.name + " icon"}
          className="w-full h-full z-10"
        />
        <img
          src={work.icon}
          alt={work.name + " icon"}
          className="w-full h-full scale-150 absolute inset-0 blur-3xl z-0"
        />
      </div>
    </div>
  );
}
