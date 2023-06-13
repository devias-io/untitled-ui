import * as React from 'react';
import { SVGProps } from 'react';
const ArrowCircleBrokenUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="#fff" fillOpacity={0.01} d="m15.6 10.9999-3.6-3.6L8.4 11" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.5 18.7958C4.8099 17.2397 3 14.3311 3 10.9999c0-4.9706 4.0294-9 9-9s9 4.0294 9 9c0 3.3312-1.8099 6.2398-4.5 7.7959m-.9-7.7959-3.6-3.6m0 0L8.4 11M12 7.4V20"
    />
  </svg>
);
export default ArrowCircleBrokenUp;
