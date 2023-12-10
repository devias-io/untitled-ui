import * as React from 'react';
import { SVGProps } from 'react';
const Speedometer04 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 21c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.01}
      d="M12 12.9a.9.9 0 0 0 .9-.9.9.9 0 0 0-.9-.9.9.9 0 0 0-.9.9.9.9 0 0 0 .9.9Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.1708 15.6C17.8826 14.5795 18.3 13.3385 18.3 12c0-.4634-.05-.9151-.145-1.35M6.8292 15.6C6.1174 14.5795 5.7 13.3385 5.7 12c0-3.4794 2.8206-6.3 6.3-6.3.3799 0 .752.0336 1.1134.098m2.9365 2.152-4.05 4.05M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Zm-8.1 0a.9.9 0 0 1-.9.9.9.9 0 0 1-.9-.9.9.9 0 0 1 .9-.9.9.9 0 0 1 .9.9Z"
    />
  </svg>
);
export default Speedometer04;
