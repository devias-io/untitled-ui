import * as React from 'react';
import { SVGProps } from 'react';
const Speedometer01 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 3v2.25M12 3c-4.9706 0-9 4.0294-9 9m9-9c4.9706 0 9 4.0294 9 9m-9 6.75V21m0 0c4.9706 0 9-4.0294 9-9m-9 9c-4.9706 0-9-4.0294-9-9m2.25 0H3m18 0h-2.25m-.3794 6.3706-1.5964-1.5964M5.6295 18.3706l1.598-1.598M5.6294 5.7l1.5628 1.5628M18.3706 5.7l-5.0207 4.95M13.8 12c0 .9941-.8059 1.8-1.8 1.8-.9941 0-1.8-.8059-1.8-1.8 0-.9941.8059-1.8 1.8-1.8.9941 0 1.8.8059 1.8 1.8Z"
    />
  </svg>
);
export default Speedometer01;
