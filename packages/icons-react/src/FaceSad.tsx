import * as React from 'react';
import { SVGProps } from 'react';
const FaceSad = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.6 14.6s-1.35-1.8-3.6-1.8-3.6 1.8-3.6 1.8m8.1-6.084c-.3555.4365-.8415.684-1.35.684-.5085 0-.981-.2475-1.35-.684m-3.6 0c-.3555.4365-.8415.684-1.35.684-.5085 0-.981-.2475-1.35-.684M21 11c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Z"
    />
  </svg>
);
export default FaceSad;
