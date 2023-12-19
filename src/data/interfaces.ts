export type Project = {
  id: string;
  name: string;
  icon: string;
  type: string;
  description: string;
  technologies: string[];
  Images: Image[];
};

type Image = {
  src: string;
  alt: string;
};
