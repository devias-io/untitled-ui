import * as React from 'react';
import { SVGProps } from 'react';
const ArrowNarrowDownRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="#fff" fillOpacity={0.01} d="M18 10v8h-8" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m6 6 12 12m0 0v-8m0 8h-8"
    />
  </svg>
);
export default ArrowNarrowDownRight;
