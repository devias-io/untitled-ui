import * as React from 'react';
import { SVGProps } from 'react';
const ArrowNarrowUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 20V4m0 0-6 6m6-6 6 6"
    />
  </svg>
);
export default ArrowNarrowUp;
