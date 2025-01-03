interface Size {
  width: number;
  height: number;
}

export interface ImageType {
  src: string;
  description: string;
  size?: Size;
}

export interface LinkType {
  src: string;
  description: string;
}

export interface Status {
  text: string;
  reason: string | null;
  color: string;
}

export interface Project {
  id: number;
  category: string;
  status: Status;
  title: string;
  description: string;
  technologies: string;
  details: string;
  takeaways: string;
  images: ImageType[] | null;
  links: LinkType[] | null;
  started: string | null;
  finished: string | null;
}
