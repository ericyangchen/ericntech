import type { StaticImageData } from "next/image";

// Imports
import Test from "@/content/images/test.jpg";
import MdxThumbnail from "@/content/images/mdx-thumbnail.png";
import Macbook from "@/content/images/macbook.jpg";

const ImageList: { [key: string]: StaticImageData } = {
  "test.jpg": Test,
  "mdx-thumbnail.png": MdxThumbnail,
  "macbook.jpg": Macbook,
};

export const getStaticImage = (image: string): StaticImageData | undefined => {
  return ImageList[image];
};
