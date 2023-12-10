import * as React from 'react';
import { SVGProps } from 'react';
const ChevronUpDouble = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="#fff" fillOpacity={0.01} d="m17 18-5-5-5 5m10-7-5-5-5 5" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m17 18-5-5-5 5m10-7-5-5-5 5"
    />
  </svg>
);
export default ChevronUpDouble;
