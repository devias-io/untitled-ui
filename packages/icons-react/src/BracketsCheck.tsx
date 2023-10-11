import * as React from 'react';
import { SVGProps } from 'react';
const BracketsCheck = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.5708 20c1.262 0 2.286-1.023 2.286-2.286v-4.571L21.9998 12l-1.143-1.143V6.286c0-1.263-1.023-2.286-2.286-2.286M5.429 4C4.166 4 3.143 5.023 3.143 6.286v4.571L2 12l1.143 1.143v4.571C3.143 18.977 4.166 20 5.429 20"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.5708 20c1.262 0 2.286-1.023 2.286-2.286v-4.571L21.9998 12l-1.143-1.143V6.286c0-1.263-1.023-2.286-2.286-2.286M5.429 4C4.166 4 3.143 5.023 3.143 6.286v4.571L2 12l1.143 1.143v4.571C3.143 18.977 4.166 20 5.429 20M7.5 12l2.4343 2.4343c.198.198.297.297.4112.3341a.499.499 0 0 0 .309 0c.1142-.0371.2132-.1361.4112-.3341L16.5 9"
    />
  </svg>
);
export default BracketsCheck;
