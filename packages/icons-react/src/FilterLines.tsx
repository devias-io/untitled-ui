import * as React from 'react';
import { SVGProps } from 'react';
const FilterLines = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 12h12M3 6h18M9 18h6"
    />
  </svg>
);
export default FilterLines;
