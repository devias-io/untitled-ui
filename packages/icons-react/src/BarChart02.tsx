import * as React from 'react';
import { SVGProps } from 'react';
const BarChart02 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
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
      d="M18 20V4M6 20v-4m6 4V10"
    />
  </svg>
);
export default BarChart02;
