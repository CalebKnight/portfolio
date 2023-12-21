export type Project = {
  id: string;
  name: string;
  icon: string;
  type: string;
  description: string;
  technologies: string[];
  images: Image[];
  link: string;
};

type Image = {
  src: string;
  alt: string;
};
