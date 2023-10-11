import * as React from 'react';
import { SVGProps } from 'react';
const Sun = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillOpacity={0.01}
      d="M12 15.5c2.4853 0 4.5-2.0147 4.5-4.5S14.4853 6.5 12 6.5 7.5 8.5147 7.5 11s2.0147 4.5 4.5 4.5Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 2v1.8m0 14.4V20m-7.2-9H3m3.8827-5.1173L5.6099 4.6099m11.5074 1.2728 1.2728-1.2728M6.8827 16.121l-1.2728 1.2728m11.5074-1.2728 1.2728 1.2728M21 11h-1.8m-2.7 0c0 2.4853-2.0147 4.5-4.5 4.5S7.5 13.4853 7.5 11 9.5147 6.5 12 6.5s4.5 2.0147 4.5 4.5Z"
    />
  </svg>
);
export default Sun;
