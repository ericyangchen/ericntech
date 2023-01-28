import { SVGProps } from "react";

const StatsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={800}
    height={800}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 16V8M12 16v-5M8 16v-3"
      stroke="#000"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z"
      stroke="#000"
      strokeWidth={1.5}
    />
  </svg>
);

export default StatsIcon;
