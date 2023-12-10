import * as React from 'react';
import { SVGProps } from 'react';
const Bold01 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="transparent"
      fillOpacity={0.01}
      d="M6 4h8c2.2091 0 4 1.7909 4 4 0 2.2091-1.7909 4-4 4H6V4Zm0 8h9c2.2091 0 4 1.7909 4 4 0 2.2091-1.7909 4-4 4H6v-8Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 12h8c2.2091 0 4-1.7909 4-4 0-2.2091-1.7909-4-4-4H6v8Zm0 0h9c2.2091 0 4 1.7909 4 4 0 2.2091-1.7909 4-4 4H6v-8Z"
    />
  </svg>
);
export default Bold01;
