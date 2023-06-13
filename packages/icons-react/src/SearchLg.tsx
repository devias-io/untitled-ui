import * as React from 'react';
import { SVGProps } from 'react';
const SearchLg = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.5 20c4.6944 0 8.5-3.8056 8.5-8.5S16.1944 3 11.5 3 3 6.8056 3 11.5 6.8056 20 11.5 20Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m21 21-3.4999-3.5M20 11.5c0 4.6944-3.8056 8.5-8.5 8.5S3 16.1944 3 11.5 6.8056 3 11.5 3 20 6.8056 20 11.5Z"
    />
  </svg>
);
export default SearchLg;
