const projects = [
  {
    id: "exclusive-rides",
    name: "Exclusive Rides",
    icon: "/images/project_logos/er.svg",
    type: "Website",
    description: "A website for a luxury car chauffeur rental company.",
    technologies: ["React", "TailwindCSS", "HTML", "CSS", "TypeScript"],
    images: [
      {
        src: "/images/projects/er/er1.png",
        alt: "Exclusive Rides website screenshot",
      },
      {
        src: "/images/projects/er/er2.png",
        alt: "Exclusive Rides website screenshot",
      },
      {
        src: "/images/projects/er/er3.png",
        alt: "Exclusive Rides website screenshot",
      },
    ],
    link: "https://exclusiverides.com.au",
    content: {
      what: "Sean Dunne approached me to build a website for a new startup venture he was working on. The website needed to exude sophistication and luxury to effectively promote his bespoke chauffeur service. Potential customers would be greeted by commanding professional photographs showcasing his impressive fleet of vehicles, coupled with a seamless and intuitive pathway to explore further details and secure their next Exclusive Ride.",
      how: "To bring this vision to life, I employed specialised animations using Framer Motion, implemented ingenious colour gradient techniques, and adhered to simplistic yet refined design patterns. The project was crafted utilising a React front end enhanced by TailwindCSS and complementary React libraries tailored to meet the project's requirements.",
    }
  },
  // {
  //   id: "cloud-bnb",
  //   name: "Cloud BnB",
  //   icon: "/images/project_logos/cb.svg",
  //   type: "Website",
  //   description: "A website for a vacation rental company.",
  //   technologies: ["React", "TailwindCSS", "Node.js", "TypeScript"],
  //   images: [
  //     {
  //       src: "/images/projects/cb/cb1.png",
  //       alt: "Cloud BnB website screenshot",
  //     },
  //     {
  //       src: "/images/projects/cb/cb2.png",
  //       alt: "Cloud BnB website screenshot",
  //     },
  //     {
  //       src: "/images/projects/cb/cb3.png",
  //       alt: "Cloud BnB website screenshot",
  //     },
  //   ],
  //   link: "No longer available",
  // },
  {
    id: "complete-face-natural-aesthetics",
    name: "Complete Face Natural Aesthetics",
    icon: "/images/project_logos/cfna.png",
    type: "Website",
    description: "A website for a medical spa.",
    technologies: [
      "React",
      "TailwindCSS",
      "Node.js",
      "PostgreSQL",
      "TypeScript",
    ],
    images: [
      {
        src: "/images/projects/cfna/cfna1.png",
        alt: "Complete Face Natural Aesthetics website screenshot",
      },
      {
        src: "/images/projects/cfna/cfna2.png",
        alt: "Complete Face Natural Aesthetics website screenshot",
      },
      {
        src: "/images/projects/cfna/cfna3.png",
        alt: "Complete Face Natural Aesthetics website screenshot",
      },
    ],
    link: "https://cfna.clinic",
    content: {
      what: "Davide Tonizzo required a digital platform for CFNA, his specialized botox clinic, designed to enhance client interactions and streamline administrative tasks. The focus was on creating an intuitive online experience for clients to book appointments and make inquiries, alongside a secure admin dashboard for Davide to manage the clinic's operations efficiently.",
      how: "By integrating React, Node.js, and SQL, I built a tailored full-stack solution prioritizing functionality and user-friendly design, using TailwindCSS for a straightforward yet polished interface. The platform features a patient portal for convenient service access and an admin section for Davide's secure operational oversight, implemented with robust security protocols for data integrity. This project successfully simplifies clinic workflows while improving patient engagement, reflecting CFNA's dedication to exceptional care and operational efficiency."
    }
  },
];

export default projects;
