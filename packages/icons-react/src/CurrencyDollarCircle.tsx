import * as React from 'react';
import { SVGProps } from 'react';
const CurrencyDollarCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 20c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.85 13.4c0 1.1598.9402 2.1 2.1 2.1h1.95c1.2426 0 2.25-1.0074 2.25-2.25S14.1426 11 12.9 11h-1.8c-1.2426 0-2.25-1.0074-2.25-2.25S9.8574 6.5 11.1 6.5h1.95c1.1598 0 2.1.9402 2.1 2.1M12 5.15V6.5m0 9v1.35M21 11c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Z"
    />
  </svg>
);
export default CurrencyDollarCircle;
