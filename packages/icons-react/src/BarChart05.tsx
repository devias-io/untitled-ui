import * as React from 'react';
import { SVGProps } from 'react';
const BarChart05 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 17v4-4Zm12-9v13V8Zm-6 5v8-8ZM21 3v18V3Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 17v4M15 8v13m-6-8v8M21 3v18"
    />
  </svg>
);
export default BarChart05;
