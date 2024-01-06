export type TBrandFetchResponse = {
  name: string;
  domain: string;
  claimed: boolean;
  description: string;
  longDescription: string;
  links: {
    name: string;
    url: string;
  }[];
  logos: {
    theme: "light" | "dark";
    formats: {
      src: string;
      background: string | null;
      format: "svg" | "webp" | "png";
      height?: number | null;
      width?: number | null;
      size: number;
    }[];
    tags: string[];
    type: "logo" | "symbol" | "icon";
  }[];
  colors: {
    hex: string;
    type: "accent" | "brand";
    brightness: number;
  }[];
  fonts: {
    name: string;
    type: "title" | "body";
    origin: string;
    originId: string;
    weights: string[];
  }[];
  images: {
    formats: {
      src: string;
      background: string | null;
      format: "png";
      height: number;
      width: number;
      size: number;
    }[];
    tags: string[];
    type: "banner";
  }[];
};
