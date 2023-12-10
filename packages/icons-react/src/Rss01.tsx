import * as React from 'react';
import { SVGProps } from 'react';
const Rss01 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#fff"
      fillOpacity={0.01}
      d="M4 11a9.0002 9.0002 0 0 1 9 9M4 4a16 16 0 0 1 16 16M5 20c.5523 0 1-.4477 1-1s-.4477-1-1-1-1 .4477-1 1 .4477 1 1 1Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 11a9.0002 9.0002 0 0 1 9 9M4 4a16 16 0 0 1 16 16M6 19c0 .5523-.4477 1-1 1s-1-.4477-1-1 .4477-1 1-1 1 .4477 1 1Z"
    />
  </svg>
);
export default Rss01;
