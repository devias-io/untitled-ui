import * as React from 'react';
import { SVGProps } from 'react';
const LineHeight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 13h6m-8 4 4.2717-9.3978c.2314-.509.3471-.7635.5074-.8424a.4999.4999 0 0 1 .4418 0c.1603.079.276.3334.5074.8424L17 17m4 4H3M21 3H3"
    />
  </svg>
);
export default LineHeight;
