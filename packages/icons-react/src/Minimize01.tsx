import * as React from 'react';
import { SVGProps } from 'react';
const Minimize01 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="transparent" fillOpacity={0.01} d="M4 14h6v6m10-10h-6V4" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 14h6m0 0v6m0-6-7 7m17-11h-6m0 0V4m0 6 7-7"
    />
  </svg>
);
export default Minimize01;
