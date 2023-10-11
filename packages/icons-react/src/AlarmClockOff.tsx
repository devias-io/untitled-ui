import * as React from 'react';
import { SVGProps } from 'react';
const AlarmClockOff = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 5.7 18.3 3 21 5.7ZM6.6 17.4l-1.8 1.8 1.8-1.8Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.65 4.9277a7.2 7.2 0 0 1 8.4223 8.4223m-1.5503 3.2704a7.2003 7.2003 0 0 1-10.6132.4708 7.2 7.2 0 0 1 .4663-10.6094M4.8 3.9 3 5.7m18 0L18.3 3M6.6 17.4l-1.8 1.8m15.3 0L3.9 3"
    />
  </svg>
);
export default AlarmClockOff;
