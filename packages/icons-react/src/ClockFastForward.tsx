import * as React from 'react';
import { SVGProps } from 'react';
const ClockFastForward = (props: SVGProps<SVGSVGElement>) => (
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
      d="m22.7 11.5-1.9995 2-2.0005-2m2.2451 1.5A9.0975 9.0975 0 0 0 21 12c0-4.9706-4.0294-9-9-9s-9 4.0294-9 9 4.0294 9 9 9c2.8273 0 5.35-1.3037 7-3.3427M12 7v5l3 2"
    />
  </svg>
);
export default ClockFastForward;
