import * as React from 'react';
import { SVGProps } from 'react';
const CornerDownLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="#fff" fillOpacity={0.01} d="m9 10-5 5 5 5" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 4v1.4c0 3.3603 0 5.0405-.654 6.3239a5.9993 5.9993 0 0 1-2.6221 2.6221C15.4405 15 13.7603 15 10.4 15H4m0 0 5-5m-5 5 5 5"
    />
  </svg>
);
export default CornerDownLeft;
