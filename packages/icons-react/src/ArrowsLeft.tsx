import * as React from 'react';
import { SVGProps } from 'react';
const ArrowsLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 17H4m0 0 4 4m-4-4 4-4m12-6H9m0 0 4 4M9 7l4-4"
    />
  </svg>
);
export default ArrowsLeft;
