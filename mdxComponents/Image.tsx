import NextImage, { type StaticImageData } from "next/image";

/** static import all @/content/images for optimization */
import Example from "@/content/images/Example.jpg";

const ImageList: { [key: string]: StaticImageData } = {
  "Example.jpg": Example,
};

const FallbackImage = ({ badSrc }: { badSrc?: string }) => {
  return (
    <div className="p-[10%] bg-base-200 rounded-2xl flex justify-center items-center flex-col">
      <svg
        width={120}
        height={120}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M30 3.25H2a.75.75 0 0 0-.75.75v24c0 .022.011.041.013.063.012.103.04.198.082.284l-.002-.005a.89.89 0 0 0 .181.225l.001.001c.017.015.027.035.046.048.015.01.033.006.048.015a.723.723 0 0 0 .378.119h.001l.002.001h28.001a.75.75 0 0 0 .75-.75v-24a.75.75 0 0 0-.75-.75zm-.75 1.5v14.771l-6.625-9.937a.78.78 0 0 0-1.249-.002l-.001.002-7.545 11.318-4.361-3.488a.75.75 0 0 0-1.081.154l-.002.002-5.636 8.051V4.75zM3.44 27.25l5.716-8.164 4.375 3.5a.694.694 0 0 0 .589.154l-.004.001a.743.743 0 0 0 .507-.322l.002-.003 7.376-11.063 7.25 10.876v5.021zM8 12.75A2.75 2.75 0 1 0 5.25 10 2.754 2.754 0 0 0 8 12.75zm0-4A1.25 1.25 0 1 1 6.75 10c.001-.69.56-1.249 1.25-1.25z" />
      </svg>
      <div>
        <code>{badSrc}</code>
        <span>not Found</span>
      </div>
    </div>
  );
};

interface Props {
  src: string;
  alt?: string;
  priority?: boolean;
}

export default function Image({ src, alt = "", priority = false }: Props) {
  const staticImageSrc = ImageList[src];

  if (!staticImageSrc) return <FallbackImage badSrc={src} />;

  return (
    <div>
      <NextImage
        className="rounded-2xl"
        src={staticImageSrc}
        alt={alt}
        priority={priority}
      />
    </div>
  );
}
