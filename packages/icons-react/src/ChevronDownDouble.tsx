import * as React from 'react';
import { SVGProps } from 'react';
const ChevronDownDouble = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="#fff" fillOpacity={0.01} d="m7 13 5 5 5-5M7 6l5 5 5-5" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m7 13 5 5 5-5M7 6l5 5 5-5"
    />
  </svg>
);
export default ChevronDownDouble;
