import * as React from 'react';
import { SVGProps } from 'react';
const ClockStopwatch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="#fff" fillOpacity={0.01} d="M11.15 9.75v3.6l2.25 1.35" />
    <path
      fill="#fff"
      fillOpacity={0.01}
      d="M11.15 21c4.225 0 7.65-3.425 7.65-7.65 0-4.225-3.425-7.65-7.65-7.65-4.225 0-7.65 3.425-7.65 7.65 0 4.225 3.425 7.65 7.65 7.65ZM9.35 3h3.6-3.6Zm9.2961 3.2328-1.35-1.35.675.675m-14.3171.675 1.35-1.35-.675.675"
    />
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
