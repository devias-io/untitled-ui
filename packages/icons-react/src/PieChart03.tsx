import * as React from 'react';
import { SVGProps } from 'react';
const PieChart03 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2a9.0005 9.0005 0 0 1 6.364 2.636A9.0004 9.0004 0 0 1 21 11h-9V2Zm9 9a9 9 0 0 1-3.7099 7.2812L12 11h9Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.01}
      d="M21 11c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 2a9.0005 9.0005 0 0 1 6.364 2.636A9.0004 9.0004 0 0 1 21 11m-9-9v9m0-9c-4.9706 0-9 4.0294-9 9s4.0294 9 9 9 9-4.0294 9-9m-9-9c4.9706 0 9 4.0294 9 9m0 0h-9m9 0a9 9 0 0 1-3.7099 7.2812L12 11"
    />
  </svg>
);
export default PieChart03;
