import * as React from 'react';
import { SVGProps } from 'react';
const CurrencyRupeeCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.85 9.1998h6.3M8.85 6.05h6.3M13.8 16.4001l-4.95-4.05 1.35-.0001c4.0002 0 4.0002-6.3 0-6.3M21 11c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Z"
    />
  </svg>
);
export default CurrencyRupeeCircle;
