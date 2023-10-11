import * as React from 'react';
import { SVGProps } from 'react';
const CornerLeftDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="#fff" fillOpacity={0.01} d="m13 15-5 5-5-5" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 4h-3.4c-3.3603 0-5.0405 0-6.3239.654A6 6 0 0 0 8.654 7.276C8 8.5596 8 10.2398 8 13.6V20m0 0 5-5m-5 5-5-5"
    />
  </svg>
);
export default CornerLeftDown;
