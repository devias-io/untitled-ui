import * as React from 'react';
import { SVGProps } from 'react';
const BarChart01 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 20V10m-6 10V4M6 20v-6"
    />
  </svg>
);
export default BarChart01;
