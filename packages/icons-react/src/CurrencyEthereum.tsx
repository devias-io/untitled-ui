import * as React from 'react';
import { SVGProps } from 'react';
const CurrencyEthereum = (props: SVGProps<SVGSVGElement>) => (
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
      d="m5.35 14.7 5.8501 6.3 5.8499-6.3-5.85 1.35-5.85-1.35ZM4 11.1001 11.2 12.9l7.2-1.8L11.2 3 4 11.1001ZM11.2 3v6.3V3Z"
    />
    <path fill="#fff" fillOpacity={0.01} d="m4 11.1001 7.2-1.8L18.4 11.1" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 11.1001 11.2 12.9l7.2-1.8M4 11.1001 11.2 3M4 11.1001l7.2-1.8M18.4 11.1 11.2 3m7.2 8.1-7.2-1.8m0-6.3v6.3m-5.85 5.4 5.8501 6.3 5.8499-6.3-5.85 1.35-5.85-1.35Z"
    />
  </svg>
);
export default CurrencyEthereum;
