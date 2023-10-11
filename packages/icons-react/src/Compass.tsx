import * as React from 'react';
import { SVGProps } from 'react';
const Compass = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.1 9.3c1.2426 0 2.25-1.0074 2.25-2.25S12.3426 4.8 11.1 4.8 8.85 5.8074 8.85 7.05 9.8574 9.3 11.1 9.3Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.1 4.8c-1.2426 0-2.25 1.0074-2.25 2.25S9.8574 9.3 11.1 9.3s2.25-1.0074 2.25-2.25S12.3426 4.8 11.1 4.8Zm0 0V3m8.1 11.6437C17.2211 16.8859 14.3257 18.3 11.1 18.3S4.979 16.8859 3 14.6437m6.9703-5.6482L3 21m9.2297-12.0045L19.2 21"
    />
  </svg>
);
export default Compass;
