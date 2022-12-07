import * as React from 'react';
import { SVGProps } from 'react';
const ArrowBlockDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillOpacity={0.01}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 3.8c0-.28 0-.42.0545-.527a.5.5 0 0 1 .2185-.2185C9.38 3 9.52 3 9.8 3h4.4c.28 0 .42 0 .527.0545a.4996.4996 0 0 1 .2185.2185C15 3.38 15 3.52 15 3.8V14h4l-7 7-7-7h4V3.8Z"
    />
  </svg>
);
export default ArrowBlockDown;
