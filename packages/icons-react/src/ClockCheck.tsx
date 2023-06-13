import * as React from 'react';
import { SVGProps } from 'react';
const ClockCheck = (props: SVGProps<SVGSVGElement>) => (
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
      d="m14.25 17.3 1.8 1.8 4.05-4.05m.8866-3.5551A9.1211 9.1211 0 0 0 21 11c0-4.9706-4.0294-9-9-9s-9 4.0294-9 9c0 4.8919 3.9029 8.8722 8.7646 8.997M12 5.6V11l3.3645 1.6823"
    />
  </svg>
);
export default ClockCheck;
