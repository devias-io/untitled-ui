import * as React from 'react';
import { SVGProps } from 'react';
const Italic02 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="#fff" fillOpacity={0.01} d="m7.25 20 6-16h3.5l-6 16h-3.5Z" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m13.25 4-6 16m9.5-16-6 16M19.5 4h-10m5 16h-10"
    />
  </svg>
);
export default Italic02;
