import * as React from 'react';
import { SVGProps } from 'react';
const CornerDownRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 4v1.4c0 3.3603 0 5.0405.654 6.3239a5.9996 5.9996 0 0 0 2.622 2.6221C8.5596 15 10.2398 15 13.6 15H20m0 0-5-5m5 5-5 5"
    />
  </svg>
);
export default CornerDownRight;
