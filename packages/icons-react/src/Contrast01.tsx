import * as React from 'react';
import { SVGProps } from 'react';
const Contrast01 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 11c0 4.9706 4.0294 9 9 9V2c-4.9706 0-9 4.0294-9 9Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 2c.5325 0 1.0542.0463 1.5613.135M12 2c-4.9706 0-9 4.0294-9 9s4.0294 9 9 9m0-18v18m5.1642-16.3719a9.0494 9.0494 0 0 1 2.2098 2.2108m1.4911 3.6002A9.0517 9.0517 0 0 1 21 11a9.0515 9.0515 0 0 1-.1349 1.5609m-1.4949 3.6056a9.0492 9.0492 0 0 1-2.207 2.2061m-3.6037 1.4928A9.0552 9.0552 0 0 1 12 20"
    />
  </svg>
);
export default Contrast01;
