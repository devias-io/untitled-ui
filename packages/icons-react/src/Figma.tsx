import * as React from 'react';
import { SVGProps } from 'react';
const Figma = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 1.5H8.5C6.567 1.5 5 3.067 5 5s1.567 3.5 3.5 3.5m3.5-7v7m0-7h3.5C17.433 1.5 19 3.067 19 5s-1.567 3.5-3.5 3.5m-3.5 0H8.5m3.5 0v7m0-7h3.5m-7 0C6.567 8.5 5 10.067 5 12s1.567 3.5 3.5 3.5m3.5 0H8.5m3.5 0V19c0 1.933-1.567 3.5-3.5 3.5S5 20.933 5 19s1.567-3.5 3.5-3.5m7-7c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5S12 13.933 12 12s1.567-3.5 3.5-3.5Z"
    />
  </svg>
);
export default Figma;
