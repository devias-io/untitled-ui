import * as React from 'react';
import { SVGProps } from 'react';
const UserCheck01 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.2 11.1c2.2368 0 4.05-1.8133 4.05-4.05S12.4368 3 10.2 3C7.9633 3 6.15 4.8133 6.15 7.05s1.8133 4.05 4.05 4.05Zm5.4 5.4 1.8 1.8 3.6-3.6"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 14.25H7.95c-1.256 0-1.884 0-2.395.155a3.6 3.6 0 0 0-2.4 2.4C3 17.316 3 17.944 3 19.2m12.6-2.7 1.8 1.8 3.6-3.6m-6.75-7.65c0 2.2367-1.8132 4.05-4.05 4.05-2.2367 0-4.05-1.8133-4.05-4.05S7.9633 3 10.2 3c2.2368 0 4.05 1.8133 4.05 4.05Z"
    />
  </svg>
);
export default UserCheck01;
