import * as React from 'react';
import { SVGProps } from 'react';
const Microscope = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 21h8.1m-.9-14.1732A7.2135 7.2135 0 0 1 12 6.6c3.9765 0 7.2 3.2235 7.2 7.2 0 3.0216-1.8614 5.6085-4.5 6.6766M5.25 12.9h3.6c.4182 0 .6273 0 .8012.0346a1.7999 1.7999 0 0 1 1.4142 1.4142c.0346.1739.0346.383.0346.8012s0 .6273-.0346.8012a1.7999 1.7999 0 0 1-1.4142 1.4142c-.174.0346-.383.0346-.8012.0346h-3.6c-.4182 0-.6273 0-.8012-.0346a1.8 1.8 0 0 1-1.4142-1.4142C3 15.7773 3 15.5682 3 15.15s0-.6273.0346-.8012a1.8 1.8 0 0 1 1.4142-1.4142c.174-.0346.383-.0346.8012-.0346ZM3.9 6.15v6.75h6.3V6.15C10.2 4.4103 8.7897 3 7.05 3 5.3103 3 3.9 4.4103 3.9 6.15Z"
    />
  </svg>
);
export default Microscope;
