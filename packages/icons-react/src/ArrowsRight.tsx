import * as React from 'react';
import { SVGProps } from 'react';
const ArrowsRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="#fff" fillOpacity={0.01} d="m11 11 4-4-4-4m5 18 4-4-4-4" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 7h11m0 0-4 4m4-4-4-4M4 17h16m0 0-4 4m4-4-4-4"
    />
  </svg>
);
export default ArrowsRight;
