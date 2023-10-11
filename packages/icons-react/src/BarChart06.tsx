import * as React from 'react';
import { SVGProps } from 'react';
const BarChart06 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 8v13V8Zm12 9v4-4ZM3 3v18V3Zm12 10v8-8Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 8v13m12-4v4M3 3v18m12-8v8"
    />
  </svg>
);
export default BarChart06;
