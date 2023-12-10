import * as React from 'react';
import { SVGProps } from 'react';
const PuzzlePiece02 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="transparent"
      fillOpacity={0.01}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m12 2 3.24 3.24c2.16-5.67 8.19.36 2.52 2.52L21 11l-3.24 3.24c-2.16-5.67-8.19.36-2.52 2.52L12 20l-3.24-3.24C6.6 22.43.57 16.4 6.24 14.24L3 11l3.24-3.24c2.16 5.67 8.19-.36 2.52-2.52L12 2Z"
    />
  </svg>
);
export default PuzzlePiece02;
