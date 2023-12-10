import * as React from 'react';
import { SVGProps } from 'react';
const FaceWink = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#fff"
      fillOpacity={0.01}
      d="M12 20c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9Z"
    />
    <path
      fill="#fff"
      fillOpacity={0.01}
      d="M8.4 12.8s1.35 1.8 3.6 1.8 3.6-1.8 3.6-1.8m-.45-4.5a.45.45 0 1 1-.9 0 .45.45 0 0 1 .9 0Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.4 12.8s1.35 1.8 3.6 1.8 3.6-1.8 3.6-1.8m-.9-4.5h.009M8.4 8.3h1.8M21 11c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Zm-5.85-2.7a.45.45 0 1 1-.9 0 .45.45 0 0 1 .9 0Z"
    />
  </svg>
);
export default FaceWink;
