import * as React from 'react';
import { SVGProps } from 'react';
const Train = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.95 21h4.5M7.6 3h7.2m-3.6 2.7V3M4 12h14.4m-2.7 6.3 1.35 2.7M6.7 18.3 5.35 21m2.7-5.85h.009m6.291 0h.009M8.32 18.3h5.76c1.5121 0 2.2682 0 2.8458-.2943a2.6996 2.6996 0 0 0 1.1799-1.1799c.2943-.5776.2943-1.3337.2943-2.8458v-3.96c0-1.5121 0-2.2682-.2943-2.8458a2.6998 2.6998 0 0 0-1.1799-1.18C16.3482 5.7 15.5921 5.7 14.08 5.7H8.32c-1.5121 0-2.2682 0-2.8458.2943a2.7 2.7 0 0 0-1.18 1.18C4 7.7517 4 8.5078 4 10.02v3.96c0 1.5121 0 2.2682.2943 2.8458.2588.508.6719.9211 1.18 1.1799.5775.2943 1.3336.2943 2.8457.2943Zm.18-3.15a.45.45 0 1 1-.9 0 .45.45 0 0 1 .9 0Zm6.3 0a.45.45 0 1 1-.9 0 .45.45 0 0 1 .9 0Z"
    />
  </svg>
);
export default Train;
