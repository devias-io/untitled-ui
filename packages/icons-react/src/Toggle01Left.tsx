import * as React from 'react';
import { SVGProps } from 'react';
const Toggle01Left = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 11.5C3 9.0147 5.0147 7 7.5 7h9c2.4853 0 4.5 2.0147 4.5 4.5S18.9853 16 16.5 16h-9C5.0147 16 3 13.9853 3 11.5Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.01}
      d="M7.5 16c2.4853 0 4.5-2.0147 4.5-4.5S9.9853 7 7.5 7 3 9.0147 3 11.5 5.0147 16 7.5 16Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.5 16h9c2.4853 0 4.5-2.0147 4.5-4.5S18.9853 7 16.5 7h-9m0 9C5.0147 16 3 13.9853 3 11.5S5.0147 7 7.5 7m0 9c2.4853 0 4.5-2.0147 4.5-4.5S9.9853 7 7.5 7"
    />
  </svg>
);
export default Toggle01Left;
