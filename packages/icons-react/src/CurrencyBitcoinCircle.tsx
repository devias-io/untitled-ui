import * as React from 'react';
import { SVGProps } from 'react';
const CurrencyBitcoinCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.75 6.95h3.825c1.1184 0 2.025.9066 2.025 2.025 0 1.1184-.9066 2.025-2.025 2.025H9.75h4.275c1.1184 0 2.025.9066 2.025 2.025 0 1.1184-.9066 2.025-2.025 2.025H9.75m0-8.1H8.4m1.35 0v8.1m0 0H8.4m1.8-9.45v1.35m0 8.1v1.35m2.7-10.8v1.35m0 8.1v1.35M21 11c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Z"
    />
  </svg>
);
export default CurrencyBitcoinCircle;
