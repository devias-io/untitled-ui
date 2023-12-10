import * as React from 'react';
import { SVGProps } from 'react';
const Type01 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 7c0-.9319 0-1.3978.1522-1.7654a2 2 0 0 1 1.0824-1.0824C5.6022 4 6.0681 4 7 4h10c.9319 0 1.3978 0 1.7654.1522.49.203.8794.5924 1.0824 1.0824C20 5.6022 20 6.0681 20 7"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 7c0-.9319 0-1.3978.1522-1.7654a2 2 0 0 1 1.0824-1.0824C5.6022 4 6.0681 4 7 4h10c.9319 0 1.3978 0 1.7654.1522.49.203.8794.5924 1.0824 1.0824C20 5.6022 20 6.0681 20 7M9 20h6M12 4v16"
    />
  </svg>
);
export default Type01;
