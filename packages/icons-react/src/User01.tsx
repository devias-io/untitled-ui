import * as React from 'react';
import { SVGProps } from 'react';
const User01 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 12c2.4853 0 4.5-2.0147 4.5-4.5S14.4853 3 12 3 7.5 5.0147 7.5 7.5 9.5147 12 12 12Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 21c0-1.3956 0-2.0933-.1722-2.6611a4.0002 4.0002 0 0 0-2.6667-2.6667C16.5933 15.5 15.8956 15.5 14.5 15.5h-5c-1.3956 0-2.0934 0-2.6611.1722a4.0001 4.0001 0 0 0-2.6667 2.6667C4 18.9067 4 19.6044 4 21M16.5 7.5c0 2.4853-2.0147 4.5-4.5 4.5S7.5 9.9853 7.5 7.5 9.5147 3 12 3s4.5 2.0147 4.5 4.5Z"
    />
  </svg>
);
export default User01;
