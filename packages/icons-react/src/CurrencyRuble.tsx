import * as React from 'react';
import { SVGProps } from 'react';
const CurrencyRuble = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.5 3.5h6c2.2091 0 4 1.7909 4 4 0 2.2091-1.7909 4-4 4h-6v-8Zm0 8h-2 2Zm5 4h-7 7Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.5 11.5h6c2.2091 0 4-1.7909 4-4 0-2.2091-1.7909-4-4-4h-6v8Zm0 0h-2m7 4h-7M8.5 4v16.5"
    />
  </svg>
);
export default CurrencyRuble;
