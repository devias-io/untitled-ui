import * as React from 'react';
import { SVGProps } from 'react';
const CurrencyRupeeCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 20c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9ZM8.85 9.1998h6.3-6.3Zm0-3.1498h6.3-6.3Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.01}
      d="m8.85 12.3501 4.95 4.05-4.95-4.05Zm0 0 1.35-.0001-1.35.0001Zm1.35-.0001c4.0002 0 4.0002-6.3 0-6.3v6.3Z"
    />
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
