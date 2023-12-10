import * as React from 'react';
import { SVGProps } from 'react';
const AlignLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 10H3m17-4H3m17 8H3m13 4H3"
    />
  </svg>
);
export default AlignLeft;
