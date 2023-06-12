import * as React from 'react';
import { SVGProps } from 'react';
const MusicNotePlus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.5 18V5.5889c0-.8572 0-1.2858.1805-1.544a1.0001 1.0001 0 0 1 .6733-.4161c.3117-.046.695.1456 1.4617.529L20.5 6m-6 12c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3c0-1.6568 1.3431-3 3-3s3 1.3432 3 3Zm-8-8V4m-3 3h6"
    />
  </svg>
);
export default MusicNotePlus;
