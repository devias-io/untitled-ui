import * as React from 'react';
import { SVGProps } from 'react';
const SpacingWidth02 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 21V3M3 21V3m3.5 9h11m0 3V9m-11 6V9"
    />
  </svg>
);
export default SpacingWidth02;
