import * as React from 'react';
import { SVGProps } from 'react';
const Underline01 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 4v7c0 3.3137-2.6863 6-6 6s-6-2.6863-6-6V4M4 21h16"
    />
  </svg>
);
export default Underline01;
