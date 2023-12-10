import * as React from 'react';
import { SVGProps } from 'react';
const Scissors01 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 6c0-1.6569-1.3431-3-3-3S3 4.3431 3 6s1.3431 3 3 3 3-1.3431 3-3Zm0 12c0-1.6569-1.3431-3-3-3s-3 1.3431-3 3 1.3431 3 3 3 3-1.3431 3-3Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 4 8.5 15.5m0-7L20 20M6 3c1.6569 0 3 1.3431 3 3S7.6569 9 6 9 3 7.6569 3 6s1.3431-3 3-3Zm0 12c1.6569 0 3 1.3431 3 3s-1.3431 3-3 3-3-1.3431-3-3 1.3431-3 3-3Z"
    />
  </svg>
);
export default Scissors01;
