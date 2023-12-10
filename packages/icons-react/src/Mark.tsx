import * as React from 'react';
import { SVGProps } from 'react';
const Mark = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 18.2c3.9765 0 7.2-3.2235 7.2-7.2 0-3.9764-3.2235-7.2-7.2-7.2-3.9764 0-7.2 3.2236-7.2 7.2 0 3.9765 3.2236 7.2 7.2 7.2Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.01}
      d="M12 13.7c1.4912 0 2.7-1.2088 2.7-2.7S13.4912 8.3 12 8.3 9.3 9.5088 9.3 11s1.2088 2.7 2.7 2.7Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19.2 11c0 3.9765-3.2235 7.2-7.2 7.2m7.2-7.2c0-3.9764-3.2235-7.2-7.2-7.2m7.2 7.2H21m-9 7.2c-3.9764 0-7.2-3.2235-7.2-7.2m7.2 7.2V20m-7.2-9c0-3.9764 3.2236-7.2 7.2-7.2M4.8 11H3m9-7.2V2m2.7 9c0 1.4912-1.2088 2.7-2.7 2.7S9.3 12.4912 9.3 11s1.2088-2.7 2.7-2.7 2.7 1.2088 2.7 2.7Z"
    />
  </svg>
);
export default Mark;
