import * as React from 'react';
import { SVGProps } from 'react';
const AlarmClockCheck = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.7 3 3 5.7 5.7 3ZM21 5.7 18.3 3 21 5.7ZM6.6 17.4l-1.8 1.8 1.8-1.8Zm10.8 0 1.8 1.8-1.8-1.8ZM12 19.2a7.2003 7.2003 0 0 0 7.2-7.2A7.2002 7.2002 0 0 0 6.9088 6.9088 7.2 7.2 0 0 0 12 19.2Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.7 3 3 5.7m18 0L18.3 3M6.6 17.4l-1.8 1.8m12.6-1.8 1.8 1.8m-9.9-6.75 1.8 1.8 4.05-4.05m-3.15 9a7.2003 7.2003 0 0 0 7.2-7.2A7.2002 7.2002 0 0 0 6.9088 6.9088 7.2 7.2 0 0 0 12 19.2Z"
    />
  </svg>
);
export default AlarmClockCheck;
