// Navigation Items Interface
export interface NavItem {
  name: string;
  link: string;
  icon?: JSX.Element;
}

// Grid Items Interface
export interface GridItem {
  id: number;
  title: string;
  description: string;
  className: string;
  imgClassName: string;
  titleClassName: string;
  img: string;
  spareImg: string;
}

// Projects Interface
export interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
}

// Testimonials Interface
export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

// Companies Interface
export interface Company {
  id: number;
  name: string;
  img: string;
  nameImg: string;
}

// Work Experience Interface
export interface WorkExperience {
  id: number;
  title: string;
  desc: string[];
  className: string;
  thumbnail: string;
  techStack: string[];
}

// Social Media Interface
export interface SocialMedia {
  id: number;
  img: string;
  link: string;
}

export interface Education {
  id: number;
  title: string;
  desc: string[];
}
