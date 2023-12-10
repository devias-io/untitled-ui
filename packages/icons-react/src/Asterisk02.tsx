import * as React from 'react';
import { SVGProps } from 'react';
const Asterisk02 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 4v16m6-14L6 18m14-6H4m14 6L6 6"
    />
  </svg>
);
export default Asterisk02;
