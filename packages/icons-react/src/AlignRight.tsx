import * as React from 'react';
import { SVGProps } from 'react';
const AlignRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
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
      d="M21 10H8m13-4H4m17 8H4m17 4H8"
    />
  </svg>
);
export default AlignRight;
