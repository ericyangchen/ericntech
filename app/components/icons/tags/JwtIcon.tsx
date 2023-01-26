import { SVGProps } from "react";

const JwtIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={101} height={101} xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>{"Group"}</title>
    <g fill="none" fillRule="evenodd">
      <path
        d="M57.8 27.2 57.7.3h-15l.1 26.9 7.5 10.3 7.5-10.3ZM42.8 73.3v27h15v-27L50.3 63l-7.5 10.3Z"
        fill="#FFF"
      />
      <path
        d="m57.8 73.3 15.8 21.8 12.1-8.8-15.8-21.8-12.1-3.9v12.7ZM42.8 27.2 26.9 5.4l-12.1 8.8L30.6 36l12.2 3.9V27.2Z"
        fill="#00F2E6"
      />
      <path
        d="M30.6 36 5 27.7.4 41.9 26 50.3l12.1-4L30.6 36ZM62.4 54.2l7.5 10.3 25.6 8.3 4.6-14.2-25.6-8.3-12.1 3.9Z"
        fill="#00B9F1"
      />
      <path
        d="m74.5 50.3 25.6-8.4-4.6-14.2L69.9 36l-7.5 10.3 12.1 4ZM26 50.3.4 58.6 5 72.8l25.6-8.3 7.5-10.3L26 50.3Z"
        fill="#D63AFF"
      />
      <path
        d="M30.6 64.5 14.8 86.3l12.1 8.8 15.9-21.8V60.6l-12.2 3.9ZM69.9 36l15.8-21.8-12.1-8.8-15.8 21.8v12.7L69.9 36Z"
        fill="#FB015B"
      />
    </g>
  </svg>
);

export default JwtIcon;
