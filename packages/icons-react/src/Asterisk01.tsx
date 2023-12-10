import * as React from 'react';
import { SVGProps } from 'react';
const Asterisk01 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 3v18m6.364-15.364L5.636 18.364M21 12H3m15.364 6.364L5.636 5.636"
    />
  </svg>
);
export default Asterisk01;
