import * as React from 'react';
import { SVGProps } from 'react';
const CurrencyRupee = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillOpacity={0.01}
      d="M6 3h12H6Zm0 5h12H6Zm0 5 8.5 8L6 13Zm0 0h3-3Zm3 0c6.667 0 6.667-10 0-10v10Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 3h12M6 8h12m-3.5 13L6 13h3c6.667 0 6.667-10 0-10"
    />
  </svg>
);
export default CurrencyRupee;
