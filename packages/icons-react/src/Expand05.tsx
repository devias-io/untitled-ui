import * as React from 'react';
import { SVGProps } from 'react';
const Expand05 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 3h6v6M3 9V3h6m0 18H3v-6m18 0v6h-6"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m15 9 6-6m0 0h-6m6 0v6M9 9 3 3m0 0v6m0-6h6m0 12-6 6m0 0h6m-6 0v-6m12 0 6 6m0 0v-6m0 6h-6"
    />
  </svg>
);
export default Expand05;
