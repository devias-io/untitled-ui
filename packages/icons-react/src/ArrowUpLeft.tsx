import * as React from 'react';
import { SVGProps } from 'react';
const ArrowUpLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="#fff" fillOpacity={0.01} d="M7 17V7h10" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 17 7 7m0 0v10M7 7h10"
    />
  </svg>
);
export default ArrowUpLeft;
