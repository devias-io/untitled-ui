import * as React from 'react';
import { SVGProps } from 'react';
const Globe02 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.5 15.5002c3.3137 0 6-2.6863 6-6s-2.6863-6-6-6-6 2.6863-6 6 2.6863 6 6 6Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m2.6611 18.3391 4.5939-4.5939M18.2175 2.7827c3.71 3.71 3.71 9.7251 0 13.435-3.71 3.71-9.725 3.71-13.435 0M17 22.0002H7m5 0v-3m5.5-9.5c0 3.3137-2.6863 6-6 6s-6-2.6863-6-6 2.6863-6 6-6 6 2.6863 6 6Z"
    />
  </svg>
);
export default Globe02;
