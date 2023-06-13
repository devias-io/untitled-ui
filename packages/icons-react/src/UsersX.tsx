import * as React from 'react';
import { SVGProps } from 'react';
const UsersX = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m16.5 16 5 5m0-5-5 5m-1-17.7092C16.9659 3.8842 18 5.3213 18 7s-1.0341 3.1159-2.5 3.7092M12 15H8c-1.8638 0-2.7957 0-3.5307.3045a4.0001 4.0001 0 0 0-2.1648 2.1648C2 18.2044 2 19.1362 2 21M13.5 7c0 2.2091-1.7909 4-4 4-2.2091 0-4-1.7909-4-4 0-2.2091 1.7909-4 4-4 2.2091 0 4 1.7909 4 4Z"
    />
  </svg>
);
export default UsersX;
