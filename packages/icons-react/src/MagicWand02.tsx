import * as React from 'react';
import { SVGProps } from 'react';
const MagicWand02 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 4V2v2Zm0 12v-2 2ZM8 9h2-2Zm12 0h2-2Zm-2.2 2.8L19 13l-1.2-1.2Zm0-5.6L19 5l-1.2 1.2ZM3 21l9-9-9 9Zm9.2-14.8L11 5l1.2 1.2Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 4V2m0 14v-2M8 9h2m10 0h2m-4.2 2.8L19 13m-1.2-6.8L19 5M3 21l9-9m.2-5.8L11 5"
    />
  </svg>
);
export default MagicWand02;
