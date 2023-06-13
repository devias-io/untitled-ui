import * as React from 'react';
import { SVGProps } from 'react';
const Receipt = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 7.8c0-1.6802 0-2.5202.327-3.162a3 3 0 0 1 1.311-1.311C6.2798 3 7.1198 3 8.8 3h6.4c1.6802 0 2.5202 0 3.162.327a2.9997 2.9997 0 0 1 1.311 1.311C20 5.2798 20 6.1198 20 7.8V21l-2.75-2-2.5 2L12 19l-2.75 2-2.5-2L4 21V7.8Z"
    />
  </svg>
);
export default Receipt;
