import * as React from 'react';
import { SVGProps } from 'react';
const Target01 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 12c0 4.9706-4.0294 9-9 9m9-9c0-4.9706-4.0294-9-9-9m9 9h-3.6M12 21c-4.9706 0-9-4.0294-9-9m9 9v-3.6M3 12c0-4.9706 4.0294-9 9-9m-9 9h3.6M12 3v3.6"
    />
  </svg>
);
export default Target01;
