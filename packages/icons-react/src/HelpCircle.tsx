import * as React from 'react';
import { SVGProps } from 'react';
const HelpCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 21c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.01}
      d="M9.381 9.3a2.6997 2.6997 0 0 1 3.0035-1.7652A2.7003 2.7003 0 0 1 14.628 10.2c0 1.8-2.7 2.7-2.7 2.7"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.381 9.3a2.6997 2.6997 0 0 1 3.0035-1.7652A2.7003 2.7003 0 0 1 14.628 10.2c0 1.8-2.7 2.7-2.7 2.7M12 16.5h.009M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Z"
    />
  </svg>
);
export default HelpCircle;
