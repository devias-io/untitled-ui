import * as React from 'react';
import { SVGProps } from 'react';
const CodeSnippet02 = (props: SVGProps<SVGSVGElement>) => (
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
      d="m16.5 15.6 4.5-4.5-4.5-4.5m-9 0L3 11.1l4.5 4.5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m16.5 15.6 4.5-4.5-4.5-4.5m-9 0L3 11.1l4.5 4.5M13.8 3l-3.6 16.2"
    />
  </svg>
);
export default CodeSnippet02;
