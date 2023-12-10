import * as React from 'react';
import { SVGProps } from 'react';
const BarChart04 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 11v10-10Zm12 0v10-10ZM9 3v18V3Zm12 0v18V3Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 11v10m12-10v10M9 3v18M21 3v18"
    />
  </svg>
);
export default BarChart04;
