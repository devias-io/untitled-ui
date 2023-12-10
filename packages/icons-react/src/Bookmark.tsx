import * as React from 'react';
import { SVGProps } from 'react';
const Bookmark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#fff"
      fillOpacity={0.01}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 7.8c0-1.6802 0-2.5202.327-3.162a3 3 0 0 1 1.311-1.311C7.2798 3 8.1198 3 9.8 3h4.4c1.6802 0 2.5202 0 3.162.327a2.9997 2.9997 0 0 1 1.311 1.311C19 5.2798 19 6.1198 19 7.8V21l-7-4-7 4V7.8Z"
    />
  </svg>
);
export default Bookmark;
