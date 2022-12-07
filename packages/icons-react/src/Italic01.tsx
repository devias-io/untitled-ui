import * as React from 'react';
import { SVGProps } from 'react';
const Italic01 = (props: SVGProps<SVGSVGElement>) => (
  <svg
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
      d="M19 4h-9m4 16H5M15 4 9 20"
    />
  </svg>
);
export default Italic01;
