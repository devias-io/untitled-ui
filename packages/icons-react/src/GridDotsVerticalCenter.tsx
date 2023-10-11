import * as React from 'react';
import { SVGProps } from 'react';
const GridDotsVerticalCenter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
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
      d="M3 3h.01M3 21h.01M3 16.5h.01M3 7.5h.01M7.5 3h.01M7.5 21h.01M16.5 3h.01m-.01 18h.01M12 3h.01M12 21h.01M12 16.5h.01m-.01-9h.01M21 3h.01M21 21h.01M21 16.5h.01m-.01-9h.01M21 12H3"
    />
  </svg>
);
export default GridDotsVerticalCenter;
