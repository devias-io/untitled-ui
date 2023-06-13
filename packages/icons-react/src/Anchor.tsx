import * as React from 'react';
import { SVGProps } from 'react';
const Anchor = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 8.4c1.4912 0 2.7-1.2088 2.7-2.7S13.4912 3 12 3 9.3 4.2088 9.3 5.7s1.2088 2.7 2.7 2.7Zm0 0V21m0 0a9 9 0 0 1-9-9h2.7m6.3 9a9.0004 9.0004 0 0 0 6.364-2.636A9.0004 9.0004 0 0 0 21 12h-2.7"
    />
  </svg>
);
export default Anchor;
