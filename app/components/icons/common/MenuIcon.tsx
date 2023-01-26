import { SVGProps } from "react";

const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={800}
    height={800}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 7h18M3 12h18M3 17h18"
      stroke="#292D32"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </svg>
);

export default MenuIcon;
