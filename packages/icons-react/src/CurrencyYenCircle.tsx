import * as React from 'react';
import { SVGProps } from 'react';
const CurrencyYenCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 16.4V11m0 0 3.6-4.5M12 11 8.4 6.5m7.2 4.5H8.4m6.75 2.7h-6.3M21 11c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Z"
    />
  </svg>
);
export default CurrencyYenCircle;
