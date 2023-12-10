import * as React from 'react';
import { SVGProps } from 'react';
const CurrencyBitcoin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="transparent"
      fillOpacity={0.01}
      d="M7.3 4.8H5.5h1.8Zm0 14.4H5.5h1.8Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.1 3v1.8m0 14.4V21m3.6-18v1.8m0 14.4V21M7.3 4.8h5.85c1.9882 0 3.6 1.6118 3.6 3.6 0 1.9882-1.6118 3.6-3.6 3.6H7.3h6.75c1.9882 0 3.6 1.6118 3.6 3.6 0 1.9882-1.6118 3.6-3.6 3.6H7.3m0-14.4H5.5m1.8 0v14.4m0 0H5.5"
    />
  </svg>
);
export default CurrencyBitcoin;
