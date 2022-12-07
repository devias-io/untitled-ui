import * as React from 'react';
import { SVGProps } from 'react';
const Thermometer01 = (props: SVGProps<SVGSVGElement>) => (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.8 5.25C13.8 4.0074 12.7926 3 11.55 3S9.3 4.0074 9.3 5.25v8.332c-1.0854.7265-1.8 1.9638-1.8 3.368 0 2.2368 1.8133 4.05 4.05 4.05 2.2368 0 4.05-1.8132 4.05-4.05 0-1.4042-.7146-2.6415-1.8-3.368V5.25Z"
    />
  </svg>
);
export default Thermometer01;
