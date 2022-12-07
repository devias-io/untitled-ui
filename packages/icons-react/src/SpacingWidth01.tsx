import * as React from 'react';
import { SVGProps } from 'react';
const SpacingWidth01 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="#fff" fillOpacity={0.01} d="m16 9 2 3-2 3M8 9l-2 3 2 3" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 12h12M6 12l2-3m-2 3 2 3m10-3-2-3m2 3-2 3m5 6V3M3 21V3"
    />
  </svg>
);
export default SpacingWidth01;
