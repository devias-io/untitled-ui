import * as React from 'react';
import { SVGProps } from 'react';
const CurrencyRubleCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 20c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.01}
      d="M9.75 6.05h4.05c1.2426 0 2.25 1.0074 2.25 2.25s-1.0074 2.25-2.25 2.25H9.75v-4.5Zm.225 4.5H8.4h1.575Zm2.925 2.925H8.4h4.5Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.75 6.05h4.05c1.2426 0 2.25 1.0074 2.25 2.25s-1.0074 2.25-2.25 2.25H9.75v-4.5Zm0 0v9.9m.225-5.4H8.4m4.5 2.925H8.4M21 11c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Z"
    />
  </svg>
);
export default CurrencyRubleCircle;
