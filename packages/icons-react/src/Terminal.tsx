import * as React from 'react';
import { SVGProps } from 'react';
const Terminal = (props: SVGProps<SVGSVGElement>) => (
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
      d="m4 17 6-6-6-6m8 14h8"
    />
  </svg>
);
export default Terminal;
