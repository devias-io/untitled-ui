import * as React from 'react';
import { SVGProps } from 'react';
const Expand02 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 21 21 3M3 21h6m-6 0v-6M21 3h-6m6 0v6"
    />
  </svg>
);
export default Expand02;
