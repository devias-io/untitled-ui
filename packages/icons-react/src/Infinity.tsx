import * as React from 'react';
import { SVGProps } from 'react';
const Infinity = (props: SVGProps<SVGSVGElement>) => (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.1777 8c5.0961 0 5.0961 8 0 8-5.0949 0-7.1329-8-12.739-8-4.585 0-4.585 8 0 8 5.6061 0 7.6441-8 12.7401-8h-.0011Z"
    />
  </svg>
);
export default Infinity;
