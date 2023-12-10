import * as React from 'react';
import { SVGProps } from 'react';
const ParagraphWrap = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="#fff" fillOpacity={0.01} d="M3 12h15a3 3 0 0 1 0 6h-4" />
    <path fill="#fff" fillOpacity={0.01} d="m16 16-2 2 2 2" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 6h18M3 12h15a3 3 0 0 1 0 6h-4m0 0 2-2m-2 2 2 2M3 18h7"
    />
  </svg>
);
export default ParagraphWrap;
