import * as React from 'react';
import { SVGProps } from 'react';
const Compass02 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.6 11 12 7.4 8.4 11l3.6 3.6 3.6-3.6Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 11h-1.8m1.8 0c0 4.9706-4.0294 9-9 9m9-9c0-4.9706-4.0294-9-9-9m6.364 15.364-1.2728-1.2728M4.8 11H3m0 0c0 4.9706 4.0294 9 9 9m-9-9c0-4.9706 4.0294-9 9-9M6.9088 5.9088 5.636 4.636M12 3.8V2m5.0912 3.9088L18.364 4.636M12 20v-1.8m-6.364-.836 1.2728-1.2728M12 7.4l3.6 3.6-3.6 3.6L8.4 11 12 7.4Z"
    />
  </svg>
);
export default Compass02;
