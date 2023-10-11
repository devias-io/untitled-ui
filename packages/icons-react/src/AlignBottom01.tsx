import * as React from 'react';
import { SVGProps } from 'react';
const AlignBottom01 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="#fff" fillOpacity={0.01} d="m19 10-7 7-7-7" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 21h18M12 3v14m0 0 7-7m-7 7-7-7"
    />
  </svg>
);
export default AlignBottom01;
