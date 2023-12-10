import * as React from 'react';
import { SVGProps } from 'react';
const Recording02 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 10v4-4Zm4.5 1v2-2ZM12 6v12V6Zm4.5-3v18V3Zm4.5 7v4-4Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 10v4m4.5-3v2M12 6v12m4.5-15v18M21 10v4"
    />
  </svg>
);
export default Recording02;
