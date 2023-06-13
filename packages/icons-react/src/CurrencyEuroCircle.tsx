import * as React from 'react';
import { SVGProps } from 'react';
const CurrencyEuroCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
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
      d="M15 7.6458C14.2039 6.9333 13.1525 6.5 12 6.5c-2.4853 0-4.5 2.0147-4.5 4.5s2.0147 4.5 4.5 4.5c1.1525 0 2.2039-.4333 3-1.1458M6.6 12.35h4.5m-4.5-2.7h4.5M21 11c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Z"
    />
  </svg>
);
export default CurrencyEuroCircle;
