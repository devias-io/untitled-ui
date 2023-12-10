import * as React from 'react';
import { SVGProps } from 'react';
const UsersPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="transparent"
      fillOpacity={0.01}
      d="M9.75 10.2c1.9882 0 3.6-1.6118 3.6-3.6 0-1.9882-1.6118-3.6-3.6-3.6-1.9882 0-3.6 1.6118-3.6 3.6 0 1.9882 1.6118 3.6 3.6 3.6Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.3 19.2v-5.4m-2.7 2.7H21m-9-2.7H8.4c-1.6774 0-2.516 0-3.1777.274a3.6 3.6 0 0 0-1.9483 1.9483C3 16.6839 3 17.5226 3 19.2M15.15 3.2617c1.3193.534 2.25 1.8275 2.25 3.3383s-.9307 2.8043-2.25 3.3383M13.35 6.6c0 1.9882-1.6118 3.6-3.6 3.6-1.9882 0-3.6-1.6118-3.6-3.6 0-1.9882 1.6118-3.6 3.6-3.6 1.9882 0 3.6 1.6118 3.6 3.6Z"
    />
  </svg>
);
export default UsersPlus;
