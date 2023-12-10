import * as React from 'react';
import { SVGProps } from 'react';
const LetterSpacing02 = (props: SVGProps<SVGSVGElement>) => (
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
      d="m18.3 13.8 2.7 2.7-2.7 2.7M5.7 13.8 3 16.5l2.7 2.7"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 16.5h18m-18 0 2.7-2.7M3 16.5l2.7 2.7M21 16.5l-2.7-2.7m2.7 2.7-2.7 2.7M7.5 3h9M12 3v9.9"
    />
  </svg>
);
export default LetterSpacing02;
