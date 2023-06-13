import * as React from 'react';
import { SVGProps } from 'react';
const ReverseRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="#fff" fillOpacity={0.01} d="m16 3 4 4-4 4" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 7H10c-3.3137 0-6 2.6863-6 6s2.6863 6 6 6h10m0-12-4-4m4 4-4 4"
    />
  </svg>
);
export default ReverseRight;
