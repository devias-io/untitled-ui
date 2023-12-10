import * as React from 'react';
import { SVGProps } from 'react';
const NotificationText = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.1213 3.8787c1.1716 1.1716 1.1716 3.071 0 4.2426-1.1716 1.1716-3.071 1.1716-4.2426 0-1.1716-1.1715-1.1716-3.071 0-4.2426 1.1716-1.1716 3.071-1.1716 4.2426 0Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 4H7.8c-1.6802 0-2.5202 0-3.162.327a3 3 0 0 0-1.311 1.311C3 6.2798 3 7.1198 3 8.8v7.4c0 1.6802 0 2.5202.327 3.162a2.9997 2.9997 0 0 0 1.311 1.311C5.2798 21 6.1198 21 7.8 21h7.4c1.6802 0 2.5202 0 3.162-.327a2.9994 2.9994 0 0 0 1.311-1.311C20 18.7202 20 17.8802 20 16.2V13m-7 4H7m8-4H7m13.1213-9.1213c1.1716 1.1716 1.1716 3.071 0 4.2426-1.1716 1.1716-3.071 1.1716-4.2426 0-1.1716-1.1715-1.1716-3.071 0-4.2426 1.1716-1.1716 3.071-1.1716 4.2426 0Z"
    />
  </svg>
);
export default NotificationText;
