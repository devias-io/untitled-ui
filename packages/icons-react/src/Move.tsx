import * as React from 'react';
import { SVGProps } from 'react';
const Move = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.7 8.3 3 11l2.7 2.7m3.6-9L12 2l2.7 2.7m0 12.6L12 20l-2.7-2.7m9-9L21 11l-2.7 2.7"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.7 8.3 3 11m0 0 2.7 2.7M3 11h18M9.3 4.7 12 2m0 0 2.7 2.7M12 2v18m2.7-2.7L12 20m0 0-2.7-2.7m9-9L21 11m0 0-2.7 2.7"
    />
  </svg>
);
export default Move;
