import * as React from 'react';
import { SVGProps } from 'react';
const CornerUpRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
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
      d="M4 20v-1.4c0-3.3603 0-5.0405.654-6.3239A6 6 0 0 1 7.276 9.654C8.5596 9 10.2398 9 13.6 9H20m0 0-5 5m5-5-5-5"
    />
  </svg>
);
export default CornerUpRight;
