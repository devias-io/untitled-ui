import * as React from 'react';
import { SVGProps } from 'react';
const ChevronSelectorVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="#fff" fillOpacity={0.01} d="m7 15 5 5 5-5M7 9l5-5 5 5" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m7 15 5 5 5-5M7 9l5-5 5 5"
    />
  </svg>
);
export default ChevronSelectorVertical;
