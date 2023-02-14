import { HTMLAttributes } from "react";
import NextImage from "next/image";

import { getStaticImage } from "@/app/utils/getStaticImages";
import FallbackImage from "@/app/components/icons/common/FallbackImage";

const FallbackImageCard = ({ badSrc }: { badSrc?: string }) => {
  return (
    <div className="flex flex-col items-center justify-center flex-1 p-4 bg-base-200 rounded-2xl">
      <FallbackImage />
      <div className="flex flex-wrap justify-center">
        <code>{badSrc}</code>not Found
      </div>
    </div>
  );
};

interface Props extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt?: string;
  priority?: boolean;
}
export default function Image({
  src,
  alt = "",
  priority = false,
  ...props
}: Props) {
  const staticImageSrc = getStaticImage(src);

  if (!staticImageSrc) return <FallbackImageCard badSrc={src} />;

  return (
    <div {...props} className={"my-4 " + props.className}>
      <NextImage
        className="m-0 rounded-lg"
        src={staticImageSrc}
        alt={alt}
        priority={priority}
      />
    </div>
  );
}
