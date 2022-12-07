import * as React from 'react';
import { SVGProps } from 'react';
const AlignLeft01 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="#fff" fillOpacity={0.01} d="m14 19-7-7 7-7" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 3v18m18-9H7m0 0 7 7m-7-7 7-7"
    />
  </svg>
);
export default AlignLeft01;
