import * as React from 'react';
import { SVGProps } from 'react';
const Shuffle02 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="#fff" fillOpacity={0.01} d="M21 16v5h-5m0-18h5v5" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 16v5m0 0h-5m5 0-6-6M3 3l6 6m7-6h5m0 0v5m0-5L3 21"
    />
  </svg>
);
export default Shuffle02;
