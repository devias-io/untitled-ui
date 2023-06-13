import * as React from 'react';
import { SVGProps } from 'react';
const ClockStopwatch = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.15 9.75v3.6l2.25 1.35m-2.25-9c-4.225 0-7.65 3.425-7.65 7.65 0 4.225 3.425 7.65 7.65 7.65 4.225 0 7.65-3.425 7.65-7.65 0-4.225-3.425-7.65-7.65-7.65Zm0 0V3m-1.8 0h3.6m5.6961 3.2328-1.35-1.35.675.675m-14.3172.675 1.35-1.35-.675.675"
    />
  </svg>
);
export default ClockStopwatch;
