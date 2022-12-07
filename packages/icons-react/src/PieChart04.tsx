import * as React from 'react';
import { SVGProps } from 'react';
const PieChart04 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.01}
      d="M7.6285 20.3447A8.9999 8.9999 0 0 1 2.2986 9.701L11 12l-3.3715 8.3447ZM2.3067 9.6706a9 9 0 0 1 8.7876-6.6701L11 12 2.3067 9.6706Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 12 2.2986 9.701a9 9 0 0 0 5.33 10.6437L11 12Zm0 0 .0943-8.9995a9.0001 9.0001 0 0 0-8.7876 6.6701L11 12Zm9 0c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Z"
    />
  </svg>
);
export default PieChart04;
