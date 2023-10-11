import * as React from 'react';
import { SVGProps } from 'react';
const MessageSquare01 = (props: SVGProps<SVGSVGElement>) => (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 7.8c0-1.6802 0-2.5202.327-3.162a3 3 0 0 1 1.311-1.311C5.2798 3 6.1198 3 7.8 3h8.4c1.6802 0 2.5202 0 3.162.327a2.9997 2.9997 0 0 1 1.311 1.311C21 5.2798 21 6.1198 21 7.8v5.4c0 1.6802 0 2.5202-.327 3.162a2.9994 2.9994 0 0 1-1.311 1.311C18.7202 18 17.8802 18 16.2 18H9.6838c-.6241 0-.9361 0-1.2346.0613a2.9974 2.9974 0 0 0-.7617.2672c-.2713.1386-.515.3335-1.0023.7233l-2.3854 1.9084c-.4161.3329-.6242.4993-.7993.4995a.5.5 0 0 1-.3913-.1881C3 21.1348 3 20.8684 3 20.3355V7.8Z"
    />
  </svg>
);
export default MessageSquare01;
