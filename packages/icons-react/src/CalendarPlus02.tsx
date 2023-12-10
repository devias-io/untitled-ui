import * as React from 'react';
import { SVGProps } from 'react';
const CalendarPlus02 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.5 4.8h-.18c-1.5121 0-2.2682 0-2.8458.2943a2.7 2.7 0 0 0-1.18 1.18C3 6.8517 3 7.6078 3 9.12v1.08h16.2V9.12c0-1.5121 0-2.2682-.2943-2.8458a2.6998 2.6998 0 0 0-1.1799-1.18C17.1482 4.8 16.3921 4.8 14.88 4.8H7.5Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19.2 11.55V9.12c0-1.5121 0-2.2682-.2943-2.8458a2.6998 2.6998 0 0 0-1.1799-1.18C17.1482 4.8 16.3921 4.8 14.88 4.8H7.32c-1.5121 0-2.2682 0-2.8458.2943a2.7 2.7 0 0 0-1.18 1.18C3 6.8517 3 7.6078 3 9.12v7.56c0 1.5121 0 2.2682.2943 2.8458.2588.508.6719.9211 1.18 1.1799C5.0517 21 5.8078 21 7.32 21h4.23m7.65-10.8H3M14.7 3v3.6M7.5 3v3.6m9 13.5v-5.4m-2.7 2.7h5.4"
    />
  </svg>
);
export default CalendarPlus02;
