import * as React from 'react';
import { SVGProps } from 'react';
const AlignVerticalCenter01 = (props: SVGProps<SVGSVGElement>) => (
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
      d="m14.7 5.25-3.6 3.6-3.6-3.6m7.2 13.5-3.6-3.6-3.6 3.6"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 12h16.2m-8.1-9v5.85m0 0 3.6-3.6m-3.6 3.6-3.6-3.6M11.1 21v-5.85m0 0 3.6 3.6m-3.6-3.6-3.6 3.6"
    />
  </svg>
);
export default AlignVerticalCenter01;
