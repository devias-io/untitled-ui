import * as React from 'react';
import { SVGProps } from 'react';
const HeartRounded = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.7 3C18.87 3 21 6.0172 21 8.832c0 5.7004-8.84 10.368-9 10.368-.16 0-9-4.6676-9-10.368C3 6.0172 5.13 3 8.3 3c1.82 0 3.01.9214 3.7 1.7314C12.69 3.9214 13.88 3 15.7 3Z"
    />
  </svg>
);
export default HeartRounded;
