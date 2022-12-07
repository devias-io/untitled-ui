import * as React from 'react';
import { SVGProps } from 'react';
const Activity = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillOpacity={0.01}
      d="M21 11.1h-3.6l-2.7 8.1L9.3 3l-2.7 8.1H3"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 11.1h-3.6l-2.7 8.1L9.3 3l-2.7 8.1H3"
    />
  </svg>
);
export default Activity;
