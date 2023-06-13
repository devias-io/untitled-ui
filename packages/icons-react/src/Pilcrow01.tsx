import * as React from 'react';
import { SVGProps } from 'react';
const Pilcrow01 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillOpacity={0.01}
      d="M16 4h-5.5C8.0147 4 6 6.0147 6 8.5S8.0147 13 10.5 13H16V4Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 4v16m0-16h2m-2 0h-5.5C8.0147 4 6 6.0147 6 8.5S8.0147 13 10.5 13H16V4Zm-2 16h4"
    />
  </svg>
);
export default Pilcrow01;
