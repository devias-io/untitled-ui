import * as React from 'react';
import { SVGProps } from 'react';
const ChromeCast = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
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
      d="M3 11.145a8.0999 8.0999 0 0 1 7.155 7.155M3 14.79a4.5002 4.5002 0 0 1 3.51 3.51M3 18.3h.009m10.791.9h2.88c1.5121 0 2.2682 0 2.8458-.2943a2.6996 2.6996 0 0 0 1.1799-1.1799C21 17.1482 21 16.3921 21 14.88V7.32c0-1.5121 0-2.2682-.2943-2.8458a2.6998 2.6998 0 0 0-1.1799-1.18C18.9482 3 18.1921 3 16.68 3H7.32c-1.5121 0-2.2682 0-2.8458.2943a2.7 2.7 0 0 0-1.18 1.18C3 5.0517 3 5.8078 3 7.32v.18"
    />
  </svg>
);
export default ChromeCast;
