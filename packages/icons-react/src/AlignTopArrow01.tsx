import * as React from 'react';
import { SVGProps } from 'react';
const AlignTopArrow01 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="#fff" fillOpacity={0.01} d="m5 14 7-7 7 7" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 3H3m9 18V7m0 0-7 7m7-7 7 7"
    />
  </svg>
);
export default AlignTopArrow01;
