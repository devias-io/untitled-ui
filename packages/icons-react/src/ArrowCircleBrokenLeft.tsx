import * as React from 'react';
import { SVGProps } from 'react';
const ArrowCircleBrokenLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="#fff" fillOpacity={0.01} d="m10.9999 8.4-3.6 3.6 3.6 3.6" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.7958 16.5c-1.5561 2.6901-4.4647 4.5-7.7959 4.5-4.9706 0-9-4.0294-9-9s4.0294-9 9-9c3.3312 0 6.2398 1.8099 7.7959 4.5m-7.7959.9-3.6 3.6m0 0 3.6 3.6m-3.6-3.6H20"
    />
  </svg>
);
export default ArrowCircleBrokenLeft;
