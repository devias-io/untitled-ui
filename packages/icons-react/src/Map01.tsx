import * as React from 'react';
import { SVGProps } from 'react';
const Map01 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillOpacity={0.01}
      d="M3 5.6V20l6.3-3.6 6.3 3.6 5.4-3.6V2l-5.4 3.6L9.3 2 3 5.6Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.3 16.4 3 20V5.6L9.3 2m0 14.4 6.3 3.6m-6.3-3.6V2m6.3 18 5.4-3.6V2l-5.4 3.6m0 14.4V5.6m0 0L9.3 2"
    />
  </svg>
);
export default Map01;
