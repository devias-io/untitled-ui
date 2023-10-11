import * as React from 'react';
import { SVGProps } from 'react';
const Pilcrow02 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillOpacity={0.01}
      d="M17.5 4v16H14v-8H9c-2.2091 0-4-1.7909-4-4 0-2.2091 1.7909-4 4-4h8.5Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.5 4v16m2-16H9C6.7909 4 5 5.7909 5 8c0 2.2091 1.7909 4 4 4h5m0-8v16m-2 0h7.5"
    />
  </svg>
);
export default Pilcrow02;
