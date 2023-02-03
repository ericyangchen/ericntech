import { SVGProps } from "react";

const UbuntuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={800}
    height={800}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="#DD4814"
      fillRule="evenodd"
      d="M24 12c0 6.627-5.373 12-12 12-6.628 0-12-5.373-12-12S5.372 0 12 0c6.627 0 12 5.373 12 12ZM3.84 10.398a1.602 1.602 0 1 0 0 3.204 1.602 1.602 0 0 0 0-3.204Zm11.44 7.282a1.601 1.601 0 1 0 1.6 2.774 1.601 1.601 0 0 0-1.6-2.774ZM7.32 12c0-1.583.787-2.982 1.99-3.829L8.14 6.21a6.972 6.972 0 0 0-2.878 4.046c.506.413.829 1.041.829 1.745 0 .704-.323 1.332-.83 1.745A6.97 6.97 0 0 0 8.14 17.79l1.171-1.962A4.672 4.672 0 0 1 7.32 12ZM12 7.32a4.68 4.68 0 0 1 4.66 4.265l2.284-.033a6.938 6.938 0 0 0-2.068-4.515c-.61.23-1.313.195-1.92-.156a2.244 2.244 0 0 1-1.097-1.588 6.96 6.96 0 0 0-4.943.468l1.113 1.994A4.66 4.66 0 0 1 12 7.32Zm0 9.36a4.66 4.66 0 0 1-1.971-.435l-1.114 1.994a6.961 6.961 0 0 0 4.944.467 2.245 2.245 0 0 1 1.096-1.587 2.245 2.245 0 0 1 1.921-.156 6.938 6.938 0 0 0 2.068-4.515l-2.283-.033A4.679 4.679 0 0 1 12 16.68Zm3.279-10.36a1.601 1.601 0 1 0 1.602-2.773A1.601 1.601 0 0 0 15.28 6.32Z"
    />
  </svg>
);

export default UbuntuIcon;