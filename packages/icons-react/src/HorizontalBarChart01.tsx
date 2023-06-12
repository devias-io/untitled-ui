import * as React from 'react';
import { SVGProps } from 'react';
const HorizontalBarChart01 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.6 9.75V6.69c0-.504 0-.756-.0981-.9486a.9003.9003 0 0 0-.3933-.3933C14.9161 5.25 14.664 5.25 14.16 5.25H3m9 9v3.06c0 .504 0 .7561-.0981.9486a.9006.9006 0 0 1-.3933.3933c-.1925.0981-.4446.0981-.9486.0981H3M3 3v18m0-6.75h14.76c.504 0 .7561 0 .9486-.0981a.9006.9006 0 0 0 .3933-.3933c.0981-.1925.0981-.4446.0981-.9486v-1.62c0-.504 0-.7561-.0981-.9486a.9005.9005 0 0 0-.3933-.3933C18.5161 9.75 18.264 9.75 17.76 9.75H3v4.5Z"
    />
  </svg>
);
export default HorizontalBarChart01;
