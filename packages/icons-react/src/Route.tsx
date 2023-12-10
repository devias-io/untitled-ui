import * as React from 'react';
import { SVGProps } from 'react';
const Route = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.7 7.4c1.4912 0 2.7-1.2088 2.7-2.7S7.1912 2 5.7 2 3 3.2088 3 4.7s1.2088 2.7 2.7 2.7ZM18.3 20c1.4912 0 2.7-1.2088 2.7-2.7s-1.2088-2.7-2.7-2.7-2.7 1.2088-2.7 2.7 1.2088 2.7 2.7 2.7Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.55 4.7h.391c2.7425 0 4.1137 0 4.6343.4926a1.8 1.8 0 0 1 .5278 1.6604c-.1405.7027-1.26 1.4946-3.499 3.0783l-3.6582 2.5874c-2.239 1.5837-3.3585 2.3756-3.499 3.0783a1.7999 1.7999 0 0 0 .5278 1.6604c.5206.4926 1.8918.4926 4.6343.4926h.841M8.4 4.7c0 1.4912-1.2088 2.7-2.7 2.7S3 6.1912 3 4.7 4.2088 2 5.7 2s2.7 1.2088 2.7 2.7ZM21 17.3c0 1.4912-1.2088 2.7-2.7 2.7s-2.7-1.2088-2.7-2.7 1.2088-2.7 2.7-2.7 2.7 1.2088 2.7 2.7Z"
    />
  </svg>
);
export default Route;
