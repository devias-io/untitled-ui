import * as React from 'react';
import { SVGProps } from 'react';
const Disc02 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 20c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9Z"
    />
    <path
      fill="transparent"
      fillOpacity={0.01}
      d="M12 13.7c1.4912 0 2.7-1.2088 2.7-2.7S13.4912 8.3 12 8.3 9.3 9.5088 9.3 11s1.2088 2.7 2.7 2.7Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.7 5.3063c2.1285 1.011 3.6 3.1805 3.6 5.6937m-9.5468 5.4C6.9236 15.2975 5.7 13.2916 5.7 11M21 11c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Zm-6.3 0c0 1.4912-1.2088 2.7-2.7 2.7S9.3 12.4912 9.3 11s1.2088-2.7 2.7-2.7 2.7 1.2088 2.7 2.7Z"
    />
  </svg>
);
export default Disc02;
