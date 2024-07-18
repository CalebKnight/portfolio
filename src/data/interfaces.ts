export type Project = {
  id: string;
  name: string;
  icon: string;
  type: string;
  description: string;
  technologies: string[];
  images: Image[];
  link: string;
  content: {
    what: string;
    how: string;
  };
};

type Image = {
  src: string;
  alt: string;
};
