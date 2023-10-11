import * as React from 'react';
import { SVGProps } from 'react';
const CameraPlus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 14.6c1.9882 0 3.6-1.6118 3.6-3.6 0-1.9882-1.6118-3.6-3.6-3.6-1.9882 0-3.6 1.6118-3.6 3.6 0 1.9882 1.6118 3.6 3.6 3.6Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 10.55v2.79c0 2.0162 0 3.0243-.3924 3.7944a3.5996 3.5996 0 0 1-1.5732 1.5732c-.7701.3924-1.7782.3924-3.7944.3924H8.76c-2.0162 0-3.0243 0-3.7944-.3924a3.5995 3.5995 0 0 1-1.5732-1.5732C3 16.3643 3 15.3562 3 13.34V8.66c0-2.0162 0-3.0243.3924-3.7944a3.6 3.6 0 0 1 1.5732-1.5732C5.7357 2.9 6.7438 2.9 8.76 2.9h3.69m5.85 4.5V2m-2.7 2.7H21M15.6 11c0 1.9882-1.6118 3.6-3.6 3.6-1.9882 0-3.6-1.6118-3.6-3.6 0-1.9882 1.6118-3.6 3.6-3.6 1.9882 0 3.6 1.6118 3.6 3.6Z"
    />
  </svg>
);
export default CameraPlus;
