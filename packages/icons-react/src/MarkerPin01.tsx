import * as React from 'react';
import { SVGProps } from 'react';
const MarkerPin01 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="transparent"
      fillOpacity={0.01}
      d="M11.2 12.9c1.4912 0 2.7-1.2088 2.7-2.7s-1.2088-2.7-2.7-2.7-2.7 1.2088-2.7 2.7 1.2088 2.7 2.7 2.7Z"
    />
    <path
      fill="transparent"
      fillOpacity={0.01}
      d="M11.2 21c3.6-3.6 7.2-6.8236 7.2-10.8 0-3.9764-3.2236-7.2-7.2-7.2C7.2236 3 4 6.2236 4 10.2c0 3.9764 3.6 7.2 7.2 10.8Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.2 12.9c1.4912 0 2.7-1.2088 2.7-2.7s-1.2088-2.7-2.7-2.7-2.7 1.2088-2.7 2.7 1.2088 2.7 2.7 2.7Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.2 21c3.6-3.6 7.2-6.8236 7.2-10.8 0-3.9764-3.2236-7.2-7.2-7.2C7.2236 3 4 6.2236 4 10.2c0 3.9764 3.6 7.2 7.2 10.8Z"
    />
  </svg>
);
export default MarkerPin01;
