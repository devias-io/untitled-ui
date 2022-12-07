import * as React from 'react';
import { SVGProps } from 'react';
const ArrowNarrowDownLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="#fff" fillOpacity={0.01} d="M14 18H6v-8" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18 6 6 18m0 0h8m-8 0v-8"
    />
  </svg>
);
export default ArrowNarrowDownLeft;
