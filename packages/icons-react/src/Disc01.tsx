import * as React from 'react';
import { SVGProps } from 'react';
const Disc01 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 20c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 13.7c1.4912 0 2.7-1.2088 2.7-2.7S13.4912 8.3 12 8.3 9.3 9.5088 9.3 11s1.2088 2.7 2.7 2.7Z"
    />
  </svg>
);
export default Disc01;
