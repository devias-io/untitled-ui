import * as React from 'react';
import { SVGProps } from 'react';
const BarChart03 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 20V4m12 16v-4m-6 4V10"
    />
  </svg>
);
export default BarChart03;
