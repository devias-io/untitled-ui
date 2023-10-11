import * as React from 'react';
import { SVGProps } from 'react';
const AlignRight01 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="#fff" fillOpacity={0.01} d="m10 5 7 7-7 7" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21V3M3 12h14m0 0-7-7m7 7-7 7"
    />
  </svg>
);
export default AlignRight01;
