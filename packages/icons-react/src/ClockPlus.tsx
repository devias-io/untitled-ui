import * as React from 'react';
import { SVGProps } from 'react';
const ClockPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.9287 12.1385A9.1016 9.1016 0 0 0 21 11c0-4.9706-4.0294-9-9-9s-9 4.0294-9 9 4.0294 9 9 9c.3919 0 .7779-.025 1.1565-.0736M12 5.6V11l3.3645 1.6823M18.3 20v-5.4m-2.7 2.7H21"
    />
  </svg>
);
export default ClockPlus;
