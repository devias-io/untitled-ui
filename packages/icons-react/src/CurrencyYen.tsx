import * as React from 'react';
import { SVGProps } from 'react';
const CurrencyYen = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 20.5v-9m0 0 6.5001-8M12 11.5l-6.4999-8M18 11.5H6m11 4H7"
    />
  </svg>
);
export default CurrencyYen;
