import * as React from 'react';
import { SVGProps } from 'react';
const Drop = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.4 13.8c0 3.9765-3.2236 7.2-7.2 7.2C7.2236 21 4 17.7765 4 13.8c0-.9548.1859-1.8662.5234-2.7C5.5914 8.4613 11.2 3 11.2 3s5.6085 5.4613 6.6766 8.1c.3375.8338.5234 1.7452.5234 2.7Z"
    />
  </svg>
);
export default Drop;
