import * as React from 'react';
import { SVGProps } from 'react';
const PresentationChart01 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="transparent"
      fillOpacity={0.01}
      d="M12 14.7v4.5-4.5ZM8.4 8.4v2.7-2.7ZM12 6.6v4.5-4.5Zm3.6 3.6v.9-.9Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 14.7v4.5m0-4.5 5.4 4.5M12 14.7l-5.4 4.5M20.1 3v7.38c0 1.5121 0 2.2682-.2943 2.8458a2.6996 2.6996 0 0 1-1.1799 1.1799c-.5776.2943-1.3337.2943-2.8458.2943H8.22c-1.5121 0-2.2682 0-2.8458-.2943a2.6998 2.6998 0 0 1-1.18-1.1799C3.9 12.6482 3.9 11.8921 3.9 10.38V3m4.5 5.4v2.7M12 6.6v4.5m3.6-.9v.9M21 3H3"
    />
  </svg>
);
export default PresentationChart01;
