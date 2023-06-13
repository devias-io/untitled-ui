import * as React from 'react';
import { SVGProps } from 'react';
const Recording01 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 10v4m4.5-8v12M12 3v18m4.5-15v12m4.5-8v4"
    />
  </svg>
);
export default Recording01;
