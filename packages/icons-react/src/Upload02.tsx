import * as React from 'react';
import { SVGProps } from 'react';
const Upload02 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="#fff" fillOpacity={0.01} d="m18 13-6-6-6 6" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 3H3m15 10-6-6m0 0-6 6m6-6v14"
    />
  </svg>
);
export default Upload02;
