import * as React from 'react';
import { SVGProps } from 'react';
const FlipForward = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="#fff" fillOpacity={0.01} d="m17 5 4 4-4 4" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 9H7.5C5.0147 9 3 11.0147 3 13.5S5.0147 18 7.5 18H12m9-9-4-4m4 4-4 4"
    />
  </svg>
);
export default FlipForward;
