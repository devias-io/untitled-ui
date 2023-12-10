import * as React from 'react';
import { SVGProps } from 'react';
const ArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="transparent" fillOpacity={0.01} d="m19 12-7 7-7-7" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 5v14m0 0 7-7m-7 7-7-7"
    />
  </svg>
);
export default ArrowDown;
