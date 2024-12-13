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
