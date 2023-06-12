import * as React from 'react';
import { SVGProps } from 'react';
const CurrencyDollar = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 15.6c0 1.9882 1.6118 3.6 3.6 3.6h3.6c1.9882 0 3.6-1.6118 3.6-3.6 0-1.9882-1.6118-3.6-3.6-3.6H9.6C7.6118 12 6 10.3882 6 8.4c0-1.9882 1.6118-3.6 3.6-3.6h3.6c1.9882 0 3.6 1.6118 3.6 3.6M11.4 3v18"
    />
  </svg>
);
export default CurrencyDollar;
