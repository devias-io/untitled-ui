import * as React from 'react';
import { SVGProps } from 'react';
const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 12h14m0 0-7-7m7 7-7 7"
    />
  </svg>
);
export default ArrowRight;
