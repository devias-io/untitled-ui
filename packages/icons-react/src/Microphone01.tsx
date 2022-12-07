import * as React from 'react';
import { SVGProps } from 'react';
const Microphone01 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.6 5.7C8.6 4.2088 9.8088 3 11.3 3S14 4.2088 14 5.7V12c0 1.4912-1.2088 2.7-2.7 2.7S8.6 13.4912 8.6 12V5.7Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.6 10.2V12c0 3.4794-2.8206 6.3-6.3 6.3M5 10.2V12c0 3.4794 2.8206 6.3 6.3 6.3m0 0V21m-3.6 0h7.2m-3.6-6.3c-1.4912 0-2.7-1.2088-2.7-2.7V5.7C8.6 4.2088 9.8088 3 11.3 3S14 4.2088 14 5.7V12c0 1.4912-1.2088 2.7-2.7 2.7Z"
    />
  </svg>
);
export default Microphone01;
