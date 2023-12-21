import { Project } from "../../data/interfaces";

export default function WorkDescription({ work }: { work: Project | null }) {
  if (!work) return null;

  return (
    <div className="flex lg:flex-row flex-col text-white gap-5">
      <div className="lg:max-w-1/2 w-full border-neutral-500/50 bg-neutral-900 border-2 p-2.5 rounded-xl">
        <h1 className="text-cyan-200 font-bold mb-2 text-lg">The Project</h1>
        <p className="text-xs lg:text-sm font-normal">
          This Project was for a client who wanted a website for their business.
          The website was built using React and TailwindCSS. The website is
          hosted on Netlify and the domain was purchased through Google Domains.
          The website is a single page application with a contact form that
          sends an email to the client. The website is also responsive and works
          on mobile devices.
        </p>
      </div>
      <div className="lg:max-w-1/2 w-full border-neutral-500/50 bg-neutral-900 border-2 p-2.5 rounded-xl">
        <h1 className="text-cyan-200 font-bold mb-2 text-lg">How'd I do it?</h1>
        <p className="text-xs lg:text-sm font-normal">
          I built this website using React and TailwindCSS. I used React to
          create a single page application that is responsive and works on
          mobile devices. I used TailwindCSS to style the website. I used
          Netlify to host the website and Google Domains to purchase the domain.
          I used Netlify's built in form handling to create a contact form that
          sends an email to the client.
        </p>
      </div>
    </div>
  );
}
