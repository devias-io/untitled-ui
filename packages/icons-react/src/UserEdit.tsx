import * as React from 'react';
import { SVGProps } from 'react';
const UserEdit = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 15.5H7.5c-1.3956 0-2.0934 0-2.6611.1722a4.0001 4.0001 0 0 0-2.6667 2.6667C2 18.9067 2 19.6044 2 21M14.5 7.5c0 2.4853-2.0147 4.5-4.5 4.5S5.5 9.9853 5.5 7.5 7.5147 3 10 3s4.5 2.0147 4.5 4.5ZM11 21l3.1014-.8861c.1485-.0424.2227-.0637.292-.0955a.9981.9981 0 0 0 .1745-.1026c.0614-.0451.116-.0997.2253-.209L21.25 13.25c.6904-.6903.6904-1.8097 0-2.5-.6903-.6904-1.8096-.6904-2.5 0l-6.4568 6.4568c-.1093.1093-.1639.1639-.209.2253a.9981.9981 0 0 0-.1026.1745c-.0319.0693-.0531.1435-.0955.2921L11 21Z"
    />
  </svg>
);
export default UserEdit;
