import * as React from 'react';
import { SVGProps } from 'react';
const IntersectSquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 4.88c0-1.008 0-1.5121.1962-1.8972a1.8 1.8 0 0 1 .7866-.7866C4.3678 2 4.872 2 5.88 2h6.84c1.0081 0 1.5121 0 1.8972.1962a1.8 1.8 0 0 1 .7866.7866c.1962.385.1962.8891.1962 1.8972v6.84c0 1.0081 0 1.5121-.1962 1.8972a1.8 1.8 0 0 1-.7866.7866c-.3851.1962-.8891.1962-1.8972.1962H5.88c-1.008 0-1.5121 0-1.8972-.1962a1.8 1.8 0 0 1-.7866-.7866C3 13.2321 3 12.7281 3 11.72V4.88Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.4 10.28c0-1.008 0-1.5121.1962-1.8972a1.8 1.8 0 0 1 .7866-.7866C9.7678 7.4 10.272 7.4 11.28 7.4h6.84c1.0081 0 1.5121 0 1.8972.1962a1.8 1.8 0 0 1 .7866.7866C21 8.7678 21 9.272 21 10.28v6.84c0 1.0081 0 1.5121-.1962 1.8972a1.8 1.8 0 0 1-.7866.7866C19.6321 20 19.1281 20 18.12 20h-6.84c-1.0081 0-1.5121 0-1.8972-.1962a1.8 1.8 0 0 1-.7866-.7866C8.4 18.6321 8.4 18.1281 8.4 17.12v-6.84Z"
    />
  </svg>
);
export default IntersectSquare;
