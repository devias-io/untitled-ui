import * as React from 'react';
import { SVGProps } from 'react';
const FlipBackward = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="#fff" fillOpacity={0.01} d="M7 5 3 9l4 4" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 9h13.5c2.4853 0 4.5 2.0147 4.5 4.5S18.9853 18 16.5 18H12M3 9l4-4M3 9l4 4"
    />
  </svg>
);
export default FlipBackward;
