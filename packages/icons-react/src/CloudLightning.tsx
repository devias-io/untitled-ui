import * as React from 'react';
import { SVGProps } from 'react';
const CloudLightning = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.3 14.3695c1.573-.5559 2.7-2.0561 2.7-3.8195 0-2.1092-1.6124-3.8418-3.6718-4.0326C16.907 3.955 14.6818 2 12 2S7.093 3.955 6.6718 6.5174C4.6124 6.7082 3 8.4408 3 10.55c0 1.7634 1.127 3.2636 2.7 3.8195M12.9 9.2l-3.6 5.4h5.4L11.1 20"
    />
  </svg>
);
export default CloudLightning;
