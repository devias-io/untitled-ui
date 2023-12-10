import * as React from 'react';
import { SVGProps } from 'react';
const Sunset = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="transparent" fillOpacity={0.01} d="M15.6 4.7 12 8.3 8.4 4.7" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.8 16.4H3m3.8827-5.1173-1.2728-1.2728m11.5073 1.2728 1.2728-1.2728M21 16.4h-1.8m-11.7 0c0-2.4853 2.0147-4.5 4.5-4.5s4.5 2.0147 4.5 4.5M21 20H3M15.6 4.7 12 8.3m0 0L8.4 4.7M12 8.3V2"
    />
  </svg>
);
export default Sunset;
