import * as React from 'react';
import { SVGProps } from 'react';
const CurrencyYenCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 20c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9Zm0-3.6V11v5.4Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.01}
      d="M15.6 6.5 12 11 8.4 6.5m7.2 4.5H8.4h7.2Zm-.45 2.7h-6.3 6.3Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 16.4V11m0 0 3.6-4.5M12 11 8.4 6.5m7.2 4.5H8.4m6.75 2.7h-6.3M21 11c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Z"
    />
  </svg>
);
export default CurrencyYenCircle;
