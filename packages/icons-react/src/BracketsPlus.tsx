import * as React from 'react';
import { SVGProps } from 'react';
const BracketsPlus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.5708 20c1.262 0 2.286-1.023 2.286-2.286v-4.571L21.9998 12l-1.143-1.143V6.286c0-1.263-1.023-2.286-2.286-2.286M5.429 4C4.166 4 3.143 5.023 3.143 6.286v4.571L2 12l1.143 1.143v4.571C3.143 18.977 4.166 20 5.429 20"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.5708 20c1.262 0 2.286-1.023 2.286-2.286v-4.571L21.9998 12l-1.143-1.143V6.286c0-1.263-1.023-2.286-2.286-2.286M5.429 4C4.166 4 3.143 5.023 3.143 6.286v4.571L2 12l1.143 1.143v4.571C3.143 18.977 4.166 20 5.429 20M12 8v8m-4-4h8"
    />
  </svg>
);
export default BracketsPlus;
