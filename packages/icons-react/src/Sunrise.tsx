import * as React from 'react';
import { SVGProps } from 'react';
const Sunrise = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.8 16.4H3m3.8827-5.1173-1.2728-1.2728m11.5073 1.2728 1.2728-1.2728M21 16.4h-1.8m-11.7 0c0-2.4853 2.0147-4.5 4.5-4.5s4.5 2.0147 4.5 4.5M21 20H3M15.6 5.6 12 2m0 0L8.4 5.6M12 2v6.3"
    />
  </svg>
);
export default Sunrise;
